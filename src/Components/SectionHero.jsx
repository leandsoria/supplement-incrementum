// eslint-disable-next-line react/prop-types
function SectionHero({ children }) {
  return (
    <section className="flex flex-col w-full text-center pt-36 px-12 hero-section">
      <div className="max-w-4xl m-auto">{children}</div>
    </section>
  );
}

export default SectionHero;
