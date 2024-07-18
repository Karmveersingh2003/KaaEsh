import React from 'react'
import "./contact.css"
import Card1 from "./img/card1.png"
import Card2 from "./img/card2.png" // Add these imports if needed
import Card3 from "./img/card3.png"
import Card4 from "./img/card4.png"

export default function Contact() {
  return (
    <>
      {/* ==================== QUESTIONS ==================== */}
      <section className="questions section" id="faqs">
        <h2 className="section__title-center questions__title container">
          Some common questions <br/> were often asked
        </h2>

        <div className="questions__container container grid">
          <div className="questions__group">
            <div className="questions__item">
              <header className="questions__header">
                <i className="ri-add-line questions__icon"></i>
                <h3 className="questions__item-title">
                  My flowers are falling off or dying?
                </h3>
              </header>
              <div className="questions__content">
                <p className="questions__description">
                  Plants are easy way to add color energy and transform your 
                  space but which planet is for you. Choosing the right plant.
                </p>
              </div>
            </div>

            <div className="questions__item">
              <header className="questions__header">
                <i className="ri-add-line questions__icon"></i>
                <h3 className="questions__item-title">
                  What causes leaves to become pale?
                </h3>
              </header>
              <div className="questions__content">
                <p className="questions__description">
                  Plants are easy way to add color energy and transform your 
                  space but which planet is for you. Choosing the right plant.
                </p>
              </div>
            </div>

            <div className="questions__item">
              <header className="questions__header">
                <i className="ri-add-line questions__icon"></i>
                <h3 className="questions__item-title">
                  What causes brown crispy leaves?
                </h3>
              </header>
              <div className="questions__content">
                <p className="questions__description">
                  Plants are easy way to add color energy and transform your 
                  space but which planet is for you. Choosing the right plant.
                </p>
              </div>
            </div>
          </div>

          <div className="questions__group">
            <div className="questions__item">
              <header className="questions__header">
                <i className="ri-add-line questions__icon"></i>
                <h3 className="questions__item-title">
                  How do I choose a plant?
                </h3>
              </header>
              <div className="questions__content">
                <p className="questions__description">
                  Plants are easy way to add color energy and transform your 
                  space but which planet is for you. Choosing the right plant.
                </p>
              </div>
            </div>

            <div className="questions__item">
              <header className="questions__header">
                <i className="ri-add-line questions__icon"></i>
                <h3 className="questions__item-title">
                  How do I change the pots?
                </h3>
              </header>
              <div className="questions__content">
                <p className="questions__description">
                  Plants are easy way to add color energy and transform your 
                  space but which planet is for you. Choosing the right plant.
                </p>
              </div>
            </div>

            <div className="questions__item">
              <header className="questions__header">
                <i className="ri-add-line questions__icon"></i>
                <h3 className="questions__item-title">
                  Why are gnats flying around my plant?
                </h3>
              </header>
              <div className="questions__content">
                <p className="questions__description">
                  Plants are easy way to add color energy and transform your 
                  space but which planet is for you. Choosing the right plant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT ==================== */}
      <section className="contact_us section container" id="contact_us">                
        <div className="contact__container grid">
          <div className="contact__box">
            <h2 className="section__title">
              Reach out to us today <br/> via any of the given <br/> information
            </h2>

            <div className="contact__data">
              <div className="contact__information">
                <h3 className="contact__subtitle">Call us for instant support</h3>
                <span className="contact__description">
                  <i className="ri-phone-line contact__icon"></i>
                  +999 888 777
                </span>
              </div>

              <div className="contact__information">
                <h3 className="contact__subtitle">Write us by mail</h3>
                <span className="contact__description">
                  <i className="ri-mail-line contact__icon"></i>
                  user@email.com
                </span>
              </div>
            </div>
          </div>

          <form action="" className="contact__form">
            <div className="contact__inputs">
              <div className="contact__content">
                <input type="email" placeholder=" " className="contact__input"/>
                <label htmlFor="" className="contact__label">Email</label>
              </div>

              <div className="contact__content">
                <input type="text" placeholder=" " className="contact__input"/>
                <label htmlFor="" className="contact__label">Subject</label>
              </div>

              <div className="contact__content contact__area">
                <textarea name="message" placeholder=" " className="contact__input"></textarea>                              
                <label htmlFor="" className="contact__label">Message</label>
              </div>
            </div>

            <button className="button button--flex">
              Send Message
              <i className="ri-arrow-right-up-line button__icon"></i>
            </button>
          </form>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="footer section">
        <div className="footer__container container grid">
          <div className="footer__content">
            <a href="#" className="footer__logo">
              <i className="ri-leaf-line footer__logo-icon"></i> Plantex
            </a>

            <h3 className="footer__title">
              Subscribe to our newsletter <br/> to stay updated
            </h3>

            <div className="footer__subscribe">
              <input type="email" placeholder="Enter your email" className="footer__input"/>
              <button className="button button--flex footer__button">
                Subscribe
                <i className="ri-arrow-right-up-line button__icon"></i>
              </button>
            </div>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">Our Address</h3>
            <ul className="footer__data">
              <li className="footer__information">1234 - Peru</li>
              <li className="footer__information">La Libertad - 43210</li>
              <li className="footer__information">123-456-789</li>
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">Contact Us</h3>
            <ul className="footer__data">
              <li className="footer__information">+999 888 777</li>
              <div className="footer__social">
                <a href="https://www.facebook.com/" className="footer__social-link">
                  <i className="ri-facebook-fill"></i>
                </a>
                <a href="https://www.instagram.com/" className="footer__social-link">
                  <i className="ri-instagram-line"></i>
                </a>
                <a href="https://twitter.com/" className="footer__social-link">
                  <i className="ri-twitter-fill"></i>
                </a>
              </div>
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">
              We accept all credit cards
            </h3>
            <div className="footer__cards">
              <img src={Card1} alt="Card1" className="footer__card"/>
              <img src={Card2} alt="Card2" className="footer__card"/>
              <img src={Card3} alt="Card3" className="footer__card"/>
              <img src={Card4} alt="Card4" className="footer__card"/>
            </div>
          </div>
        </div>
        <p className="footer__copy">&#169; Mahmoud Reda. All rights reserved</p>
      </footer>
    </>
  )
}
