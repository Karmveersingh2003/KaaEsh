import React, { useEffect } from 'react';
import "./menu.css";
import Swiper from 'swiper'; 
import './swiperJs/swiper-bundle.min.css';
import shape4 from "./img/shape-4.png"
import shape13 from "./img/shape-13.png"
import img1 from "./img/1.jpg"
import img2 from "./img/2.jpg"
import img3 from "./img/3.jpg"
import img13 from "./img/13.jpg"
import img14 from "./img/14.jpg"
import img15 from "./img/15.jpg"
import img16 from "./img/16.jpg"
import chef1 from "./img/1-chef.jpg"
import chef2 from "./img/2-chef.jpg"
import chef3 from "./img/3-chef.jpg"
import chef4 from "./img/4-chef.jpg"
import blog2 from "./img/blog2.png"
import ribbon from "./img/ribbon.png"
import Drinks from "./img/drinks.png"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { FaStar } from "react-icons/fa";
export default function Menu() {
    useEffect(() => {
        let IconMenu = document.querySelector("#openMenu");
        let menu = document.querySelector(".menu");
        let closeResrv = document.querySelector("#closeResrv");
        let btnResrv = document.querySelectorAll(".btnresrv");
        let reservation = document.querySelector("#reservation");
        let header = document.querySelector("#header");

        if (IconMenu) {
            IconMenu.onclick = () => {
                IconMenu.classList.toggle('fa-times');
                menu.classList.toggle('active');
            };
        }

        window.onscroll = function () {
            if (header) {
                if (this.scrollY >= 200) {
                    header.classList.add("addbg");
                } else {
                    header.classList.remove("addbg");
                }
            }
        };

        if (closeResrv) {
            closeResrv.onclick = () => {
                reservation.classList.remove('active');
            };
        }

        btnResrv.forEach(boxa => {
            boxa.onclick = () => {
                reservation.classList.add('active');
            };
        });

        var swiper1 = new Swiper(".home-slider", {
            spaceBetween: 0,
            centeredSlides: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            loop: true,
        });

        var swiper2 = new Swiper(".swiper-gst-bk", {
            slidesPerView: 3,
            spaceBetween: 30,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true,
            },
            loop: true,
            grabCursor: true,
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                650: {
                    slidesPerView: 2,
                },
                950: {
                    slidesPerView: 3,
                },
            },
        });
    }, []);

    return (
        <>
        <div class="reservation" id="reservation">
        <div class="res-bg">
            <i id="closeResrv" class="fas fa-bars fa-times"><RxCross2/></i>
            <div class="text">
                <h3>Book A Table</h3>
            </div>

            <form action="">
                <input type="text" placeholder="Full Name"/>
        
                <input type="number" placeholder="Phone Number"/>

                <input type="email" placeholder="Email"/>

                <input type="text" placeholder="How Many"/>
        
                <input type="date" placeholder="Booking Date"/>
        
                <input type="time"/>

                <textarea name="" id="" cols="30" rows="2" placeholder="Add A Special Request (Optional)"></textarea>

           </form> 
               <header class="header" id="header">
        <nav>
            <a class="logo" href="#">KaaEsh</a>
            <i id="openMenu" class="fas fa-bars"></i>
            <a href="#"><i id="book" class="fa-solid fa-utensils btnresrv"></i></a>
            <div class="menu">
                <ul>
                    
                    <li class="active"><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#recipes">Recipes</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#team">Team</a> </li>
                {/* <span class="btn drak btnresrv" >RESERVATION</span> */}
                </ul>
                
                   <div> <a href="#" className="btn btnresrv">GET A RESERVATION Now</a></div>
            </div>
            
        </nav>
    </header>

            <button class="btn">find table</button>
        </div>
    </div>

            <div className="home" id="home">
                <div className="swiper home-slider">
                    <div className="swiper-wrapper wrapper">
                        <div className="swiper-slide slide slide1 bg-overlay">
                            <div className="content">
                                <h3>Made With Love</h3>
                                <h1>Hot and Ready to Serve</h1>
                                <p>Restaurant is a restaurant, bar and coffee roastery located on Egypt. We have<br />
                                    awesome recipes and the most talented chefs in town!</p>
                            </div>
                        </div>

                        <div className="swiper-slide slide slide2 bg-overlay">
                            <div className="content">
                                <h3>Restaurant Offers You</h3>
                                <h1>The Best Tasting Experience!</h1>
                                <a href="#" className="btn btnresrv">GET A RESERVATION Now</a>
                            </div>
                        </div>

                        <div className="swiper-slide slide slide3 bg-overlay">
                            <div className="content">
                                <h3>Hello, We Are Restaurant</h3>
                                <h1>We Serve Quality Food</h1>
                                <a href="#menu" className="btn">View Menu</a>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-button-next btn-swip"></div>
                    <div className="swiper-button-prev btn-swip"></div>
                </div>
            </div>

            {/* about start */}
            <section className="about" id="about">
                <div className="contanier">
                    <div className="sec-head">
                        <span>Hello dear</span>
                        <h2>Welcome To KaaEsh Restaurant</h2>
                        <img src={shape4} alt="" />
                    </div>
                    <div className="content">
                        <div className="div-p">
                            <p>KaaEsh Restaurant was the first restaurant to open in City, the restaurant was designed with the history in mind we have created a soft industrial dining room, combined with an open kitchen, coffee take out bar and coffee roastery.</p>
                        </div>
                        <div className="boxs">
                            <div className="box">
                                <span>1995</span>
                                <h3>Grand Opening</h3>
                                <img src={shape13} alt="" />
                                <p>Restaurant was opened on May 6, 1990, the interior was created by the most famous artists. Today our restaurant welcomes 250 people!</p>
                            </div>
                            <div className="box">
                                <span>2005</span>
                                <h3>Second Branch</h3>
                                <img src={shape13} alt="" />
                                <p>Since the very first day, Restaurant was a gathering place for teachers, doctors, actors. Therefore we decided to open our second branch!</p>
                            </div>
                            <div className="box">
                                <span>2015</span>
                                <h3>Great Taste Award</h3>
                                <img src={shape13}alt="" />
                                <p>Restaurant was and still remains not just a restaurant, but also a remarkable part of the culture. We are happy to announce that we claim taste award.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* about end */}

            <section className="recipes" id="recipes">
                <div className="small-sec bg-overlay">
                    <div className="arrow-top"></div>
                    <div className="sec-head">
                        <span>Natural ingredients</span>
                        <h2>Delicious Recipes</h2>
                    </div>
                    <div className="arrow-bottom"></div>
                </div>
                <div className="contanier">
                    <div className="boxs">
                        <div className="box">
                            <img src={img1} alt="" />
                            <span>Start eating better</span>
                            <h4>Daily New Fresh Menus</h4>
                            <p>Restaurant help you treat yourself with a different meal everyday, thanks to our daily changing menus and our awesome creative chefs!</p>
                        </div>

                        <div className="box">
                            <img src={img2} alt="" />
                            <span>Quality is the heart</span>
                            <h4>Fresh Ingredient, Tasty Meals</h4>
                            <p>Who said healthy food can't also be delicious? Restaurant creative chefs use fresh and seasonal ingredients to make affordable.</p>
                        </div>

                        <div className="box">
                            <img src={img3} alt="" />
                            <span>Hot & ready to serve</span>
                            <h4>Creative & Talented Chefs</h4>
                            <p>Restaurant have offered a team of culinary professionals that make delectable dishes at memorable events for both private clientele.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* menu start */}
            <section className="sec-menu" id="menu">
                <div className="small-sec bg-overlay">
                    <div className="arrow-top"></div>
                    <div className="sec-head">
                        <span>Taste the best</span>
                        <h2>Discover Our Menu</h2>
                    </div>
                    <div className="arrow-bottom"></div>
                </div>

                <div className="contanier">
                    <div className="content">
                        <ul>
                            <li className="active">lunch</li>
                            <li>dinner</li>
                            <li>dessert</li>
                            <li>drinks</li>
                        </ul>
                    </div>

                    <div className="boxs">
                        <div className="box">
                            <img src={img13} alt="" />
                            <div className="name-price">
                                <h3>Grilled Fillet</h3>
                                <span>$12.95</span>
                            </div>
                            <p>eggs, bacon and cherry-tomatoes with bread.</p>
                        </div>
                        <div className="box">
                            <img src={img16} alt="" />
                            <div className="name-price">
                                <h3>Delmonico Steak</h3>
                                <span>$29.95</span>
                            </div>
                            <p>2 Organic eggs, potatoes, grilled tomatoes, toast.</p>
                        </div>
                        <div className="box">
                            <img src={img16} alt="" />
                            <div className="name-price">
                                <h3>Delmonico Steak</h3>
                                <span>$29.95</span>
                            </div>
                            <p>2 Organic eggs, potatoes, grilled tomatoes, toast.</p>
                        </div>
                        <div className="box">
                            <img src={img14} alt="" />
                            <div className="name-price">
                                <h3>Grilled Fillet</h3>
                                <span>$19.95</span>
                            </div>
                            <p>Oat granola with fresh blueberries, almond, yogurt.</p>
                        </div>

                        <div className="box">
                            <img src={img15} alt="" />
                            <div className="name-price">
                                <h3>Chicken Breast</h3>
                                <span>$14.95</span>
                            </div>
                            <p>Applewood smoked bacon, tomatoes & green</p>
                        </div>

                        <div className="box">
                            <img src={img16} alt="" />
                            <div className="name-price">
                                <h3>Delmonico Steak</h3>
                                <span>$29.95</span>
                            </div>
                            <p>2 Organic eggs, potatoes, grilled tomatoes, toast.</p>
                        </div>

                        <div className="box">
                            <img src={img13} alt="" />
                            <div className="name-price">
                                <h3>Grilled Fillet</h3>
                                <span>$19.95</span>
                            </div>
                            <p>Oat granola with fresh blueberries, almond, yogurt.</p>
                        </div>

                        <div className="box">
                            <img src={img15} alt="" />
                            <div className="name-price">
                                <h3>Chicken Breast</h3>
                                <span>$14.95</span>
                            </div>
                            <p>Applewood smoked bacon, tomatoes & green.</p>
                        </div>

                        <div className="box">
                            <img src={img16} alt="" />
                            <div className="name-price">
                                <h3>Delmonico Steak</h3>
                                <span>$29.95</span>
                            </div>
                            <p>2 Organic eggs, potatoes, grilled tomatoes, toast.</p>
                        </div>
                    </div>
                    <a href="#" class="btn">Discover Full menu</a>
                </div>
            </section>
            {/* menu end */}

