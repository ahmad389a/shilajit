import PropTypes from "prop-types";
import clsx from "clsx";
import featureIconData from "../../data/feature-icons/feature-blog.json";
import FeatureBlogSingle from "../../components/feature-icon/FeatureBlogSingle";

const FeatureBlog = ({
  spaceTopClass,
  spaceBottomClass,
  containerClass,
  gutterClass,
  responsiveClass,
  bgImg
}) => {
  
  return (
    <div
      className={clsx("support-area hm9-section-padding", spaceTopClass, spaceBottomClass, responsiveClass)}
      style={ bgImg ? { 
        backgroundImage: `url(${process.env.PUBLIC_URL + bgImg})`} : {} }
    
    >
      <div className={clsx(containerClass, gutterClass)}>
        <h2 style={{textAlign:"center", paddingBottom:"2%"}}>BENEFITS OF USING SHILAJIT</h2>
        <div className="row">
          {featureIconData?.map((single, key) => (
            <div className="col-lg-4 col-md-6 col-sm-6" key={key}>
              <FeatureBlogSingle
                data={single}
                spaceBottomClass="mb-10"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

FeatureBlog.propTypes = {
  bgImg: PropTypes.string,
  containerClass: PropTypes.string,
  gutterClass: PropTypes.string,
  responsiveClass: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default FeatureBlog;
