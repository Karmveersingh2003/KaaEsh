import React from 'react'
import "./footer.css"
import indiaFlag from '../Home/images/india-flag.jpg';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import appStore1 from '../Home/images/app-store1.webp';
import appStore2 from '../Home/images/app-store2.webp';
import KaaEsh from "../Home/images/KaaEsh_logo.png"
export default function Footer() {
  return (
    <>
    <section class="footer-bar">
        <div class="container">
          <div class="footer-lang">
            <img class="footer-logo" src={KaaEsh} width={120}/>
            <div class="btn-lang-top">
              <a class="lang-btn" href="#"><img src={indiaFlag} height="13px" /> India <small><i class="fa fa-chevron-down"></i></small></a>
              <a class="lang-btn" href="#"> <i class="fa fa-globe"></i> English <small><i class="fa fa-chevron-down"></i></small></a>
            </div>
          </div>
          <div class="footer-last-links">
            <ul>
              <li><h4 class="footer-list-title">COMPANY</h4></li>
              <li><a href="#">Who We Are</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Report Fraud</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Financial Information</a></li>
            </ul>
            <ul>
              <li><h4 class="footer-list-title">FOR FOODIES</h4></li>
              <li><a href="#">Code of Conduct</a></li>
              <li><a href="#">Community</a></li>
              <li><a href="#">Blogger Help</a></li>
              <li><a href="#">Mobile Apps</a></li>
            </ul>
            <ul>
              <li><h4 class="footer-list-title">FOR RESTAURANTS</h4></li>
              <li><a href="#">Add Restaurant</a></li>
              <li><a href="#">Claim your Listing</a></li>
              <li><a href="#">Business App</a></li>
              <li><a href="#">Restaurant Widgets</a></li>
              <li><a href="#">Product Businesses</a></li>
            </ul>
            <ul>
              <li><h4 class="footer-list-title">FOR YOU</h4></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
            <div>
              <h4 class="footer-list-title">SOCIAL LINKS</h4>
              <div class="footer-social-icons">
                <a href="#"><i class="fab fa-facebook"><FaFacebook /></i></a>
                <a href="#"><i class="fab fa-twitter"><FaInstagram /></i></a>
                <a href="#"><i class="fab fa-instagram"><FaXTwitter /></i></a>
              </div>
              <div>
                <img src={appStore1} width="137px" />
                <img src={appStore2} width="137px" />
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <p><small>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2021 © KaaEsh™ Ltd. All rights reserved.</small></p>
          </div>
        </div>

      </section>
    </>
  )
}
