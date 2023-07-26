import axios from "axios";
import { useEffect, useState, createContext } from "react";

const ReposContext = createContext()
const GithubContext = createContext()


function GithubProvider({ children }) {
  const username = 'legt14'
  const api = `https://api.github.com/users/${username}`
  const [user, setUser] = useState()

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(api)
        console.info(response)
        setUser(response)
      } catch (e) {
        console.error(e)
      }
    }
    getData()
  }, [])
  return (<>
    <GithubContext.Provider value={{ user }}>
      {children}
    </GithubContext.Provider>
  </>)
}


function ReposProvider({ children }) {
  const api = 'https://api.github.com/users/legt14/repos'
  const [repo, setRepo] = useState()

  const getDate = (date) => {
    return new Date(date)
  }

  useEffect(() => {
    async function getData() {

      try {
        const response = await axios.get(api)
        const repos = response.data.filter((item) => item.topics.includes('portfolio'))
        repos.sort((a, b) => getDate(b.created_at) - getDate(a.created_at))
        setRepo(repos)
        console.info(response)
      } catch (error) {
        console.error((error))
      }
    }
    getData()
  }, [])

  return (<>
    <ReposContext.Provider value={{ repo }}>
      {children}
    </ReposContext.Provider>
  </>)
}


export { ReposProvider, ReposContext, GithubContext, GithubProvider }

