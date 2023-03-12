const canvasAPI = require("node-canvas-api");
const fs = require("fs");
//const file = require("./data.json");

async function main() {
    // Get info about self account from the API
    const self = await canvasAPI.getSelf();

    // id of Kevin(self) aka accountId - This is the same as "const id = self.id" - it's called object deconstruction
    const { id } = self;

    // pass the id here following documentation here: https://github.com/ubc/node-canvas-api/blob/master/src/getCoursesByUser.js
    const courses = await canvasAPI.getCoursesByUser(id);

    // Loop the courses and display each course name
    //courses.map((course) => console.log("Course: " + course.name));



    let jsonData;
    let courseCount = 0;

    for (let x = 0; x < courses.length; x++) {
        if (courses[x].name != null) {
            console.log(courses[x].name);
            //jsonData += JSON.stringify(courses[x]);
            courseCount++;
        }
    }
    // State the fact at the end
    // console.log(jsonData);
    console.log("Num Courses: " + courseCount);
}

console.log(process.env);
//main();

