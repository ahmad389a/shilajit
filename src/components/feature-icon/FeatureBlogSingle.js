import PropTypes from "prop-types";
import clsx from "clsx";

const FeatureBlogSingle = ({ data, spaceBottomClass }) => {
  return (
      <div
        className={clsx("support-wrap-3 text-center", spaceBottomClass)}
        style={{ backgroundColor:' #333', height:"90%", boxShadow:"5px 10px 5px #A9A9A9" }}
      >
        
        <div className="support-content-3"  >
           <h4 style={{color:"#e6c61c"}}>{data.titleImage}</h4>
          <p style={{ color: 'White', fontSize:'13px'}}>{data.title}</p> 
        </div>
      </div>
  );
};

FeatureBlogSingle.propTypes = {
  data: PropTypes.shape({}),
  spaceBottomClass: PropTypes.string
};

export default FeatureBlogSingle;
