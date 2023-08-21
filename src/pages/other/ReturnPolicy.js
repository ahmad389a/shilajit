import { Fragment } from "react"; 
import { useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
// import GoogleMap from "../../components/google-map"

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
          <div className="container">
            <h2 style={{textAlign:'center'}}>RETURN POLICY</h2>
            <p>Thank you for shopping with us! We want to ensure your satisfaction with your purchase. Please review our return policy conditions below:</p>
            <h4>Timeframe for Returns:</h4>
            <p>Products can only be returned within fourteen (14) days from the date of receipt.<br/>
Returns requested beyond this timeframe will not be accepted.</p>

            <h4>Unopened Packaging:</h4>
            <p>To be eligible for a return, the product packaging must remain unopened, intact, and in its original condition.<br/>
Any products with opened packaging will not be accepted for return.</p>

            <h4>Return Expenses:</h4>
            <p>The customer is responsible for bearing the expenses associated with the return of the product.<br/>
This includes any shipping, handling, or other costs incurred in the process of returning the product.</p> 

             <h4>Return Authorization Process:</h4>
            <p>Prior to returning the product, the customer must contact our customer service team to request a Return by submitting this form <br/>
The RA number must be clearly marked on the outside of the packaging to facilitate efficient processing.</p>

            <h4>Processing Time:</h4>
            <p>Once the returned product is received and inspected, we will process the refund or exchange within a reasonable timeframe.</p>

            <h4>Refund Method:</h4>
            <p>
                
Refunds will be issued using the original payment method used for the purchase.<br/>
Please allow a reasonable processing time for the refund to appear in your account.
            </p>
           </div>
        
      </LayoutOne>
    </Fragment>
  );
};

export default ReturnPolicy;
