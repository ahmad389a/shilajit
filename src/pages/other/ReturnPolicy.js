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
import { useTranslation } from "react-i18next";
import "./../other/ReturnPolicy.css";

// import GoogleMap from "../../components/google-map"

const Returnimg = 'ReturnForm.pdf';
const ReturnForm = './assets/img/retunform/ReturnForm.pdf';


const ReturnPolicy = () => {
  let { pathname } = useLocation();
  const { t } = useTranslation();

  return (
    <Fragment>
      <SEO
        titleTemplate="returrett"
        description=""
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb 
          pages={[
            {label: "Hjem", path: process.env.PUBLIC_URL + "/" },
            {label: "returrett", path: process.env.PUBLIC_URL + pathname }
          ]} 
        />
          <Container >

        

          <Row style={{padding:'2%'}} >
          <h2 style={{textAlign:'center'}}> {t("RETURN POLICY")} </h2>
            <Col md={8} id="returnform">
    
            <spam className=" greetingtext" > <i>{t("We want to ensure your satisfaction with every purchase you make from us")} . {t("To provide you with a smooth and fair return process")} , {t("we have established the following guidelines")} :</i></spam>
            <br/>  <br/>   <br/>  
            <h4><GiReturnArrow /> {t("Return Authorization Process")} :</h4>
            <p>{t("To initiate a return")}, {t("please contact our customer service team")}  <Link to={process.env.PUBLIC_URL + "/contact"} style={{fontStyle:'italic'}}>
             {t("CONTACT US")}
            </Link>. {t("They will guide you through the return process")}, {t("answer any questions you may have")}, {t("and provide you with a return authorization if applicable")}.<br/><br/>
            <br/><DownloadForm filename={Returnimg} fileUrl={ReturnForm} />
</p><br/>
<p> {t("We are committed to your satisfaction and complying with all relevant laws and regulations regarding returns")}.{t("If you have any questions or concerns")} , {t("don't hesitate to reach out to our customer service team")}. {t("Thank you for choosing us")}, {t("and we appreciate your understanding of our return policy")}.<br/><br/>

{t("Thank you for choosing us for your shopping needs")}!<br/><br/>

{t("Sincerely")},<br/>

<b>{t("NATURENSSKATTER")}</b><br/>
{/* {t("Contact")}: +47 407 35 522 */}
      </p>

            </Col>

            {/* =============== */}

            <Col md={4} id="conditions">
           
            <h4><RiMapPinTimeLine />{t("Legal Right to Return")} : </h4>

              <p>{t("You have the legal right to return any product purchased from us within 14 days from the date of delivery")} , {t("provided the product is in its original condition")} .</p>

            <h4><LuPackageCheck /> {t("Unopened Products")} :</h4>

            <p>{t("To be eligible for a return")} , {t("the product must remain unopened and in its original packaging")} . {t("We understand that sometimes you may change your mind")} , {t("and we're happy to accommodate your decision as long as the product is in resalable condition")} .
</p>

            <h4><GiExpense />{t("Proof of Purchase")}  :</h4>

            <p>{t("Please ensure you have proof of purchase")} , {t("such as a receipt or order confirmation")} , {t("when requesting a return")} .{t("This helps us process your return efficiently")}  .
<br/>
             </p>
             <h4><MdSendTimeExtension /> {t("Refund or Exchange")} :</h4>

            <p>{t("Once we receive and inspect the returned product")} , {t("we will process your refund or exchange")} , {t("as per your preference and our policies")} .{t("Please allow 7 days for us to complete this process")}  .</p>
           
            {/* <h4><BsDot />Exceptions: </h4>
            <p>
                
            Certain products may not be eligible for return due to hygiene or safety reasons. Please check the product description or contact our customer service team for specific information on product eligibility.
            </p> */}


            </Col>           
            </Row>

   
         
       
           </Container>
        
      </LayoutOne>
    </Fragment>
  );
};

export default ReturnPolicy;
