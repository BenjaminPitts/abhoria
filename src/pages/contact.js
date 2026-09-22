import * as React from "react"
import Form from '../components/form'
import Layout from "../components/layout"
import Seo from "../components/seo"


const Contact = () => (
  <Layout>
  <h1>Contact</h1>
  <div className="contact">
    <h3>Band Email: <a href='mailto:Abhoriablackmetal@outlook.com'>Abhoriablackmetal@outlook.com</a></h3>
    <h3>Label: <a href='https://www.prostheticrecords.com/' target="_blank" rel="noreferrer">https://www.prostheticrecords.com/</a></h3>
    <h3>Bandcamp: <a href='https://abhoria.bandcamp.com/' target="_blank" rel="noreferrer">https://abhoria.bandcamp.com/</a></h3>
    <h3>Facebook: <a href='https://www.facebook.com/AbhoriaMetal' target="_blank" rel="noreferrer">https://www.facebook.com/AbhoriaMetal</a></h3>
    <h3>Instagram: <a href='https://www.instagram.com/abhoriametal/' target="_blank" rel="noreferrer">https://www.instagram.com/abhoriametal/</a></h3>
    <h3>Twitter: <a href='https://twitter.com/abhoriametal' target="_blank" rel="noreferrer">https://twitter.com/abhoriametal</a></h3>
  </div>
  <br />
  <h3>Or send us a message directly:</h3>
  <Form />

  </Layout>
)

export const Head = () => <Seo title="Contact" pathname="/contact/" />

export default Contact