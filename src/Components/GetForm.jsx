import EmailForm from '../Components/EmailForm';
import InterfaceImg from '/about-us/interface.png';

const GetForm = () => {
  return (
    <div className="md:bg-[#27282D] pt-6 md:pt-24 px-0 md:pl-12 mt-6 md:mt-24 rounded-md relative overflow-hidden">
      <div className="md:max-w-[60%]">
        <h3>Get Linear Early Access</h3>
        <p className="text-base text-gray-400">
          We&apos;re gradually opening up early access to companies and teams.
        </p>
        <div className="max-w-[500px]">
          <EmailForm />
        </div>
      </div>
      <img
        src={InterfaceImg}
        alt="Dashboard"
        className="rounded-md hidden md:block md:absolute md:left-[60%] md:top-24 md:bottom-0"
      />
    </div>
  );
};

export default GetForm;
