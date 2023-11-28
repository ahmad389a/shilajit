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
        description="Ta deg tid til å lese vår personvernerklæring og kontakt oss gjerne"
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

                <h1 style={{textAlign:'center'}}> {t("Privacy Policy")}</h1>
<br/>

<p>{t("Your privacy is important to us")}. {t("This privacy policy explains how we collect")}, {t("use")}, {t("share")}, {t("and protect your personal information when you visit our website")}. {t("We encourage you to carefully read this privacy policy")} .
</p>


<p className="heading" >{t("Information We Collect")}</p>
<p>{t("When you visit our website")}, {t("we may collect the following types of information")}:
</p>

<p className="heading" > {t("Personally Identifiable Information")}(PII):</p>
<p>{t("This may include names")}, {t("email addresses")}, {t("and other information you voluntarily provide through contact forms or registration forms")}.</p>

<p className="heading" >{t("Non-Personally Identifiable Information")}:</p>
<p> {t("This may include information about your browser")}, {t("IP address")}, {t("device type")}, {t("and information about how you interact with our website through cookies and similar technologies")}.
</p>

<p className="heading" >{t("Use of Information")}</p>
<p>{t("We use the information we collect for the following purposes")}
  <ul>
    <li>- {t("To provide services you request")}, {t("such as responding to inquiries through contact forms")}.</li>
    <li>- {t("To enhance the user experience on our website")}.</li>
    <li>- {t("To send you relevant information and updates if you have consented to it")}.</li>
  </ul>
</p>

<p className="heading" >{t("Sharing of Information")}</p>
<p>{t("We do not share your personal information with third parties without your consent unless required by law")}.
</p>

<p className="heading" >{t("Information Security")}</p>
<p>{t("We take information security seriously and implement appropriate security measures to protect your personal information")}.</p>

<p className="heading" >{t("Your Rights")}</p>
<p>{t("You have the right to request access to")}, {t("correction of")}, {t("deletion of")}, {t("or limitation of the use of your personal information")}. {t("You also have the right to withdraw any consents you have provided")}.</p>

<p className="heading" >{t("Changes to the Privacy Policy")}</p>
<p>{t("We may update this privacy policy from time to time")}. {t("Any changes will be posted on this page")}, {t("and the date of the last update will be modified")}.</p>

<p className="heading" >{t("Contact Us")}</p>
<p>{t("If you have questions about our privacy policy or wish to exercise your rights")}, {t("please contact us at")}+ 47 407 35 522 </p>

</div>
</div>
      </LayoutOne>
    </Fragment>
  );
};

export default BlogNoSidebar;
