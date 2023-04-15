const { startFullertonAPI, getCourses, getAssignments } = require('../../fullerton');
var cors = require('cors');
const express = require('express');
const app = express();
app.use(cors());

// Start the API to get your ID
startFullertonAPI();

// Route for handling get request for path /
exports.handler = async (event, context) => {
    const courses = await getCourses();
    for (let i = 0; i < courses.length; i++) {
        if (courses[i].enrollment_term_id != 15329) {
            courses.splice(i, 1);
            i--;
        }
    }
    let assignments = [];
    let keysToKeep = ["name", "id"];
    for (let i = 0; i < courses.length; i++) {
        courses[i].assignments = await getAssignments(courses[i].id);
        // The following code will filter out and delete the extra data, but will not reduce the api call time
        // courses[i].assignments.map((assn) => {
        //     for (const key in assn) {
        //         if (!keysToKeep.includes(key)) {
        //             delete assn[key];
        //         }
        //     }
        // }
        // );
    }

    const bundle = { courses, assignments };
    return {
        statusCode: 200,
        body: JSON.stringify(bundle)
    };
};
