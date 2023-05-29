const Sidemenu = () => {
  return (
    <aside className="sidemenu flex flex-col gap-8 text-gray-400 absolute w-full h-full top-[85px] ">
      <ul className="flex flex-col text-gray-400 text-center ">
        <li>
          <a
            href="#"
            className="block hover:text-primary-gray transition-colors ease-in-out py-6 w-full border-b border-b-gray-500"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block hover:text-primary-gray transition-colors ease-in-out py-6 border-b border-b-gray-500"
          >
            Changelog
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-primary-blue font-semibold hover:brightness-150 transition-all ease-in-out py-6 border-b border-b-gray-500"
          >
            Sign in
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidemenu;
