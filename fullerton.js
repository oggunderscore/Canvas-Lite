const canvasAPI = require("node-canvas-api");

let fullertonAPI = null;
let myId = null;

async function startFullertonAPI() {
    fullertonAPI = await canvasAPI.getSelf();
    myId = fullertonAPI.id;
}

async function getCourses() {
    const courses = await canvasAPI.getCoursesByUser(myId);
    return courses;
}

// async function getAssignments() {
//     const assignments = await canvasAPI.getAssignments(myId);
//     return assignments;
// }

module.exports = { startFullertonAPI, getCourses };