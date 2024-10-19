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
      alt="Abhoria"
      style={{ margin: `1rem` }}
    />
<div class='bio-text-block'>
<h3>Aggressive, 90s-inspired black metal, with modern production and no politics. For fans of Immortal, Dark Funeral and Emperor. Featuring members of Ashen Horde, In the Company of Serpents, NightWraith, and Vimana.
The new album, "Depths", was released January 19th, 2024 on <a href ='https://www.prostheticrecords.com/' target='blank'> Prosthetic Records</a>.</h3>

<br />
Abhoria was formed by guitarist Trevor Portz (Ashen Horde) in 2018, who was seeking to get back to his
black metal roots. Initially intended to be a band that celebrated the ‘90s era of black metal in all its
[in]glory—minus the murders and church burnings, of course—the band ultimately shaped their own
blend of aggressive, and occasionally progressive, black metal.
<br /><br />
Portz drafted other seasoned players, including bassist Igor Panazewicz (Vimana, NightWraith) and
vocalist Walthrax (ex-Catheter). Along with drummer JS, they worked on the album completely
remotely, with Shane Howard (Martiden) pulling everything together at Sawn & Quartered Studios.
The band signed a deal with Prosthetic Records, and released their self-titled debut in February of 2021.
The album received immense critical praise almost across the board, with Metal Temple calling the
album a “…a revelation of the genre,” and giving it a 9/10 rating. A performance video was released for
lead single, “Mountebank,” with epic closer “Sunless” also receiving video treatment and widespread
praise.
<br /><br />
Since touring wasn’t an option given Covid restrictions, the band instead focused on writing and
recording a follow-up album in short order. Walthrax exited during the second album sessions, so the
band pulled in Ben Pitts (In the Company of Serpents, NightWraith) to fill the spot. The band completed work on
“Depths,” with mixing masterfully handled by Zac Ohren (Fallujah, Immolation). The album further
refines Abhoria’s sound, creating a multifaceted blend of hyper speed blasts, dissonance, progressive
complexity and a string sense of melody. Lyrically, the band delves deeper into the dystopian world
introduced on the debut.
<br /><br />
<h3>While the groundwork for the lyrical content on Depths was laid in the dystopian-inspired songs of its predecessor,
founder Trevor Portz’s vision is more fully realized on their second full-length. Whilst not quite a concept album,
there is a thread that runs between each track; each unveils a different extreme scenario or revelatory terror for the surviving inhabitants in a hellish world.
Complete with artwork by Dan Seagrave (Entombed, Gorguts), the nightmarish anthology details different Orwellian scenarios where the human condition is laid bare with all its ugly possibilities offered up for examination.</h3>
<br />
The standout track, 'The Well', tells the tale of a group of refugees escaping a compromised city in the aftermath of a war. Exhausted, dehydrated and losing hope,
they come across a natural water source. Relieved, their thirst is slaked... but the relief is temporary, as they soon discover the water is tainted.
Only one among their number doesn’t drink from the poisoned "well", thus forced to watch helplessly as their friends perish agonizingly. 
he story was inspired by Montezuma Well in Arizona, where there is a high level of arsenic in the water, rendering it a tantalizingly dangerous prospect for many generations of people.
<br /><br />
2023 saw the band finally hitting the stage, and US touring began in 2024 to coincide with the release of
“Depths" - which was released worldwide on 1/19/2024 via Prosthetic Records.
<br /><br />
</div>

  </Layout>

)

export const Head = () => <Seo title="Bio" />

export default Bio
