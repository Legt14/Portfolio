import { CopyToClipboard } from "react-copy-to-clipboard";
import { GithubContext } from "../ApiContext/ReposContext";
import { useContext } from "react";

function HomeUI() {
  const { user } = useContext(GithubContext);

  const aStyle = 'p-2 text-bittersweet dark:text-Allports hover:bg-Allports hover:dark:bg-bittersweet transition duration-300 ease-in border-b-2 border-r-4 rounded-br-xl border-Allports dark:border-bittersweet text-md'

  return (
    <>
      <section className="p-2 w-full text-xl">
        {user ? (
          <section className="text-end ">
            <h1 className="text-2xl font-Space text-bittersweet">
              {user.data.name}
              <span className="text-bittersweet"> (<strong className="text-Allports">{user.data.login}</strong>)</span>
            </h1>
            <section className="p-2 border-b-4 border-Allports dark:border-bittersweet">
              <article className="flex flex-col items-end gap-4">
                <img
                  src={user.data.avatar_url}
                  className="rounded-full w-20 fill-slateGray"
                />
                <h2 className="text-xl font-Space text-bittersweet">About <strong className="text-Allports">me</strong></h2>
                <p className="text-end flex flex-col font-bold">
                  {user.data.bio}
                  <span>Public repos: {user.data.public_repos}</span>
                </p>
              </article>
            </section>
            <section className="flex justify-end gap-6 font-Space">
              <a href={user.data.html_url} className={aStyle} target="_blank">
                Github
              </a>
              <a href='https://linkedin.com/in/leandro-gomez-22aa0b1b5' className={aStyle} target="_blank">
                Linkedin
              </a>
            </section>

          </section>
        ) : (
          <span className="animate-pulse">Loading...</span>
        )}
      </section>
    </>
  );
}

export { HomeUI };
