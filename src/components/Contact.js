import React from "react";
import { InformationCircleIcon } from "@heroicons/react/solid";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="text-center container px-5 py-10 mx-auto ">
          <InformationCircleIcon className="inline-block w-10 text-white mb-4" />
          <h2 className="text-center text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact Me
          </h2>
      </div>
        <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
          <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
              EMAIL
            </h2>
            <a className="text-indigo-400 leading-relaxed">
              KevinN.Develop@gmail.com
            </a>
          <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
              PHONE
            </h2>
            <p className="leading-relaxed">
              949-505-0967
            </p>
            </div>
        </div>
      </div>
    </section>
  );
}
