import React from "react";
import canvasAPI from "node-canvas-api";
import { useState, useEffect } from "react";
import { useAppData } from "../context/AppProvider";

// Kevin's Class

export default function About() {
  const { courses, assignments } = useAppData();


  return (
    <section id="about">
      <div>
        <h2>Courses</h2>
        <ul>
          {courses.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        <h2>Assignments</h2>
        <ul>
          {assignments.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}