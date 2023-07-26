import { CopyToClipboard } from 'react-copy-to-clipboard';
import { GithubContext } from "../ApiContext/ReposContext"
import { useContext } from 'react'

function HomeUI() {
  const { user } = useContext(GithubContext)

  return (
    <>
      <section className="p-2 w-full text-xl">
        {user ? (
          <section className='text-end'>
            <h1 className='text-2xl font-Space'>{user.data.name}<span>({user.data.login})</span></h1>
            <section className='p-2 border-b-2 border-abbey'>
              <article className='flex flex-col items-end gap-4'>
                <img src={user.data.avatar_url} className="rounded-full w-20 fill-slateGray" />
                <p className='text-end flex flex-col'>
                  <h2 className='text-xl font-Space'>About me</h2>
                  {user.data.bio}
                  <span>Public repos: {user.data.public_repos}</span>
                  <section className='flex justify-end gap-3 [&>a]:border-b-2 [&>a]:border-abbey'>
                    <a href={user.data.html_url} target="_blank">Github</a>
                    <a href={user.data.html_url} target="_blank">Github</a>
                  </section>
                </p>
              </article>
            </section>
          </section>
        ) : (<span className="animate-pulse">Loading...</span>)}
      </section>
    </>
  )
}

export { HomeUI }
