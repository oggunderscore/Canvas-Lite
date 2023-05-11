import React from "react";
import { makeCanvasDateReadable, sortByDate, dateToNum } from "../data";
import { useAppData } from "../context/AppProvider";

// This Class is for Logan

export default function Projects() {

  const { courses } = useAppData();

  let dueDates = [];
  let upcomingString = [];
  let pastString = [];
  let noDateString = [];

  let today = 0;
  let todayDate = new Date();
  today = today + Number(todayDate.getDate()); // day
  today = today + Number(todayDate.getMonth() + 1) * 100; // month
  today = today + Number(todayDate.getFullYear()) * 10000; // year

  for(let i = 0; i < courses.length; i++){
    for(let j = 0; j < courses[i].assignments.length; j++)
      if(courses[i].assignments[j].due_at){
        dueDates.push({course: courses[i].name, assn_name: courses[i].assignments[j].name, assn_date: courses[i].assignments[j].due_at.slice(0, 10)});
      }
      else{
        dueDates.push({course: courses[i].name, assn_name: courses[i].assignments[j].name, assn_date: "null"});
      }
  }

  // Sort assisnments by ascending date
  dueDates = sortByDate(dueDates, true);

  for(let i = 0; i < dueDates.length; i++){
      if(dateToNum(dueDates[i].assn_date) >= today)
        upcomingString.push(dueDates[i].course + " - " + dueDates[i].assn_name + " - " + makeCanvasDateReadable(dueDates[i].assn_date));
      else if(dueDates[i].assn_date == "null")
        noDateString.push(dueDates[i].course + " - " + dueDates[i].assn_name + " - " + makeCanvasDateReadable(dueDates[i].assn_date));
      else
        pastString.unshift(dueDates[i].course + " - " + dueDates[i].assn_name + " - " + makeCanvasDateReadable(dueDates[i].assn_date));
  }

  return (
    <section id="projects">
      {/* Tinker Below */}
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="py-5">
            <h1 className="title-font 3sm:text-2xl text-3xl mb-4 font-medium text-white">
              Upcoming Assignments
            </h1>
            <ol className="px-4" style={{listStyleType: 'disc'}}>
              {
                upcomingString.map((item, index) =>
                  <li key={index}>{item}</li>
                )
              }
            </ol>
          </div>
          <div className="py-5">
            <h1 className="title-font 3sm:text-2xl text-3xl mb-4 font-medium text-white">
              Undated Assignments
            </h1>
            <ol className="px-4" style={{listStyleType: 'disc'}}>
              {
                noDateString.map((item, index) =>
                  <li key={index}>{item}</li>
                )
              }
            </ol>
          </div>
          <div className="py-5">
            <h1 className="title-font 3sm:text-2xl text-3xl mb-4 font-medium text-white">
              Past Assignments
            </h1>
            <ol className="px-4" style={{listStyleType: 'disc'}}>
              {
                pastString.map((item, index) =>
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
