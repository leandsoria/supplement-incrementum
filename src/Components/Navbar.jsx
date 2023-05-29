import Logo from '../../public/logo/logo.svg';

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center px-36 py-6 border-b border-b-gray-600 bg-transparent absolute top w-full">
      <a href="/#">
        <img src={Logo} alt="Linear Logo" className="w-36" />
      </a>
      <ul className="flex flex-row gap-8 text-gray-400 ">
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
    </nav>
  );
};

export default Navbar;
