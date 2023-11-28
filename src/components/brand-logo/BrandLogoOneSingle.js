import PropTypes from "prop-types";
import clsx from "clsx";

const BrandLogoOneSingle = ({ data, spaceBottomClass }) => {
  return (
    <div className={clsx("single-brand-logo", spaceBottomClass)}>
      <img src={process.env.PUBLIC_URL + data.image} alt="Shilajitlogo" loading="lazy"
      height={40} width={180} />
    </div>
  );
};

BrandLogoOneSingle.propTypes = {
  data: PropTypes.shape({}),
  spaceBottomClass: PropTypes.string
};

export default BrandLogoOneSingle;
