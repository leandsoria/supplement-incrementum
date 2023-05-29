// eslint-disable-next-line react/prop-types
function Section({ children, styles }) {
  return (
    <section
      className={`p-12 md:p-20 lg:p-36 text-center md:text-left  ${styles}`}
    >
      <div className="max-w-6xl m-auto">{children}</div>
    </section>
  );
}

export default Section;
