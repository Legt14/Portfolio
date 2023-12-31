import React from "react";
import { ThemeContext } from "../themeContext/Theme";


export function ToggleButton({ name }) {
  const { toggleTheme } = React.useContext(ThemeContext)


  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (<>
    <button onClick={handleThemeToggle} className={`flex items-center justify-center border-BlueZodiac dark:border-wildSand transition ease-in ms-50`} >
      {name}
    </button>
  </>)
}

