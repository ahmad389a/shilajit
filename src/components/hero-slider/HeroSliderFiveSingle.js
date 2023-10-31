import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import '../customcss/heroslidercustom.css';


const HeroSliderFiveSingle = ({ data }) => {

  const { t } = useTranslation();
  return (
    <div
      className="single-slider-2 slider-height-1 slider-height-res15 d-flex align-items-center slider-height-res bg-img"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + data.image})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-7 ms-auto">
            <div className="slider-content-2 slider-content-fruits slider-animated-1">
              {/* <h3 className="animated" style={{color: data.title === "Naturlig & Sunn" ? "white" : "black"}}>{t(data.title)}</h3> */}
              <h2 className="animated" style={{lineHeight:'1.5', color: data.subtitle === "Opplev en annen side av nåturen" ? "black" : "white" }}>
             {t(data.subtitle)}
               </h2>

              {/*<div className="slider-btn btn-hover">
                <Link
                  className="animated"
                  to={process.env.PUBLIC_URL + data.url}
                >
                  {t("SHOP NOW")}
                </Link>
             </div>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSliderFiveSingle.propTypes = {
  data: PropTypes.shape({})
};

export default HeroSliderFiveSingle;
