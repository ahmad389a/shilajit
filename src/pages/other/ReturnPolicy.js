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

// import GoogleMap from "../../components/google-map"

const Returnimg = 'ReturnForm.pdf';
const ReturnForm = './assets/img/retunform/ReturnForm.pdf';


const ReturnPolicy = () => {
  let { pathname } = useLocation();

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
            {label: "Return Policy", path: process.env.PUBLIC_URL + pathname }
          ]} 
        />
          <Container >

        

          <Row style={{padding:'2%'}} >
          <h2 style={{textAlign:'center'}}>RETURN POLICY</h2>
            <Col md={8} id="returnform">
    
            <spam className=" greetingtext" > <i>We want to ensure your satisfaction with every purchase you make from us. To provide you with a smooth and fair return process, we have established the following guidelines:</i></spam>
            <br/>  <br/>   <br/>  
            <h4><GiReturnArrow /> Return Authorization Process:</h4>
            <p>To initiate a return, please contact our customer service team  <Link to={process.env.PUBLIC_URL + "/contact"} style={{fontStyle:'italic'}}>
             {("CONTACT US")}
            </Link>. They will guide you through the return process, answer any questions you may have, and provide you with a return authorization if applicable.<br/><br/>
            <br/><DownloadForm filename={Returnimg} fileUrl={ReturnForm} />
</p><br/>
<p> We are committed to your satisfaction and complying with all relevant laws and regulations regarding returns. If you have any questions or concerns, don't hesitate to reach out to our customer service team. Thank you for choosing us, and we appreciate your understanding of our return policy.<br/><br/>

Thank you for choosing us for your shopping needs!<br/><br/>

Sincerely,<br/>

<b>HIMALAYAN</b><br/>
Contact Information
      </p>

            </Col>

            {/* =============== */}

            <Col md={4} id="conditions">
           
            <h4><RiMapPinTimeLine /> Legal Right to Return: </h4>

              <p>You have the legal right to return any product purchased from us within 14 days from the date of delivery, provided the product is in its original condition.</p>

            <h4><LuPackageCheck /> Unopened Products:</h4>

            <p>To be eligible for a return, the product must remain unopened and in its original packaging. We understand that sometimes you may change your mind, and we're happy to accommodate your decision as long as the product is in resalable condition.
</p>

            <h4><GiExpense /> Proof of Purchase:</h4>

            <p>Please ensure you have proof of purchase, such as a receipt or order confirmation, when requesting a return. This helps us process your return efficiently.
<br/>
             </p>
             <h4><MdSendTimeExtension />  Refund or Exchange:</h4>

            <p>Once we receive and inspect the returned product, we will process your refund or exchange, as per your preference and our policies. Please allow 7 days for us to complete this process.</p>
           
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
