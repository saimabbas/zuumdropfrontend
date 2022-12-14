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
              <h1 className="cursive-text">Privacy Policy</h1>
            </section>
            <section className="pp-section">
              <div className="box">
                <div className="pp-box">
                  <p>
                    Your privacy is important to us. It is ZuumDrop's policy to
                    respect your privacy and comply with any applicable law and
                    regulation regarding any personal information we may collect
                    about you, including via our app, ZuumDrop, and its
                    associated services.
                    <br />
                    Personal information is any information about you which can
                    be used to identify you. This includes information about you
                    as a person (such as name, address, and date of birth), your
                    devices, payment details, and even information about how you
                    use an app or online service.
                    <br />
                    In the event our app contains links to third-party sites and
                    services, please be aware that those sites and services have
                    their own privacy policies. After following a link to any
                    third-party content, you should read their posted privacy
                    policy information about how they collect and use personal
                    information. This Privacy Policy does not apply to any of
                    your activities after you leave our app.
                    <br />
                    This policy is effective as of 14 December 2022.
                    <br />
                    Last updated: 14 December 2022
                    <br />
                    Information We Collect
                    <br />
                    Information we collect falls into one of two categories:
                    “voluntarily provided” information and “automatically
                    collected” information.
                    <br />
                    “Voluntarily provided” information refers to any information
                    you knowingly and actively provide us when using our app and
                    its associated services.
                    <br />
                    “Automatically collected” information refers to any
                    information automatically sent by your device in the course
                    of accessing our app and its associated services.
                    <br />
                    Log Data
                    <br />
                    When you access our servers via our app, we may
                    automatically log the standard data provided by your device.
                    It may include your device's Internet Protocol (IP) address,
                    your device type and version, your activity within the app,
                    time and date, and other details about your usage.
                    <br />
                    Additionally, when you encounter certain errors while using
                    the app, we automatically collect data about the error and
                    the circumstances surrounding its occurrence. This data may
                    include technical details about your device, what you were
                    trying to do when the error happened, and other technical
                    information relating to the problem. You may or may not
                    receive notice of such errors, even in the moment they
                    occur, that they have occurred, or what the nature of the
                    error is.
                    <br />
                    Please be aware that while this information may not be
                    personally identifying by itself, it may be possible to
                    combine it with other data to personally identify individual
                    persons.
                    <br />
                    Device Data
                    <br />
                    Our app may access and collect data via your device's
                    in-built tools, such as:
                    <br />
                    <br />
                    <ul>
                      <li>Your identity</li>
                      <li>Location data</li>
                      <li>Contacts</li>
                      <li>Mobile data</li>
                      <li>Device/app history</li>
                      <li>Browsing history</li>
                      <li>Search history</li>
                      <li>Diagnostics</li>
                      <li>Identifiers</li>
                      <li>Usage data</li>
                    </ul>
                    <br />
                    <br />
                    When you install the app or use your deviceâ€™s tools within
                    the app, we request permission to access this information.
                    The specific data we collect can depend on the individual
                    settings of your device and the permissions you grant when
                    you install and use the app.
                    <br />
                    Personal Information
                    <br />
                    We may ask for personal information â€” for example, when
                    you submit content to us or when you contact us â€” which
                    may include one or more of the following:
                    <br />
                    <br />
                    <ul>
                      <li>Name</li>
                      <li>Email</li>
                      <li>Phone/mobile number</li>
                      <li>Purchases</li>
                      <li>User content</li>
                      <li>Sensitive Information</li>
                    </ul>
                    <br />
                    <br />
                    “Sensitive information” or “special categories of data” is a
                    subset of personal information that is given a higher level
                    of protection. Examples of sensitive information include
                    information relating to your racial or ethnic origin,
                    political opinions, religion, trade union or other
                    professional associations or memberships, philosophical
                    beliefs, sexual orientation, sexual practices or sex life,
                    criminal records, health information, or biometric
                    information.
                    <br />
                    The types of sensitive information that we may collect about
                    you include:
                    <br />
                    Financial information We will not collect sensitive
                    information about you without first obtaining your consent,
                    and we will only use or disclose your sensitive information
                    as permitted, required, or authorized by law.
                    <br />
                    User-Generated Content
                    <br />
                    We consider “user-generated content” to be materials (text,
                    image and/or video content) voluntarily supplied to us by
                    our users for the purpose of publication on our platform,
                    website or re-publishing on our social media channels. All
                    user-generated content is associated with the account or
                    email address used to submit the materials.
                    <br />
                    Please be aware that any content you submit for the purpose
                    of publication will be public after posting (and subsequent
                    review or vetting process). Once published, it may be
                    accessible to third parties not covered under this privacy
                    policy.
                    <br />
                    Legitimate Reasons for Processing Your Personal Information
                    <br />
                    We only collect and use your personal information when we
                    have a legitimate reason for doing so. In which instance, we
                    only collect personal information that is reasonably
                    necessary to provide our services to you.
                    <br />
                    Collection and Use of Information
                    <br />
                    We may collect personal information from you when you do any
                    of the following on our website:
                    <br />
                    <br />
                    <ul>
                      <li>Register for an account</li>
                      <li>
                        Use a mobile device or web browser to access our content
                      </li>
                      <li>
                        Contact us via email, social media, or on any similar
                        technologies
                      </li>
                      <li>When you mention us on social media</li>
                    </ul>
                    <br />
                    <br />
                    We may collect, hold, use, and disclose information for the
                    following purposes, and personal information will not be
                    further processed in a manner that is incompatible with
                    these purposes:
                    <br />
                    <br />
                    <ul>
                      <li>
                        to provide you with our app and platform's core features
                        and services
                      </li>
                      <li>
                        to enable you to customize or personalize your
                        experience of our website
                      </li>
                      <li>to deliver products and/or services to you</li>
                      <li>to contact and communicate with you</li>
                      <li>
                        for analytics, market research, and business
                        development, including to operate and improve our app,
                        associated applications, and associated social media
                        platforms
                      </li>
                      <li>
                        for advertising and marketing, including to send you
                        promotional information about our products and services
                        and information about third parties that we consider may
                        be of interest to you
                      </li>
                    </ul>
                    <br />
                    <br />
                    We may combine voluntarily provided and automatically
                    collected personal information with general information or
                    research data we receive from other trusted sources. For
                    example, If you consent to us accessing your social media
                    profiles, we may combine information sourced from those
                    profiles with information received from you directly to
                    provide you with an enhanced experience of our app and
                    services.
                    <br />
                    Security of Your Personal Information
                    <br />
                    When we collect and process personal information, and while
                    we retain this information, we will protect it within
                    commercially acceptable means to prevent loss and theft, as
                    well as unauthorized access, disclosure, copying, use, or
                    modification.
                    <br />
                    Although we will do our best to protect the personal
                    information you provide to us, we advise that no method of
                    electronic transmission or storage is 100% secure, and no
                    one can guarantee absolute data security.
                    <br />
                    You are responsible for selecting any password and its
                    overall security strength, ensuring the security of your own
                    information within the bounds of our services. For example,
                    ensuring any passwords associated with accessing your
                    personal information and accounts are secure and
                    confidential.
                    <br />
                    How Long We Keep Your Personal Information
                    <br />
                    We keep your personal information only for as long as we
                    need to. This time period may depend on what we are using
                    your information for, in accordance with this privacy
                    policy. For example, if you have provided us with personal
                    information as part of creating an account with us, we may
                    retain this information for the duration your account exists
                    on our system. If your personal information is no longer
                    required for this purpose, we will delete it or make it
                    anonymous by removing all details that identify you.
                    <br />
                    However, if necessary, we may retain your personal
                    information for our compliance with a legal, accounting, or
                    reporting obligation or for archiving purposes in the public
                    interest, scientific, or historical research purposes or
                    statistical purposes.
                    <br />
                    Disclosure of Personal Information to Third Parties
                    <br />
                    We may disclose personal information to:
                    <br />
                    <br />
                    <ul>
                      <li>a parent, subsidiary, or affiliate of our company</li>
                      <li>
                        third-party service providers for the purpose of
                        enabling them to provide their services, including
                        (without limitation) IT service providers, data storage,
                        hosting and server providers, ad networks, analytics,
                        error loggers, debt collectors, maintenance or
                        problem-solving providers, advertising providers,
                        professional advisors, and payment systems operators
                      </li>
                      <li>
                        our employees, contractors, and/or related entities
                      </li>
                      <li>
                        our existing or potential agents or business partners
                      </li>
                      <li>
                        credit reporting agencies, courts, tribunals, and
                        regulatory authorities, in the event you fail to pay for
                        goods or services we have provided to you
                      </li>
                      <li>
                        courts, tribunals, regulatory authorities, and law
                        enforcement officers, as required by law, in connection
                        with any actual or prospective legal proceedings, or in
                        order to establish, exercise, or defend our legal rights
                      </li>
                      <li>
                        third parties, including agents or sub-contractors, who
                        assist us in providing information, products, services,
                        or direct marketing to you
                      </li>
                      <li>third parties to collect and process data</li>
                      <li>
                        an entity that buys, or to which we transfer all or
                        substantially all of our assets and business
                      </li>
                    </ul>
                    <br />
                    <br />
                    Third parties we currently use include:
                    <br />
                    <ul>
                      <li>Google Analytics</li>
                      <li>Google Adsense</li>
                      <li>Paypal</li>
                      <li>Stripe</li>
                      <li>International Transfers of Personal Information</li>
                    </ul>
                    <br />
                    The personal information we collect is stored and/or
                    processed in United States, or where we or our partners,
                    affiliates, and third-party providers maintain facilities.
                    <br />
                    The countries to which we store, process, or transfer your
                    personal information may not have the same data protection
                    laws as the country in which you initially provided the
                    information. If we transfer your personal information to
                    third parties in other countries: (i) we will perform those
                    transfers in accordance with the requirements of applicable
                    law; and (ii) we will protect the transferred personal
                    information in accordance with this privacy policy.
                    <br />
                    Your Rights and Controlling Your Personal Information
                    <br />
                    Your choice: By providing personal information to us, you
                    understand we will collect, hold, use, and disclose your
                    personal information in accordance with this privacy policy.
                    You do not have to provide personal information to us,
                    however, if you do not, it may affect your use of our app or
                    the products and/or services offered on or through it.
                    <br />
                    Information from third parties: If we receive personal
                    information about you from a third party, we will protect it
                    as set out in this privacy policy. If you are a third party
                    providing personal information about somebody else, you
                    represent and warrant that you have such personâ€™s consent
                    to provide the personal information to us.
                    <br />
                    Marketing permission: If you have previously agreed to us
                    using your personal information for direct marketing
                    purposes, you may change your mind at any time by contacting
                    us using the details below.
                    <br />
                    Access: You may request details of the personal information
                    that we hold about you.
                    <br />
                    Correction: If you believe that any information we hold
                    about you is inaccurate, out of date, incomplete,
                    irrelevant, or misleading, please contact us using the
                    details provided in this privacy policy. We will take
                    reasonable steps to correct any information found to be
                    inaccurate, incomplete, misleading, or out of date.
                    <br />
                    Non-discrimination: We will not discriminate against you for
                    exercising any of your rights over your personal
                    information. Unless your personal information is required to
                    provide you with a particular service or offer (for example
                    serving particular content to your device), we will not deny
                    you goods or services and/or charge you different prices or
                    rates for goods or services, including through granting
                    discounts or other benefits, or imposing penalties, or
                    provide you with a different level or quality of goods or
                    services.
                    <br />
                    Downloading of Personal Information: We provide a means for
                    you to download the personal information you have shared
                    through our app. Please contact us for more information.
                    <br />
                    Notification of data breaches: We will comply with laws
                    applicable to us in respect of any data breach.
                    <br />
                    Complaints: If you believe that we have breached a relevant
                    data protection law and wish to make a complaint, please
                    contact us using the details below and provide us with full
                    details of the alleged breach. We will promptly investigate
                    your complaint and respond to you, in writing, setting out
                    the outcome of our investigation and the steps we will take
                    to deal with your complaint. You also have the right to
                    contact a regulatory body or data protection authority in
                    relation to your complaint.
                    <br />
                    Unsubscribe: To unsubscribe from our email database or
                    opt-out of communications (including marketing
                    communications), please contact us using the details
                    provided in this privacy policy, or opt-out using the
                    opt-out facilities provided in the communication. We may
                    need to request specific information from you to help us
                    confirm your identity.
                    <br />
                    Use of Cookies
                    <br />
                    Our privacy policy covers the use of cookies between your
                    device and our servers. A cookie is a small piece of data
                    that an app may store on your device, typically containing a
                    unique identifier that allows the app servers to recognise
                    your device when you use the app; information about your
                    account, session and/or device; additional data that serves
                    the purpose of the cookie, and any self-maintenance
                    information about the cookie itself.
                    <br />
                    We use cookies to give your device access to core features
                    of our app, to track app usage and performance on your
                    device, to tailor your experience of our app based on your
                    preferences, and to serve advertising to your device. Any
                    communication of cookie data between your device and our
                    servers occurs within a secure environment.
                    <br />
                    Please refer to our Cookie Policy for more information.
                    <br />
                    Business Transfers
                    <br />
                    If we or our assets are acquired, or in the unlikely event
                    that we go out of business or enter bankruptcy, we would
                    include data, including your personal information, among the
                    assets transferred to any parties who acquire us. You
                    acknowledge that such transfers may occur, and that any
                    parties who acquire us may, to the extent permitted by
                    applicable law, continue to use your personal information
                    according to this policy, which they will be required to
                    assume as it is the basis for any ownership or use rights we
                    have over such information.
                    <br />
                    Limits of Our Policy
                    <br />
                    Our app may link to external sites that are not operated by
                    us. Please be aware that we have no control over the content
                    and policies of those sites, and cannot accept
                    responsibility or liability for their respective privacy
                    practices.
                    <br />
                    Changes to This Policy
                    <br />
                    At our discretion, we may change our privacy policy to
                    reflect updates to our business processes, current
                    acceptable practices, or legislative or regulatory changes.
                    If we decide to change this privacy policy, we will post the
                    changes here and on our website.
                    <br />
                    If the changes are significant, or if required by applicable
                    law, we will contact you (based on your selected preferences
                    for communications from us) and all our registered users
                    with the new details and links to the updated or changed
                    policy.
                    <br />
                    If required by law, we will get your permission or give you
                    the opportunity to opt in to or opt out of, as applicable,
                    any new uses of your personal information.
                    <br />
                    Additional Disclosures for General Data Protection
                    Regulation (GDPR) Compliance (EU)
                    <br />
                    Data Controller / Data Processor
                    <br />
                    The GDPR distinguishes between organisations that process
                    personal information for their own purposes (known as “data
                    controllers”) and organizations that process personal
                    information on behalf of other organizations (known as “data
                    processors”). We, ZuumDrop, located at the address provided
                    in our Contact Us section, are a Data Controller with
                    respect to the personal information you provide to us.
                    <br />
                    Legal Bases for Processing Your Personal Information
                    <br />
                    We will only collect and use your personal information when
                    we have a legal right to do so. In which case, we will
                    collect and use your personal information lawfully, fairly,
                    and in a transparent manner. If we seek your consent to
                    process your personal information, and you are under 16
                    years of age, we will seek your parent or legal guardianâ€™s
                    consent to process your personal information for that
                    specific purpose.
                    <br />
                    Our lawful bases depend on the services you use and how you
                    use them. This means we only collect and use your
                    information on the following grounds:
                    <br />
                    Consent From You
                    <br />
                    Where you give us consent to collect and use your personal
                    information for a specific purpose. You may withdraw your
                    consent at any time using the facilities we provide; however
                    this will not affect any use of your information that has
                    already taken place. When you contact us, you may consent to
                    your name and email address being used so we can respond to
                    your enquiry. While you may request that we delete your
                    contact details at any time, we cannot recall any email we
                    have already sent. If you have any further enquiries about
                    how to withdraw your consent, please feel free to enquire
                    using the details provided in the Contact Us section of this
                    privacy policy.
                    <br />
                    Performance of a Contract or Transaction
                    <br />
                    Where you have entered into a contract or transaction with
                    us, or in order to take preparatory steps prior to our
                    entering into a contract or transaction with you. For
                    example, we need technical information about your device in
                    order to provide the essential features of our app.
                    <br />
                    Our Legitimate Interests
                    <br />
                    Where we assess it is necessary for our legitimate
                    interests, such as for us to provide, operate, improve and
                    communicate our services. For example, we collect technical
                    information about your device in order to improve and
                    personalize your experience of our app. We consider our
                    legitimate interests to include research and development,
                    understanding our audience, marketing and promoting our
                    services, measures taken to operate our services
                    efficiently, marketing analysis, and measures taken to
                    protect our legal rights and interests.
                    <br />
                    Compliance with Law
                    <br />
                    In some cases, we may have a legal obligation to use or keep
                    your personal information. Such cases may include (but are
                    not limited to) court orders, criminal investigations,
                    government requests, and regulatory obligations. If you have
                    any further enquiries about how we retain personal
                    information in order to comply with the law, please feel
                    free to enquire using the details provided in the Contact Us
                    section of this privacy policy.
                    <br />
                    International Transfers Outside of the European Economic
                    Area (EEA)
                    <br />
                    We will ensure that any transfer of personal information
                    from countries in the European Economic Area (EEA) to
                    countries outside the EEA will be protected by appropriate
                    safeguards, for example by using standard data protection
                    clauses approved by the European Commission, or the use of
                    binding corporate rules or other legally accepted means.
                    <br />
                    Your Rights and Controlling Your Personal Information
                    <br />
                    Restrict: You have the right to request that we restrict the
                    processing of your personal information if (i) you are
                    concerned about the accuracy of your personal information;
                    (ii) you believe your personal information has been
                    unlawfully processed; (iii) you need us to maintain the
                    personal information solely for the purpose of a legal
                    claim; or (iv) we are in the process of considering your
                    objection in relation to processing on the basis of
                    legitimate interests.
                    <br />
                    Objecting to processing: You have the right to object to
                    processing of your personal information that is based on our
                    legitimate interests or public interest. If this is done, we
                    must provide compelling legitimate grounds for the
                    processing which overrides your interests, rights, and
                    freedoms, in order to proceed with the processing of your
                    personal information.
                    <br />
                    Data portability: You may have the right to request a copy
                    of the personal information we hold about you. Where
                    possible, we will provide this information in CSV format or
                    other easily readable machine format. You may also have the
                    right to request that we transfer this personal information
                    to a third party.
                    <br />
                    Deletion: You may have a right to request that we delete the
                    personal information we hold about you at any time, and we
                    will take reasonable steps to delete your personal
                    information from our current records. If you ask us to
                    delete your personal information, we will let you know how
                    the deletion affects your use of our app, website or
                    products and services. There may be exceptions to this right
                    for specific legal reasons which, if applicable, we will set
                    out for you in response to your request. If you terminate or
                    delete your account, we will delete your personal
                    information within 90 days of the deletion of your account.
                    Please be aware that search engines and similar third
                    parties may still retain copies of your personal information
                    that has been made public at least once, like certain
                    profile information and public comments, even after you have
                    deleted the information from our services or deactivated
                    your account.
                    <br />
                    Additional Disclosures for California Compliance (US)
                    <br />
                    Under California Civil Code Section 1798.83, if you live in
                    California and your business relationship with us is mainly
                    for personal, family, or household purposes, you may ask us
                    about the information we release to other organizations for
                    their marketing purposes.
                    <br />
                    To make such a request, please contact us using the details
                    provided in this privacy policy with “Request for California
                    privacy information” in the subject line. You may make this
                    type of request once every calendar year. We will email you
                    a list of categories of personal information we revealed to
                    other organisations for their marketing purposes in the last
                    calendar year, along with their names and addresses. Not all
                    personal information shared in this way is covered by
                    Section 1798.83 of the California Civil Code.
                    <br />
                    Do Not Track
                    <br />
                    Some browsers have a “Do Not Track” feature that lets you
                    tell websites that you do not want to have your online
                    activities tracked. At this time, we do not respond to
                    browser “Do Not Track” signals.
                    <br />
                    We adhere to the standards outlined in this privacy policy,
                    ensuring we collect and process personal information
                    lawfully, fairly, transparently, and with legitimate, legal
                    reasons for doing so.
                    <br />
                    Cookies and Pixels
                    <br />
                    At all times, you may decline cookies from our site if your
                    browser permits. Most browsers allow you to activate
                    settings on your browser to refuse the setting of all or
                    some cookies. Accordingly, your ability to limit cookies is
                    based only on your browserâ€™s capabilities. Please refer to
                    the Cookies section of this privacy policy for more
                    information.
                    <br />
                    CCPA-permitted financial incentives
                    <br />
                    In accordance with your right to non-discrimination, we may
                    offer you certain financial incentives permitted by the CCPA
                    that can result in different prices, rates, or quality
                    levels for the goods or services we provide.
                    <br />
                    Any CCPA-permitted financial incentive we offer will
                    reasonably relate to the value of your personal information,
                    and we will provide written terms that describe clearly the
                    nature of such an offer. Participation in a financial
                    incentive program requires your prior opt-in consent, which
                    you may revoke at any time.
                    <br />
                    California Notice of Collection
                    <br />
                    For more information on information we collect, including
                    the sources we receive information from, review the
                    “Information We Collect” section. We collect and use these
                    categories of personal information for the business purposes
                    described in the “Collection and Use of Information”
                    section, including to provide and manage our Service.
                    <br />
                    Right to Know and Delete
                    <br />
                    If you are a California resident, you have rights to delete
                    your personal information we collected and know certain
                    information about our data practices in the preceding 12
                    months. In particular, you have the right to request the
                    following from us:
                    <br />
                    <br />
                    <ul>
                      <li>
                        The categories of personal information we have collected
                        about you;
                      </li>
                      <li>
                        The categories of sources from which the personal
                        information was collected;
                      </li>
                      <li>
                        The categories of personal information about you we
                        disclosed for a business purpose or sold;
                      </li>
                      <li>
                        The categories of third parties to whom the personal
                        information was disclosed for a business purpose or
                        sold;
                      </li>
                      <li>
                        The business or commercial purpose for collecting or
                        selling the personal information; and
                      </li>
                      <li>
                        The specific pieces of personal information we have
                        collected about you.
                      </li>
                      <li>
                        To exercise any of these rights, please contact us using
                        the details provided in this privacy policy.
                      </li>
                    </ul>
                    <br />
                    <br />
                    Shine the Light
                    <br />
                    If you are a California resident, in addition to the rights
                    discussed above, you have the right to request information
                    from us regarding the manner in which we share certain
                    personal information as defined by Californiaâ€™s “Shine the
                    Light” with third parties and affiliates for their own
                    direct marketing purposes.
                    <br />
                    To receive this information, send us a request using the
                    contact details provided in this privacy policy. Requests
                    must include “California Privacy Rights Request” in the
                    first line of the description and include your name, street
                    address, city, state, and ZIP code.
                    <br />
                    Contact Us
                    <br />
                    For any questions or concerns regarding your privacy, you
                    may contact us using the following details:
                    <br />
                    ZuumDrop LLC
                    <br />
                    <a href="http://zuumdrop.com">http://zuumdrop.com</a>
                    <br />
                    Acceptable Use Policy
                    <br />
                    This acceptable use policy covers the products, services,
                    and technologies (collectively referred to as the
                    “Products”) provided by ZuumDrop under any ongoing
                    agreement. Itâ€™s designed to protect us, our customers, and
                    the general Internet community from unethical,
                    irresponsible, and illegal activity.
                    <br />
                    ZuumDrop customers found engaging in activities prohibited
                    by this acceptable use policy can be liable for service
                    suspension and account termination. In extreme cases, we may
                    be legally obliged to report such customers to the relevant
                    authorities.
                    <br />
                    This policy was last reviewed on 14 December 2022.
                    <br />
                    Fair use
                    <br />
                    We provide our facilities with the assumption your use will
                    be “business as usual”, as per our offer schedule. If your
                    use is considered to be excessive, then additional fees may
                    be charged, or capacity may be restricted.
                    <br />
                    We are opposed to all forms of abuse, discrimination, rights
                    infringement, and/or any action that harms or disadvantages
                    any group, individual, or resource. We expect our customers
                    and, where applicable, their users (“end-users”) to likewise
                    engage our Products with similar intent.
                    <br />
                    Customer accountability
                    <br />
                    We regard our customers as being responsible for their own
                    actions as well as for the actions of anyone using our
                    Products with the customerâ€™s permission. This
                    responsibility also applies to anyone using our Products on
                    an unauthorized basis as a result of the customerâ€™s
                    failure to put in place reasonable security measures.
                    <br />
                    By accepting Products from us, our customers agree to ensure
                    adherence to this policy on behalf of anyone using the
                    Products as their end users. Complaints regarding the
                    actions of customers or their end-users will be forwarded to
                    the nominated contact for the account in question.
                    <br />
                    If a customer â€” or their end-user or anyone using our
                    Products as a result of the customer â€” violates our
                    acceptable use policy, we reserve the right to terminate any
                    Products associated with the offending account or the
                    account itself or take any remedial or preventative action
                    we deem appropriate, without notice. To the extent permitted
                    by law, no credit will be available for interruptions of
                    service resulting from any violation of our acceptable use
                    policy.
                    <br />
                    Prohibited activity
                    <br />
                    Copyright infringement and access to unauthorized material
                    <br />
                    Our Products must not be used to transmit, distribute or
                    store any material in violation of any applicable law. This
                    includes but isnâ€™t limited to:
                    <br />
                    <ul>
                      <li>
                        any material protected by copyright, trademark, trade
                        secret, or other intellectual property right used
                        without proper authorization, and
                      </li>
                      <li>
                        any material that is obscene, defamatory, constitutes an
                        illegal threat or violates export control laws.
                      </li>
                    </ul>
                    The customer is solely responsible for all material they
                    input, upload, disseminate, transmit, create or publish
                    through or on our Products, and for obtaining legal
                    permission to use any works included in such material.
                    <br />
                    SPAM and unauthorized message activity
                    <br />
                    Our Products must not be used for the purpose of sending
                    unsolicited bulk or commercial messages in violation of the
                    laws and regulations applicable to your jurisdiction
                    (â€œspamâ€). This includes but isnâ€™t limited to sending
                    spam, soliciting customers from spam sent from other service
                    providers, and collecting replies to spam sent from other
                    service providers.
                    <br />
                    Our Products must not be used for the purpose of running
                    unconfirmed mailing lists or telephone number lists
                    (“messaging lists”). This includes but isnâ€™t limited to
                    subscribing email addresses or telephone numbers to any
                    messaging list without the permission of the email address
                    or telephone number owner, and storing any email addresses
                    or telephone numbers subscribed in this way. All messaging
                    lists run on or hosted by our Products must be “confirmed
                    opt-in”. Verification of the address or telephone number
                    ownerâ€™s express permission must be available for the
                    lifespan of the messaging list.
                    <br />
                    We prohibit the use of email lists, telephone number lists
                    or databases purchased from third parties intended for spam
                    or unconfirmed messaging list purposes on our Products.
                    <br />
                    This spam and unauthorized message activity policy applies
                    to messages sent using our Products, or to messages sent
                    from any network by the customer or any person on the
                    customerâ€™s behalf, that directly or indirectly refer the
                    recipient to a site hosted via our Products.
                    <br />
                    Unethical, exploitative, and malicious activity
                    <br />
                    Our Products must not be used for the purpose of
                    advertising, transmitting, or otherwise making available any
                    software, program, product, or service designed to violate
                    this acceptable use policy, or the acceptable use policy of
                    other service providers. This includes but isnâ€™t limited
                    to facilitating the means to send spam and the initiation of
                    network sniffing, pinging, packet spoofing, flooding,
                    mail-bombing, and denial-of-service attacks.
                    <br />
                    Our Products must not be used to access any account or
                    electronic resource where the group or individual attempting
                    to gain access does not own or is not authorized to access
                    the resource (e.g. “hacking”, “cracking”, “phreaking”,
                    etc.).
                    <br />
                    Our Products must not be used for the purpose of
                    intentionally or recklessly introducing viruses or malicious
                    code into our Products and systems.
                    <br />
                    Our Products must not be used for purposely engaging in
                    activities designed to harass another group or individual.
                    Our definition of harassment includes but is not limited to
                    denial-of-service attacks, hate-speech, advocacy of racial
                    or ethnic intolerance, and any activity intended to
                    threaten, abuse, infringe upon the rights of, or
                    discriminate against any group or individual.
                    <br />
                    Other activities considered unethical, exploitative, and
                    malicious include:
                    <br />
                    <ul>
                      <li>
                        Obtaining (or attempting to obtain) services from us
                        with the intent to avoid payment;
                      </li>
                      <li>
                        Using our facilities to obtain (or attempt to obtain)
                        services from another provider with the intent to avoid
                        payment;
                      </li>
                      <li>
                        The unauthorized access, alteration, or destruction (or
                        any attempt thereof) of any information about our
                        customers or end-users, by any means or device;
                      </li>
                      <li>
                        Using our facilities to interfere with the use of our
                        facilities and network by other customers or authorized
                        individuals;
                      </li>
                      <li>
                        Publishing or transmitting any content of links that
                        incite violence, depict a violent act, depict child
                        pornography, or threaten anyoneâ€™s health and safety;
                      </li>
                      <li>
                        Any act or omission in violation of consumer protection
                        laws and regulations;
                      </li>
                      <li>Any violation of a personâ€™s privacy.</li>
                    </ul>
                    Our Products may not be used by any person or entity, which
                    is involved with or suspected of involvement in activities
                    or causes relating to illegal gambling; terrorism; narcotics
                    trafficking; arms trafficking or the proliferation,
                    development, design, manufacture, production, stockpiling,
                    or use of nuclear, chemical or biological weapons, weapons
                    of mass destruction, or missiles; in each case including any
                    affiliation with others whatsoever who support the above
                    such activities or causes.
                    <br />
                    Unauthorized use of ZuumDrop property
                    <br />
                    We prohibit the impersonation of ZuumDrop, the
                    representation of a significant business relationship with
                    ZuumDrop, or ownership of any ZuumDrop property (including
                    our Products and brand) for the purpose of fraudulently
                    gaining service, custom, patronage, or user trust.
                    <br />
                    About this policy
                    <br />
                    This policy outlines a non-exclusive list of activities and
                    intent we deem unacceptable and incompatible with our brand.
                    <br />
                    We reserve the right to modify this policy at any time by
                    publishing the revised version on our website. The revised
                    version will be effective from the earlier of:
                    <br />
                    the date the customer uses our Products after we publish the
                    revised version on our website; or 30 days after we publish
                    the revised version on our website.
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
