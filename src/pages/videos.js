import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"


const Videos = () => (
  <Layout>
    <h1>Videos</h1>

<div class='outer-box'>

  <div class='inner-box'>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/3vuMrLj6ViQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
  <div class='inner-box'>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/aL5oLKwJFiw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
  <div class='inner-box'>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/C2BEzG8XPMk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
  <div class='inner-box'>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/d3XkglZfIus" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
  <div class='inner-box'>
   <iframe width="560" height="315" src="https://www.youtube.com/embed/akPmoe0FBgk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
  <div class='inner-box'>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/TCf06tZ0F00" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>

</div>

  </Layout>
)

export const Head = () => <Seo title="Videos" />

export default Videos
