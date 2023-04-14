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
    const assignments = await getAssignments(courses[0].id); // Need to figure out how to nest this? 
    const bundle = { courses, assignments };
    return {
        statusCode: 200,
        body: JSON.stringify(bundle)
    };
};
