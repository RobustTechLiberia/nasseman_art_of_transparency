import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/images/logo.jpeg";
import { Button, ThemeProvider } from "flowbite-react";

class Navbar extends React.Component {
    render() {
        return (
            <>
            <nav className="bg-white fixed w-full z-10 mt-0 top-0 start-0 border-b border-none">
 <div className="max-w-7xl  flex items-center justify-center p-2 md:p-4 gap-x-8 md:gap-x-10">

    {/* Logo */}
    <a href="#" className="flex items-center space-x-2 mx-auto rtl:space-x-reverse">
      <img src={logo} className=" h-32 md:h-32" alt="Logo" />
    </a>
    {/* Donate  Button */}
    <div className="flex items-center space-x-6 md:mx-8 md:order-2 gap-x-5">
      <Button color="failure" className="bg-red-900 py-2 px-5 rounded-lg text-white hover:bg-white hover:text-red-900 border cursor-pointer border-red-900 transition duration-300">
        Donate
      </Button>
      {/* Menu Button */}
      <button
        data-collapse-toggle="navbar-sticky"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 mx-2 rounded-lg md:hidden hover:bg-gray-100"
        aria-controls="navbar-sticky"
        aria-expanded="false" 
      >
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    {/* Menu Items */}
    <div className="hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 font-medium">
        <li>
            <a href="#" className="block py-2 px-3 text-red-900 capitalize">
                home</a>
                </li>
        <li>
            <a href="#" className="block py-2 px-3 text-red-900 capitalize">
                About</a>
                </li>
        <li>
            <a href="#" className="block py-2 px-3 text-red-900 capitalize">
                careers
                </a>
        </li>
        <li>
          <a href="#" className="block capitalize py-2 px-3 text-red-900">
            contact
            </a>
            </li>
      </ul>
    </div>
  </div>
</nav>

            </>
        );
    }
}

export default Navbar;