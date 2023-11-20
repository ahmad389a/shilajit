import { Suspense, lazy } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { element } from "prop-types";

const HomeOrganicFood = lazy(() => import("./pages/home/HomeOrganicFood"));
// product pages
const Product = lazy(() => import("./pages/shop-product/Product"));
const ProductTabLeft = lazy(() =>import("./pages/shop-product/ProductTabLeft"));
const ProductTabRight = lazy(() =>import("./pages/shop-product/ProductTabRight"));
const ProductSticky = lazy(() => import("./pages/shop-product/ProductSticky"));
const ProductSlider = lazy(() => import("./pages/shop-product/ProductSlider"));
const ProductFixedImage = lazy(() =>  import("./pages/shop-product/ProductFixedImage"));
const ProductBenefits = lazy(() =>  import("./pages/shop-product/ProductBenefits"));
const AboutMoringa = lazy(() =>  import("./pages/shop-product/AboutMoringa"));
const OrderStatus = lazy(() =>  import("./pages/other/order-status"));

// other pages
const About = lazy(() => import("./pages/other/About"));
const Contact = lazy(() => import("./pages/other/Contact"));
const MyAccount = lazy(() => import("./pages/other/MyAccount"));
const LoginRegister = lazy(() => import("./pages/other/LoginRegister"));

const Cart = lazy(() => import("./pages/other/Cart"));
const Wishlist = lazy(() => import("./pages/other/Wishlist"));
const Compare = lazy(() => import("./pages/other/Compare"));
const Checkout = lazy(() => import("./pages/other/Checkout"));

const NotFound = lazy(() => import("./pages/other/NotFound"));
const ReturnPolicy = lazy(() => import("./pages/other/ReturnPolicy"));
const OrderCompleted = lazy(() => import("./pages/other/Order-Success"));

const App = () => {
  return (
      <Router>
        <ScrollToTop>
          <Suspense
            fallback={
              <div className="flone-preloader-wrapper">
                <div className="flone-preloader">
                  <span></span>
                  <span></span>
                </div>
              </div>
            }
          >
            <Routes>
              <Route
                path={process.env.PUBLIC_URL + "/"}
                element={<HomeOrganicFood/>}
              />        
              <Route
                path={process.env.PUBLIC_URL + "/home-organic-food"}
                element={<HomeOrganicFood/>}
              />         

              {/* Shop product pages */}
              <Route
                path={process.env.PUBLIC_URL + "/product/:id"}
                element={<Product />}
              />
              <Route
                path={process.env.PUBLIC_URL + "/product-tab-left/:id"}
                element={<ProductTabLeft/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/product-tab-right/:id"}
                element={<ProductTabRight/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/product-sticky/:id"}
                element={<ProductSticky/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/product-slider/:id"}
                element={<ProductSlider/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/product-fixed-image/:id"}
                element={<ProductFixedImage/>}
              /> 
              <Route
                path={process.env.PUBLIC_URL + "/ProductBenefits"}
                element={<ProductBenefits/>}
              /> 
               <Route
                path={process.env.PUBLIC_URL + "/AboutMoringa"}
                element={<AboutMoringa/>}
              /> 
                <Route
                path={process.env.PUBLIC_URL + "/order-status"}
                element={<OrderStatus/>}
              />           

              {/* Other pages */}
              <Route
                path={process.env.PUBLIC_URL + "/about"}
                element={<About/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/contact"}
                element={<Contact/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/my-account"}
                element={<MyAccount/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/login-register"}
                element={<LoginRegister/>}
              />

              <Route
                path={process.env.PUBLIC_URL + "/cart"}
                element={<Cart/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/wishlist"}
                element={<Wishlist/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/compare"}
                element={<Compare/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/checkout"}
                element={<Checkout/>}
              /> 
               <Route
                path={process.env.PUBLIC_URL + "/ReturnPolicy"}
                element={<ReturnPolicy/>}
              /> 
              <Route
                path={process.env.PUBLIC_URL + "/checkout-success"}
                element={<OrderCompleted />}
              />


              <Route path="*" element={<NotFound/>} />
            </Routes>
          </Suspense>
        </ScrollToTop>
      </Router>
  );
};

export default App;