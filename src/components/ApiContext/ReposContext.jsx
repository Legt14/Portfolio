import axios from "axios";
import React, { useEffect } from "react";

const ReposContext = React.createContext()


function ReposProvider({ children }) {
  const api = 'https://api.github.com/users/legt14/repos'
  const [repo, setRepo] = React.useState()

  useEffect(() => {
    async function getData() {

      try {
        const response = await axios.get(api)
        const repos = response.data.filter((item) => item.topics.includes('portfolio'))
        setRepo(repos)
        console.log(repos)
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

export { ReposProvider, ReposContext }
