import React, { useState, useEffect } from "react";
import { useAppData } from "../context/AppProvider";


function ExampleComponent() {
  const [inputValue, setInputValue] = useState("");
  const [displayText, setDisplayText] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setLoaded] = useState(false);
  const [isBadLoaded, setBadLoaded] = useState(false);
  const { courses, onCoursesChange, assignments, onAssignmentsChange, token, onTokenChange } = useAppData();

  // useEffect = redo this function everytime something changes in the second parameter
  useEffect(() => {
    const fetchInfo = async () => {
      if (token != '') {
        console.log("Fetching with token: " + token);

        // Make it loading symbol
        setIsLoading(true);
        setLoaded(false);

        console.log("FETCHING NOW");

        try {
          const response = await fetch('/.netlify/functions/middleware', {
            method: 'GET',
            headers: {
              'CANVAS_API_TOKEN': token,
            }
          });

          if (response.ok) {
            console.log("GOOD RESPONSE");
            setDisplayText(true);
            setIsLoading(false);
            setLoaded(true);

            const responseJson = await response.json();
            onCoursesChange(responseJson.courses);
            onAssignmentsChange(responseJson.assignments);
          } else if (!response.ok) {
            console.log("BAD RESPONSE");
            setDisplayText(true);
            setBadLoaded(true);

            setTimeout(() => {
              setLoaded(false);
              setBadLoaded(false);
              setInputValue("");
            }, 2000);

          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    fetchInfo();
  }, [token]);



  const handleSubmit = (event) => {
    if (inputValue === "") {
      alert("Please enter a valid key!");
    } else {
      event.preventDefault();
      setIsLoading(true);
      setLoaded(false);
      onTokenChange(inputValue); // This is where we call to useEffect and fetch a response
    }
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
          .bad-button {
            background-color: #bb5555
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
            style={{ width: "275px" }}
          />
          <button
            type="submit"
            className={`bg-blue-500 text-white p-2 pr-4 text-center rounded-lg ${isLoading ? "active-button" : ""} ${(!isBadLoaded && isLoaded) ? "loaded-button" : ""} ${(isBadLoaded && isLoaded) ? "bad-button" : ""}`}
          >
            {isLoading && !isLoaded ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span className="ml-2">Loading...</span>
              </div>
            ) : isBadLoaded ? (
              <div className="flex items-center">
                <span className={`ml-2 loaded-text`}>✕ Failed</span>
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
      </form>
    </div>
  );
}

export default ExampleComponent;