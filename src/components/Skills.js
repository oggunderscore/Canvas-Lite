import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";
const canvasAPI = require('node-canvas-api')

// canvasAPI.getSelf()
//   .then(self => console.log(self))

// This Class is for Kevin

export default function Skills() {
  return (
    <section id="skills">
      {/* Tinker Below */}
      {/* <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Knowledge
          </h1>
          <h1 className="title-font 3sm:text-2xl text-3xl mb-4 font-medium text-white">
            Efficient. Motivated. Strategic.
          </h1>
          <p className="mb-8 leading-relaxed">
            Fast-learning computer science student ready to demonstrate persistent and appealing efforts with previous experience and skills towards future opportunities.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-200 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Contact Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div> */}
      {/* Tinker Above */}
    </section>
  );
}
