const { startFullertonAPI, getCourses, getAssignments } = require('../../fullerton');
let canvasAPI = require("node-canvas-api");
var cors = require('cors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json);

// const serv = require('node:http');

// serv.maxHeaderSize = 16000;


// Define the route for the API call
app.post('/api/myEndpoint', (req, res) => {
    console.log("WE GOT HERE BROS.");
    const receivedVariable = req.body.variable; // Extract the variable from the request body
    console.log("WE GOT HERE BROS.2");

    // Pass the variable to the Node module or function where you want to use it
    canvasAPI.processVariable(receivedVariable);
    console.log("WE GOT HERE BROS.3");

    // Send a response back to the front end
    res.json({ message: 'Variable received successfully' });
});

// Route for handling get request for path /
exports.handler = async (event, context) => {

    console.log("WE IN EXPORTS");
    require('dotenv').config({ override: true })

    //console.log("ENV: " + JSON.stringify(process.env));
    //console.log("CANVAS_API_TOKEN: " + process.env.CANVAS_API_TOKEN);

    //console.log("EVENT: " + JSON.stringify(event));
    console.log("EVENT token: " + JSON.stringify(event.headers.canvas_api_token));

    canvasAPI.processVariable({ variable: event.headers.canvas_api_token });

    //console.log("ATTEMPTING TO START API");
    // Start the API to get your ID
    let apiReturn = await startFullertonAPI();
    if (apiReturn != null) {
        console.log("API STARTED!!!");
        courses = await getCourses();
        console.log("Got Courses.");
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
        }
        console.log("Got Assignments.");

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
