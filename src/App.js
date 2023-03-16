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

  // useEffect = redo this function everytime something changes in the second parameter
  // since second parameter is empty array, it will run only once
  useEffect(() => {
    const getCourses = async () => {
      const courseResponse = await fetch('http://localhost:8888/.netlify/functions/middleware');
      const coursesArray = await courseResponse.json();
      setCourses(coursesArray);
    };
    getCourses();
  }, [])


  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      {courses.map((oneCourse) => (<div>{oneCourse.name}</div>))}
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
