import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  let [courses, setCourses] = useState([]);
  let [assignments, setAssignments] = useState([]);
  let [token, setToken] = useState([]);

  return (
    <AppContext.Provider value={{ courses, setCourses, assignments, setAssignments, token, setToken }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppData = () => {
  let { courses, setCourses } = useContext(AppContext);
  let { assignments, setAssignments } = useContext(AppContext);
  let { token, setToken } = useContext(AppContext);

  const handleCourseChange = (newCourses) => setCourses(newCourses);
  const handleAssignmentChange = (newAssignments) => setAssignments(newAssignments);
  const handleTokenChange = (newToken) => setToken(newToken);

  return {
    courses: courses,
    onCoursesChange: handleCourseChange,
    assignments: assignments,
    onAssignmentsChange: handleAssignmentChange,
    token: token,
    onTokenChange: handleTokenChange
  };
};

export { AppProvider, useAppData };
