import React from "react";
import canvasAPI from "node-canvas-api";
import { useState, useEffect } from "react";
import { useAppData } from "../context/AppProvider";

// Kevin's Class

export default function About() {
  const { courses, assignments } = useAppData();

  console.log(courses);

  return (
    <section id="about">
      <div>
        <h2>Courses</h2>
        <br />
        <ul>
          {courses.map((course, index) => (
            <li key={course.id}>{course.name} Assignments:
              {course.assignments.map((assn) => <li key={assn.id}>{assn.name}</li>)}
            </li>
          ))}

        </ul>
      </div>
    </section>
  );
}