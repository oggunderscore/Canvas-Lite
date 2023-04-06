import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { assignments, announcements, toDateStringBetter } from "../data";
import {  } from "../data"

// This Class is for Logan

let dueDates = [];
let annDates = [];

for(let i = 0; i < assignments.length; i++){
    dueDates.push(assignments[i].parent_course + " - " + assignments[i].name + " - " + toDateStringBetter(assignments[i].due_date));
}
for(let j = 0; j < announcements.length; j++){
    annDates.push(announcements[j].parent_course + " - " + announcements[j].name + " - " + toDateStringBetter(announcements[j].post_date));
}

export default function Projects() {
  return (
    <section id="projects">
      {/* Tinker Below */}
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="py-5">
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
          </div>
          <div className="py-10">
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
          </div>
        </div>
      </div>
      {/* Tinker Above */}
    </section>
  );
}
