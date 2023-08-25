import { Fragment } from "react";
import { useLocation } from "react-router-dom"; 
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import BlogPagination from "../../wrappers/blog/BlogPagination";
import BlogPostsNoSidebar from "../../wrappers/blog/BlogPostsNoSidebar";

const BlogNoSidebar = () => {
  let { pathname } = useLocation();

  return (
    <Fragment>
      <SEO
        titleTemplate="Privacy Policy"
        description="Blog of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
         {/* breadcrumb */}
        <Breadcrumb 
          pages={[
            {label: "Home", path: process.env.PUBLIC_URL + "/" },
            {label: "Privacy Policy", path: process.env.PUBLIC_URL + pathname }
          ]} 
        />
        <div className="container">
                <div className="product-description" style={{paddingTop:'3%'}}> 

                <h3 style={{textAlign:'center'}}> <span style={{color:'red'}}>Privacy Policy </span>Please be aware of the following before using shilajit</h3>
<br/>

<p>we value and respect your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you visit or make a purchase from our website. By accessing or using our website, you agree to the terms of this Privacy Policy.</p>

<h4>Information We Collect</h4>
<p>Before starting any dietary supplement, including shilajit, it is essential to consult a qualified healthcare professional or doctor, especially if you have underlying medical conditions or are taking other medications.
</p>

<h4>Use of Information</h4>
<p>Carefully follow the dosage instructions provided on the product label or as recommended by healthcare professionals. Overdosing can lead to undesirable side effects.
</p>

<h4>Disclosure of Information</h4>
<p>Pregnant and nursing women should avoid the use of shilajit unless otherwise advised by a healthcare professional.</p>

<h4>Data Security</h4>
<p> If you experience allergic reactions such as rash, itching, swelling, or difficulty breathing after taking shilajit, discontinue use immediately and seek medical assistance.
</p>

<h4>Cookies and Tracking Technologies</h4>
<p>Shilajit may potentially interact with certain medications. Discuss the use of shilajit with your doctor if you are taking other medications to avoid unwanted interactions.</p>

<h4>Children:</h4>
<p>Keep shilajit out of reach of children, as there is insufficient research on its effect and safety for children.
</p>

<h4>Quality and source:</h4>
<p>Ensure that you purchase shilajit from reputable sources that test the product for purity and quality.</p>

<p> <b>Remember !</b> that shilajit is a dietary supplement and should not replace a balanced diet and a healthy lifestyle. If you experience any unusual side effects or health issues after taking shilajit, consult a doctor immediately. This warning is for informational purposes only and is not intended as medical advice.</p>

<p><b> Please note: </b> that this warning is general, and individual considerations may apply depending on a person's specific health and medical history. It's always best to consult a doctor before starting any new dietary supplement or medication.</p>
</div>
</div>
      </LayoutOne>
    </Fragment>
  );
};

export default BlogNoSidebar;
