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
  let { pathname,search } = useLocation();
  const params = new URLSearchParams(search);
  const orderNumberParam = params.get("orderNumber");

  const { t } = useTranslation();
  const [orderNumber, setOrderNumber] = useState(orderNumberParam);
  const backendUrl = "https://backend.naturensskatter.com";
  const orderStatusRoute = "order-status";

  useEffect(() => {
    if (!orderNumberParam) {
      window.location.href = process.env.PUBLIC_URL + "/";
      return;
    }

    axios
      .get(`${backendUrl}/${orderStatusRoute}?orderNumber=${orderNumberParam}`)
      .then((response) => {
        setOrderNumber(response.data.orderNumber);
      })
      .catch((error) => {
        console.error("Error fetching order status:", error);
      });
  }, [orderNumberParam]);

  return (
    <Fragment>
      <SEO
        titleTemplate="bestillingssuksess"
        description="Hold deg oppdatert med bestillingsstatusen din!"
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "Hjem", path: process.env.PUBLIC_URL + "/" },
            { label: "Ordre status", path: process.env.PUBLIC_URL + pathname },
          ]}
        />
          <Container >
         
         <div className="p-4" style={{textAlign:'center', color:'#047b04'}}>
          <div style={{textAlign:'center'}}>
            <img src="../assets/img/icon-img/order-sucess.png" alt="status imege" height={100} width={100} style={{display:'inline-block'}}/>
          </div><br/>
          <h4>{t("ORDER PLACED SUCCESSFULLY")} !</h4>
          <span> {t("Order ID")} :</span> <span>#{orderNumberParam}</span>
          <p> {t("Thank you for choosing our service")} ! <br/> {t("You will receive an order confirmation email shortly with expected delivery date for your item")}.</p>
         </div>        
       
           </Container>
        
      </LayoutOne>
    </Fragment>
  );
};

export default OrderStatus;
