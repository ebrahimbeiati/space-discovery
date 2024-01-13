// import { useState } from "react";
// import logo from "/images/logo.png"
// const Navbar = () => {
//           const [isOpen, setIsOpen] = useState(false);

//           const toggleMenu = () => {
//             setIsOpen(!isOpen);
//           };

//   return (
//     <nav
      
//       className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-0"
//     >
//       <div className="container">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center gap-4 text-white font-bold ">
//             <img src={logo} alt="logo" width={150} className="rounded-full " />
//             <span> Space Discovery</span>
//           </div>
//           <div className="text-white flex gap-4 items-center text-xl py-4 sm:py-0 ">
//             <ul className="flex gap-4 text-xl ">
//               <li>Home</li>
//               <li>About</li>
//               <li>Services</li>
//               <li>Portfolio</li>
//               <li>Contact</li>
//             </ul>
//           </div>
//           <div>
//             <button className=" text-white border-2 gap-4 border-white rounded-md px-3 py-1 ">
//               Get Started
//             </button>
//           </div>
//           <div className="w-1/3"></div>
//         </div>
//           </div>
//           {/* Mobile Menu */}
        
     
        
            
       
//       </nav>
   


//   );
// }

// export default Navbar


// import { useState } from "react";
// import logo from "/images/logo.png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//       setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-0">
//       <div className="container">
//         <div className="flex justify-between items-center">
//           {/* Logo and Title */}
//           <div className="flex items-center gap-4 text-white font-bold">
//             <img src={logo} alt="logo" width={150} className="rounded-full" />
//             <span>Space Discovery</span>
//           </div>

//           {/* Mobile Menu Button (Hamburger) */}
//           <div className="sm:hidden">
//             <button onClick={toggleMenu}>
//               <svg
//                 className="h-6 w-6 text-white cursor-pointer"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 ></path>
//               </svg>
//             </button>
//           </div>

//           {/* Navigation Links */}
//           <div
//             className={`sm:flex gap-4 items-center text-xl ${
//               isOpen ? "block" : "hidden"
//             }`}
//           >
//             <ul>
//               <li>Home</li>
//               <li>About</li>
//               <li>Portfolio</li>
//               <li>Contact</li>
//             </ul>
//           </div>

//           {/* Get Started Button (Desktop) */}
//           <div className="hidden sm:block">
//             <button className="text-white border-2 gap-4 border-white rounded-md px-3 py-1">
//               Get Started
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;







import { useState } from "react";
import logo from "/images/logo.png";
import { Link } from "react-router-dom";

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    return (
      <nav className="w-full bg-black/90 shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <div className="flex items-center gap-4 text-white font-bold ">
                <img
                  src={logo}
                  alt="logo"
                  width={150}
                  className="rounded-full "
                />
                <span> Space Discovery</span>
              </div>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center text-white pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center  text-white space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-gray-400 hover:text-blue-600">
                  <a href="javascript:void(0)">Home</a>
                </li>
                <li className="text-gray-400 hover:text-blue-600">
                  <a
                    href="https://www.nasa.gov/nasa-blogs/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Blog
                  </a>
                </li>
                <Link
                  to="https://www.nasa.gov/about/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <li className="text-gray-400 hover:text-blue-600">About</li>
                </Link>
                <Link to="https://www.nasa.gov/contact/" rel="noreferrer" target="_blank"> <li className="text-gray-400 hover:text-blue-600">
                 Contact Nasa
                </li>
               
                </Link>

               
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
}
