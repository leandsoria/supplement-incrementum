import Logo from '/footer/footer-logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#17161D] flex flex-row w-full justify-between px-36 py-12 border-t border-t-gray-600">
      <div className="left-container flex flex-row gap-6">
        <img src={Logo} alt="Logo" className="w-5 h-5" />
        <p className="text-sm text-gray-400">
          Linear Orbit, Inc. — San Francisco, CA
        </p>
      </div>
      <div className="right-container flex flex-row gap-6 text-gray-400 ">
        <a
          href="#"
          className="hover:text-primary-gray transition-colors ease-in-out"
        >
          Twitter
        </a>
        <a
          href="#"
          className="hover:text-primary-gray transition-colors ease-in-out"
        >
          Download
        </a>
        <a
          href="#"
          className="hover:text-primary-gray transition-colors ease-in-out"
        >
          Privacy
        </a>
        <a
          href="#"
          className="hover:text-primary-gray transition-colors ease-in-out"
        >
          Term of Service
        </a>
      </div>
    </footer>
  );
};

export default Footer;
