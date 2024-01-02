import * as React from "react"
import Form from '../components/form'
import Layout from "../components/layout"
import Seo from "../components/seo"


const Contact = () => (
  <Layout>
    <Seo title="Contact" />
  <h1>Contact</h1>
  <div class='contact'>
    <h3>Band: <a href='mailto:nightwraithmetal@gmail.com'>?</a></h3>
    <h3>Label: <a href='https://www.prostheticrecords.com/' target='blank'>https://www.prostheticrecords.com/</a></h3>
    <h3>Bandcamp: <a href='https://abhoria.bandcamp.com/' target='blank'>https://abhoria.bandcamp.com/</a></h3>
    <h3>Facebook: <a href='https://www.facebook.com/AbhoriaMetal' target='blank'>https://www.facebook.com/AbhoriaMetal</a></h3>
    <h3>Instagram: <a href='https://www.instagram.com/abhoriametal/' target='blank'>https://www.instagram.com/abhoriametal/</a></h3>
    <h3>Twitter: <a href='https://twitter.com/nightwraithband' target='blank'>?</a></h3>
  </div>
  <br />
  <h3>Or send us a message directly:</h3>
  <Form />

  </Layout>
)

export default Contact