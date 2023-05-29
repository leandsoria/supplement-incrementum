import Section from '../Components/Section';
import FeaturedCards from '../Components/FeaturedCards';
import SecondIcon from '/main-features/second-icon.svg';
import ThirdIcon from '/main-features/third-icon.svg';
import ForthIcon from '/main-features/forth-icon.svg';
import FifthIcon from '/main-features/fifth-icon.svg';
import SixthIcon from '/main-features/sixth-icon.svg';

function MainFeatures() {
  return (
    <Section styles={'bg-[#1A1921]'}>
      <div className="mb-8">
        <h4 className="text-primary-blue font-semibold">Main Features</h4>
        <h2>Issue tracking optimized fo speed</h2>
        <p className="text-base text-gray-400">
          With Linear, we are creating an issue tracker with an unrivalled user
          experience. Linear is optimized for speed, efficiency and performance.
          its realtime sync architecture makes it blazingly fast. Its
          minimalistic, purposeful design helps your team achieve more
        </p>
      </div>
      <div className="flex flex-row gap-1 w-full flex-wrap rounded-md overflow-hidden">
        <FeaturedCards
          title="Build for speed"
          content="No page loads. Instant search. Realtime sync."
        />
        <FeaturedCards
          icon={SecondIcon}
          title="Use keyboard for everything"
          content="Optimized for efficiency with extensive keyboard shortcuts."
        />
        <FeaturedCards
          icon={ThirdIcon}
          title="List and Board"
          content="View it your way. Kanban boards and list issue views."
        />
        <FeaturedCards
          icon={ForthIcon}
          title="Desktop app and offline support"
          content="Access and use Linear on the plane, in a cafe or anywhere."
        />
        <FeaturedCards
          icon={FifthIcon}
          title="Multiple teams"
          content="Copmany growing? Manage issues for multiple teams."
        />
        <FeaturedCards
          icon={SixthIcon}
          title="Dark mode"
          content="Because progress happens all the time, day or night."
        />
      </div>
    </Section>
  );
}

export default MainFeatures;
