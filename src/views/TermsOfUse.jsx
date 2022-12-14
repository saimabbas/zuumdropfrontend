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
import Logo2 from "../assets/img/logo-2.jpeg";
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
  BsCart3,
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
                    <a href="/">
                      <img className="hero-logo" src={Logo1} alt="" />
                    </a>
                    <div className="header-right">
                      <a href="/merchant">
                        <BsBoxSeam /> Merchant Application
                      </a>
                      <a href="/driver">
                        <BsTruck />
                        Driver Application
                      </a>
                      <a href="#">
                        <BsCart3 /> ZuumDrop Merch
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
                          <a href="/">
                            <img className="hero-logo" src={Logo1} alt="" />
                          </a>
                          <div
                            onClick={() => {
                              setIsHeaderMobShowing(false);
                            }}
                          >
                            <MdClose />
                          </div>
                        </div>
                        <div className="header-mob-content">
                          <a href="/merchant">
                            <BsBoxSeam /> Merchant Application
                          </a>
                          <a href="/driver">
                            <BsTruck />
                            Driver Application
                          </a>
                          <a href="#">
                            <BsCart3 /> ZuumDrop Merch
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </header>
              <h1 className="cursive-text">Terms of Use</h1>
            </section>
            <section className="pp-section">
              <div className="box">
                <div className="pp-box">
                  <p>
                    Mobile App Terms of Service
                    <br />
                    These Terms of Service govern your use of ZuumDrop, our
                    website located at http://zuumdrop.com, and any related
                    services provided by ZuumDrop.
                    <br />
                    When you create a ZuumDrop account or use ZuumDrop, you
                    agree to abide by these Terms of Service and to comply with
                    all applicable laws and regulations. If you do not agree
                    with these Terms of Service, you are prohibited from further
                    using the app, accessing our website, or using any other
                    services provided by ZuumDrop.
                    <br />
                    If you access or download ZuumDrop from (1) the Apple App
                    Store, you agree to any Usage Rules set forth in the App
                    Store Terms of Service; and/or (2) the Google Play Store,
                    you agree to the Android, Google Inc. Terms and Conditions
                    including the Google Apps Terms of Service.
                    <br />
                    We, ZuumDrop, reserve the right to review and amend any of
                    these Terms of Service at our sole discretion. Upon doing
                    so, we will update this page and notify you through the app
                    and/or the email address you provided when you created your
                    account. Any changes to these Terms of Service will take
                    effect immediately from the date of publication.
                    <br />
                    These Terms of Service were last updated on 14 December
                    2022.
                    <br />
                    Description of Service
                    <br />
                    ZuumDrop allows our users to reach out to vendors in order
                    to purchase a variety of meals including prepared meals,
                    non-prepared meals, as well as other non-food related items
                    (collectively referred to as the “goods”). ZuumDrop provides
                    a service that allows customers to place an order from a
                    given vendor, said vendors can be owned and operated by
                    various third parties, our affiliate companies, or us. We
                    are responsible for facilitating, processing and concluding
                    your orders.
                    <br />
                    Limitations of Use
                    <br />
                    By using ZuumDrop and our website, you warrant on behalf of
                    yourself, any entity who you represent who has entered into
                    these Terms of Service, and your users that you will not:
                    <br />
                    <br />
                    <ul>
                      <li>
                        modify, copy, prepare derivative works of, decompile, or
                        reverse engineer ZuumDrop or any materials and software
                        contained within ZuumDrop or on our website;
                      </li>
                      <li>
                        remove any copyright or other proprietary notations from
                        ZuumDrop or any materials and software contained within
                        ZuumDrop or on our website;
                      </li>
                      <li>
                        transfer ZuumDrop or any of its associated materials to
                        another person or “mirror” the materials on any other
                        server;
                      </li>
                      <li>
                        knowingly or negligently use ZuumDrop or any of its
                        associated services in a way that abuses or disrupts our
                        networks or any other service ZuumDrop provides;
                      </li>
                      <li>
                        use ZuumDrop or its associated services to transmit or
                        publish any harassing, indecent, obscene, fraudulent, or
                        unlawful material;
                      </li>
                      <li>
                        use ZuumDrop or its associated services in violation of
                        any applicable laws or regulations;
                      </li>
                      <li>
                        use ZuumDrop to send unauthorized advertising or spam;
                      </li>
                      <li>
                        harvest, collect, or gather user data without the user’s
                        consent; or
                      </li>
                      <li>
                        use ZuumDrop or its associated services in such a way
                        that may infringe the privacy, intellectual property
                        rights, or other rights of third parties.
                      </li>
                    </ul>
                    <br />
                    <br />
                    Intellectual Property
                    <br />
                    The intellectual property in the materials in ZuumDrop and
                    on our website are owned by or licensed to ZuumDrop. You may
                    download ZuumDrop, to view, use, and display the application
                    on your mobile device for your personal use only.
                    <br />
                    This constitutes the grant of a license, not a transfer of
                    title. This license shall automatically terminate if you
                    violate any of these restrictions or these Terms of Service,
                    and may be terminated by ZuumDrop at any time.
                    <br />
                    User-Generated Content
                    <br />
                    You retain your intellectual property ownership rights over
                    content you submit to us for publication within ZuumDrop
                    and/or on its corresponding website. We will never claim
                    ownership of your content, but we do require a license from
                    you in order to use it.
                    <br />
                    When you use ZuumDrop or its associated services to post,
                    upload, share, or otherwise transmit content covered by
                    intellectual property rights, you grant to us a
                    non-exclusive, royalty-free, transferable, sub-licensable,
                    worldwide license to use, distribute, modify, run, copy,
                    publicly display, translate, or otherwise create derivative
                    works of your content in a manner that is consistent with
                    your privacy preferences and our Privacy Policy.
                    <br />
                    The license you grant us can be terminated at any time by
                    deleting your content or account. However, to the extent
                    that we (or our partners) have used your content in
                    connection with commercial or sponsored content, the license
                    will continue until the relevant commercial or post has been
                    discontinued by us.
                    <br />
                    You give us permission to use your username and other
                    identifying information associated with your account in a
                    manner that is consistent with your privacy preferences, and
                    our Privacy Policy.
                    <br />
                    Registration and Payments
                    <br />
                    In order to use our services you need to create an account.
                    Any information provided needs to be accurate and updated if
                    necessary. Customers are liable for maintaining their
                    accounts and are fully responsible for all activities
                    occurring under their accounts. Should anybody gain
                    unauthorised access to your account, you need to notify us
                    immediately. ZuumDrop is not liable for any loss or damage
                    arising from failure to maintain the confidentiality of your
                    account.
                    <br />
                    When creating your ZuumDrop account you are required to
                    provide your financial information relevant to the chosen
                    payment method, in some cases, you may be requested to
                    provide your credit card details. We are not liable for
                    failed delivery of goods that may arise from providing
                    incorrect, incomplete or missing information needed to
                    finalise the order.
                    <br />
                    Automatic Updates
                    <br />
                    You give us permission to download and install updates to
                    ZuumDrop on your device in accordance with your privacy
                    preferences. This permission can be revoked at any time by
                    deleting ZuumDrop from your device.
                    <br />
                    Liability
                    <br />
                    ZuumDrop and the materials in ZuumDrop and on our website
                    are provided on an 'as is' basis. To the extent permitted by
                    law, ZuumDrop makes no warranties, expressed or implied, and
                    hereby disclaims and negates all other warranties including,
                    without limitation, implied warranties or conditions of
                    merchantability, fitness for a particular purpose, or
                    non-infringement of intellectual property, or other
                    violation of rights.
                    <br />
                    In no event shall ZuumDrop or its suppliers be liable for
                    any consequential loss suffered or incurred by you or any
                    third party arising from the use or inability to use
                    ZuumDrop, our website, or any other services provided by
                    ZuumDrop or the materials in ZuumDrop, even if ZuumDrop or
                    an authorized representative has been notified, orally or in
                    writing, of the possibility of such damage.
                    <br />
                    In the context of this agreement, “consequential loss”
                    includes any consequential loss, indirect loss, real or
                    anticipated loss of profit, loss of benefit, loss of
                    revenue, loss of business, loss of goodwill, loss of
                    opportunity, loss of savings, loss of reputation, loss of
                    use and/or loss or corruption of data, whether under
                    statute, contract, equity, tort (including negligence),
                    indemnity, or otherwise.
                    <br />
                    Because some jurisdictions do not allow limitations on
                    implied warranties, or limitations of liability for
                    consequential or incidental damages, these limitations may
                    not apply to you.
                    <br />
                    Accuracy of Materials
                    <br />
                    The materials appearing in ZuumDrop or on our website are
                    not comprehensive and are for general information purposes
                    only. To the extent permitted by law, ZuumDrop does not
                    warrant or make any representations concerning the accuracy,
                    likely results, or reliability of the use of the materials
                    in ZuumDrop or on our website, or otherwise relating to such
                    materials or on any resources linked to ZuumDrop and our
                    website.
                    <br />
                    Links
                    <br />
                    ZuumDrop has not reviewed all of the sites linked to
                    ZuumDrop or on its corresponding website and is not
                    responsible for the contents of any such linked site. The
                    inclusion of any link does not imply endorsement, approval,
                    or control by ZuumDrop of the site. Use of any such linked
                    website is at your own risk and we strongly advise you make
                    your own investigations with respect to the suitability of
                    those sites.
                    <br />
                    Notice regarding Apple
                    <br />
                    To the extent that you are using or accessing ZuumDrop on an
                    iOS device, you acknowledge and agree to the terms of this
                    clause. You acknowledge that these Terms of Service are
                    between you and ZuumDrop only, not with Apple Inc. (Apple),
                    and Apple is not responsible for ZuumDrop and any materials
                    available in ZuumDrop.
                    <br />
                    Apple has no obligation to furnish you with any maintenance
                    and support services with respect to ZuumDrop.
                    <br />
                    If ZuumDrop fails to conform to any applicable warranty, you
                    may notify Apple and Apple will refund the purchase price of
                    the mobile application to you. To the maximum extent
                    permitted by applicable law, Apple will have no other
                    warranty obligation whatsoever with respect to ZuumDrop and
                    any other claims, losses, liabilities, damages, costs, or
                    expenses attributable to any failure to conform to any
                    warranty will be our responsibility.
                    <br />
                    Apple is not responsible for addressing any claims by you or
                    any third party relating to ZuumDrop or your use of
                    ZuumDrop, including but not limited to (1) product liability
                    claims; (2) any claim that our mobile application fails to
                    conform to any applicable legal or regulatory requirement;
                    and (3) claims arising under consumer protection or similar
                    legislation.
                    <br />
                    Apple is not responsible for the investigation, defence,
                    settlement, and discharge of any third-party claim that our
                    mobile application infringes that third party’s intellectual
                    property rights.
                    <br />
                    You agree to comply with any applicable third-party terms
                    when using ZuumDrop, including any Usage Rules set forth in
                    the Apple App Store Agreement of Service.
                    <br />
                    Apple and Apple’s subsidiaries are third-party beneficiaries
                    of these Terms of Service, and upon your acceptance of these
                    Terms of Service, Apple will have the right (and will be
                    deemed to have accepted the right) to enforce these Terms of
                    Service against you as a third-party beneficiary of these
                    Terms of Service.
                    <br />
                    You hereby represent and warrant that (1) you are not
                    located in a country that is subject to a U.S. Government
                    embargo, or that has been designated by the U.S. Government
                    as a "terrorist supporting" country; and (2) you are not
                    listed on any U.S. Government list of prohibited or
                    restricted parties.
                    <br />
                    Right to Terminate
                    <br />
                    We may suspend or terminate your ZuumDrop account and right
                    to use ZuumDrop and these Terms of Service immediately upon
                    written notice to you for any breach of these Terms of
                    Service.
                    <br />
                    Severance
                    <br />
                    Any term of these Terms of Service which is wholly or
                    partially void or unenforceable is severed to the extent
                    that it is void or unenforceable. The validity of the
                    remainder of these Terms of Service is not affected.
                    <br />
                    Governing Law
                    <br />
                    These Terms of Service are governed by and construed in
                    accordance with the laws of Florida. You irrevocably submit
                    to the exclusive jurisdiction of the courts in that State or
                    location.
                    <br />
                  </p>
                </div>
              </div>
            </section>

            <footer>
              <div className="box">
                <div className="footer-top-grid">
                  <div className="footer-top-grid-left">
                    <a href="/">
                      <img src={Logo2} alt="Logo2" />
                    </a>
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
                    <a href="/">Home</a>
                    <a href="#">Delivery Areas</a>
                    <a href="/press">Press</a>
                    <a href="/termsofuse">Terms of Use</a>
                    <a href="/privacypolicy">Privacy Policy</a>
                  </div>
                  <div className="footer-top-grid-right">
                    <a href="https://www.instagram.com/zuumdrop/">
                      {" "}
                      <BsInstagram /> Instagram
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100084929088753">
                      <BsFacebook /> Facebook
                    </a>
                    <a href="https://twitter.com/zuumdrop">
                      <BsTwitter /> Twitter
                    </a>
                    <a href="#">
                      <BsLinkedin /> LinkedIn
                    </a>
                  </div>
                </div>
                <div className="footer-bottom-grid">
                  <p> © 2023 ZuumDrop</p>
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
