import React from "react";

const ThemeContext = React.createContext(' ');


function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState(' ')
  const toggleTheme = () => {
    theme === ' ' ? setTheme('dark') : setTheme(' ')
    console.log(
      theme
    )
  }

  return (<>
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  </>)
}

export { ThemeContext, ThemeProvider }

