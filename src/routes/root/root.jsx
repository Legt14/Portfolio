import { useContext } from "react";

import { Link, Outlet } from "react-router-dom"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

import { ThemeContext } from "../../components/themeContext/Theme";
import { ToggleButton } from "../../components/toggleComponent/ToggleButton";

function Root() {

  const { theme } = useContext(ThemeContext)
  return (
    <>
      <header className="flex justify-betweens">
        <nav className="list-none font-Space text-2xl ">
          <ul className="flex flex-col gap-2">
            <li ><Link to={'/'}>Home</Link></li>
            <li><Link to={'/projects'}>Projects</Link></li>
            <li><Link to={'/about'}>About</Link></li>
          </ul>
        </nav>

        <ToggleButton name={theme === ' ' ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />} />
      </header>
      <section>
        <Outlet />
      </section>

    </>
  )
}

export { Root }
