import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-0">
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-8 justify-center items-center md:justify-center md:items-center">
          <Link
            to="/"
            className="text-lg font-bold text-gray-100 hover:text-gray-400"
          >
            Audiophile
          </Link>
          <nav className="flex flex-row justify-center md:justify-start items-center">
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="hover:text-gray-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-400">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-100 hover:text-gray-400">
            <FaFacebookF />
          </a>
          <a href="#" className="text-gray-100 hover:text-gray-400">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-100 hover:text-gray-400">
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="mt-8 text-gray-500 text-center">
        <p className="text-sm">&copy; 2023 Audiophile. All Rights Reserved.</p>
        <p className="text-sm">Designed by Ailin Nakaganeku</p>
      </div>
    </footer>
  );
};

export default Footer;
