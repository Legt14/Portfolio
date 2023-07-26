import { useContext } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"

import { ReposProvider } from './components/ApiContext/ReposContext';

import { GithubProvider } from './components/ApiContext/ReposContext';
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
      <section className={`${theme} font-Work`}>
        <section className="pr-11 pl-11 pt-8 min-h-screen min-w-screen bg-wildSand dark:bg-CodGray text-CodGray dark:text-wildSand flex flex-col sm:flex-row sm:justify-between gap-3 ">
          <aside className="p-2">
            <header>
              <nav className="flex flex-col items-start gap-2 lg:text-4xl">
                <ul className="flex flex-col gap-2 list-none font-Space text-2xl ">
                  <li><Link to={'/'}>Home</Link></li>
                  <li><Link to={'/projects'}>Projects</Link></li>
                </ul>
                <ToggleButton name={theme === ' ' ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />} />
              </nav>
            </header>
          </aside>
          <main className="w-full h-full">
            {location.pathname === '/' ? (
              <GithubProvider>
                <HomeUI />
              </GithubProvider>
            )
              : (
                <ReposProvider>
                  <Outlet />
                </ReposProvider>
              )}
          </main>
        </section>
      </section >
    </>
  )
}

export default App
