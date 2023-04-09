import React, { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";


export default function App() {
  // Initialize courses to empty array - that is the courses state of the component
  const [courses, setCourses] = useState([]);
  const [assignments, setAssignments] = useState([]);

  // useEffect = redo this function everytime something changes in the second parameter
  // since second parameter is empty array, it will run only once
  useEffect(() => {
    const fetchInfo = async () => {
      const response = await fetch('/.netlify/functions/middleware');
      const responseJson = await response.json();
      setCourses(responseJson.courses);
      setAssignments(responseJson.assignments);
    };
    fetchInfo();
  }, [])


  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      {courses.map((oneCourse) => (<div>{oneCourse.name}</div>))}
      {assignments.map((item) => (<div>{item.name}</div>))}
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
