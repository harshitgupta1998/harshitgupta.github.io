import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "Portfolio_template",
        e.target,
        "user_oOUAdwYh8KJ89ufoiVbvV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const EmailAlert = () => {
    const SignInRequest = alert(`Your Email Has Been successfully Sent`);
  };

  return (
    <div className="contact">
      <div className="contact__title">
        <h1>Contact Me</h1>
        <p>
          Connect with Me by Email, on{" "}
          <a href="https://github.com/Hongdi-LAI/" target="_blank">
            GitHub
          </a>{" "}
          or{" "}
          <a href="https://www.linkedin.com/in/hongdilai/" target="_blank">
            LinkedIn
          </a>{" "}
          :)
        </p>
      </div>
      <div className="contact__seperate">
        <p>———————————————————————— · ————————————————————————</p>
      </div>
      <div className="contact__email">
        <form onSubmit={sendEmail}>
          <p>Email Contact Form</p>
          <input
            type="email"
            className="contact__emailDetails"
            placeholder="Sender's Email Address ( Example: hongdilai0105@gmail.com )"
            name="email"
          />
          <input
            type="text"
            className="contact__emailDetails"
            placeholder="Sender's Name ( Example: Hongdi LAI )"
            name="name"
          />
          <input
            type="text"
            className="contact__emailDetails"
            placeholder="Email Subject ( Example: Inquiry on ... )"
            name="subject"
          />
          <textarea
            placeholder="Your Message"
            name="message"
            rows="15"
          ></textarea>
          <input
            type="submit"
            className="contact__emailButton"
            value="Send Email"
            onClick={EmailAlert}
          ></input>
        </form>
      </div>

      <div className="contact__seperate">
        <p className="contact__lastSeperate">
          ———————————————————————— · ————————————————————————
        </p>
      </div>

      <div className="contact__pageChange">
        <Link to="/resume">
          <div className="contact__pageChangeButton">
            <ChevronLeftIcon />
            <p>Resume</p>
          </div>
        </Link>
        <h5>|</h5>
        <div className="contact__pageChangeButton">
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
