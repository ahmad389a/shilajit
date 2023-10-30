import { Fragment } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getProducts } from "../../helpers/product";
import ProductGridSingleTwo from "../../components/product/ProductGridSingleTwo";
import './ProuctGridTwo.css';
const ProductGridTwo = ({
  spaceBottomClass,
  colorClass,
  titlePriceClass,
  category,
  type,
  limit,
}) => {
  const { products } = useSelector((state) => state.product);
  const currency = useSelector((state) => state.currency);
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);
  const prods = getProducts(products, category, type, limit);

  return (
    <Fragment>
      <div className="col-md-1 col-lg-1 col-xl-1"></div>
      {prods?.map((product, index) => {
        return (
          <div
          className={`col-xl-5 col-md-5 col-lg-5  ${index === 2 ? 'centered-card' : ''}`}
            style={{ justifyContent: "center" }}
            key={product.id}
          >
            <ProductGridSingleTwo
              spaceBottomClass={spaceBottomClass}
              colorClass={colorClass}
              product={product}
              currency={currency}
              cartItem={cartItems.find(
                (cartItem) => cartItem.id === product.id
              )}
              wishlistItem={wishlistItems.find(
                (wishlistItem) => wishlistItem.id === product.id
              )}
              compareItem={compareItems.find(
                (compareItem) => compareItem.id === product.id
              )}
              titlePriceClass={titlePriceClass}
            />            
         
          </div>
          

          
        );
      })}
    </Fragment>
  );
};

ProductGridTwo.propTypes = {
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  colorClass: PropTypes.string,
  titlePriceClass: PropTypes.string,
  category: PropTypes.string,
  type: PropTypes.string,
  limit: PropTypes.number,
};

export default ProductGridTwo;
