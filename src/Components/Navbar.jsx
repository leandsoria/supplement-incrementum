import Logo from '../../public/logo/logo.svg';
import Sidemenu from './Sidemenu';
import { createPortal } from 'react-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sidemenuHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex flex-row justify-between items-center px-12 md:px-36 py-6 border-b border-b-gray-600 bg-transparent absolute top w-full">
      <a href="/#">
        <img src={Logo} alt="Linear Logo" className="w-36" />
      </a>
      <button
        onClick={sidemenuHandler}
        className="md:hidden w-6 h-[1px] relative bg-primary-gray after:w-6 after:h-[1px] after:bg-primary-gray after:absolute after:translate-y-3 after:left-0 focus:scale-95"
      ></button>
      <ul className="hidden md:flex flex-row gap-8 text-gray-400 ">
        <li>
          <a
            href="#"
            className="hover:text-primary-gray transition-colors ease-in-out"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="#"
            className=" hover:text-primary-gray transition-colors ease-in-out"
          >
            Changelog
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-primary-blue font-semibold hover:brightness-150 transition-all ease-in-out"
          >
            Sign in
          </a>
        </li>
      </ul>
      {isOpen && createPortal(<Sidemenu />, document.body)}
    </nav>
  );
};

export default Navbar;
