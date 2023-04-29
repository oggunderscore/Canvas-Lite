let canvasAPI = require("node-canvas-api");

let fullertonAPI = null;
let myId = null;

async function startFullertonAPI() {
    console.log("start fullerton API called");
    try {
        fullertonAPI = await canvasAPI.getSelf();
        myId = fullertonAPI.id;
    } catch (error) {
        console.log("AHA CAUGHT THE ERROR: " + error);
        if (fullertonAPI == null)
            console.log("Dude its null");
    }
    return fullertonAPI;
}

async function getCourses() {
    console.log("getCoursescalled");
    courses = await canvasAPI.getCoursesByUser(myId);
    return courses;
}

async function getAssignments(courseID) {
    console.log("getAssignments called");
    assignments = await canvasAPI.getAssignments(courseID);
    return assignments;
}


module.exports = { startFullertonAPI, getCourses, getAssignments };