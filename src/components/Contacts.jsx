import React, {useRef} from "react";
import Title from "./Title";
import emailjs from "emailjs-com"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

function Contacts(){
    
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('gmail', 'gmail_template', form.current, 'user_87x9KfUFrlt997SGIQK41')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
        form.current.reset()
    };

    return(
        <div id="contact">
           <Title title="Contact Me"></Title>
           <div className="form-container">
               <h3>Have a question or wanna work together? Let's do it :</h3>
               <form onSubmit={sendEmail} method="POST" className="contact-form">
                   <input type="text" name="Name" placeholder="Your name" required></input>
                   <input type="email" name="Email" placeholder="Your email" required></input>
                   <textarea placeholder="Leave a message!" name="Message" required></textarea>
                   <button type="submit">Submit</button>
               </form>
               <div className="socials">
                  <a target="_blank" href="https://www.instagram.com/notlikeedu/"><FontAwesomeIcon icon={faInstagram}/></a>
                  <a target="_blank" href="https://github.com/EduardoDevOlmedo"><FontAwesomeIcon icon={faGithub}/></a>
                  <a href="tel:+50375205438"><FontAwesomeIcon icon={faWhatsapp}/></a>
               </div>
           </div>
        </div>
    )
}

export default Contacts
