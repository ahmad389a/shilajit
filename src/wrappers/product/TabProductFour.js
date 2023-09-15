import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import SectionTitleThree from "../../components/section-title/SectionTitleThree";
import ProductGridTwo from "./ProductGridTwo";
import { useTranslation } from "react-i18next";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row , Col} from "react-bootstrap";
import { BiCartAlt } from 'react-icons/bi';
import "./TabpFour.css"


const TabProductFour = ({ spaceBottomClass, category, productTabClass }) => {

  const { t }  = useTranslation();
  return (
    <div className={clsx("product-area", spaceBottomClass)}>
      <div className="container">
        <SectionTitleThree
          titleText="Featured Product"
          positionClass="text-center" 
        />
        <Tab.Container defaultActiveKey="bestSeller">
          <Nav
            variant="pills"
            className={clsx("product-tab-list pt-35 pb-60 text-center", productTabClass)}
          >
            {/* <Nav.Item>
              <Nav.Link eventKey="newArrival">
                <h4>{t("New Arrivals")}</h4>
              </Nav.Link>
            </Nav.Item> */}
            {/* <Nav.Item>
              <Nav.Link eventKey="bestSeller">
                <h4>Best Sellers</h4>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="saleItems">
                <h4>Sale Items</h4>
              </Nav.Link>
            </Nav.Item> */}
          </Nav>
          {/* =========content================ */}
          <Tab.Content>
            <Tab.Pane eventKey="newArrival">
              <div className="row">
                <div></div>
                <ProductGridTwo
                  category={category}
                  type="new"
                  limit={2}
                  spaceBottomClass="mb-25"
                />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="bestSeller">
              <div className="row">
                <ProductGridTwo
                  category={category}
                  type="bestSeller"
                  limit={2}
                  spaceBottomClass="mb-25"
                />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="saleItems">
              <div className="row">
                <ProductGridTwo
                  category={category}
                  type="saleItems"
                  limit={1}
                  spaceBottomClass="mb-25"
                />
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
        {/* <div className="view-more text-center mt-20 toggle-btn6 col-12">
          <Link
            className="loadMore6"
            to={process.env.PUBLIC_URL + "/shop-grid-standard"}
          >
            VIEW MORE PRODUCTS
          </Link>
        </div> */}
      </div>
    </div>
  );
};

TabProductFour.propTypes = {
  category: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

export default TabProductFour;
