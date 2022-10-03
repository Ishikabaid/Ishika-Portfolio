import "./contact.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xd0963s', 'template_dlhq52f', form.current, '-kHakbjSrWyNevqlH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className="contact section" id="contact">
        <h2 className="section-title">Get in Touch</h2>

        <div className="contact-container container grid">
            <div className="contact-content">
                <h3 className="contact-title">Talk to me</h3>

                <div className="contact-info">
                    <div className="contact-card">
                        <i className="bx bx-mail-send contact-card-icon"></i>

                        <h3 className="contact-card-title">Email</h3>
                        <span className="conatct-card-data">ibishikabaid28@gmail.com</span>

                        <a href="" className="contact-button">Write me 
                        <i className="bx bx-right-arrow-alt contact-button-icon"></i></a>
                    </div>

                </div>
            </div>

            <div className="contact-content">
                <h3 className="contact-title">Collaborate</h3>

                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <div className="contact-form-div">
                        <label className="contact-form-tag">Name</label>
                        <input type="text" name="name"
                        className="contact-form-input"
                        placeholder="Your name" />
                    </div>

                    <div className="contact-form-div">
                        <label className="contact-form-tag">Mail</label>
                        <input type="email" name="email"
                        className="contact-form-input"
                        placeholder="Your email" />
                    </div>

                    <div className="contact-form-div contact-form-area">
                        <label className="contact-form-tag">Topic</label>
                        <textarea type="text" name="idea"
                        cols="30" rows="10"
                        className="contact-form-input"
                        placeholder="Share your idea for collaboration" ></textarea>
                    </div>

                    <button className="button msg-btn button--flex">Send Message</button>
                </form>

            </div>
        </div>
    </section>
  )
}

export default Contact;