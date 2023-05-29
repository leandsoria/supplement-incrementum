// eslint-disable-next-line react/prop-types
function Section({ children, styles }) {
  return (
    <section className={`p-36 ${styles}`}>
      <div className="max-w-6xl m-auto">{children}</div>
    </section>
  );
}

export default Section;
