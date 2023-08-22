import { Fragment } from "react"; 
import { useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import DownloadForm from "./DownloadForm";
import { LuPackageCheck } from 'react-icons/lu';
import { RiMapPinTimeLine  } from 'react-icons/ri';
import { GiExpense, GiReturnArrow  } from 'react-icons/gi';
import { MdSendTimeExtension } from 'react-icons/md';
import { Container, Col, Row } from "react-bootstrap";

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
    
            <spam className=" greetingtext" > <i>THANK YOU! for shopping with us! We want to ensure your satisfaction with your purchase. Please review our return policy conditions below:</i></spam>
            <br/>  <br/>   <br/>  
            <h4><GiReturnArrow /> Return Authorization Process:</h4>
            <p>Prior to returning the product, the customer must contact our customer service team to request a Return by submitting this form <br/>
The RA number must be clearly marked on the outside of the packaging to facilitate efficient processing.<br/><br/>
  <DownloadForm filename={Returnimg} fileUrl={ReturnForm} />
</p>
<p> <b>Please note: </b> that our return policy conditions are subject to change, and we encourage you to review them each time you make a purchase. If you have any questions or need assistance, feel free to contact our customer service team.<br/><br/>

Thank you for choosing us for your shopping needs!<br/><br/>

Sincerely,<br/>

<b>HIMALAYAN</b><br/>
Contact Information
      </p>

            </Col>

            {/* =============== */}

            <Col md={4} id="conditions">
           
            <h4><RiMapPinTimeLine /> Timeframe for Returns:</h4>

              <p>Products can only be returned within fourteen (14) days from the date of receipt.<br/>
Returns requested beyond this timeframe will not be accepted.</p>

            <h4><LuPackageCheck /> Unopened Packaging:</h4>

            <p>To be eligible for a return, the product packaging must remain unopened, intact, and in its original condition.<br/>
Any products with opened packaging will not be accepted for return.</p>

            <h4><GiExpense /> Return Expenses:</h4>

            <p>The customer is responsible for bearing the expenses associated with the return of the product.<br/>
             </p>
             <h4><MdSendTimeExtension /> Processing Time:</h4>

            <p>Once the returned product is received and inspected, we will process the refund or exchange within a reasonable timeframe.</p>
           
            {/* <h4><BsDot />Refund Method:</h4>
            <p>
                
   Refunds will be issued using the original payment method used for the purchase.<br/>
   Please allow a reasonable processing time for the refund to appear in your account.
            </p> */}


            </Col>           
            </Row>

   
         
       
           </Container>
        
      </LayoutOne>
    </Fragment>
  );
};

export default ReturnPolicy;
