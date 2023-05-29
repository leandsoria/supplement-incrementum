import Section from '../Components/Section';
import Person1 from '/about-us/xavimb.jpg';
import Person2 from '/about-us/taylorcara_.jpg';
import Person3 from '/about-us/Stammy.jpg';
import LinkedIn from '/about-us/icons/linkedin-icon.svg';
import Twitter from '/about-us/icons/twitter-icon.svg';
import GetForm from '../Components/GetForm';

const AboutUs = () => {
  return (
    <Section styles={'bg-[#17161D]'}>
      <div className="mb-8 pb-8 border-b border-b-[rgba(255,255,255,.1)]">
        <h4 className="text-primary-blue font-semibold">About us</h4>
        <h2>The Lienar team</h2>
        <p className="text-base text-gray-400">
          Our team has lead, scaled and delivered large scale software and
          design projects at multiple startups and high-growth environments like
          Uber, Airbnb and Coinbase.
        </p>
        <div className="flex flex-col md:flex-row gap-6 mt-8">
          <a
            href="#"
            className="text-primary-blue tracking-wide hover:brightness-125 ease-in-out transtion-all"
          >
            Twitter -{'>'}
          </a>
          <a
            href="#"
            className="text-primary-blue tracking-wide hover:brightness-125 ease-in-out transtion-all"
          >
            Email -{'>'}
          </a>
        </div>
      </div>
      <div className="flex flex-row justify-between gap-1 w-full flex-wrap rounded-md overflow-hidden">
        <div className="w-full md:max-w-[calc(33.43%_-_.25rem)] md:w-[260px] py-12  ">
          <img
            src={Person1}
            alt="Agent"
            className="rounded-md w-16 mx-auto mb-4"
          />
          <p className="text-base text-primary-gray mb-2">Tuomas Artman</p>
          <p className="text-base text-gray-400">
            Staff engineer and manager, scaled{' '}
            <span className="text-primary-gray">Uber</span>&apos;s mobile
            engineering team to 400 strong.
          </p>
          <div className="flex flex-row gap-2 justify-center md:justify-start mt-4">
            <a href="#">
              <img
                src={Twitter}
                alt="Linkeding Icon"
                className=" w-5 hover:brightness-125 ease-in-out transtion-all"
              />
            </a>
            <a href="#">
              <img
                src={LinkedIn}
                alt="Linkeding Icon"
                className=" w-5 hover:brightness-125 ease-in-out transtion-all"
              />
            </a>
          </div>
        </div>
        <div className="w-full md:max-w-[calc(33.43%_-_.25rem)] md:w-[260px] py-12  ">
          <img
            src={Person2}
            alt="Agent"
            className="rounded-md w-16 mx-auto mb-4"
          />
          <p className="text-base text-primary-gray mb-2">Karri Saarinen</p>
          <p className="text-base text-gray-400">
            Principal Designer and design systems lead at{' '}
            <span className="text-primary-gray">Airbnb</span>. Founding design
            at <span className="text-primary-gray">Coinbase</span>. YC Alum.
          </p>
          <div className="flex flex-row gap-2 justify-center md:justify-start mt-4">
            <a href="#">
              <img
                src={Twitter}
                alt="Linkeding Icon"
                className=" w-5 hover:brightness-125 ease-in-out transtion-all"
              />
            </a>
            <a href="#">
              <img
                src={LinkedIn}
                alt="Linkeding Icon"
                className=" w-5 hover:brightness-125 ease-in-out transtion-all"
              />
            </a>
          </div>
        </div>
        <div className="w-full md:max-w-[calc(33.43%_-_.25rem)] md:w-[260px] py-12  ">
          <img
            src={Person3}
            alt="Agent"
            className="rounded-md w-16 mb-4 grayscale mx-auto"
          />
          <p className="text-base text-primary-gray mb-2">Jori Lallo</p>
          <p className="text-base text-gray-400">
            Early <span className="text-primary-gray">Coinbase</span> engineer.
            Created the API and frontend architecture. YC Alumn,
          </p>
          <div className="flex flex-row gap-2 justify-center md:justify-start mt-4">
            <a href="#">
              <img
                src={Twitter}
                alt="Linkeding Icon"
                className=" w-5 hover:brightness-125 ease-in-out transtion-all"
              />
            </a>
          </div>
        </div>
      </div>
      <GetForm />
    </Section>
  );
};

export default AboutUs;
