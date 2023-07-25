import { useRouteError } from "react-router"

const ErrorPage = () => {
  const error = useRouteError()
  return (
    <>
      <article>
        <p>{error.statusText || error.message}</p>
      </article>
    </>
  )
}

export { ErrorPage }
