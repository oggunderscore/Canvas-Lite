import React from "react";
import canvasAPI from "node-canvas-api";
import { useState, useEffect } from "react";

// Kevin's Class

export default function About() {
  const [courses, setCourses] = useState([]);
  // canvasAPI.getSelf()
  //   .then(self => console.log(self))

  useEffect(() => {
    async function fetchCourses() {
      const self = await canvasAPI.getSelf();
      const { id } = self;
      const courses = await canvasAPI.getCoursesByUser(id);
      setCourses(courses);
      courses.map((course) => console.log("Course: " + course.name));
    }
    fetchCourses();

  }, []);
  return (
    <section id="about">
      <div>
        <h2>Courses</h2>
        <ul>
          {courses.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}