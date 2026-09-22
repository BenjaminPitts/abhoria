import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"


const Bio = () => (
  <Layout>
    <h1>Bio</h1>
    <StaticImage
      src="../images/abhoria-promo2.jpg"
      width={500}
      quality={80}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Four members of Abhoria standing outdoors beneath a cloudy sky"
      style={{ margin: `1rem` }}
    />
<div className="bio-text-block">
  <p>Abhoria is a US black metal band that blends hyperspeed aggression with progressive arrangements.</p>

  <p>The band was formed in 2018 by Trevor Portz, leader of progressive death/black metal band Ashen Horde, who was seeking to get back to his black metal roots. Portz drafted top-notch players from the extreme metal underground to fill the ranks. That included bassist Igor Panasewicz (Cephalic Carnage [live]), drummer JS (ex-Allegaeon), and vocalist Walthrax (ex-Catheter). The group soon signed to Prosthetic Records and released their self-titled debut in 2022 to widespread acclaim. The album was heavily inspired by the ’90s black metal that originally drew Portz to the scene, along with some death metal flourishes.</p>

  <p>Vocalist Benjamin Pitts (In the Company of Serpents, NightWraith) joined for the recording of their sophomore album, Depths, released in 2024, again by Prosthetic Records. Depths expanded on the sound of the debut, incorporating death metal influences and more complex arrangements. The band hit the road soon thereafter, playing shows across the Midwest and West Coast, culminating in a direct-support slot for Norwegian black metal legend Abbath for his 2025 tour kickoff.</p>

  <p>The latter part of 2025 was spent recording their most ambitious album yet. The soon-to-be-announced album touches on everything the band has done thus far, but adds an even more progressive edge. The band has signed a new deal with Swedish label Black Lion Records, who will release the album in early 2027. Ahead of the release, Abhoria will be hitting the road in October with folk-doom conjurers Velnias for a run of epic metal madness.</p>
</div>

  </Layout>

)

export const Head = () => <Seo title="Bio" pathname="/bio/" />

export default Bio
