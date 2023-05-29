// eslint-disable-next-line react/prop-types
function Section({ children, styles }) {
  return (
    <section className={`p-12 text-center md:text-left md:p-36 ${styles}`}>
      <div className="max-w-6xl m-auto">{children}</div>
    </section>
  );
}

export default Section;
