import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"


const IndexPage = () => (
  <Layout>
  <h1>Stream the new album <i>"Depths"</i></h1>
  <h3>Released worlwide on 1/19/2024 via <a href='https://www.prostheticrecords.com/' target='blank'> Prosthetic Records</a></h3>
  <h3>Tour dates and merchandise available at: <a href='https://abhoria.bandcamp.com/' target='blank'> https://abhoria.bandcamp.com/</a></h3>
<div class='index-box'>
<div class='index-inner-box'>
      <StaticImage
        src="../images/abhoria-promo3.jpg"
        width={400}
        quality={80}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Abhoria"
        style={{ margin: `1rem`, border:`2px solid black` }}
      />

<StaticImage
      src="../images/abhoria-live1.jpg"
      width={400}
      quality={80}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Abhoria"
      style={{ margin: `1rem`, border:`2px solid black` }}
    />
</div>
<iframe style={{margin: `1rem`, width: `350px`, height: `800px`, border:`2px solid black`}} title="Abhoria-Depths" src="https://bandcamp.com/EmbeddedPlayer/album=3627524110/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=true/transparent=true/" seamless><a href="https://abhoria.bandcamp.com/album/depths">DEPTHS by Abhoria</a></iframe>
</div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Abhoria" />

export default IndexPage