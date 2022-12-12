import React, { useEffect, useState } from "react";

// Styles
import "../styles/globals.css";
import "../styles/home.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Images
import HeroImg1 from "../assets/img/hero-img-1.png";
import Logo1 from "../assets/img/logo-1.png";
import Logo2 from "../assets/img/logo-2.png";
import WhiteSwoosh from "../assets/img/black-swoosh.png";
import ETImg1 from "../assets/img/et-1.png";
import ETImg2 from "../assets/img/et-2.png";
import ETImg3 from "../assets/img/et-3.png";
import ETImg4 from "../assets/img/et-4.png";
import FDBImg from "../assets/img/food-delivery-boy-3.jpg";
import ETImg5 from "../assets/img/et-5.png";
import ETImg6 from "../assets/img/et-6.png";
import ETImg7 from "../assets/img/et-7.png";
import ETImg8 from "../assets/img/et-8.png";
import ETImg9 from "../assets/img/et-9.png";
import ETImg10 from "../assets/img/et-10.png";
import ETImg11 from "../assets/img/et-11.png";
import ETImg12 from "../assets/img/et-12.png";
import ETImg13 from "../assets/img/et-13.png";
import ETImg14 from "../assets/img/et-14.png";
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
import PressLogo from "../assets/img/press-logo.svg";
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
import { MdClose, MdMenu, MdEast } from "react-icons/md";
import { IoLocationOutline, IoSearchOutline } from "react-icons/io5";
import {
  BsArrowRight,
  BsFillStarFill,
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsTruck,
  BsBoxSeam,
  BsLinkedin,
  BsChatLeftDotsFill,
} from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

const Home = () => {
  const [isHeaderMobShowing, setIsHeaderMobShowing] = useState(false);
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
    function myFunction(x) {
      if (x.matches) {
        // If media query matches
        ScrollSmoother.create({
          smooth: 1.15,
          effects: false,
          smoothTouch: 0,
        });
      } else {
        ScrollSmoother.create({
          smooth: 1.15,
          effects: true,
          smoothTouch: 0,
        });
      }
    }

    var x = window.matchMedia("(max-width: 1000px)");
    myFunction(x); // Call listener function at run time
    x.addListener(myFunction); // Attach listener function on state changes

    let landingAnim = gsap.timeline();
    landingAnim.fromTo(
      ".press-grid-card",
      {
        opacity: 0,
        y: "5rem",
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        delay: 1,
        stagger: {
          each: 0.1,
        },
      }
    );
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <div className="zuumdrop-app">
          <main className="home-page">
            <section className="press-hero-section">
              <header>
                <div className="box">
                  <div className="header-content">
                    <img className="hero-logo" src={Logo1} alt="" />
                    <div className="header-right">
                      <a href="#">
                        <BsTruck />
                        Driver Application
                      </a>
                      <a href="#">
                        <BsBoxSeam /> Merchant Application
                      </a>
                      <div
                        onClick={() => {
                          setIsHeaderMobShowing(true);
                        }}
                      >
                        <MdMenu />
                      </div>

                      {/* <button>Sign Up</button>
                      <button>Sign In</button> */}
                    </div>
                  </div>
                </div>
                {isHeaderMobShowing ? (
                  <div className="header-mob">
                    <div className="box">
                      <div className="header-mob-content">
                        <div className="header-mob-head">
                          <img className="hero-logo" src={Logo1} alt="" />
                          <div>
                            <MdClose />
                          </div>
                        </div>
                        <div className="header-mob-content">
                          <a href="#">
                            <BsTruck />
                            Driver Application
                          </a>
                          <a href="#">
                            <BsBoxSeam /> Merchant Application
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </header>
              <h1 className="cursive-text">Media Inquiries</h1>
              <p>
                For the latest news, please contact{" "}
                <a href="#">contact@zuumdrop.com</a>
                <br />
                Please note, we will only reply to members of the press. For all
                other inquiries, visit our contact page.
              </p>
            </section>
            <section className="press-grid-section">
              <div className="box">
                <div className="press-grid">
                  <div className="press-grid-card">
                    <img src={FDBImg} alt="" />
                    <div className="press-grid-card-content">
                      <div className="pgcc-top">
                        <img src={PressLogo} alt="" />
                        <span>Nov 12, 2021</span>
                      </div>
                      <h3 className="cursive-text">
                        Grocery delivery app Zepto raises $60 mn led by Glade
                        Brook Capital
                      </h3>
                      <p>
                        Kiranakart Technologies Pvt Ltd, which runs Zepto, a
                        10-minute grocery delivery app, said it has raised $60
                        million (around Rs 444 crore)...
                      </p>
                      <a href="#">
                        Read More <MdEast />
                      </a>
                    </div>
                  </div>
                  <div className="press-grid-card">
                    <img src={FDBImg} alt="" />
                    <div className="press-grid-card-content">
                      <div className="pgcc-top">
                        <img src={PressLogo} alt="" />
                        <span>Nov 12, 2021</span>
                      </div>
                      <h3 className="cursive-text">
                        Grocery delivery app Zepto raises $60 mn led by Glade
                        Brook Capital
                      </h3>
                      <p>
                        Kiranakart Technologies Pvt Ltd, which runs Zepto, a
                        10-minute grocery delivery app, said it has raised $60
                        million (around Rs 444 crore)...
                      </p>
                      <a href="#">
                        Read More <MdEast />
                      </a>
                    </div>
                  </div>
                  <div className="press-grid-card">
                    <img src={FDBImg} alt="" />
                    <div className="press-grid-card-content">
                      <div className="pgcc-top">
                        <img src={PressLogo} alt="" />
                        <span>Nov 12, 2021</span>
                      </div>
                      <h3 className="cursive-text">
                        Grocery delivery app Zepto raises $60 mn led by Glade
                        Brook Capital
                      </h3>
                      <p>
                        Kiranakart Technologies Pvt Ltd, which runs Zepto, a
                        10-minute grocery delivery app, said it has raised $60
                        million (around Rs 444 crore)...
                      </p>
                      <a href="#">
                        Read More <MdEast />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
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
                    <a href="#">Press</a>
                    <a href="#">Terms of Use</a>
                    <a href="#">Privacy Policy</a>
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
                  <div></div>
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
