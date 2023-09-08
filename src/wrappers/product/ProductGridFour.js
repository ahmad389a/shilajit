import PropTypes from "prop-types";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { getProducts } from "../../helpers/product";
import ProductGridSingleFour from "../../components/product/ProductGridSingleFour";
import axios from "axios";
import { url,images_url } from "../../slices/api";
import { useEffect, useState } from "react";
const fetchProducts = async () => {
  try {
    const response = await axios.get(`${url}/products`);
    console.log("--------------------", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching products: ", error);
    return [];
  }
};

const ProductGridFour = ({ spaceBottomClass, category, type, limit }) => {
  const [products, setProducts] = useState([]);
  const currency = useSelector((state) => state.currency);
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);
  const prods = getProducts(products, category, type, limit);
  useEffect(() => {
    fetchProducts().then((data) => setProducts(data));
  }, []);
  console.log("-----ID--------", products);
  
  return (
    <Fragment>
      {prods?.map(product => (
        <div className="col-xl-4 col-md-6 col-lg-4 col-sm-6" key={product.id}>
          <ProductGridSingleFour
            spaceBottomClass={spaceBottomClass}
            product={product}
            currency={currency}
            cartItem={
              cartItems.find(cartItem => cartItem.id === product.id)
            }
            wishlistItem={
              wishlistItems.find(
                wishlistItem => wishlistItem.id === product.id
              )
            }
            compareItem={
              compareItems.find(
                compareItem => compareItem.id === product.id
              )
            }
          />
        </div>
      ))}
    </Fragment>
  );
};

ProductGridFour.propTypes = {
  spaceBottomClass: PropTypes.string,
};


export default ProductGridFour;
