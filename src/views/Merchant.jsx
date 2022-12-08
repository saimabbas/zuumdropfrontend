import React, { useEffect } from "react";

// Styles
import "../styles/globals.css";
import "../styles/home.css";
import "../styles/merchant.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Images
import HeroImg1 from "../assets/img/hero-img-1.png";
import Logo1 from "../assets/img/logo-1.png";
import Logo2 from "../assets/img/logo-2.png";
import WhiteSwoosh from "../assets/img/black-swoosh.png";
import BurgerImg from "../assets/img/burger.png";
import TacoImg from "../assets/img/taco.png";
import PizzaImg from "../assets/img/pizza.png";
import ChocolateImg from "../assets/img/chocolate.png";
import CakeImg from "../assets/img/cake.png";
import HZWImg1 from "../assets/img/hzw-img-1.png";
import HZWImg2 from "../assets/img/hzw-img-2.png";
import HZWImg3 from "../assets/img/hzw-img-3.png";
import PartnerImg from "../assets/img/partner-with-us.png";
import DropperImg from "../assets/img/become-a-dropper.png";
import DownloadAppImg from "../assets/img/download-with-app.png";
import ReviewsImg from "../assets/img/reviews-img.png";
import AppstoreImg from "../assets/img/appstore.png";
import GoogleplayImg from "../assets/img/googleplay.png";
import GroceriesImg from "../assets/img/groceries.png";
import DownArrowImg from "../assets/img/down-arrow.png";
import Lottie from "react-lottie";
import PaperplaneJson from "../assets/paperplane.json";

// Components
import gsap from "gsap";
import {
  Back,
  Power3,
  Power1,
  Power2,
  Power4,
  Linear,
  Expo,
  Circ,
} from "gsap/dist/gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Marquee from "react-marquee-slider";
import { IoLocationOutline, IoSearchOutline } from "react-icons/io5";
import {
  BsArrowRight,
  BsFillStarFill,
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsChatLeftDotsFill,
} from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

const Home = () => {
  gsap.registerPlugin(SplitText, ScrollSmoother, ScrollTrigger);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: PaperplaneJson,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  useEffect(() => {
    ScrollSmoother.create({
      smooth: 1.15,
      effects: true,
      smoothTouch: 0,
    });
    let landingAnim = gsap.timeline();
    landingAnim
      .fromTo(
        ".hero-bg-grd",
        {
          width: 0,
        },
        {
          width: "100%",
          duration: 1.25,
          ease: Power4.easeInOut,
        }
      )
      .fromTo(
        ".hero-img",
        {
          x: "10rem",
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
        },
        "<0"
      )
      .fromTo(
        ".hero-heading-box",
        {
          y: "5rem",
          opacity: 0,
        },
        {
          y: "0",
          opacity: 1,
          duration: 1.5,
          ease: Power4.easeInOut,
        },
        "<0.25"
      )
      .fromTo(
        ".hero-section-content button",
        {
          y: "5rem",
          opacity: 0,
        },
        {
          y: "0",
          opacity: 1,
          duration: 1.5,
          ease: Power4.easeInOut,
        },
        "<0.1"
      )
      .fromTo(
        ".paperplane",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
        },
        "<0.75"
      );
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <div className="zuumdrop-app">
          <main>
            <section className="merchant-hero-section">
              <div className="box">
                <div className="merchant-hero-grid">
                  <div className="merchant-hero-grid-left">
                    <h1>
                      You Set Your Goals For Your Business And Now It’s Time To
                      Help You Accomplish Them.
                    </h1>
                    <p>
                      ZuumDrop Tech Platform Will Provide You The Data, To Drive
                      You More Sales Insights To Reach More Customers.
                      Opportunities Your Business Or Resturant Needs In Order To
                      Suceed.
                    </p>
                  </div>
                  <div className="merchant-hero-grid-right"></div>
                </div>
              </div>
            </section>
            <section className="how-zuum-works-section">
              <div className="box">
                <div className="how-zuum-works-content">
                  <div className="section-heading">
                    <h3 className="cursive-text">
                      <span className="cursive-text">H</span>
                      ow ZuumDrop Works
                      <i className="cursive-text">.</i>
                    </h3>
                  </div>
                  <div className="hzw-grid">
                    <div data-speed={1.3} className="hzw-grid-card">
                      <span className="cursive-text">1</span>
                      <img src={HZWImg1} alt="" />
                      <h4 className="cursive-text">Customer Places order</h4>
                      <p>
                        A Customer Browses ZuumDrop App, Find Your Resturant Or
                        Business Places An Order Through ZuumDrop App.
                      </p>
                    </div>
                    <div data-speed={1.3} className="downarrow-box">
                      <img src={DownArrowImg} alt="" />
                    </div>
                    <div data-speed={1.2} className="hzw-grid-card">
                      <span className="cursive-text">2</span>
                      <img src={HZWImg2} alt="" />
                      <h4 className="cursive-text">Merchant Prepares Order </h4>
                      <p>
                        The Merchant Accepts The Order And Prepares The Order.
                      </p>
                    </div>
                    <div data-speed={1.2} className="downarrow-box">
                      <img src={DownArrowImg} alt="" />
                    </div>

                    <div data-speed={1.1} className="hzw-grid-card">
                      <span className="cursive-text">3</span>
                      <img src={HZWImg3} alt="" />
                      <h4 className="cursive-text">
                        Droppers Arrive & <br /> Drops Off Food{" "}
                      </h4>
                      <p>
                        ZuumDrop Delivery Drivers AKA Droppers Picks Up Order &
                        Delivers The Order.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <img
                src={GroceriesImg}
                className="groceries-img"
                alt="GroceriesImg"
              />
            </section>

            <footer>
              <div className="box">
                <div className="footer-top-grid">
                  <div className="footer-top-grid-left">
                    <img src={Logo2} alt="Logo2" />
                    <div className="appstores-box">
                      <a href="#">
                        <img src={AppstoreImg} alt="AppstoreImg" />
                      </a>
                      <a href="">
                        <img src={GoogleplayImg} alt="GoogleplayImg" />
                      </a>
                    </div>
                  </div>
                  <div className="footer-top-grid-right">
                    <a href="#">Home</a>
                    <a href="#">Delivery Areas</a>
                    <a href="#">Careers</a>
                    <a href="#">Press</a>
                  </div>
                  <div className="footer-top-grid-right">
                    <a href="#">
                      {" "}
                      <BsInstagram /> Instagram
                    </a>
                    <a href="#">
                      <BsFacebook /> Facebook
                    </a>
                    <a href="#">
                      <BsTwitter /> Twitter
                    </a>
                    <a href="#">
                      <BsLinkedin /> LinkedIn
                    </a>
                  </div>
                </div>
                <div className="footer-bottom-grid">
                  <p>©2022 All Rights Reserved. ZuumDrop</p>
                  <div>
                    <a href="#">Terms of Use</a>
                    <a href="#">Privacy Policy</a>
                  </div>
                </div>
              </div>
            </footer>
          </main>
        </div>
      </div>
      <div className="chat-icon">
        <BsChatLeftDotsFill />
      </div>
    </div>
  );
};

export default Home;
{
  /* <div className="search-box">
                <IoLocationOutline />
                <input type="text" placeholder="Enter Delivery Address" />
                <IoSearchOutline />
              </div> */
}
