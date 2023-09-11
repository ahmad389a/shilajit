import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const FooterTwo = ({
  backgroundColorClass,
  copyrightColorClass,
  spaceLeftClass,
  spaceRightClass,
  footerTopBackgroundColorClass,
  footerTopSpaceTopClass,
  footerTopSpaceBottomClass,
  footerLogo,
  backgroundImage
}) => {
  const { t } = useTranslation();
  return (
    <footer
      className={clsx("footer-area", backgroundColorClass, spaceLeftClass, spaceRightClass, backgroundImage && "bg-img")}
      style={{
        backgroundImage: ` ${
          backgroundImage
            ? `url(${process.env.PUBLIC_URL + backgroundImage})`
            : `url()`
        }`
      }}
    >
      <div
        className={clsx("footer-top text-center", footerTopBackgroundColorClass, footerTopSpaceTopClass, footerTopSpaceBottomClass)}
      >
        <div className="container">
          <div className="footer-logo">
            <Link to={process.env.PUBLIC_URL}>
              <img
                alt=""
                src={
                  process.env.PUBLIC_URL +
                  `${footerLogo ? footerLogo : "/assets/img/logo/Himalya.png"}`
                }
              />
            </Link>
          </div>
     {/* =========Text=========== */}
          <p> {t("Our mission is to offer top-quality health-enhancing products empowering you to reach your peak vitality")} .
             {t("Discover our thoughtfully curated range of natural solutions designed to foster a healthier lifestyle")}.
          
          </p>
           {/* =========Social links=========== */}
          <div className="footer-social">
            <ul>
              <li>
                <a href="//www.facebook.com">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="//www.instagram.com">
                  <i className="fa fa-instagram" />
                </a>
              </li>
              {/*<li>
                <a href="//www.dribbble.com">
                  <i className="fa fa-dribbble" />
                </a>
              </li>
              <li>
                <a href="//www.pinterest.com">
                  <i className="fa fa-pinterest-p" />
                </a>
              </li>
              <li>
                <a href="//www.twitter.com">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="//www.linkedin.com">
                  <i className="fa fa-linkedin" />
                </a>
              </li>*/}
            </ul>
          </div>
  {/* =========Page links=========== */}

<div > 
  <ul className="footerlinks"> 
  {/* <li>
            <Link to={process.env.PUBLIC_URL + "/ProductBenifits"}>
              {t("About Shilajit")}
            </Link>
          </li> */}
          <li>
                <Link to={process.env.PUBLIC_URL + "/about"}>
                  {t("about_us")}
                </Link>
              </li>

  <li>
                <Link to={process.env.PUBLIC_URL + "/benefits"}>
              {t("Privacy Policy")}
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/ReturnPolicy"}>
              {t("Return Policy")}
            </Link>
          </li>
  </ul>
</div>

   {/* =========Copy Right=========== */}

        </div>
      </div>
      <div className="footer-bottom text-center">
        <div className="container">
          <div className={clsx("copyright-2", copyrightColorClass)}>
            <p>
              &copy; {new Date().getFullYear()}{" "}
              <a
                href="//www.hasthemes.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                Naturensskatter
              </a>
              . All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

FooterTwo.propTypes = {
  backgroundColorClass: PropTypes.string,
  copyrightColorClass: PropTypes.string,
  footerLogo: PropTypes.string,
  backgroundImage: PropTypes.string,
  footerTopBackgroundColorClass: PropTypes.string,
  footerTopSpaceBottomClass: PropTypes.string,
  footerTopSpaceTopClass: PropTypes.string,
  spaceLeftClass: PropTypes.string,
  spaceRightClass: PropTypes.string
};

export default FooterTwo;