{/*team start */}
    <section class="team" id="team">
        <div class="small-sec bg-overlay">
            <div class="arrow-top"></div>
            <div class="sec-head">
                <span>Ready to serve</span>
                <h2>Talented Chefs</h2>
            </div>
            <div class="arrow-bottom"></div>
        </div>

        <div class="contanier">
            <div class="boxs">
                <div class="box">
                    <div class="img-text">
                        <img class="img-w" src={chef1} alt=""/>
                        <div class="text">
                            <div class="cont-text">
                                <div class="social">
                                    <i class="fa-brands fa-facebook-f"><FaFacebook /></i>
                                    <i class="fa-brands fa-twitter"><FaXTwitter /></i>
                                    <i class="fa-brands fa-instagram"><FaInstagram /></i>
                                </div>
                                <p>Passion for cooking is in his genes. He grew up appreciating outstanding food and service at an early age.</p>
                            </div>
                        </div>
                    </div>
                    <div class="title">
                        <h5>Todd Stephen</h5>
                        <p>CEO & Founder</p>
                    </div>
                </div>

                <div class="box">
                    <div class="img-text">
                        <img class="img-w" src={chef2} alt=""/>
                        <div class="text">
                            <div class="cont-text">
                                <div class="social">
                                <i class="fa-brands fa-facebook-f"><FaFacebook /></i>
                                    <i class="fa-brands fa-twitter"><FaXTwitter /></i>
                                    <i class="fa-brands fa-instagram"><FaInstagram /></i>
                                </div>
                                <p>Passion for cooking is in his genes. He grew up appreciating outstanding food and service at an early age.</p>
                            </div>
                        </div>
                    </div>
                    <div class="title">
                        <h5>Walter Adler</h5>
                        <p>Master Chef</p>
                    </div>
                </div>
                
                <div class="box">
                    <div class="img-text">
                        <img class="img-w" src={chef3} alt=""/>
                        <div class="text">
                            <div class="cont-text">
                                <div class="social">
                                <i class="fa-brands fa-facebook-f"><FaFacebook /></i>
                                    <i class="fa-brands fa-twitter"><FaXTwitter /></i>
                                    <i class="fa-brands fa-instagram"><FaInstagram /></i>
                                </div>
                                <p>Passion for cooking is in his genes. He grew up appreciating outstanding food and service at an early age.</p>
                            </div>
                        </div>
                    </div>
                    <div class="title">
                        <h5>James Carter</h5>
                        <p>Thai Master Chef</p>
                    </div>
                </div>
                <div class="box">
                    <div class="img-text">
                        <img class="img-w" src={chef4} alt=""/>
                        <div class="text">
                            <div class="cont-text">
                                <div class="social">
                                <i class="fa-brands fa-facebook-f"><FaFacebook /></i>
                                    <i class="fa-brands fa-twitter"><FaXTwitter /></i>
                                    <i class="fa-brands fa-instagram"><FaInstagram /></i>
                                </div>
                                <p>Passion for cooking is in his genes. He grew up appreciating outstanding food and service at an early age.</p>
                            </div>
                        </div>
                    </div>
                    <div class="title">
                        <h5>Michael Luke</h5>
                        <p>Chinese Master Chef</p>
                    </div>
                </div>

               

            </div>
        </div>
    </section>


    <section class="guest-book" id="guest-book">
        <div class="small-sec bg-overlay">
            <div class="arrow-top"></div>
            <div class="sec-head">
                <span>People talk</span>
                <h2>Our Guestbook</h2>
            </div>
            <div class="contanier">
                <div class="swiper mySwiper swiper-gst-bk">
                    <div class="swiper-wrapper our-gst">

                        <div class="swiper-slide slide">

                            <img  class="ribbon" src={ribbon} alt=""/>

                            <div class="stars">
                                <i class="fa-solid fa-star"><FaStar/></i>
                                <i class="fa-solid fa-star"><FaStar/></i>
                                <i class="fa-solid fa-star"><FaStar/></i>
                                <i class="fa-solid fa-star"><FaStar/></i>
                                <i class="fa-solid fa-star"><FaStar/></i>
                            </div>

                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cupiditate aut magniofficiis distinctio nemo labore quia delectus.</h5>
                            <img class="img-ourbk" src={blog2}/>
                            <p>Lorem, ipsum.</p>
                        </div>

                        <div class="swiper-slide slide">

                            <img  class="ribbon" src={ribbon} alt=""/>

                            <div class="stars">
                           
                            <i class="fa-solid fa-star"><FaStar/></i>
                                <i class="fa-solid fa-star"><FaStar/></i>
                                <i class="fa-solid fa-star"><FaStar/></i>
                                <i class="fa-solid fa-star"><FaStar/></i>
                                <i class="fa-solid fa-star"><FaStar/></i>
                            </div>

                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cupiditate aut magniofficiis distinctio nemo labore quia delectus.</h5>
                            <img class="img-ourbk" src={blog2}/>
                            <p>Lorem, ipsum.</p>
                        </div>

                        <div class="swiper-slide slide">

                            <img  class="ribbon" src={ribbon} alt=""/>

                            <div class="stars">
                            <i class="fa-solid fa-star"><FaStar/></i>
                                <i class="fa-solid fa-star"><FaStar/></i>
                                <i class="fa-solid fa-star"><FaStar/></i>
                                <i class="fa-solid fa-star"><FaStar/></i>
                                <i class="fa-solid fa-star"><FaStar/></i>
                            </div>

                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cupiditate aut magniofficiis distinctio nemo labore quia delectus.</h5>
                            <img class="img-ourbk" src={blog2}/>
                            <p>Lorem, ipsum.</p>
                        </div>

                        <div class="swiper-slide slide">

                            <img  class="ribbon" src={ribbon} alt=""/>

                            <div class="stars">
                            <i class="fa-solid fa-star"><FaStar/></i>
                                <i class="fa-solid fa-star"><FaStar/></i>
                                <i class="fa-solid fa-star"><FaStar/></i>
                                <i class="fa-solid fa-star"><FaStar/></i>
                                <i class="fa-solid fa-star"><FaStar/></i>
                            </div>

                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cupiditate aut magniofficiis distinctio nemo labore quia delectus.</h5>
                            <img class="img-ourbk" src={blog2}/>
                            <p>Lorem, ipsum.</p>
                        </div>

                        <div class="swiper-slide slide">

                            <img  class="ribbon" src={ribbon} alt=""/>

                            <div class="stars">
                            <i class="fa-solid fa-star"><FaStar/></i>
                                <i class="fa-solid fa-star"><FaStar/></i>
                                <i class="fa-solid fa-star"><FaStar/></i>
                                <i class="fa-solid fa-star"><FaStar/></i>
                                <i class="fa-solid fa-star"><FaStar/></i>
                            </div>

                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cupiditate aut magniofficiis distinctio nemo labore quia delectus.</h5>
                            <img class="img-ourbk" src={blog2}/>
                            <p>Lorem, ipsum.</p>
                        </div>


                    </div>
                    
                </div>
                <div class="swiper-pagination swp-pag"></div>
            </div>
    
            <div class="arrow-bottom"></div>
        </div>

   </section>

	

           
        </>
    );
}
