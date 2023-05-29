import EmailForm from '../Components/EmailForm';
import SectionHero from '../Components/SectionHero';
import BannerHero from '../../public/banner/banner-hero.jpeg';

const Hero = () => {
  return (
    <SectionHero>
      <div className="flex flex-col justify-center items-center">
        <h3>Introducing Linear</h3>
        <h1>The issue tracking tool you&apos;ll enjoy using</h1>
        <p className="max-w-3xl">
          Linear lets you manage software development and track bugs.
          Linear&apos;s treamlined design is built for speed and efficiency —
          helping high performing teams accomplish great things
        </p>
        <EmailForm />
        <div className="banner-img rounded-md mt-16 relative max-w-5xl">
          <img
            src={BannerHero}
            alt="Banner Image"
            className="overflow-hidden rounded-md"
          />
        </div>
      </div>
    </SectionHero>
  );
};

export default Hero;
