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
Aggressive, '90s-inspired black metal, with modern production and no politics. For fans of Immortal, Dark Funeral and Emperor. Featuring members of Ashen Horde, In the Company of Serpents and Vimana. New album, Depths, was released in January 2024 from Prosthetic Records.  
<br /><br />
Speaking on the album announcement, Trevor Portz (guitar) comments: "Depths leans fully into the dystopian themes loosely explored on the first album. This album explores different extreme scenarios in which the inhabitants of the dystopian world are trying to survive. In each case, the true depths of human suffering are full display, hence the album title. It’s a look at how humans find a way to carry on despite being thrust into the most adverse circumstances... though, how much they retain their humanity is definitely not consistent. As Brutal Truth taught us, extreme conditions demand extreme responses.
<br /><br />
Of The Well's music video Portz adds: "We were extremely fortunate to work with Kyle Lamar/Digital Myle on a concept video for “The Well.” Having seen his epic work with countless bands, I knew he’d capture the images I had in my head. I gave Kyle a rundown of the story, and could just see the wheels spinning as he was sorting out the visuals. It was so cool to see the story I imagined when writing the song come to life.
<br /><br />
"We shot it in the mountains outside Denver in December. It was about 20 degrees, and snowed intermittently. I’m thankful we weren’t actually playing live, because I lost feeling in my fingers about 10 minutes in. Maybe not the ideal weather for an all-day shoot, but it sure provided the perfect setting for the song.
<br /><br />
"Besides the crew, the true heroes of the day were our actors. Their level of commitment was insane. Not only did they tough it out in the cold all day, but they climbed, ran, fell and truly embodied the agony of the characters they portrayed. At one point toward the end of the video, when they find the water source, I expected them to mime everything. But no—they full on broke the ice and scooped up handfuls of brutally cold water. Talk about getting into the role... infinite hails to the cast!"
<br /><br />
While the groundwork for the lyrical content on Depths was laid in the dystopian-inspired songs of its predecessor, founder Trevor Portz’s vision is more fully realized on their second full-length. Whilst not quite a concept album, there is a thread that runs between each track; each unveils a different extreme scenario or revelatory terror for the surviving inhabitants in a hellish world. The nightmarish anthology details different Orwellian scenarios where the human condition is laid bare with all its ugly possibilities offered up for examination. How do they react when confronted with nearly inconceivable adverse events? How do extreme conditions shape their view of the world and of themselves?
<br /><br />
The band was inspired by many real life locations and situations, allowing their imaginations to embellish further fictional details to bring their bleak visions to life. The ominous, fantastical realm where ABHORIA’s storytelling exists is brought to life further still by the magnificent cover art by iconic artist, Dan Seagrave.
<br /><br />
Standout track, The Well, tells the tale of a group of refugees escaping a compromised city in the aftermath of a war. Exhausted, dehydrated and losing hope, they come across a natural water source. Relieved, their thirst is slaked... but the relief is temporary, as they soon discover the water is tainted. Only one among their number doesn’t drink from the poisoned “well,” thus forced to watch helplessly as their friends perish agonizingly. The story was inspired by Montezuma Well in Arizona, where there is a high level of arsenic in the water, rendering it a tantalizingly dangerous prospect for many generations of people.
<br /><br />
A reinvigorated line up has instilled a newfound confidence in the core members of ABHORIA. The result is an album rooted in the aggressive black metal core of its predecessor, but with new flourishes that push the boundaries of the band. Whilst recording took place in various locations, the resulting nine tracks are a cohesive, dynamic collection masterfully mixed by Zack Ohren. A fine balance of melody and intensity makes the album a compelling listen; for fans who were taken with the desolate black metal of their debut, there’s even more to embrace on Depths.
<br /><br />
</div>

  </Layout>
)

export const Head = () => <Seo title="Bio" />

export default Bio
