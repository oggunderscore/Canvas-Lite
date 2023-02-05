import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

// This Class is for Kevin

export default function Skills() {
  return (
    <section id="skills">

      {/* Tinker Below */}
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm not Kevin.
            <br className="hidden lg:inline-block" />
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
      </div>

      {/* Tinker Above */}
    </section>
  );
}
