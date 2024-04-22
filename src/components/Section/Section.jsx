import PropTypes from "prop-types";

export const Section = ({ title = "page", theme }) => {
  return (
    <section className={theme}>
      <h1>{title}</h1>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  theme: PropTypes.string,
};
