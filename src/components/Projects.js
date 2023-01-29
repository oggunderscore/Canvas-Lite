import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((projects) => (
            <div key={`projects${projects.id}`} className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <div className="flex flex-wrap -m-4">
                  <CodeIcon className="block w-8 text-gray-500 mb-4" />
                  <p className="leading-relaxed text-center text-xl title-font ml-6">{projects.name}</p>
                  <p className="leading-relaxed text-left mb-6">- {projects.quote}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
