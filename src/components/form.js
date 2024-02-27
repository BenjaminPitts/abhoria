import React from 'react'

class Form extends React.Component {
  render = () => {
    return <>

    <br />
    <form method="post" netlify-honeypot="bot-field" data-netlify="true" action="/" name="contact" netifly>
    <input type="hidden" name="bot-field" />
    <input type="hidden" name="form-name" value="contact" />
    <label aria-label="name">
    <input type="text" name="name" id='name' placeholder='your name'/><br />
    </label>
    <label aria-label="email">
    <input type="email" name="email" id="email" placeholder='your email'/><br />
    </label>
    <label aria-label="messsage">
    <textarea type="text" name="message" id="message" rows='10'placeholder='message'>
    </textarea><br />
    </label>
    <button type='submit'>Send</button>
  </form><br />
    </>
  }
}

export default Form