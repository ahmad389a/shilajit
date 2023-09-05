import PropTypes from "prop-types";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
  const { t } = useTranslation();
  return (
    <div className={clsx("welcome-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <div className="welcome-content text-center">
          <h5>{t("Who Are We")} </h5>
          <h1>{t("Pure Shilajit")} </h1>
          <p>
          {t("We're two friends from Oslo")} , {t("Norway")} , {t("embarking on a journey to bring you products that are not only good for your well-being but also for the planet")} . {t("Our first creation is Shilajit, a gift from nature")} .{" "}
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
