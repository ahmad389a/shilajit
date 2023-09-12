import axios from "axios";
import { useSelector } from "react-redux";
import { url } from "../../slices/api";
import { useTranslation } from "react-i18next";



const PayButton = ({ cartItems, billingAddress }) => {
  const handleCheckout = () => {
    console.log("cartItems:", cartItems);
    console.log("Billing:", billingAddress);
    const formData = {
      cartItems,
      billingAddress
    };
    const isBillingAddressFilled = (billingAddress) => {
      // Get the keys of the billing address object
      const keys = Object.keys(billingAddress);
      // Check if the form is empty
      if (keys.length === 0) {
        alert('Please fill the form first.');
        return false;
      }
      // Loop through the keys
      for (let key of keys) {
        // If any value is empty, return false and alert the user
        if (!billingAddress[key]) {
          alert(`You have missed the "${key}" field. Please fill it first.`);
          return false;
        }
      }
      // If all values are not empty, return true
      return true;
    };

    // Check if both cart and billing address are provided
    if (cartItems.length > 0 && isBillingAddressFilled(billingAddress)) {
      // Proceed to checkout
      axios.post(`${url}/create-checkout-session`,formData)
        .then((response) => {
          console.log("Server response:", response.data);
          if (response.data.url) {
            window.location.href = response.data.url;
          }
        })
        .catch((err) => console.log("Error:", err.message));
    } 
    
    // else {
    //   // Fill the form first
    //   alert("Please fill the cart and billing address form first.");
    // }
  };

  const { t } = useTranslation();
  return (
    <>
      <button onClick={() => handleCheckout()} >{t("Place Order")} </button>
    </>
  );
};

export default PayButton;
