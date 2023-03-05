import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

// This Class is for Logan

export default function Projects() {
  return (
    <section id="projects">
      {/* Tinker Below */}
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Courses:
            <br className="hidden lg:inline-block" />
          </h1>
          <h1 className="title-font 3sm:text-2xl text-3xl mb-4 font-medium text-white">
            Course 1:
          </h1>
          <p className="mb-8 leading-relaxed">
            {projects[0].name} with {projects[0].prof}
          </p>
          <h1 className="title-font 3sm:text-2xl text-3xl mb-4 font-medium text-white">
            Due Dates:
          </h1>
          <p className="mb-8 leading-relaxed">
            {projects[0].a_dates[0]}
          </p>
          <h1 className="title-font 3sm:text-2xl text-3xl mb-4 font-medium text-white">
            Quiz Dates:
          </h1>
          <p className="mb-8 leading-relaxed">
            {projects[0].q_dates[0]}
          </p>
        </div>
      </div>
      {/* Tinker Above */}
    </section>
  );
}
