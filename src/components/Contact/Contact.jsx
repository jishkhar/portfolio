import React from 'react'
import './Contact.css'
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function Contact() {


  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a9a5d84f-cd99-4bb5-88e3-450d2d771f65");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully",
        icon: "success"
      });
    }
  };



  return (
    <section id='contact'>
      <section className="contact flex flex-col">
        <h1 className='text-6xl pt-16'>Contact</h1>
        <form onSubmit={onSubmit}>

          <div className="input-box">
            <label>Full Name</label>
            <input type="text" className="field" name='name' required />
          </div>

          <div className="input-box">
            <label>Email Address</label>
            <input type="email" className="field" name='email' required />
          </div>

          <div className="input-box">
            <label>Your Message</label>
            <textarea name="message" className='field mess' required></textarea>
          </div>

          <button type="submit">Send Message</button>

        </form>

        <div>
          <a href="https://github.com/jishkhar" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faGithub}
              className="h-7 pl-1 pr-6 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-blue-500"
            />
          </a>
          <a href="https://www.linkedin.com/in/jishnukhargharia" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="h-7 px-6 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-blue-500"
            />
          </a>
          <a href="https://x.com/JishKhar_" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faXTwitter}
              className="h-7 px-6 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-blue-500"
            />
          </a>
          <a href="mailto:jishnukhargharia11@gmail.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="h-7 px-6 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-blue-500"
            />
          </a>

        </div>

      </section>
    </section>
  )
}

export default Contact
