import axios from "axios";
import { useSelector } from "react-redux";
import { url } from "../../slices/api";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react"; 
const PayButton = ({ cartItems, billingAddress,couponDetails }) => {
  const handleCheckout = () => {
    console.log("cartItems:", cartItems);
    console.log("Billing:", billingAddress);
    console.log("CouponDetails:", couponDetails); 
    const formData = {
      cartItems,
      billingAddress,
      couponDetails
    };
    const isBillingAddressFilled = (billingAddress) => {
      const keys = Object.keys(billingAddress);
      if (keys.length === 0) {
        alert('Please fill the form first.');
        return false;
      }
      for (let key of keys) {
        if (!billingAddress[key]) {
          alert(`You have missed the "${key}" field. Please fill it first.`);
          return false;
        }
      }
      return true;
    };
    if (cartItems.length > 0 && isBillingAddressFilled(billingAddress)) {
      axios.post(`${url}/create-checkout-session`,formData)
        .then((response) => {
          console.log("Server response:", response.data);
          if (response.data.url) {
            window.location.href = response.data.url;
          }
        })
        .catch((err) => console.log("Error:", err.message));
    } 
    else {
      // Fill the form first
      alert("Please fill the cart and billing address form first.");
    }
  };

  const { t } = useTranslation();
  return (
    <>
      <button onClick={() => handleCheckout()} >{t("Place Order")} </button>
    </>
  );
};

export default PayButton;
