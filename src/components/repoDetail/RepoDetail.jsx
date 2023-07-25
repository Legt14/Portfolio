import { ImgComponent } from "../imgComponent/imgComponent"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode, faGlobe } from "@fortawesome/free-solid-svg-icons"

function RepoDetail({ detail }) {
  return (<>
    <article className="p-3 w-full animate-fade-down animate-duration-302 animate-delay-100 animate-once">
      <section className="flex flex-col sm:flex-row w-full gap-2">
        <section className="flex justify-start">
          <section className="flex flex-col justify-center items-center gap-3">
            <div className="w-48 h-28 flex items-center justify-center border-2 border-abbey dark:border-wildSand rounded-xl overflow-hidden object-center">
              <ImgComponent name={detail.name} />
            </div>
            <section className="w-full flex justify-between items-center gap-10 [&>a]:border-2 [&>a]:border-CodGray [&>a]:dark:border-wildSand">
              <a href={detail.homepage} placeholder={detail.name} target="_blank" className="w-16 h-6 rounded-xl flex items-center justify-center"><FontAwesomeIcon icon={faGlobe} /></a>
              <a href={detail.html_url} placeholder={detail.name} target="_blank" className="w-16 h-6 rounded-xl flex items-center justify-center "><FontAwesomeIcon icon={faCode} /></a>
            </section>
          </section>
        </section>

        <section>
          {detail.description}
          <br />
          Technology: {detail.language}
        </section>
      </section>
    </article >
  </>)
}

export { RepoDetail }
