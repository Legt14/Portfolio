import { useContext } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"

import { ReposProvider } from './components/ApiContext/ReposContext';

import { ToggleButton } from "./components/toggleComponent/ToggleButton";
import { ThemeContext } from "./components/themeContext/Theme"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

import { HomeUI } from "./components/homeComponent/homeUI";


function App() {
  const { theme } = useContext(ThemeContext)
  const location = useLocation();
  return (
    <>
      <div className={`${theme} font-Work`}>
        <section className="p-4 min-h-screen min-w-screen bg-wildSand dark:bg-CodGray text-CodGray dark:text-wildSand flex flex-col sm:flex-row sm:justify-between gap-3 ">
          <header className="w-48">
            <nav className="flex flex-col items-start gap-2 lg:text-4xl">
              <ul className="flex flex-col gap-2 list-none font-Space text-2xl ">
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/projects'}>Projects</Link></li>
              </ul>
              <ToggleButton name={theme === ' ' ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />} />
            </nav>
          </header>
          <section className="w-full flex justify-end">
            {location.pathname === '/' ? (
              <HomeUI />)
              : (
                <ReposProvider>
                  <Outlet />
                </ReposProvider>
              )}
          </section>
        </section>
      </div >
    </>
  )
}

export default App
