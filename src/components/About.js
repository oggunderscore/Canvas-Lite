import React, { useState } from "react";
import { useAppData } from "../context/AppProvider";


// This class is for Josh

function ExampleComponent() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitting input value: ${inputValue}`);
    // Do something with the input value here
    window.confirm(`You entered "${inputValue}" in the box!`)
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center justify-center">
        <input
          type="text"
          className="border-2 border-gray-300 p-2 rounded-lg mr-2"
          placeholder="Enter text here"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-lg"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ExampleComponent;