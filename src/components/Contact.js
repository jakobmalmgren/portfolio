import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { CiMapPin } from "react-icons/ci";
import { BsFillPersonFill, BsFillPersonPlusFill, BsSend } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { BsArrowLeftRight } from "react-icons/bs";
import { useState } from "react";
import { TfiPencil } from "react-icons/tfi";
import { MdPhone } from "react-icons/md";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
const Contact = () => {
  const [map, setMap] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE,
        process.env.REACT_APP_TEMPLATE,
        form.current,
        process.env.REACT_APP_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-container" id="contact">
      <div className="contact-container-header">
        <p> ~ Get in touch ~</p>
        <h1>CONTACT</h1>
      </div>

      <div className="contact-container-content">
        <div className="contact-container-wrapper">
          <div className="contact-container-icons">
            <div className="icon-wrapper">
              <div className="icon-circle">
                <MdPhone></MdPhone>
              </div>

              <p> +46768- 699954</p>
            </div>
            <div className="icon-wrapper">
              <div className="icon-circle">
                <TfiEmail></TfiEmail>
              </div>

              <p>jakob.malmgren1987@gmail.com</p>
            </div>
            <div className="location-wrapper">
              <div className="icon-wrapper">
                <div className="icon-circle">
                  <CiMapPin></CiMapPin>
                </div>
                <p> Barcelona, Spain</p>
              </div>
              <BsArrowLeftRight
                className="swap-icon"
                onClick={() => {
                  setMap(!map);
                }}
              ></BsArrowLeftRight>
              <div className="icon-wrapper">
                <div className="icon-circle">
                  <CiMapPin></CiMapPin>
                </div>
                <p> Stockholm, Sweden</p>
              </div>
            </div>

            <iframe
              src={
                map
                  ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45206.89965355842!2d2.1271438939761946!3d41.386245767323025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49816718e30e5%3A0x44b0fb3d4f47660a!2sBarcelona%2C%20Spanien!5e0!3m2!1ssv!2sse!4v1686828617897!5m2!1ssv!2sse"
                  : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35000.09786327753!2d18.037631074928854!3d59.33079517734044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f763119640bcb%3A0xa80d27d3679d7766!2sStockholm!5e0!3m2!1ssv!2sse!4v1687954317184!5m2!1ssv!2sse"
              }
              width="100%"
              height="290"
              allowfullscreen=""
              loading="lazy"
              title="map"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="contact-container-inputfields">
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-wrapper">
                <div className="input-wrapper">
                  <label for="fname" className="formLabel">
                    First Name
                  </label>
                  <input
                    required
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Your first name.."
                  />
                  <BsFillPersonFill className="form-wrapper-icon"></BsFillPersonFill>
                </div>

                <div className="input-wrapper">
                  <label for="lname" className="formLabel">
                    Last Name
                  </label>
                  <input
                    required
                    type="text"
                    id="lname"
                    name="lastname"
                    placeholder="Your last name.."
                  />
                  <BsFillPersonPlusFill className="form-wrapper-icon"></BsFillPersonPlusFill>
                </div>

                <div className="input-wrapper">
                  <label for="email" className="formLabel">
                    Email
                  </label>
                  <input
                    pattern="^[\w#][\w\.\’+#](.[\w\\’#]+)\@[a-zA-Z0-9]+(.[a-zA-Z0-9]+)*(.[a-zA-Z]{2,20})$"
                    required
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email.."
                  />
                  <TfiEmail className="form-wrapper-icon"></TfiEmail>
                </div>

                <div className="input-wrapper">
                  <label for="subject" className="formLabel">
                    Subject
                  </label>
                  <textarea
                    required
                    type="text"
                    minLength="20"
                    rows="8"
                    cols="50"
                    id="subject"
                    name="message"
                    placeholder="Write something.."
                  ></textarea>
                  <TfiPencil className="form-wrapper-icon"></TfiPencil>
                </div>
              </div>

              <button className="form-btn" type="submit" value="Submit">
                <BsSend></BsSend>
                <h3>SEND</h3>
              </button>
            </form>
          </div>
        </div>
        <div className="contact-socialMedia-icons-wrapper">
          <FaGithub className="contact-socialMedia-icons"></FaGithub>
          <CiLinkedin className="contact-socialMedia-icons"></CiLinkedin>
        </div>
      </div>
    </div>
  );
};

export default Contact;
