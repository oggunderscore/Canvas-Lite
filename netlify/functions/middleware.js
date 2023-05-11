const { startFullertonAPI, getCourses, getAssignments } = require('../../fullerton');
let canvasAPI = require("node-canvas-api");
var cors = require('cors');
const express = require('express');
const app = express();
app.use(cors());

// Route for handling get request for path /
exports.handler = async (event, context) => {

    console.log("WE IN EXPORTS");

    console.log("EVENT token: " + JSON.stringify(event.headers.canvas_api_token));

    canvasAPI.processVariable({ variable: event.headers.canvas_api_token });

    // Start the API to get your ID
    try {
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
            const promises = [];

            // This function waits for 1 to resolve, before starting on the next
            for (let i = 0; i < courses.length; i++) {
                promises.push(getAssignments(courses[i].id)); // await statement
            }

            await Promise.all(promises).then((result) => {
                for (let i = 0; i < courses.length; i++) {
                    courses[i].assignments = result[i];
                }
            });

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
    } catch {
        console.log(error);
    }
};
