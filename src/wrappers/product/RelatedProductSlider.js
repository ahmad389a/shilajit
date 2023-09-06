import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import clsx from "clsx";
import Swiper, { SwiperSlide } from "../../components/swiper";
import SectionTitle from "../../components/section-title/SectionTitle";
import ProductGridSingle from "../../components/product/ProductGridSingle";
import { getProducts } from "../../helpers/product";
import { useTranslation } from "react-i18next";
import { Row , Col} from "react-bootstrap";
import { BiCartAlt } from 'react-icons/bi';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import "./TabpFour.css"

const settings = {
  loop: false,
  slidesPerView: 4,
  grabCursor: true,
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    576: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 2
    }
  }
};


const RelatedProductSlider = ({ spaceBottomClass, category }) => {
  const { products } = useSelector((state) => state.product);
  const currency = useSelector((state) => state.currency);
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);
  const prods = getProducts(products, category, null, 4);
  const { t } = useTranslation();
  return (
    <div className={clsx("related-product-area", spaceBottomClass)}>
        <SectionTitle
          titleText={t("Related Products")}
          positionClass="text-center"
          spaceClass="mb-50"
        />
      <div className="container "  >
      <div className="col-md-12 col-lg-12 "  >
    
        {/* {prods?.length ? (
          <Swiper options={settings}>
              {prods.map(product => (
                <SwiperSlide key={product.id}>
                  <ProductGridSingle
                    product={product}
                    currency={currency}
                    cartItem={
                      cartItems.find((cartItem) => cartItem.id === product.id)
                    }
                    wishlistItem={
                      wishlistItems.find(
                        (wishlistItem) => wishlistItem.id === product.id
                      )
                    }
                    compareItem={
                      compareItems.find(
                        (compareItem) => compareItem.id === product.id
                      )
                    }
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        ) : null} */}


<Row>
      <Col md={1}></Col>
    <Col md={5}>
    <Card className="card">
      <div className="row iconbar">          
        <Link to="/contact" title="add to cart" className="link">
        <div className="circle"> 
        <BiCartAlt/>
        </div>  
        </Link>            
        </div>
      <Card.Img variant="top" src="..\assets\img\product\fruits\1.png" />
      <Card.Body className="cardbody">
        <Card.Title className="">Lorem ipsum fruit two</Card.Title>
        <Card.Text style={{color:'#04b304'}}>
        €9.54 - €10.6
        </Card.Text>
        
       
      </Card.Body>
    </Card>
    </Col>
    {/* ===========product 2============= */}
    <Col md={5}>
    <Card className="card">
    <div className="row iconbar">          
        <Link to="/contact" title="add to cart" className="link">
        <div className="circle"> 
        <BiCartAlt/>
        </div>  
        </Link>            
        </div>
      <Card.Img variant="top" src="..\assets\img\product\fruits\2.jpg" />
      <Card.Body>
       <Link to="/Product"> <Card.Title>Lorem ipsum fruit three</Card.Title>
        <Card.Text style={{color:'#04b304'}}>
        €9.54 - €10.6
        </Card.Text> </Link>
      </Card.Body>
    </Card>
    </Col>
    </Row>


     </div>
      </div>
    </div>
  );
};

RelatedProductSlider.propTypes = {
  category: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

export default RelatedProductSlider;
