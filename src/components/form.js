import React from 'react'

class Form extends React.Component {
  render = () => {
    return <>

    <br />
    <form method="post" netlify-honeypot="bot-field" data-netlify="true" action="/" name="contact" netifly>
    <input type="hidden" name="bot-field" />
    <input type="hidden" name="form-name" value="contact" />
    <label for="name">
    <input type="text" name="name" placeholder='your name'/><br />
    </label>
    <label for="email">
    <input type="email" name="email" placeholder='your email'/><br />
    </label>
    <label for="messsage">
    <textarea type="text" name="message" rows='10'placeholder='message'>
    </textarea><br />
    </label>
    <button type='submit'>Send</button>
  </form><br />
    </>
  }
}

export default Form