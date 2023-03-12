import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const canvasAPI = require("node-canvas-api");

console.log("Printing process.env");
console.log(process.env);
console.log("Printing process.env");
console.log(process.en.CANVAS_API_TOKEN);
console.log("Printing process.env");
console.log(process.env.CANVAS_API_DOMAIN);

async function main() {
  console.log("Test2");
  const self = await canvasAPI.getSelf();
  console.log(self);
  const { id } = self;
  const courses = await canvasAPI.getCoursesByUser(id);
  let courseCount = 0;

  for (let x = 0; x < courses.length; x++) {
    if (courses[x].name != null) {
      console.log(courses[x].name);
      //jsonData += JSON.stringify(courses[x]);
      courseCount++;
    }
  }
  console.log("Num Courses: " + courseCount);
}

main();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
