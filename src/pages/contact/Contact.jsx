import React from 'react';
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram
} from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import './contact.css';

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact_title">Contact Me</h3>

          <p className="contact__description">
            Thanks for visiting! I'm a Computer Science student excited to connect and collaborate on projects. Feel free to reach out via the form, email, or LinkedIn. I'm always eager to learn and grow in web development and tech. Let's create something amazing!
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail Id</span>
                <h4 className="info__desc">vivekp142004@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Phone No.</span>
                <h4 className="info__desc">+91 8302-076180</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a href="https://www.linkedin.com/in/vivek-pareek-27a70b256/" className="contact__social-link"><FaLinkedin /></a>
            <a href="https://x.com/vivekp142004" className="contact__social-link"><FaTwitter /></a>
            <a href="https://github.com/Vivekpareek-14" className="contact__social-link"><FaGithub /></a>
            <a href="https://www.instagram.com/vivek..pareek_/profilecard/?igsh=OGNnM3RmdGIzcnZ5" className="contact__social-link"><FaInstagram /></a>
          </div>
        </div>

        <form action="#" className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input type="text" placeholder='Your Name' className='form__control' />
            </div>

            <div className="form__input-div">
              <input type="email" placeholder='Your Email' className='form__control' />
            </div>

            <div className="form__input-div">
              <input type="tel" placeholder='Your Phone' className='form__control' />
            </div>
          </div>

          <div className="form__input-div">
            <textarea placeholder='Your Message' className='form__control textarea'></textarea>
          </div>

          <button type="submit" className='button'>
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
