import { Fragment } from "react";
import { useLocation } from "react-router-dom"; 
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import BlogPagination from "../../wrappers/blog/BlogPagination";
import BlogPostsNoSidebar from "../../wrappers/blog/BlogPostsNoSidebar";
import { useTranslation } from "react-i18next";

const BlogNoSidebar = () => {
  let { pathname } = useLocation();
  const { t } = useTranslation();

  return (
    <Fragment>
      <SEO
        titleTemplate="Personvernerklæring"
        description="."
      />
      <LayoutOne headerTop="visible">
         {/* breadcrumb */}
        <Breadcrumb 
          pages={[
            {label: "Hjem", path: process.env.PUBLIC_URL + "/" },
            {label: "Personvernerklæring", path: process.env.PUBLIC_URL + pathname }
          ]} 
        />
        <div className="container mb-5">
                <div className="product-description" style={{paddingTop:'3%'}}> 

                <h3 style={{textAlign:'center'}}> {t("Privacy Policy")}</h3>
<br/>

<p>{t("Your privacy is important to us")}. {t("This privacy policy explains how we collect")}, {t("use")}, {t("share")}, {t("and protect your personal information when you visit our website")}. {t("We encourage you to carefully read this privacy policy")} .
</p>


<h4>{t("Information We Collect")}</h4>
<p>{t("When you visit our website")}, {t("we may collect the following types of information")}:
</p>

<h4> {t("Personally Identifiable Information")}(PII):</h4>
<p>{t("This may include names")}, {t("email addresses")}, {t("and other information you voluntarily provide through contact forms or registration forms")}.</p>

<h4>{t("Non-Personally Identifiable Information")}:</h4>
<p> {t("This may include information about your browser")}, {t("IP address")}, {t("device type")}, {t("and information about how you interact with our website through cookies and similar technologies")}.
</p>

<h4>{t("Use of Information")}</h4>
<p>{t("We use the information we collect for the following purposes")}:
  <ul>
    <li>- {t("To provide services you request")}, {t("such as responding to inquiries through contact forms")}.</li>
    <li>- {t("To enhance the user experience on our website")}.</li>
    <li>- {t("To send you relevant information and updates if you have consented to it")}.</li>
  </ul>
</p>

<h4>{t("Sharing of Information")}</h4>
<p>{t("We do not share your personal information with third parties without your consent unless required by law")}.
</p>

<h4>{t("Information Security")}</h4>
<p>{t("We take information security seriously and implement appropriate security measures to protect your personal information")}.</p>

<h4>{t("Your Rights")}</h4>
<p>{t("You have the right to request access to")}, {t("correction of")}, {t("deletion of")}, {t("or limitation of the use of your personal information")}. {t("You also have the right to withdraw any consents you have provided")}.</p>

<h4>{t("Changes to the Privacy Policy")}</h4>
<p>{t("We may update this privacy policy from time to time")}. {t("Any changes will be posted on this page")}, {t("and the date of the last update will be modified")}.</p>

<h4>{t("Contact Us")}</h4>
<p>{t("If you have questions about our privacy policy or wish to exercise your rights")}, {t("please contact us at")}+ 47 407 35 522 </p>

</div>
</div>
      </LayoutOne>
    </Fragment>
  );
};

export default BlogNoSidebar;
