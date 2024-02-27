import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"


const IndexPage = () => (
  <Layout>
  <h1>Stream the new album <i>"Depths"</i></h1>
  <h4>Released worlwide on 1/19/2024 via <a href='https://www.prostheticrecords.com/' target='blank'> Prosthetic Records</a></h4>
  <h4>Tour dates and merchandise available through our <a href='https://abhoria.bandcamp.com/' target='blank'> Bandcamp</a> page</h4>
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

{/* <a href="https://www.songkick.com/artists/10275215" aria-label="songkick" class="songkick-widget" data-theme="dark" data-track-button="on" data-detect-style="off" data-background-color="rgb(0,0,0,1)" data-font-color="rgb(255,255,255,1)" data-button-bg-color="rgb(255,255,255,1)" data-button-text-color="rgb(0,0,0,1)" data-locale="en" data-other-artists="on" data-share-button="on" data-country-filter="on" data-rsvp="on" data-request-show="on" data-past-events="off" data-past-events-offtour="off" data-remind-me="off"></a><script src='//widget-app.songkick.com/injector/10275215'></script> */}
  
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Abhoria" />

export default IndexPage