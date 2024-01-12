import { useState } from "react";
import logo from "/images/logo.png"
const Navbar = () => {
          const [isOpen, setIsOpen] = useState(false);

          const toggleMenu = () => {
            setIsOpen(!isOpen);
          };

  return (
    <nav
      
      className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-0"
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 text-white font-bold ">
            <img src={logo} alt="logo" width={150} className="rounded-full " />
            <span> Space Discovery</span>
          </div>
          <div className="text-white flex gap-4 items-center text-xl py-4 sm:py-0 ">
            <ul className="flex gap-4 text-xl ">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <button className=" text-white border-2 gap-4 border-white rounded-md px-3 py-1 ">
              Get Started
            </button>
          </div>
          <div className="w-1/3"></div>
        </div>
          </div>
          {/* Mobile Menu */}
        
            
       
      </nav>
   


  );
}

export default Navbar
