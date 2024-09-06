import React from 'react'
import './Contact.css'
import Swal from 'sweetalert2'

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
        <h1 className='text-6xl'>Contact</h1>
        <form onSubmit={onSubmit} className='mt-12'>

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

      </section>
    </section>
  )
}

export default Contact
