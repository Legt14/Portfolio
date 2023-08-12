import { useContext, useState } from "react"
import { ReposContext } from "../ApiContext/ReposContext"
import { RepoUI } from "../repoUIComponent/repoUIComponent"


export function Repo() {
  const { repo } = useContext(ReposContext)
  const [openRepoId, setOpenRepoId] = useState(null);

  const toggleOpen = (repoId) => {
    setOpenRepoId((prevRepoId) => (prevRepoId === repoId ? null : repoId));
  };

  return (<>
    <section className="w-full flex flex-col gap-4">
      {repo ? repo.map(data => (
        <RepoUI key={data.id} props={data} isOpen={openRepoId === data.id} toggleOpen={toggleOpen} />
      )) : (<span className="animate-pulse p-2 text-xl">Loading...</span>)}

    </section>
  </>)
}
