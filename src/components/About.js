import React, { useState } from "react";

function ExampleComponent() {
  const [inputValue, setInputValue] = useState("");
  const [displayText, setDisplayText] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setLoaded] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setLoaded(false);

    setTimeout(() => {
      console.log(`Submitting input value: ${inputValue}`);
      if (inputValue === "This is correct") {
        setDisplayText(true);
      } else {
        const confirmed = window.confirm(
          `You entered "${inputValue}" in the box! (bad)`
        );
        setInputValue("");
        if (confirmed) {
          // do something if the user clicked "OK"
        } else {
          // do something if the user clicked "Cancel"
        }
      }
      setIsLoading(false);
      setLoaded(true);
    }, 2000);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <style>
        {`.change-bg {
            background-color: #273a66;
          }
          .active-button {
            background-color: #273a66;
          }
          .loaded-text {
            color: black;
          }
          .loaded-button {
            background-color: #69bb55
          }
          .placeholder-bg::placeholder {
            color: #7286b5;
          }`}
      </style>
      <form onSubmit={handleSubmit}>
        <div className="flex py-10 items-center justify-center">
          <input
            type="text"
            className="border-2 border-gray-300 p-2 rounded-lg mr-2 change-bg placeholder-bg"
            placeholder="Enter text here"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className={`bg-blue-500 text-white p-2 rounded-lg ${isLoading ? "active-button" : ""} ${isLoaded ? "loaded-button" : ""}`}
          >
            {isLoading && !isLoaded ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span className="ml-2">Loading...</span>
              </div>
            ) : isLoaded ? (
              <div className="flex items-center">
                <span className={`ml-2 loaded-text`}>✓ Loaded</span>
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </div>
        {displayText && (
          <p className="mt-2 text-center">{`You entered "${inputValue}" (good)`}</p>
        )}
      </form>

      <div className="pl-10 py-20">
        <p className="flex pr-10 items-center justify-center">
          Enter 'This is correct' for the correct case, anything else triggers
          incorrect popup.
        </p>
        <h1>the</h1>
        <h2 className="pl-30">ALIGNMENT</h2>
      </div>
    </div>
  );
}

export default ExampleComponent;