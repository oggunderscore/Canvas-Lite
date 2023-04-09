import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);

  return (
    <AppContext.Provider value={{ courses, setCourses }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppData = () => {
  const { courses, setCourses } = useContext(AppContext);

  const handleCourseChange = (newCourses) => setCourses(newCourses);

  return { courses: courses, onCoursesChange: handleCourseChange };
};

export { AppProvider, useAppData };
