import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { courses } from "../data";

// This Class is for Logan

let dueDates = [];
let annDates = [];

for (let i = 0; i < courses.length; i++) {
  const course = courses[i];
  for(let j = 0; j < course.due_names.length; j++){
      dueDates.push(course.name + " - " + course.due_names[j] + " - " + course.due_dates[j] + "\n");
  }
  for(let k = 0; k < course.announcements.length; k++){
      annDates.push(course.name + " - " + course.announcements[k] + " - " + course.a_post_dates[k] + "\n");
  }
}

export default function Projects() {
  return (
    <section id="projects">
      {/* Tinker Below */}
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font 3sm:text-2xl text-3xl mb-4 font-medium text-white">
            Upcoming Due Dates
          </h1>
          {/* <p className="mb-8 leading-relaxed">
            {dueDates[0]}
          </p> */}
          <ul>
            {
              dueDates.map((item, index) =>
                <li key={index}>{item}</li>
              )
            }
          </ul>
          <h1 className="title-font 3sm:text-2xl text-3xl mb-4 font-medium text-white">
            Past 14 Days Announcements
          </h1>
          {/* <p className="mb-8 leading-relaxed">
            {annDates[0]}
          </p> */}
          <ul>
            {
              annDates.map((item, index) =>
                <li key={index}>{item}</li>
              )
            }
          </ul>
        </div>
      </div>
      {/* Tinker Above */}
    </section>
  );
}
