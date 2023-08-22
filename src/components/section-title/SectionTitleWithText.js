import PropTypes from "prop-types";
import clsx from "clsx";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div className={clsx("welcome-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <div className="welcome-content text-center">
          <h5>Who Are We</h5>
          <h1>Pure Himalayan Shilajit</h1>
          <p>
          Pure Himalayan Shilajit is a blackish-brown tar-like material collected from the Himalayan mountain ranges and renowned as Elixir of Life - your all-time superfood.
As more individuals resort to natural, herbal solutions for their health and well-being, how far might genuine Himalayan Shilajit fall in the race of the top most effective herbs?
It is one of the most potent rejuvenating anti-aging blockbusters known to mankind. Pure Himalayan Shilajit is said to have mystical healing abilities. So, what exactly is this tar-like, sticky substance, shilajit? Let's learn everything we can about this mystical black weed.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

SectionTitleWithText.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default SectionTitleWithText;
