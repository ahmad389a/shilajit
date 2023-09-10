import { Fragment } from "react"; 
import { useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./../other/ReturnPolicy.css";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import axios from "axios";
const OrderStatus = () => {
  let { pathname } = useLocation();
  const { t } = useTranslation();
  const [orderNumber, setOrderNumber] = useState(null);
  const backendUrl = "http://localhost:3000"; 
  const orderStatusRoute = "/order-status";

useEffect(() => {
  axios
  .get(backendUrl + orderStatusRoute)
    .then((response) => {
      setOrderNumber(response.data.orderNumber);
    })
    .catch((error) => {
      console.error("Error fetching order status:", error);
    });
}, []);

  return (
    <Fragment>
      <SEO
        titleTemplate="bestillingssuksess"
        description="."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb 
          pages={[
            {label: "Heim", path: process.env.PUBLIC_URL + "/" },
            {label: "Ordre status", path: process.env.PUBLIC_URL + pathname }
          ]} 
        />
          <Container >
         
         <div className="p-4" style={{textAlign:'center', color:'#047b04'}}>
          <div style={{textAlign:'center'}}>
            <img src="../assets/img/icon-img/order-sucess.png" alt="status imege" height={100} width={100} style={{display:'inline-block'}}/>
          </div><br/>
          <h4>{t("ORDER PLACED SUCCESSFULLY")} !</h4>
          <spam> {t("Order ID")} :</spam> <spam>{orderNumber}</spam>
          <p> {t("Thank you for choosing our service")} ! <br/> {t("You will receive an order confirmation email shortly with expected delivery date for your item")}.</p>
         </div>        
       
           </Container>
        
      </LayoutOne>
    </Fragment>
  );
};

export default OrderStatus;
