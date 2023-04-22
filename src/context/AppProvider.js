import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [token, setToken] = useState([]);

  return (
    <AppContext.Provider value={{ courses, setCourses, assignments, setAssignments, token, setToken }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppData = () => {
  const { courses, setCourses } = useContext(AppContext);
  const { assignments, setAssignments } = useContext(AppContext);
  const { token, setToken } = useContext(AppContext);

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
