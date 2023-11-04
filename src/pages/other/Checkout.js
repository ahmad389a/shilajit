import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { getDiscountPrice } from "../../helpers/product";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { useTranslation } from "react-i18next";
import PayButton from "./PayButton";
import { useState, useEffect  } from "react";
import { useSelector } from 'react-redux';

const Checkout = () => {
  const { t } = useTranslation();
  let cartTotalPrice = 0;
  let { pathname } = useLocation();
  const currency = useSelector((state) => state.currency);
  const { cartItems } = useSelector((state) => state.cart);
  const [gstRate, setGSTRate] = useState(15);
  const [gstAmount, setGSTAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const [billingAddress, setBillingInfo] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    townCity: "",
    stateCounty: "",
    postcodeZIP: "",
    phone: "",
    emailAddress: "",
  });
  console.log("--------------",billingAddress);

  const handleBillingInfoChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo({
      ...billingAddress,
      [name]: value,
    });
  };
 
  // useEffect(() => {
  //   const calculatedGSTAmount = (cartTotalPrice * gstRate) / 100;
  //   const calculatedTotalAmount = cartTotalPrice + calculatedGSTAmount;
  //   setGSTAmount(calculatedGSTAmount);
  //   setTotalAmount(calculatedTotalAmount);
  // }, [cartTotalPrice, gstRate]); 



  return (
    <Fragment>
      <SEO
        titleTemplate="SJEKK UT"
        description="Sømløs og sikker utsjekking venter!"
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb 
          pages={[
            {label: "Hjem", path: process.env.PUBLIC_URL + "/" },
            {label: "SJEKK UT", path: process.env.PUBLIC_URL + pathname }
          ]} 
        />
        <div className="checkout-area pt-95 pb-100">
          <div className="container">
            {cartItems && cartItems.length >= 1 ? (
              <div className="row">
                <div className="col-lg-7">
                  <div className="billing-info-wrap">
                    <h3>{t("Billing Details")}</h3>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>{t("First Name")}</label>
                          <input
                            type="text"
                            name="firstName"
                            placeholder="Fornavn"
                            value={billingAddress.firstName}
                            onChange={handleBillingInfoChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>{t("Last Name")}</label>
                          <input
                            type="text"
                            name="lastName"
                            placeholder="Etternavn"
                            value={billingAddress.lastName}
                            onChange={handleBillingInfoChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        {/* <div className="billing-info mb-20">
                          <label>Company Name{t("Get In Touch")}</label>
                          <input type="text" />
                        </div> */}
                      </div>
                      <div className="col-lg-12">

                    {/* ========country==========     */}
                        {/* <div className="billing-select mb-20">
                          <label>Country{t("Get In Touch")}</label>
                          <select>
                            <option>Select a country{t("Get In Touch")}</option>
                            <option>Azerbaijan{t("Get In Touch")}</option>
                            <option>Bahamas{t("Get In Touch")}</option>
                            <option>Bahrain{t("Get In Touch")}</option>
                            <option>Bangladesh{t("Get In Touch")}</option>
                            <option>Barbados{t("Get In Touch")}</option>
                          </select>
                        </div> */}
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-info mb-20">
                          <label>{t("Street Address")}</label>
                          <input
                            className="billing-address"
                            name="streetAddress"
                            placeholder="Husnummer og gatenavn"
                            value={billingAddress.streetAddress}
                            type="text"  
                            onChange={handleBillingInfoChange}
                            required
                          />
                          <input
                            placeholder="Leilighet, suite, enhet etc."
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-info mb-20">
                          <label> {t("Town")}/ {t("City")}</label>
                          <input type="text"
                          name="townCity"
                          value={billingAddress.townCity}
                          placeholder="By"
                          onChange={handleBillingInfoChange}
                            required />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label> {t("State")}/ {t("County")}</label>
                          <input type="text" 
                             name="stateCounty"
                             value={billingAddress.stateCounty}
                             placeholder="By"
                             onChange={handleBillingInfoChange} 
                          required/>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>{t("Postcode")}/ {t("ZIP")}</label>
                          <input type="text" 
                             name="postcodeZIP"
                             value={billingAddress.postcodeZIP}
                             placeholder="Postnummer"
                             onChange={handleBillingInfoChange} 
                          required/>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>{t("Phone")}</label>
                          <input type="text" 
                             name="phone"
                             value={billingAddress.phone}
                             placeholder="Telefon"
                             onChange={handleBillingInfoChange}
                          required/>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>{t("Email Address")}</label>
                          <input type="text"  
                             name="emailAddress"
                             value={billingAddress.emailAddress}
                             placeholder="Epostadresse"
                             onChange={handleBillingInfoChange}
                          required/>
                        </div>
                      </div>
                    </div>

 {/* =============additionalInfo==================== */}

                    {/* <div className="additional-info-wrap">
                      <h4>{t("Additional information")}</h4>
                      <div className="additional-info">
                        <label>{t("Order notes")}</label>
                        <textarea
                          placeholder="Notes about your order, e.g. special notes for delivery. "
                          name="message"
                          defaultValue={""}
                        />
                      </div>
                    </div> */}
                  </div>
                </div>

  {/* ===================Order detail part/ Invoice================================== */}

                <div className="col-lg-5">
                  <div className="your-order-area">
                    <h1 style={{fontSize:'18px', fontWeight:'600'}}>{t("Your order")}</h1>
                    <div className="your-order-wrap gray-bg-4">
                      <div className="your-order-product-info">
                        <div className="your-order-top">
                          <ul>
                            <li>{t("Product")}</li>
                            <li>{t("Total")}</li>
                          </ul>
                        </div>
                        <div className="your-order-middle">
                          <ul>
                            {cartItems.map((cartItem, key) => {
                              const discountedPrice = getDiscountPrice(
                                cartItem.price,
                                cartItem.discount
                              );
                              const finalProductPrice = (
                                cartItem.price * currency.currencyRate
                              ).toFixed(2);
                              const finalDiscountedPrice = (
                                discountedPrice * currency.currencyRate
                              ).toFixed(2);

                              discountedPrice != null
                                ? (cartTotalPrice +=
                                    finalDiscountedPrice * cartItem.quantity)
                                : (cartTotalPrice +=
                                    finalProductPrice * cartItem.quantity);
                              return (
                                <li key={key}>
                                  <span className="order-middle-left">
                                    {cartItem.name} X {cartItem.quantity}
                                  </span>{" "}
                                  <span className="order-price">
                                    {discountedPrice !== null
                                      ? currency.currencySymbol +
                                        (
                                          finalDiscountedPrice *
                                          cartItem.quantity
                                        ).toFixed(2)
                                      : currency.currencySymbol +
                                        (
                                          finalProductPrice * cartItem.quantity
                                        ).toFixed(2)}
                                  </span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                        <div className="your-order-bottom">
                          <ul>
                            <li className="your-order-shipping">{t("Shipping")}</li>
                            <li>{t("Free shipping")}</li>
                          </ul>
                        </div>
                        <div className="your-order-total">
                          <ul>
                            <li className="your-order-shipping">{t("Total")}</li>
                            <li>
                              {currency.currencySymbol +
                                cartTotalPrice.toFixed(2)}
                            </li>
                          </ul>
                          {/* <ul>
                            <li className="your-order-shipping">{t("delivery amount")}</li>
                            <li>
                              {currency.currencySymbol +
                                 deliveryFee.toFixed(2)}
                            </li>
                          </ul> */}
                          {/* <ul>
                            <li className="order-total">{t("Total")}</li>
                            <li>
                              {currency.currencySymbol +
                                totalAmount.toFixed(2)}
                            </li>
                          </ul> */}
                           <ul > 
                            <li style={{fontSize:'13px'}}> {t("MVA (15%) Included")} </li>                           
                          </ul>
                        </div>
                       
                      </div>
                      <div className="payment-method"></div>
                    </div>
                    <div className="place-order mt-25">
                      <PayButton cartItems={cartItems} billingAddress={billingAddress} />
                      {/* <button className="btn-hover">{t("Place Order")}</button> */}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="row">
                <div className="col-lg-12">
                  <div className="item-empty-area text-center">
                    <div className="item-empty-area__icon mb-30">
                      <i className="pe-7s-cash"></i>
                    </div>
                    <div className="item-empty-area__text">
                       {t("No items found in cart to checkout")}<br />{" "}
                      <Link to={process.env.PUBLIC_URL + "/"}>
                       {t("Shop Now")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Checkout;
