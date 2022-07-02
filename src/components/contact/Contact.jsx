import React,{useRef} from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yyhoe8p', 'template_dikmyxr', form.current, 'FaA9J-kZ2pELNFZWT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };


  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>pandeyrakesh835@gmail.com</h5>
            <a href="mailto: pandeyrakesh835@gmail.com" target="blank">
              {" "}
              Send a massege
            </a>
          </article>

          <article className="contact_option">
            <RiMessengerLine className="contact_option-icon"/>
            <h4>Messenger</h4>
            <h5>PandeyTechnical</h5>
            <a href="mailto: pandeyrakesh835@gmail.com" target="blank">
              {" "}
              Send a massege
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+917631986183</h5>
            <a
              href="https://api.whatsapp.com/send?phone+7631986183"
              target="blank"
            >
              {" "}
              Send a massege
            </a>
          </article>
        </div>
        

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
            ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
            
      </div>
    </section>
  );
};

export default Contact;
