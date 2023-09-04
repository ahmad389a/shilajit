import axios from "axios";
import { useSelector } from "react-redux";
import { url } from "../../slices/api";

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

  return (
    <>
      <button onClick={() => handleCheckout()}>Check out</button>
    </>
  );
};

export default PayButton;
