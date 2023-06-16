import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { CiMapPin } from "react-icons/ci";
import { BsFillPersonFill, BsFillPersonPlusFill, BsSend } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { TfiPencil } from "react-icons/tfi";
import { MdPhone } from "react-icons/md";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="header">
        <p className="headerOne"> ~ Get in touch ~</p>
        <h1 className="headerTwo">CONTACT</h1>
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

              <p> jakob-malmgren@gmail.com</p>
            </div>
            <div className="icon-wrapper">
              <div className="icon-circle">
                <CiMapPin></CiMapPin>
              </div>
              <p> Barcelona, catalunya</p>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45206.89965355842!2d2.1271438939761946!3d41.386245767323025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49816718e30e5%3A0x44b0fb3d4f47660a!2sBarcelona%2C%20Spanien!5e0!3m2!1ssv!2sse!4v1686828617897!5m2!1ssv!2sse"
              width="100%"
              height="290"
              allowfullscreen=""
              loading="lazy"
              title="map"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="contact-container-inputfields">
            <form>
              <div className="form-wrapper">
                {/* <label for="fname" className="formLabel">First Name</label> */}
                <div className="input-wrapper">
                  <label for="fname" className="formLabel">
                    First Name
                  </label>
                  <input
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
                    rows="8"
                    cols="50"
                    id="subject"
                    name="subject"
                    placeholder="Write something.."
                  ></textarea>
                  <TfiPencil className="form-wrapper-icon"></TfiPencil>
                </div>
              </div>

              <button className="form-btn" type="submit" value="Submit">
                <BsSend></BsSend>
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
