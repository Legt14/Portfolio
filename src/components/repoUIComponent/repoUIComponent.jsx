import { RepoDetail } from "../repoDetail/RepoDetail"

function RepoUI({ props, isOpen, toggleOpen }) {
  const handleClick = () => {
    toggleOpen(props.id)
  }

  return (<>
    <article className="p-2 flex flex-col justify-between gap-3 animate-fade-left animate-delay-300 animate-once">
      <section className="">
        <section onClick={handleClick} className="cursor-pointer text-end">
          <h2 className="text-2xl font-Space capitalize">{props.name}</h2>
        </section>
        <section className={`
        border-b-2
        ${isOpen ? 'border-abbey dark:border-wildSand' : 'border-abbey/50 dark:border-wildSand/50'}
`}>
          {isOpen && <RepoDetail detail={props} />}
        </section>
      </section>
    </article>
  </>)
}

export { RepoUI }
