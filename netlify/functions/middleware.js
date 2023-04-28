const { startFullertonAPI, getCourses, getAssignments } = require('../../fullerton');
var cors = require('cors');
const express = require('express');
const app = express();
app.use(cors());



// Route for handling get request for path /
exports.handler = async (event, context) => {
    console.log("WE IN EXPORTS");

    console.log("EVENT: " + JSON.stringify(event));
    console.log("CONTEXT: " + JSON.stringify(context));

    console.log("ATTEMPTING TO START API");
    // Start the API to get your ID
    let apiReturn = await startFullertonAPI();
    if (apiReturn != null) {
        console.log("API STARTED!!!");


        courses = await getCourses();
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

        bundle = { courses, assignments };
        return {
            statusCode: 200,
            body: JSON.stringify(bundle)
        };
    }
    return {
        statusCode: 500,
    };
};
