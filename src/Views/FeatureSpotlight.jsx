import Section from '../Components/Section';
import FSimg from '../../public/feature-spotlight/feature-spotlight.png';
import CommandImg from '../../public/feature-spotlight/command-image.png';

const FeatureSpotlight = () => {
  return (
    <Section styles={'bg-[#17161D]'}>
      <div className="mb-8">
        <h4 className="text-primary-blue font-semibold">Feature Spotlight</h4>
        <h2>Meet your command line</h2>
        <p className="text-base text-gray-400">
          Hit{' '}
          <img
            src={CommandImg}
            alt="Command + K"
            className="h-6 inline-block align-top"
          />{' '}
          to bring up the context-sensitive command menu. Edit an issue&apos;s
          status, change assignees, modify subscriptions and a lot more in mere
          seconds.
        </p>
      </div>
      <div className="flex flex-row gap-1 w-full flex-wrap rounded-md overflow-hidden">
        <img src={FSimg} alt="Featured Spotlight" />
      </div>
    </Section>
  );
};

export default FeatureSpotlight;
