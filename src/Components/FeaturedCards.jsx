// eslint-disable-next-line react/prop-types
const FeaturedCards = ({ icon, title, content }) => {
  return (
    <div className="p-2 bg-[#27282D] max-w-[calc(33.43%_-_.25rem)]  py-12 pl-6 pr-24 hover:brightness-125 transition-all ease-in-out">
      {icon && <img src={icon} alt="icon" className="mb-4 w-6 h-6" />}
      {!icon && <h4 className="text-primary-blue font-semibold mb-4">10x</h4>}
      <p className="text-base text-primary-gray mb-2">{title}</p>
      <p className="text-base text-gray-400">{content}</p>
    </div>
  );
};

export default FeaturedCards;
