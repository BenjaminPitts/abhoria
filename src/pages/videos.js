import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"


const Videos = () => (
  <Layout>
    <h1>Videos</h1>
  
<div class='outer-box'>

  <div class='inner-box'>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/3vuMrLj6ViQ?si=XxLwPNAGzOcG01XL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
  <div class='inner-box'>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/d3XkglZfIus?si=AHxMjjkwrVqP_Tnp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
  <div class='inner-box'>
   <iframe width="560" height="315" src="https://www.youtube.com/embed/akPmoe0FBgk?si=AxygPNIzCidX_jG5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
  <div class='inner-box'>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/TCf06tZ0F00?si=uzgJ5tpTMP62f3NG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>

</div>

  </Layout>
)

export const Head = () => <Seo title="Videos" />

export default Videos