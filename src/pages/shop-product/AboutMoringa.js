import { Fragment } from "react";
import { useLocation } from "react-router-dom"; 
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import BlogPagination from "../../wrappers/blog/BlogPagination";
import BlogPostsNoSidebar from "../../wrappers/blog/BlogPostsNoSidebar";
import TeamMemberOne from "../../wrappers/team-member/TeamMemberOne";
import Card from 'react-bootstrap/Card';
import { GiOverdose }  from "react-icons/gi";
import { LiaChildSolid }  from "react-icons/lia";
import { LiaAllergiesSolid }  from "react-icons/lia";
import { MdOutlineHealthAndSafety }  from "react-icons/md";
import {  FaPersonBreastfeeding  } from "react-icons/fa6";
// import {  FaPersonBreastfeeding } from "react-icons/fa";
import { RiMedicineBottleLine }  from "react-icons/ri";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";


const AboutMoringa = () => {
  let { pathname } = useLocation();
  const { t } = useTranslation();

  return (
    <Fragment>
      <SEO
        titleTemplate="om Moringa"
        description="Experience Better Health with Pure Shilajit From Himalayan! Get Authentic Shilajit Products for More Energy and Wellness. Shop Now"
      />
      <LayoutOne headerTop="visible">
         {/* breadcrumb */}
        <Breadcrumb 
          pages={[
            {label: "Hjem", path: process.env.PUBLIC_URL + "/" },
            {label: "om Moringa", path: process.env.PUBLIC_URL + pathname }
          ]} 
        />
        <div className="container">
        <h1 style={{textAlign:'center',paddingTop:'3%',fontSize:'33px',marginBottom:'15px'}}>{t("Moringa")}:  {t("Your Source of Nutritious Wellbeing")} </h1>

             <p style={{textAlign:'center'}}>{t("Moringa powder is a natural dietary supplement extracted from the leaves of the Moringa oleifera tree")}  {t("one of the most nutritious trees on earth")}- {t("This fast-growing deciduous tree, also known as the trumpet tree or miracle tree, originated in parts of Africa, Asia and South America")}.
             {t("Historically, moringa has been an important plant in traditional medicine and food culture in these regions for centuries")}.</p>
       {/* ========================cards========================================= */}


        {/* ===============Benifits=============== */}

                <div className="product-description">              
          <h3 style={{textAlign:'center'}}>{t("Unveiling the Moringa Tree: Health Benefits")}</h3>

  <h4>{t("Rich in Nutrients")}:</h4>
  <p>{t("Moringa powder is rich in nutrients, including vitamins such as A, C, E, K and B vitamins, as well as essential minerals such as calcium, iron, magnesium, potassium and proteins")}, {t("It is also a significant source of antioxidants that help protect the body against harmful free radicals")}.</p>

  <h4>{t("A Natural Pharmacy for Health and Wellness")}:</h4>
  <p>{t("Traditionally, different parts of the moringa tree have been used to treat various health problems")}. {t("The leaves have been used to treat stomach ulcers, inflammatory conditions and as a means to increase energy levels")}.{t("The roots have been used to relieve pain, while the seeds have been used to purify water due to their natural antimicrobial properties")}. {t("")}{t("")}{t("")}</p>

  <h4>{t("Harmony with Nature")}:</h4>
  <p>{t("The moringa tree is also notable for its sustainable nature")}.{t("The whole tree can be used, from leaves to seeds, which reduces food waste and supports sustainable agriculture and environmentally friendly practices")}.</p>
   
  <h4>{t("A Modern Superfood Boosting Health and Nutrition")}:</h4>
  <p>{t("In modern times, moringa powder has gained increased popularity as a dietary supplement due to its potentially beneficial effect on health and well-being")},{t("It is often used by vegetarians, vegans and those seeking a nutritious supplement to their diet")}. {t("It can easily be mixed into smoothies, juices, soups or salad dressings to increase the nutritional value of meals")}.</p>
   
  <h4>{t("Exploring the Science: Moringa Powder's Health Claims and Considerations")}:</h4>
  
  <p>{t("Scientific research supports many of the claims for health benefits of moringa powder, including its potential anti-inflammatory, antioxidant and energy-boosting properties")}. {t("However, it is important to note that while moringa powder has many potential health benefits, it should be used as part of a balanced diet and healthy lifestyle")}. {t("It is recommended to consult a healthcare professional before introducing new supplements into your diet, especially if there are underlying health concerns or medical conditions")}.</p>
  <Link to="https://www.ashpveda.com/blogs/health/moringa-powder-benefits-and-uses?gclid=CjwKCAjw9-6oBhBaEiwAHv1QvBAC_bv1oKc2v3K0gMRnM5l4B0sRoFM6icqTNNtXXqoZl95LVjQ0UhoCRr4QAvD_BwE" target="_blank" style={{color:'green'}}>
              {t("Other Benefits of Moringa")}
            </Link><br/> 
 
 
  <h4>{t("Process for making Moringa powder")}?</h4>
  <p>{t("We attach great importance to quality and hygiene in our products")}, {t("Our production of moringa powder follows carefully designed steps to ensure a nutritious product")} , {t("The process starts with hand-picking fresh moringa leaves from plantations")}, {t("with a focus on sustainable harvesting")}. {t("Followed by gentle washing")}, {t("shade drying and thorough quality control")}, {t("The leaves then undergo careful grinding processes to obtain a fine powder")}.{t("The moringa powder is then packed, ready for delivery")} , {t("Our dedication to quality is reflected in every step and we are proud to support a healthy lifestyle through moringa powder")}.
  {t("This dietary supplement has been carefully developed to support a healthy and balanced lifestyle")}.
</p><br/>
</div>
<hr/>
{/* ===========Warnings============= */}

<h3 style={{textAlign:'center'}}> <span style={{color:'red'}}>{t("Warning")}: </span>{t("Be aware of the following before consuming Moringa")}</h3>
<br/>

<p style={{textAlign:'center'}}>{t("Shilajit is a natural dietary supplement that has been used in traditional medicine for centuries")}. {t("Before you begin using shilajit")}, {t("Ensure that you purchase shilajit from reputable sources that test the product for purity and quality")}.
{t("please consider the following warnings and guidelines")}:</p><br/>

<div className="row">
  <div className="col-md-4">
  <Card style={{height:'95%', textAlign:'center', backgroundColor:'#78d23d'}}>
      <Card.Body>
      <h2> <MdOutlineHealthAndSafety/></h2>
        <Card.Title style={{fontWeight:'500'}}>{t("Consult a healthcare professional")}:</Card.Title>
     
        <Card.Text>
        {t("This dietary supplement is intended as an addition to a balanced and varied diet")}, {t("and should not be used as a substitute")}.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
  <div className="col-md-4">
  <Card style={{height:'95%', textAlign:'center', backgroundColor:'#78d23d'}}>
      <Card.Body>
      <h2> <GiOverdose/></h2>
        <Card.Title style={{fontWeight:'500'}}>{t("Dosage")}</Card.Title>
     
        <Card.Text>
        {t("Recommended daily doses")}:10g  {t("Please follow the indicated dosage and do not exceed it")}.{t("We recommend starting with 5g")}.{t("then increasing to 10g after the body has adapted to the supplement")}
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
  <div className="col-md-4 col-lg-4">
  <Card style={{height:'95%',  textAlign:'center', backgroundColor:'#78d23d'}}>
      <Card.Body>
      <h2> <FaPersonBreastfeeding/></h2>
        <Card.Title style={{fontWeight:'500'}}>{t("Pregnant and nursing women")}:</Card.Title>
       
        <Card.Text>
        {t("Pregnant, lactating women and people with underlying diseases should consult a healthcare professional before taking the dietary supplement")}.

        </Card.Text>
      </Card.Body>
    </Card>
  </div>
</div>
{/* ===========Row 2============= */}

<div className="row">
  <div className="col-md-4">
  <Card  style={{height:'95%',  textAlign:'center', backgroundColor:'#78d23d'}}>
      <Card.Body>
      <h2> <LiaAllergiesSolid/></h2>
        <Card.Title style={{fontWeight:'500'}}>{t("Allergic reactions")}:</Card.Title>
    
        <Card.Text>
        {t("If you experience allergic reactions such as rash")}, {t("itching")}, {t("swelling")}, {t("or difficulty breathing after taking Moringa")}, {t("discontinue use immediately and seek medical assistance")}.

        </Card.Text>
      </Card.Body>
    </Card>
  </div>
  <div className="col-md-4">
  <Card style={{height:'95%',  textAlign:'center', backgroundColor:'#78d23d'}}>
      <Card.Body>
      <h2> <RiMedicineBottleLine/></h2>
        <Card.Title style={{fontWeight:'500'}}>{t("Storage")}:</Card.Title>
      
        <Card.Text>
        {t("Please store the supplement in a dry and cool place and avoid direct sunlight for best shelf life")}.

        </Card.Text>
      </Card.Body>
    </Card>
  </div>
  <div className="col-md-4 col-lg-4">
  <Card style={{height:'95%',  textAlign:'center', backgroundColor:'#78d23d'}}>
      <Card.Body>
      <h2> <LiaChildSolid/></h2>
        <Card.Title style={{fontWeight:'500'}}>{t("Children")}:</Card.Title>
        <Card.Text>
        {t("Keep shilajit out of reach of children")}.<br/> {t("This product should not be used by persons under the age of 18")}

        </Card.Text>
      </Card.Body>
    </Card>
  </div>
</div>




{/* ========================== */}

{/* <div className="product-description" style={{paddingTop:'3%'}}> 

<p> <b>{t("Remember")}  !</b>{t("that shilajit is a dietary supplement and should not replace a balanced diet and a healthy lifestyle")} . {t("If you experience any unusual side effects or health issues after taking shilajit")},{t("consult a doctor immediately")} . {t("This warning is for informational purposes only and is not intended as medical advice")}.</p>

<p><b> {t("Please note")}: </b> {t("Shilajit is not a medicine and should not be used as an alternative to medication")}. {t("Its effects can vary from person to person")}. {t("Shilajit is a resin-like substance that is sourced from the Himalayan mountains and is often marketed as a natural health supplement")}. {t("While it contains various minerals and compounds that may have potential health benefits")} , 
{t("it is essential to understand that it is not a substitute for medical treatment")}. {t("If you have specific health concerns or conditions")}, {t("it is advisable to consult with a healthcare professional for proper diagnosis and treatment")}. {t("Additionally")},{t("individual reactions to shilajit can differ")} , {t("so it's important to use it cautiously and in accordance with recommended guidelines")}. </p>
</div> */}
</div>
      </LayoutOne>
    </Fragment>
  );
};

export default AboutMoringa;
