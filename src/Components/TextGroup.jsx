// eslint-disable-next-line react/prop-types
const TextGroup = ({ pretitle, title, description }) => {
  return (
    <div className="mb-8">
      <h4 className="text-primary-blue font-semibold">{pretitle}</h4>
      <h2>{title}</h2>
      <p className="text-base text-gray-400">{description}</p>
    </div>
  );
};

export default TextGroup;
