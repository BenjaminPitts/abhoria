import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"


const IndexPage = () => (
  <Layout>
  <h1>Stream the new single <i>"The Well"</i>, from the upcoming album <i>"Depths"</i></h1>
  <h2>Released worlwide on 1/19/2024</h2>
<div class='index-box'>
<div class='index-inner-box'>
      <StaticImage
        src="../images/abhoria-promo3.jpg"
        width={500}
        quality={80}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Abhoria"
        style={{ margin: `1rem`, border:`5px solid black` }}
      />

<StaticImage
      src="../images/abhoria-live1.jpg"
      width={500}
      quality={80}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Abhoria"
      style={{ margin: `1rem`, border:`5px solid black` }}
    />
</div>
  <iframe style={{margin: `1rem`, width: `350px`, height: `470px`}} title="Abhoria-Depths" src="https://bandcamp.com/EmbeddedPlayer/album=3627524110/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless>"<a href="https://abhoria.bandcamp.com/album/depths">DEPTHS by Abhoria</a></iframe>
</div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage