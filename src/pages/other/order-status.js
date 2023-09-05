import { Fragment } from "react"; 
import { useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import DownloadForm from "./DownloadForm";
import { LuPackageCheck } from 'react-icons/lu';
import { RiMapPinTimeLine  } from 'react-icons/ri';
import { BsDot } from 'react-icons/bs';
import { GiExpense, GiReturnArrow  } from 'react-icons/gi';
import { MdSendTimeExtension } from 'react-icons/md';
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./../other/ReturnPolicy.css";
import { useTranslation } from "react-i18next";

// import GoogleMap from "../../components/google-map"




const OrderStatus = () => {
  let { pathname } = useLocation();
  const { t } = useTranslation();

  return (
    <Fragment>
      <SEO
        titleTemplate="ReturnPolicy"
        description="Contact page of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb 
          pages={[
            {label: "Home", path: process.env.PUBLIC_URL + "/" },
            {label: "Order Status", path: process.env.PUBLIC_URL + pathname }
          ]} 
        />
          <Container >
         
         <div className="p-4" style={{textAlign:'center', color:'#047b04'}}>
          <div style={{textAlign:'center'}}>
            <img src="../assets/img/icon-img/order-sucess.png" alt="status imege" height={100} width={100} style={{display:'inline-block'}}/>
          </div><br/>
          <h4>{t("ORDER PLACED SUCCESSFULLY")} !</h4>
          <spam> {t("Order ID")} :</spam> <spam>d8o9566777</spam>
          <p> {t("Thank you for choosing our service")} ! <br/> {t("You will receive an order confirmation email shortly with expected delivery date for your item")}.</p>
         </div>
        
{/* 
          <col style="padding: 3%;">
            <col style=" text-align: center;"> 
                 <img src="..\assets\images\order-sucess.png" alt="Order image" height="100" width="100" style="  display: inline-block;"/>
            </col><br/>
           <h4 style="color: #82C815; text-align:center;"> ORDER PLACED SUCCESSFULLY</h4>
         </col> */}

   
         
       
           </Container>
        
      </LayoutOne>
    </Fragment>
  );
};

export default OrderStatus;
