import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"


const Videos = () => (
  <Layout>
    <h1>Videos</h1>

<div className="outer-box videos-grid">

  <div className="inner-box">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/5ByN_RVzkrY?si=NNGbm04N-YKoW8Zg" title="YouTube video player" loading="lazy" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  </div>
  <div className="inner-box">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/3vuMrLj6ViQ" title="YouTube video player" loading="lazy" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  </div>
  <div className="inner-box">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/aL5oLKwJFiw" title="YouTube video player" loading="lazy" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  </div>
  <div className="inner-box">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/C2BEzG8XPMk" title="YouTube video player" loading="lazy" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  </div>
  <div className="inner-box">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/d3XkglZfIus" title="YouTube video player" loading="lazy" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  </div>
  <div className="inner-box">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/akPmoe0FBgk" title="YouTube video player" loading="lazy" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  </div>
  <div className="inner-box">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/TCf06tZ0F00" title="YouTube video player" loading="lazy" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  </div>

</div>

  </Layout>
)

export const Head = () => (
  <Seo
    title="Videos"
    description="Watch Abhoria videos, including performances and music from the Los Angeles dystopian blackened death metal band."
    pathname="/videos/"
  />
)

export default Videos
