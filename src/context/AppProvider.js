import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [assignments, setAssignments] = useState([]);

  return (
    <AppContext.Provider value={{ courses, setCourses, assignments, setAssignments }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppData = () => {
  const { courses, setCourses } = useContext(AppContext);
  const { assignments, setAssignments } = useContext(AppContext);

  const handleCourseChange = (newCourses) => setCourses(newCourses);
  const handleAssignmentChange = (newAssignments) => setAssignments(newAssignments);

  return { 
    courses: courses, 
    onCoursesChange: handleCourseChange, 
    assignments: assignments, 
    onAssignmentsChange: handleAssignmentChange 
  };
};

export { AppProvider, useAppData };
