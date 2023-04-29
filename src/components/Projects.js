import React from "react";
import { assignments, announcements, makeCanvasDateReadable } from "../data";
import { useAppData } from "../context/AppProvider";

// This Class is for Logan

export default function Projects() {

  const { courses } = useAppData();

  let dueDates = [];
  let annDates = [];

  for(let i = 0; i < courses.length; i++){
    for(let j = 0; j < courses[i].assignments.length; j++)
      dueDates.push(courses[i].name + " - " + courses[i].assignments[j].name + " - " + makeCanvasDateReadable(courses[i].assignments[j].due_at));
  }

  // for(let i = 0; i < assignments.length; i++){
  //     dueDates.push(assignments[i].parent_course + " - " + assignments[i].name + " - " + toDateStringBetter(assignments[i].due_date));
  // }

  // for(let j = 0; j < announcements.length; j++){
  //   annDates.push(announcements[j].parent_course + " - " + announcements[j].name + " - " + makeCanvasDateReadable(announcements[j].post_date));
  // }

  return (
    <section id="projects">
      {/* Tinker Below */}
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font 3sm:text-2xl text-3xl mb-4 font-medium text-white">
            Upcoming Due Dates
          </h1>
          <ol className="px-4" style={{listStyleType: 'disc'}}>
            {
              dueDates.map((item, index) =>
                <li key={index}>{item}</li>
              )
            }
          </ol>
          {/* <div className="py-10">
            <h1 className="title-font 3sm:text-2xl text-3xl mb-4 font-medium text-white">
              Past 14 Days Announcements
            </h1>
            <ol className="px-4" style={{listStyleType: 'disc'}}>
              {
                annDates.map((item, index) =>
                  <li key={index}>{item}</li>
                )
              }
            </ol>
          </div> */}
        </div>
      </div>
      {/* Tinker Above */}
    </section>
  );
}
