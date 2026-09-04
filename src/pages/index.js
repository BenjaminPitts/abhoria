import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"


const BandsintownWidget = () => {
  React.useEffect(() => {
    if (document.getElementById("bandsintown-widget")) {
      return
    }

    const script = document.createElement("script")
    script.id = "bandsintown-widget"
    script.src = "https://widgetv3.bandsintown.com/main.min.js"
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <div className="tour-widget">
      <div
        className="bit-widget-initializer"
        data-artist-name="id_15537419"
        data-app-id="48301e7c05d8d321cbb639a5718c1"
      />
    </div>
  )
}

const IndexPage = () => (
  <Layout>
  <h1 className="homepage-announcement">A new full-length album is coming in 2026, courtesy of <a href="https://blacklionrecords.bandcamp.com/" target="_blank" rel="noreferrer">Black Lion Records</a></h1>
<div className="index-box">
<div className="index-inner-box">
      <StaticImage
        src="../images/abhoria-live3.jpg"
        className="homepage-photo"
        width={350}
        quality={80}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Abhoria performing live on stage"
      />

<h3>Upcoming Shows:</h3>
<BandsintownWidget />

</div>
  <iframe className="bandcamp-embed" title="Abhoria - Depths on Bandcamp" src="https://bandcamp.com/EmbeddedPlayer/album=3627524110/size=large/bgcol=333333/linkcol=0f91ff/package=2807111674/transparent=true/" seamless><a href="https://abhoria.bandcamp.com/album/depths">DEPTHS by Abhoria</a></iframe>
</div>
<br />
<br />
<h2 className="press-quote"><i>"Depths builds a very real, very daunting world not just because it's increasingly less difficult to imagine these circumstances, but because each song has its own character, revealing a new facet of the band's vision as well as their sound."</i> - <a href="https://www.invisibleoranges.com/abhoria-depths-track-by-track/" target="_blank" rel="noreferrer">Invisible Oranges</a></h2>

  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Abhoria" pathname="/" />

export default IndexPage
