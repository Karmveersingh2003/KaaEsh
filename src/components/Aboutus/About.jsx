import React from 'react'
import "./about.css"
import about from "./aboutus.jpeg"
import Pizza from "../pizza.png"
import Burger from "./burger.jpeg"
import cofee from "./cofee.jpeg"
import flour from "./flour.jpeg"
import Navbar from "../navbar/Navbar"
export default function About() {
  return (
    <>
<Navbar/>
      <div id='aboutus_top_heading'>
        <button><h1>ABOUT US</h1></button>
      </div>
      <div id='about_discover_our_heading'>
        <h1>Discover Our</h1>
        <h1> Restaurant Story</h1>
        <img src={about}></img>
        <p>This is Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolore at aspernatur eveniet temporibus placeat voluptatum quaerat accusamus possimus cupiditate, quidem impedit sed libero id perspiciatis esse earum repellat quam. Dolore modi temporibus quae possimus accusantium, cum corrupti sed deserunt iusto at sapiente nihil sint iste similique soluta dolor! Quod.</p>

      </div>

      <div id='about_us_img_corn'>
        <img src="https://wallpapers.com/images/featured/food-4k-1pf6px6ryqfjtnyr.jpg" />
      </div>


     
      <div id='about_discover_our_heading'>
        <h1> Latest Publications</h1>
        <img src={about}></img>

      </div>
      <div id='flex_publications_card_aboutus'>
        <div id='Latest_card_aboutus'>
          <img src={Burger} />
          <p>September.15.2021</p>
          <h4>Energy Drink Which You Can Make At Home.</h4>
          <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur ipsa explicabo atque reprehenderit beatae! Accusantium soluta consequuntur blanditiis amet ad.</h5>
          <button>Read More</button>
        </div>

        <div id='Latest_card_aboutus'>
          <img src="https://c4.wallpaperflare.com/wallpaper/17/1007/659/coffee-drinking-glass-coffee-beans-food-hd-wallpaper-preview.jpg" />
          <p>September.15.2021</p>
          <h4>Energy Drink Which You Can Make At Home.</h4>
          <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur ipsa explicabo atque reprehenderit beatae! Accusantium soluta consequuntur blanditiis amet ad.</h5>
          <button>Read More</button>
        </div>

        <div id='Latest_card_aboutus'>
          <img src="https://img.freepik.com/free-photo/top-view-roasted-vegetables-roasted-vegetables-plate_140725-72438.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1720396800&semt=ais_user" />
          <p>September.15.2021</p>
          <h4>Energy Drink Which You Can Make At Home.</h4>
          <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur ipsa explicabo atque reprehenderit beatae! Accusantium soluta consequuntur blanditiis amet ad.</h5>
          <button>Read More</button>
        </div>

      </div>
<div id='main_suscribe_div'>
      <div id='subscribe_bg_img'>
      
      <div id='box_suscribe_main_about'>
        <div id='suscribe_about'>
          <h2>Subscribe Our Newsletter
         </h2>
          <p> This is Lorem ipsum dolor sit amet consectetur adipisicing elit ad veritatis.</p>
        </div>
        <form>
        <input type="email" class="aboutus_form_input" placeholder="Enter your Email Here" required=""/>
        <button type="submit" class="aboutus_form_btn">Submit</button>
        </form>
      </div>
      </div>
      </div>
    
      <div class="slider">
        <div class="slide-track">
          <div class="slide">
            <img src="https://i.pinimg.com/736x/6a/fb/32/6afb323e30d659c27d7569276087c310.jpg" height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/019/909/686/small_2x/burger-king-transparent-burger-king-free-free-png.png" height="100" width="250" alt="" />
          </div>
          
          <div class="slide">
            <img src="https://getdrawings.com/vectors/mcdonalds-logo-vector-35.png" height="100" width="250" alt="" />
          </div>

          <div class="slide">
            <img src=" https://pngimg.com/d/kfc_PNG51.png" height="100" width="250" alt="" />
          </div>

          <div class="slide">
            <img src="https://businessyield.com/wp-content/uploads/2022/10/pizza-hut.jpg" height="100" width="250" alt="" />
          </div>
      
          <div class="slide">
            <img src="https://png.pngitem.com/pimgs/s/195-1956278_dominos-pizza-logo-png-transparent-png.png" height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src="https://logowik.com/content/uploads/images/866_wendys.jpg" height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src="https://i.pinimg.com/736x/4a/c9/6c/4ac96cf93e07bb096431538005c1b077.jpg" height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src="https://www.citypng.com/public/uploads/preview/hd-subway-fast-food-restaurant-logo-png-11653305767bkf5zn3sjz.png" height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src="https://img.freepik.com/free-vector/vegetarian-food-menu_24877-50862.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721001600&semt=ais_user" height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src="https://mostaql.hsoubcdn.com/uploads/portfolios/2319176/642e93564bfcc/restaurant-logo-design-template-08a68b9418adeb6c8599892284a22ef1screen.jpg" height="100" width="250" alt="" />
          </div>

        </div>
      </div>
    </>
  )
}
