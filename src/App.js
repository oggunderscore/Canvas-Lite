import React, { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import { useAppData } from "./context/AppProvider";


export default function App() {
  // Initialize courses to empty array - that is the courses state of the component
  const { courses, onCoursesChange, assignments, onAssignmentsChange, token, onTokenChange } = useAppData();
  // //const [assignments, setAssignments] = useState([]);

  // useEffect = redo this function everytime something changes in the second parameter
  // since second parameter is empty array, it will run only once
  useEffect(() => {
    const fetchInfo = async () => {
      console.log("Fetching with token: " + token);
      const response = await fetch('/.netlify/functions/middleware', {
        method: 'GET',
        headers: {
          'CANVAS_API_TOKEN': token,
        }
      });

      // Need to check for response status
      if (!response.ok) {
        // If bad response 
        // Pass response bad to About.js that is awaiting?
      } else if (response.ok) {
        // Pass good response and proceed?
      }


      const responseJson = await response.json();
      onCoursesChange(responseJson.courses);
      onAssignmentsChange(responseJson.assignments);
    };
    fetchInfo();
  }, [token])


  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
