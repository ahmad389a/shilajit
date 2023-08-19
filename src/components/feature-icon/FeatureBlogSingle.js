import PropTypes from "prop-types";
import clsx from "clsx";

const FeatureBlogSingle = ({ data, spaceBottomClass }) => {
  return (
      <div
        className={clsx("support-wrap-3 text-center", spaceBottomClass)}
        style={{ backgroundColor: `${data.backgroundColor}`, height:"90%" }}
      >
        
        <div className="support-content-3"  >
           <h3 style={{color:"green"}}>{data.titleImage}</h3>
          <p>{data.title}</p> 
        </div>
      </div>
  );
};

FeatureBlogSingle.propTypes = {
  data: PropTypes.shape({}),
  spaceBottomClass: PropTypes.string
};

export default FeatureBlogSingle;
