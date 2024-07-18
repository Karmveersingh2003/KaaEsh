import React from 'react';
import "./home.css";
import order1 from './images/order1.webp';
import order2 from './images/order2.webp';
import order3 from './images/order3.jpg';
import order4 from './images/order4.webp';
import collection1 from './images/collection1.jpg';
import collection2 from './images/collection2.jpg';
import collection3 from './images/collection3.jpg';
import collection4 from './images/collection4.webp';
import mobileApp from './images/mobile-app.webp';
import appStore1 from './images/app-store1.webp';
import appStore2 from './images/app-store2.webp';
import about from "../Aboutus/aboutus.jpeg"
import girlchef from "./images/testimonial.png"
import Navbar from "../navbar/Navbar"


export default function HomePage() {
  return (
    <>
      
<Navbar/>
      {/* Order section */}
      <section className="container">
        <div className="order-cat">
          <div className="hover">
            <img src={order1} alt="Order Food Online" />
            <div className="order-title-bg">
              <p className="order-title">Order Food Online</p>
            </div>
          </div>
          <div className="hover">
            <img src={order2} alt="Go out for a meal" />
            <div className="order-title-bg">
              <p className="order-title">Go out for a meal</p>
            </div>
          </div>
          <div className="hover">
            <img src={order3} alt="Nightlife & Clubs" />
            <div className="order-title-bg">
              <p className="order-title">Nightlife & Clubs</p>
            </div>
          </div>
          <div className="hover">
            <img src={order4} alt="Zomato Pro" />
            <div className="order-title-bg">
              <p className="order-title">KaaEsh Pro</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="container">
        <h1>Collections</h1>
        <div className="collections">
          <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Mumbai, based on trends</p>
          <a href="#">All collections in Mumbai <i className="fa fa-caret-right"></i></a>
        </div>
        <div className="collection-grid">
          <div className="collection-box">
            <img src={collection1} alt="Best of Mumbai" />
            <div className="collection-title">
              <h3>Best of Mumbai</h3>
              <p>220 Places <i className="fa fa-caret-right"></i></p>
            </div>
          </div>
          <div className="collection-box">
            <img src={collection2} alt="Trending This Week" />
            <div className="collection-title">
              <h3>Trending This Week</h3>
              <p>30 Places <i className="fa fa-caret-right"></i></p>
            </div>
          </div>
          <div className="collection-box">
            <img src={collection3} alt="Newly Opened" />
            <div className="collection-title">
              <h3>Newly Opened</h3>
              <p>7 Places <i className="fa fa-caret-right"></i></p>
            </div>
          </div>
          <div className="collection-box">
            <img src={collection4} alt="Work Friendly Places" />
            <div className="collection-title">
              <h3>Work Friendly Places!</h3>
              <p>19 Places <i className="fa fa-caret-right"></i></p>
            </div>
          </div>
        </div>
      </section>

      {/* Localities */}
      <section className="container">
        <h1 className="local-title">Popular localities in and around <span className="bold-place">Mumbai</span></h1>
        <div className="locals-grid">
          <div className="local-box">
            <p>Lower Parel (608 places)</p>
            <i className="fa fa-chevron-right"></i>
          </div>
          <div className="local-box">
            <p>Powai (766 places)</p>
            <i className="fa fa-chevron-right"></i>
          </div>
          <div className="local-box">
            <p>Malad West (1371 places)</p>
            <i className="fa fa-chevron-right"></i>
          </div>
          <div className="local-box">
            <p>Borivali West (873 places)</p>
            <i className="fa fa-chevron-right"></i>
          </div>
          <div className="local-box">
            <p>Bandra Kurla Complex (14...</p>
            <i className="fa fa-chevron-right"></i>
          </div>
          <div className="local-box">
            <p>Vashi (760 places)</p>
            <i className="fa fa-chevron-right"></i>
          </div>
          <div className="local-box">
            <p>Fort (319 places)</p>
            <i className="fa fa-chevron-right"></i>
          </div>
          <div className="local-box">
            <p>Juhu (388 places)</p>
            <i className="fa fa-chevron-right"></i>
          </div>
          <div className="local-box">
            <p>Andheri Lokhandwala, An...</p>
            <i className="fa fa-chevron-right"></i>
          </div>
          <div className="local-box">
            <p>Colaba (223 places)</p>
            <i className="fa fa-chevron-right"></i>
          </div>
          <div className="local-box">
            <p>Linking Road, Bandra Wes...</p>
            <i className="fa fa-chevron-right"></i>
          </div>
          <div className="local-box">
            <p>Linking Road, Bandra West </p>
            <i className="fa fa-chevron-right"></i>
          </div>
        </div>
      </section>

      {/* Get Zomato app */}
      <section className="zom-app">
        <img src={mobileApp} alt="zomato-app" />
        <div className="zom-app-right">
          <h1>Get the KaaEsh App</h1>
          <p>We will send you a link, open it on your phone to download the app</p>
          <div className="radio-btn">
            <label htmlFor="email"><input type="radio" id="email" name="app" value="email" />Email</label>
            <label htmlFor="phone"><input type="radio" id="phone" name="app" value="phone" />Phone</label>
          </div>
          <div className="email-phone">
            <input type="text" placeholder="Email" />
            <a className="btn-share" href="#">Share App Link</a>
          </div>
          <p className="small-text"><small>Download app from</small></p>
          <div className="app-store">
            <div className="app-image">
              <img src={appStore1} alt="App Store" />
            </div>
            <div className="app-image">
              <img src={appStore2} alt="Google Play" />
            </div>
          </div>
        </div>
      </section>

      {/* Explore */}
      <section class="container">
        <h1 class="explore-title">Explore other options for you here</h1>
        <h2 class="explore-title-2">Popular cuisines near me</h2>
        <div class="wrap-links">
          <a href="#">Bakery food near me</a>
          <span class="dot-seperator"></span>
          <a href="#">Beverages food near me</a>
          <span class="dot-seperator"></span>
          <a href="#">Biryani food near me</a>
          <span class="dot-seperator"></span>
          <a href="#">Burger food near me</a>
          <span class="dot-seperator"></span>
          <a href="#">Chinese food near me</a>
          <span class="dot-seperator"></span>
          <a href="#">Continental food near me</a>
          <span class="dot-seperator"></span>
          <a href="#">Desserts food near me</a>
          <span class="dot-seperator"></span>
          <a href="#">Ice Cream food near me</a>
          <span class="dot-seperator"></span>
          <a href="#">Italian food near me</a>
          <span class="dot-seperator"></span>
          <a href="#">Kebab food near me</a>
          <span class="dot-seperator"></span>
          <a href="#">Maharashtrian food near me</a>
          <span class="dot-seperator"></span>
          <a href="#">Bakery food near me</a>
          <span class="dot-seperator"></span>
          <a href="#">Beverages food near me</a>
          <span class="dot-seperator"></span>
          <a href="#">Biryani food near me</a>
          <span class="dot-seperator"></span>
          <a href="#">Burger food near me</a>
          <span class="dot-seperator"></span>
          <a href="#">Chinese food near me</a>
          <span class="dot-seperator"></span>
          <a href="#">Continental food near me</a>
          <span class="dot-seperator"></span>
          <a href="#">Desserts food near me</a>
          <span class="dot-seperator"></span>
          <a href="#">Ice Cream food near me</a>
          <span class="dot-seperator"></span>
          <a href="#">Italian food near me</a>
        </div>
        <h2 class="explore-title-2">Popular restaurant types near me</h2>
        <div class="wrap-links">
          <a href="#">Bakery food near me</a>
          <span class="dot-seperator"></span>
          <a href="#">Beverages food near me</a>
          <span class="dot-seperator"></span>
          <a href="#">Biryani food near me</a>
          <span class="dot-seperator"></span>
          <a href="#">Burger food near me</a>
          <span class="dot-seperator"></span>
          <a href="#">Chinese food near me</a>
          <span class="dot-seperator"></span>
          <a href="#">Continental food near me</a>
          <span class="dot-seperator"></span>
          <a href="#">Desserts food near me</a>
          <span class="dot-seperator"></span>
          <a href="#">Ice Cream food near me</a>
          <span class="dot-seperator"></span>
          <a href="#">Italian food near me</a>
          <span class="dot-seperator"></span>
          <a href="#">Kebab food near me</a>
          <span class="dot-seperator"></span>
          <a href="#">Maharashtrian food near me</a>
          <span class="dot-seperator"></span>
          <a href="#">Bakery food near me</a>
          <span class="dot-seperator"></span>
          <a href="#">Beverages food near me</a>
          <span class="dot-seperator"></span>
          <a href="#">Biryani food near me</a>
          <span class="dot-seperator"></span>
          <a href="#">Burger food near me</a>
          <span class="dot-seperator"></span>
          <a href="#">Chinese food near me</a>
          <span class="dot-seperator"></span>
          <a href="#">Continental food near me</a>
          <span class="dot-seperator"></span>
          <a href="#">Desserts food near me</a>
          <span class="dot-seperator"></span>
          <a href="#">Ice Cream food near me</a>
          <span class="dot-seperator"></span>
          <a href="#">Italian food near me</a>
        </div>
        <h2 class="explore-title-2">Top Restaurant Chains</h2>
        <div class="restraunt-chains">
          <a href="#">Bikanervala</a>
          <a href="#">Burger King</a>
          <a href="#">Domino's</a>
          <a href="#">Dunkin' Donuts</a>
          <a href="#">KFC</a>
          <a href="#">Krispy Kreme</a>
          <a href="#">McDonald's</a>
          <a href="#">Pizza Hut</a>
          <a href="#">WOW! Momo</a>
        </div>
        <h2 class="explore-title-2">Cities We Deliver To</h2>
        <div class="footer-links">
          <ul>
            <li><a href="#">Delhi NCR</a></li>
            <li><a href="#">Hyderabad</a></li>
            <li><a href="#">Mumbai</a></li>
            <li><a href="#">Bengaluru</a></li>
            <li><a href="#">Pune</a></li>
            <li><a href="#">Delhi NCR</a></li>
            <li><a href="#">Hyderabad</a></li>
            <li><a href="#">Mumbai</a></li>
            <li><a href="#">Bengaluru</a></li>
            <li><a href="#">Pune</a></li>
          </ul>
          <ul>
            <li><a href="#">Delhi NCR</a></li>
            <li><a href="#">Hyderabad</a></li>
            <li><a href="#">Mumbai</a></li>
            <li><a href="#">Bengaluru</a></li>
            <li><a href="#">Pune</a></li>
            <li><a href="#">Delhi NCR</a></li>
            <li><a href="#">Hyderabad</a></li>
            <li><a href="#">Mumbai</a></li>
            <li><a href="#">Bengaluru</a></li>
            <li><a href="#">Pune</a></li>
          </ul>
          <ul>
            <li><a href="#">Delhi NCR</a></li>
            <li><a href="#">Hyderabad</a></li>
            <li><a href="#">Mumbai</a></li>
            <li><a href="#">Bengaluru</a></li>
            <li><a href="#">Pune</a></li>
            <li><a href="#">Delhi NCR</a></li>
            <li><a href="#">Hyderabad</a></li>
            <li><a href="#">Mumbai</a></li>
            <li><a href="#">Bengaluru</a></li>
            <li><a href="#">Pune</a></li>
          </ul>
          <ul>
            <li><a href="#">Delhi NCR</a></li>
            <li><a href="#">Hyderabad</a></li>
            <li><a href="#">Mumbai</a></li>
            <li><a href="#">Bengaluru</a></li>
            <li><a href="#">Pune</a></li>
            <li><a href="#">Delhi NCR</a></li>
            <li><a href="#">Hyderabad</a></li>
            <li><a href="#">Mumbai</a></li>
            <li><a href="#">Bengaluru</a></li>
            <li><a href="#" class="last-link">See more</a></li>
          </ul>
          <ul>
            <li><a href="#">Delhi NCR</a></li>
            <li><a href="#">Hyderabad</a></li>
            <li><a href="#">Mumbai</a></li>
            <li><a href="#">Bengaluru</a></li>
            <li><a href="#">Pune</a></li>
            <li><a href="#">Delhi NCR</a></li>
            <li><a href="#">Hyderabad</a></li>
            <li><a href="#">Mumbai</a></li>
            <li><a href="#">Bengaluru</a></li>
          </ul>
        </div>
      </section>
      
   
     
      <div id='about_discover_our_heading'>
        <h1>What Our Customers </h1>
        <h1> Say About Us</h1>
        <img src={about}></img>
      </div>
      
      <div id='customer_review_main_box'>


        <div id='girl_chef_img_home'>
          <img src={girlchef} alt="" srcset="" />
        </div>


      
          <div id='profile_reviewer_home'>
           
              <div id='Latest_card_home'>
          <img src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100270.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721001600&semt=ais_user" />
          
          <h4>Karmveer</h4>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Odio est necessitatibus, natus temporibus sint obcaecati 
         nihil!</p>
        </div>
        
           
        <div>
              <div id='Latest_card_home'>
          <img src="https://avatarfiles.alphacoders.com/375/thumb-1920-375542.png" />
          
          <h4>Karmveer</h4>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Odio est necessitatibus, natus temporibus sint obcaecati 
         nihil!</p>
        </div>
        </div>

        <div>
              <div id='Latest_card_home'>
          <img src="https://img.freepik.com/premium-photo/portrait-man-video-game-style-profile-avatar-05_273771-10.jpg" />
          
          <h4>Karmveer</h4>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Odio est necessitatibus, natus temporibus sint obcaecati 
         nihil!</p>
        </div>
        </div>

        <div>
              <div id='Latest_card_home'>
          <img src="https://cdn.pixabay.com/photo/2023/04/30/04/29/anime-7959691_960_720.jpg" />
          
          <h4>Karmveer</h4>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Odio est necessitatibus, natus temporibus sint obcaecati 
         nihil!</p>
        </div>
        </div>

          </div>

          
        </div>

        {/* <div class="meet_our_chef_image-slider">
    <div class="meet_our_chef_image-slider-track">
        <div class="meet_our_chef_slide">
            <img src={girlchef} alt="Girl Chef"/>
        </div>
        <div class="meet_our_chef_slide">
            <img src={collection1} alt="Collection 1"/>
        </div>
        <div class="meet_our_chef_slide">
            <img src={collection2} alt="Collection 2"/>
        </div>
        <div class="meet_our_chef_slide">
            <img src={collection3} alt="Collection 3"/>
        </div>
        <div class="meet_our_chef_slide">
            <img src={collection4} alt="Collection 4"/>
        </div>
        <div id='Latest_card_aboutus'>
          <img src={collection4} />
          <p>September.15.2021</p>
          <h4>Energy Drink Which You Can Make At Home.</h4>
          <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur ipsa explicabo atque reprehenderit beatae! Accusantium soluta consequuntur blanditiis amet ad.</h5>
          <button>Read More</button>
        </div>
    </div>
</div> */}

     
    </>
  );
}

