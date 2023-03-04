import React, { useState } from "react";

// This class is for Josh

function ExampleComponent() {
  const [inputValue, setInputValue] = useState("");
  const [displayText, setDisplayText] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitting input value: ${inputValue}`);
    // Do something with the input value here
    if (inputValue == "This is correct"){
      setDisplayText(true);
    }
    else{
      window.confirm(`You entered "${inputValue}" in the box! (bad)`)
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setDisplayText(false);
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex py-10 items-center justify-center">
          <input
            type="text"
            className="border-2 border-gray-300 p-2 rounded-lg mr-2"
            placeholder="Enter text here"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">
            Submit
          </button>
        </div>
        {displayText && (<p className="mt-2 text-center">{`You entered "${inputValue}" (good)`}</p> )}
      </form>
      
      <div class="pl-10 py-20">
        <p class="flex pr-10 items-center justify-center">Enter 'This is correct' for the correct case, anything else triggers incorrect popup.</p>
        <h1>the</h1>
        <h2 class="pl-30">ALIGMENT</h2>
      </div>
    </div>
  );
}

export default ExampleComponent;