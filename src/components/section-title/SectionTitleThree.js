import PropTypes from "prop-types";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

const SectionTitleThree = ({
  titleText,
  positionClass,
  spaceClass,
  colorClass
}) => {

  const { t } = useTranslation();

  return (
    <div className={clsx("section-title-5", positionClass, spaceClass)}>
      <h2 className={clsx(colorClass)}>{t(titleText)}</h2>
    </div>
  );
};

SectionTitleThree.propTypes = {
  positionClass: PropTypes.string,
  spaceClass: PropTypes.string,
  titleText: PropTypes.string
};

export default SectionTitleThree;
