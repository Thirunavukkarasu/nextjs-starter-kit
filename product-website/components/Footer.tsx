import {
  SlSocialFacebook,
  SlSocialTwitter,
  SlSocialInstagram,
  SlSocialLinkedin,
} from "react-icons/sl";

function SocialSection() {
  return (
    <div className="w-full md:w-6/12 lg:w-4/12">
      <div className="footer-widget mb-10 mx-3">
        <div className="logo mb-8">
          <a href="index.html">
            <img src="logo.png" alt="Logo" className="w-[50%] h-[50%]" />
          </a>
        </div>
        <p className="mb-8 text-white sm:pr-13 md:pr-0 2xl:pr-25">
          {`Because we've been there and done it.
                  When you choose us, you’ll feel the benefit of 15 years’ experience 
                  of recuritment and selection.`}
        </p>
        <ul className="socials flex items-center">
          <li className="mr-5">
            <a href="#">
              {" "}
              <SlSocialFacebook />{" "}
            </a>
          </li>
          <li className="mr-5">
            <a href="#">
              {" "}
              <SlSocialTwitter />{" "}
            </a>
          </li>
          <li className="mr-5">
            <a href="#">
              <SlSocialInstagram />{" "}
            </a>
          </li>
          <li>
            <a href="#">
              {" "}
              <SlSocialLinkedin />{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

function AboutUs() {
  return (
    <div className="w-full md:w-6/12 lg:w-2/12">
      <div className="footer-widget mb-10 mx-3">
        <h3 className="mb-6 text-white">About Us</h3>
        <ul className="links">
          <li>
            {" "}
            <a href="#">Home</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">Feature</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">About</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">Testimonials</a>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}

function Features() {
  return (
    <div className="w-full md:w-6/12 lg:w-3/12">
      <div className="footer-widget mb-10 mx-3">
        <h3 className="mb-6 text-white">Features</h3>
        <ul className="links">
          <li>
            {" "}
            <a href="#">How it works</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">Privacy policy</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">Terms of service</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">Refund policy</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

function OtherProducts() {
  return (
    <div className="w-full md:w-6/12 lg:w-3/12">
      <div className="footer-widget mb-10 mx-3">
        <h3 className="mb-6 text-white">Other Products</h3>
        <ul className="links">
          <li>
            {" "}
            <a href="#">Recruiter CRM</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">Recruiter Bot</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">Recruiter Circles</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">Recruiter Agencies</a>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      className="footer bg-cover bg-no-repeat bg-right-top pt-120 mt-25 bg-theme-color md:bg-transparent md:pt-260 lg:pt-260"
      style={{ backgroundImage: "url('assets/img/footer/footer-bg.svg')" }}
    >
      <div className="container">
        <div className="widget-wrapper">
          <div className="row">
            <SocialSection />
            <AboutUs />
            <Features />
            <OtherProducts />
          </div>
        </div>
      </div>
    </footer>
  );
}
