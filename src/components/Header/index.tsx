import { useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCart from "../ShoppingCart";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-black text-white py-4 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
        <Link
          to="/"
          className="text-lg font-bold text-gray-100 animate-bounce md:animate-none"
        >
          Audiophile
        </Link>
        <nav className="hidden md:flex justify-center flex-1 px-auto pr-20">
          <ul className="flex justify-center space-x-4">
            <li>
              <Link to="/category/electronics">Headphones</Link>
            </li>
            <li>
              <Link to="/category/men's clothing">Speakers</Link>
            </li>
            <li>
              <Link to="/category/jewelery">Earphones</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center ml-auto  justify-center">
          <ShoppingCart />
          <div className="md:hidden">
            <button
              className="text-gray-100 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <nav
        className={`md:hidden text-center pt-4 ${
          menuOpen ? "block" : "hidden"
        } z-40 transition-all duration-300 ease-in-out`}
      >
        <ul
          className={`flex flex-col space-y-4 ${
            menuOpen ? "block" : "hidden"
          } transition-all duration-300 delay-100 ease-in-out`}
        >
          <li>
            <Link
              to="/"
              className="block text-lg font-bold py-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/category/electronics"
              className="block text-lg font-bold py-2"
              onClick={toggleMenu}
            >
              Headphones
            </Link>
          </li>
          <li>
            <Link
              to="/category/men's clothing"
              className="block text-lg font-bold py-2"
              onClick={toggleMenu}
            >
              Speakers
            </Link>
          </li>
          <li>
            <Link
              to="/category/jewelery"
              className="block text-lg font-bold py-2"
              onClick={toggleMenu}
            >
              Earphones
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
