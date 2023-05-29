import EmailForm from '../Components/EmailForm';
import InterfaceImg from '/about-us/interface.png';

const GetForm = () => {
  return (
    <div className="md:bg-[#27282D] pt-6 md:py-12 md:pt-24 px-0 md:pl-12 mt-6 md:mt-24 rounded-md relative overflow-hidden flex ">
      <div className="w-full xl:w-2/3 md:pr-12">
        <h3>Get Linear Early Access</h3>
        <p className="text-base text-gray-400">
          We&apos;re gradually opening up early access to companies and teams.
        </p>
        <div className="max-w-[500px] mx-auto md:mx-0">
          <EmailForm />
        </div>
      </div>
      <div className="relative xl:w-1/3 hidden xl:block">
        <img
          src={InterfaceImg}
          alt="Dashboard"
          className="rounded-md  md:absolute object-contain md:top-52 md:left-64 scale-[3]"
        />
      </div>
    </div>
  );
};

export default GetForm;
