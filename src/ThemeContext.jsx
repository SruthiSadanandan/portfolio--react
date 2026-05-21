// src/ThemeContext.jsx

import { createContext, useState } from "react";

// Create Context
export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {

  // Theme State
  const [theme, setTheme] = useState("light");

  // Light Theme Button
  const lightTheme = () => {
    setTheme("light");
  };

  // Dark Theme Button
  const darkTheme = () => {
    setTheme("dark");
  };

  return (

    <ThemeContext.Provider
      value={{
        theme,
        lightTheme,
        darkTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;