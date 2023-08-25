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
        <div className="container mb-5">
                <div className="product-description" style={{paddingTop:'3%'}}> 

                <h3 style={{textAlign:'center'}}> Privacy Policy </h3>
<br/>

<p>Your privacy is important to us. This privacy policy explains how we collect, use, share, and protect your personal information when you visit our website [website domain]. We encourage you to carefully read this privacy policy.
</p>

<h4>Information We Collect</h4>
<p>Before starting any dietary supplement, including shilajit, it is essential to consult a qualified healthcare professional or doctor, especially if you have underlying medical conditions or are taking other medications.
</p>

<h4>Use of Information</h4>
<p>When you visit our website, we may collect the following types of information:
</p>

<h4>Personally Identifiable Information (PII):</h4>
<p>This may include names, email addresses, and other information you voluntarily provide through contact forms or registration forms.</p>

<h4>Non-Personally Identifiable Information:</h4>
<p> This may include information about your browser, IP address, device type, and information about how you interact with our website through cookies and similar technologies.
</p>

<h4>How We Use the Information</h4>
<p>We use the information we collect for the following purposes:
  <ul>
    <li>- To provide services you request, such as responding to inquiries through contact forms.</li>
    <li>- To enhance the user experience on our website.</li>
    <li>- To send you relevant information and updates if you have consented to it.</li>
  </ul>
</p>

<h4>Sharing of Information</h4>
<p>We do not share your personal information with third parties without your consent unless required by law.
</p>

<h4>Information Security</h4>
<p>We take information security seriously and implement appropriate security measures to protect your personal information.</p>

<h4>Your Rights</h4>
<p>You have the right to request access to, correction of, deletion of, or limitation of the use of your personal information. You also have the right to withdraw any consents you have provided.</p>

<h4>Changes to the Privacy Policy</h4>
<p>We may update this privacy policy from time to time. Any changes will be posted on this page, and the date of the last update will be modified.</p>

<h4>Contact Us</h4>
<p>If you have questions about our privacy policy or wish to exercise your rights, please contact us at + 47 407 35 522 </p>

</div>
</div>
      </LayoutOne>
    </Fragment>
  );
};

export default BlogNoSidebar;
