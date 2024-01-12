import { HiLocationMarker } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";
import { HiPhone } from "react-icons/hi";
const Footer = () => {
  return (
    <div className="bg-gray-800 text-white px-5  ">
      <section className="max-w-[1200px] mx-auto text-white">
        <div className="grid md:grid-cols-3 lg:grid-cols-3 py-5">
          <div>
            <h1 className="text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3">
              Are you ready to explore the universe?
            </h1>
            <p>
              Get the latest <span className="font-bold">updates </span>in your
              inbox
            </p>
            <br />
            <div className="flex items-center h-10 gap-2">
              <input
                type="text"
                placeholder="Enter your email"
                className="py-1 px-3 border-2 border-white rounded-md  w-full h-[100%] inline-block"
              />
              <button className="primary-button ">Subscribe</button>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold mb-3">Quick Links</h1>
              <ul className="text-sm sm:text-lg font-medium">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Services</a>
                </li>
                <li>
                  <a href="">Portfolio</a>
                </li>
              </ul>
            </div>
            <div>
              <div className="py-8 px-4 ">
                <h1 className="text-xl font-bold ">Contact Us</h1>
              </div>
              <div>
                <div className="flex  gap-2 items-center">
                  <HiLocationMarker />
                  <p>Washington 1951b</p>
                </div>
                <div className="py-2 flex gap-2 items-center">
                  <HiPhone />
                  <p>Phone: +1 123 456 7890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-gray-700 py-5 flex justify-between items-center">
          <div className="hidden sm:block">
            <p>
              ©{new Date().getFullYear()}
              Space Discovery. All rights reserved
            </p>
          </div>
          <div className="flex gap-4">
            <a href="">Privacy Policy</a>
            <a href="">Terms of use</a>
          </div>
        </div>
        <div>
          <div className="flex gap-4 items-center">
            <a href="">
              <FaInstagram className="text-4xl" />
            </a>
            <a href="">
              <FaFacebook className="text-4xl" />
            </a>
            <a href="">
              <FaLinkedin className="text-4xl" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
