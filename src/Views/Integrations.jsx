import FeaturedCards from '../Components/FeaturedCards';
import Section from '../Components/Section';
import Github from '/integration-folder/github-icon.svg';
import CLI from '/integration-folder/cli-icon.png';
import Slack from '/integration-folder/slack-icon.svg';

const Integrations = () => {
  return (
    <Section styles={'bg-[#1A1921]'}>
      <div className="mb-8">
        <h4 className="text-primary-blue font-semibold">Integrations</h4>
        <h2>Built for your workflow</h2>
        <p className="text-base text-gray-400">
          To help improve your personal and your teams&apos; productivity,
          Linear ties into your existing tools, services and workflow.
        </p>
      </div>
      <div className="flex flex-row gap-y-1 md:gap-y-0 gap-x-1 w-full flex-wrap rounded-md overflow-hidden">
        <FeaturedCards
          icon={Github}
          title="Github"
          content="Link PRs and issues, automatically close issues on merge."
        />
        <FeaturedCards
          icon={Slack}
          title="Slack"
          content="Create issues from Slack and get notifications on updates."
        />
        <FeaturedCards
          icon={CLI}
          title="CLI"
          content="Look up existing issues or create new ones right from your terminal"
        />
      </div>
      <div className="mt-12 text-gray-400">
        <span className=" text-gray-400">More integrations coming soon...</span>
      </div>
    </Section>
  );
};

export default Integrations;
