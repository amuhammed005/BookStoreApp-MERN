import { Link } from "react-router-dom";
import footerLogo from "../assets/footer-logo.png";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" min-h-64 bg-footer w-full text-white py-6 px-4 md:px-10 lg:px-36">
      <div className="flex items-center flex-col md:flex-row justify-between basis-1/2 mb-6">
        {/* Left side */}
        <div className="flex flex-col">
          <div className="mb-5">
            <img src={footerLogo} alt="footer-section" className="size-24" />
          </div>
          <div className="flex items-center flex-col md:flex-row gap-4">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
            <Link to="/" className="hover:text-primary">
              Services
            </Link>
            <Link to="/" className="hover:text-primary">
              About Us
            </Link>
            <Link to="/" className="hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex flex-col basis-1/2 md:pl-6 text-center md:text-left">
          <p className="mb-3 text-">
            Subscribe to our news letter to receive the latest updates, news and
            offers.
          </p>
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Enter your email"
              className="focus:outline-none pl-4 py-2 pr-36 rounded-md w-full text-black bg-[#EAEAEA] "
            />
            <button className="bg-primary font-semibold rounded-md px-6 py-1 hover:bg-hoverPrimary absolute right-0 top-0 bottom-0">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="bg-slate-500 h-[2px] my-1 rounded-md w-full"></div>
      <div className="flex flex-col md:flex-row items-center justify-between py-4">
        {/* Right */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-6 mb-4">
          <Link to="/" className="hover:text-primary">
            Privacy Policy
          </Link>
          <Link to="/" className="hover:text-primary">
            Terms of Service
          </Link>
        </div>
        {/* Left */}
        <div className="flex items-center justify-center md:justify-end gap-6">
          <a href="https://facebook.com" target="_blank" rel="site">
            <FaFacebook className="size-7 hover:text-primary" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="site">
            <BsTwitterX className="size-7 hover:text-primary" />
          </a>
          <a href="https://instagram.com " target="_blank" rel="site">
            <FaInstagram className="size-7 hover:text-primary" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
