import { RepoDetail } from "../repoDetail/RepoDetail"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"

function RepoUI({ props, isOpen, toggleOpen }) {
  const handleClick = () => {
    toggleOpen(props.id)
  }

  return (<>
    <article className="p-2 flex flex-col justify-between w-full gap-3 animate-fade-left animate-delay-300 animate-once">
      <section className="w-full flex flex-row-reverse">
        <h2 onClick={handleClick} className="text-xl font-Space capitalize">{props.name} </h2>
      </section>
      <section className="w-full">
        {isOpen && <RepoDetail detail={props} />}
      </section>
    </article>
  </>)
}

export { RepoUI }
