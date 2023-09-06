import axios from "axios";
import { useSelector } from "react-redux";
import { url } from "../../slices/api";
import { useTranslation } from "react-i18next";

const PayButton = ({ cartItems,billingAddress  }) => {
  const handleCheckout = () => {
    console.log("cartItems:", cartItems);
    console.log("Billing:", billingAddress);
    const formData = {
      cartItems,
      billingAddress

    };
    axios.post(`${url}/create-checkout-session`,formData)
      .then((response) => {
        console.log("Server response:", response.data);
        if (response.data.url) {
          window.location.href = response.data.url;
        }
      })
      .catch((err) => console.log("Error:", err.message));
  };
  const { t } = useTranslation();
  return (
    <>
      <button onClick={() => handleCheckout()}>{t("Place Order")} </button>
    </>
  );
};

export default PayButton;
