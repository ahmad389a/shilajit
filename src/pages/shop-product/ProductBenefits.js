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
const ProductBenefits = () => {
  let { pathname } = useLocation();
  const { t } = useTranslation();

  return (
    <Fragment>
      <SEO
        titleTemplate="om Shilajit"
        description="Opplev bedre helse med ren Shilajit fra Himalaya! Få autentiske Shilajit-produkter for mer energi og velvære. Handle nå!"
      />
      <LayoutOne headerTop="visible">
         {/* breadcrumb */}
        <Breadcrumb 
          pages={[
            {label: "Hjem", path: process.env.PUBLIC_URL + "/" },
            {label: "om Shilajit", path: process.env.PUBLIC_URL + pathname }
          ]} 
        />
        <div className="container">
        <h1 style={{textAlign:'center',paddingTop:'3%'}}> {t("Pure Shilajit From Himalayan-Naturensskatter")} </h1>

             <p style={{textAlign:'center'}}>{t("Pure Shilajit From Himalayan is a blackish-brown tar-like material")}  {t("collected from the Himalayan mountain ranges and renowned as Elixir of Life")}- {t("your all-time superfood")}.
             {t("As more individuals resort to natural")}, {t("herbal solutions for their health and well-being")}, {t("how far might genuine Himalayan Shilajit fall in the race of the top most effective herbs")}? 
             {t("It is one of the most potent rejuvenating anti-aging blockbusters known to mankind")}. {t("Shilajit is said to have mystical healing abilities")}. {t("So")},{t("what exactly is this tar-like")} ,{t("sticky substance")} , {t("shilajit")}? {t("Let's learn everything we can about this mystical black weed")}.
</p>
       {/* ========================cards========================================= */}
<div className="row pt-5 pb-5">
  <div className="col-md-1 col-lg-1"></div>
<div className="col-md-5 col-lg-5">
       <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="/assets/img/team/Pure-Shilajit-From-Himalayan-team-1.webp" alt="Pure-Shilajit-From-Himalayan-team-1" data-tags="shilajit bruker for mannlige,shilajit bruker for kvinner,shilajit fordeler,ren shilajit fra Himalaya,shilajit benefits for female,shilajit uses,shilajit dosage,Pure shilajit from Himalaya,Naturensskatter"/>
      <Card.Body>
        <Card.Title><b>{t("Origin Of Pure Shilajit From Himalayan")}</b></Card.Title>
        <Card.Text>
        {t("The plant life in the Himalayan region")},  {t("which encircles the expanse of China")} ,  {t("Tibet")}, 
        {t("and other regions of Central Asia")}, {t("is thought to be the source of Shilajit")} .
        {t("Shilajit is a viscous resin that oozes out of crevices in the Himalayan mountains throughout the summer as the heat of the  season raises the temperature of the rock")}
       .  {t("It develops over many years as a result of the decay of plants and the activities of unusual microorganisms like Trifolium Repens and Euphorbia Royleana")}. {t("Shilajit is thought by experts to be a millennia-old creation of nature because it takes centuries to develop")} .
        </Card.Text>        
      </Card.Body>
    </Card>
    </div>
{/* ------------------ */}
<div className="col-md-5 col-lg-5">
<Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="/assets/img/team/Pure-Shilajit-From-Himalayan-team-3.webp" alt="Pure-Shilajit-From-Himalayan-team-3" data-tags="shilajit bruker for mannlige,shilajit bruker for kvinner,shilajit fordeler,ren shilajit fra Himalaya,shilajit benefits for female,shilajit uses,shilajit dosage,Pure shilajit from Himalaya,Naturensskatter" />
      <Card.Body>
        <Card.Title><b>{t("Ingredients In Pure Shilajit From Himalayan")}</b></Card.Title>
        <Card.Text>
        {t("There are allegedly more than 85 ionic minerals in Shilajit")} .  {t("Fulvic Acids")}, {t("Dibenzo Alpha Pyrones")} ,  {t("Humans")},  {t("Humic Acids")},  {t("trace minerals")},  {t("Vitamins")} A, B, C, and P ( {t("citrines")}), 
        {t("phospholipids and polyphenol complexes")},  {t("and Terpenoids are the main active constituents in Shilajit")}.  {t("Microelements")} ( {t("cobalt")},  {t("nickel")},  {t("copper")},  {t("zinc")},  {t("manganese")},  {t("chrome")},  {t("iron")},  {t("magnesium")},  {t("and others")}) 
        {t("are additionally present")}.  {t("The majority of shilajit formulations include between 60 and 80 percent fulvic acid")}, 
        {t("and the more fulvic acid a molecule has")},  {t("the more anti-aging benefits it has")}.
        </Card.Text>
       
      </Card.Body>
    </Card>
    </div>
    </div>

        {/* ===============Benifits=============== */}

                <div className="product-description">              
          <h3 style={{textAlign:'center'}}>{t("Benefits of Pure Shilajit From Himalayan")}</h3>

  <h4>{t("Energy and Stamina")}:</h4>
  <p>  <Link to={process.env.PUBLIC_URL + "/"} style={{color:'green'}}>
              {t("Pure Shilajit From Himalayan")}
            </Link> {t("has been used for centuries to increase physical stamina and energy levels")}. {t("It is thought to aid in the body's energy-producing activities")}, {t("especially through assisting with the metabolism of fats and carbohydrates")}. {t("Shilajit's possible energising benefits may be attributable to its involvement in assisting mitochondrial function")},{t("which is in charge of generating energy within cells")} .</p>

  <h4>{t("Rich in Minerals and Fulvic Acid")}:</h4>
  <p>{t("Pure Shilajit From Himalayan is a food that is abundant in minerals and fulvic acid")}, {t("both of which are necessary for many body processes")}.{t("Magnesium")} , {t("iron")}, {t("zinc")}, {t("copper")},{t("and selenium are a few of these")} . {t("These minerals help with metabolic functions")},{t("immune system support")} ,{t("and bone health maintenance")} .{t("Shilajit contains fulvic acid")} , {t("a natural substance that is proven to improve the body's absorption of minerals and other nutrients")}.{t("It might improve these nutrients' bioavailability by assisting in their transit through cell membranes")} .</p>

  <h4>{t("Anti-Aging Superstar")}:</h4>
  <p>{t("Pure Shilajit From Himalayan has an unrivalled ability to slow and reverse the ageing process")}. {t("It aids in the acceleration of protein and nucleic acid metabolism and accelerates energy-producing pathways")}.</p>

  <h4>{t("Male Health")}:</h4>
  <p>{t("Pure Shilajit From Himalayan has long been utilised to support the health of male reproduction")}.{t("It is thought to have favourable effects on testosterone levels")} , {t("which are essential for male reproductive health as well as muscle and bone density")}. {t("Shilajit intake may increase sperm count")},{t("motility")} ,{t("and fertility in males")} ,{t("according to some studies")} , {t("though more studies are required to completely understand these benefits")}.</p>
   
  <h4>{t("Bone Wellness")}:</h4>
  <p>{t("Calcium and magnesium are two minerals found in shilajit that are crucial for supporting strong")},{t("healthy bones")}. {t("To avoid disorders like osteoporosis")}, {t("which results in weakening bones and an elevated risk of fractures")},{t("an adequate intake of these minerals is necessary")} .{t("Shilajit may support general bone health and density by supplying these minerals")} .</p>
   
  <h4>{t("Shilajit For Skin Care")}:</h4>
  <p>{t("Acne and dull skin issues can be treated with Shilajit")}. {t("Shilajit's anti-inflammatory qualities aid in preventing the cellular harm brought on by free radicals")}. {t("It can be combined with your usual face packs to give you skin that is naturally glowing")}.</p>
  
  <h4>{t("Stress Reliever")}:</h4>
  <p>{t("Because of the androgen-like qualities of Shilajit")},{t("it may help balance out stress-causing hormones")} , {t("making it simpler for both your mind and body to deal with stress signals in a healthier and calmer manner")}.</p>

  <h4>{t("Other Benefits")}:</h4>
  <p> <Link to="https://www.medicalnewstoday.com/articles/320318" target="_blank" style={{color:'green'}}>
              {t("Other Benefits of Pure Shilajit From Himalayan")}
            </Link> {t("is thought to have a number of advantages")}, {t("including being rich in minerals and fulvic acid")}, {t("which promote nutrient absorption and cellular function")}. {t("Antioxidants in it can fight off free radicals and promote cellular health")}.{t("It has long been used to increase energy and endurance")} , 
  {t("but it may also improve memory and focus while protecting brain cells")}, {t("which could enhance cognitive performance")}. {t("It could help with illnesses like arthritis because of its anti-inflammatory effects")}. {t("Shilajit's immuno-modulating properties may help the immune system function better")}.
  {t("Its nutrients and antioxidants support skin health by potentially having anti-aging benefits")} .{t("It might have a favourable effect on testosterone levels and sexual function in men")}. {t("The mineral content")}, {t("which includes calcium and magnesium")},{t("may help maintain healthy bones")} .</p>
  
  <h4>{t("How to use Pure Shilajit From Himalayan")}?</h4>
  <p>{t("Dissolve with milk")}, {t("tea")} , {t("or warm")}, {t("non-chlorinated water to drink")}. {t("For general wellbeing")}, {t("we advise beginning with a rice grain to pea-sized quantity")}, {t("once day")}.{t("The dosage can be raised for more power and effect")} , {t("but it shouldn't go over 150-500 mg daily")}.
  {t("Pure Shilajit From Himalayan is known as the")} "{t("Nectar of God")}," {t("capable of curing all illnesses and maintaining youth due to its medicinal properties")}. {t("It is referred to as Amrit or the Fountain of Youth in ancient Chinese and Indian literature")}.
</p><br/>
</div>
<hr/>
{/* ===========Warnings============= */}

<h3 style={{textAlign:'center'}}> <span style={{color:'red'}}>{t("Warning")}: </span>{t("Please be aware of the following before using shilajit")}</h3>
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
        {t("Before starting any dietary supplement")}, {t("including shilajit")}, {t("it is essential to consult a qualified healthcare professional or doctor")}, {t("especially if you have underlying medical conditions or are taking other medications")}.
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
        {t("Carefully follow the dosage instructions provided on the product label or as recommended by healthcare professionals")}.  {t("Overdosing can lead to undesirable side effects")}.
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
        {t("Pregnant and nursing women should avoid the use of shilajit unless otherwise advised by a healthcare professional")}.

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
        {t("If you experience allergic reactions such as rash")}, {t("itching")}, {t("swelling")}, {t("or difficulty breathing after taking shilajit")}, {t("discontinue use immediately and seek medical assistance")}.

        </Card.Text>
      </Card.Body>
    </Card>
  </div>
  <div className="col-md-4">
  <Card style={{height:'95%',  textAlign:'center', backgroundColor:'#78d23d'}}>
      <Card.Body>
      <h2> <RiMedicineBottleLine/></h2>
        <Card.Title style={{fontWeight:'500'}}>{t("Interactions with medications")}:</Card.Title>
      
        <Card.Text>
        {t("Shilajit may potentially interact with certain medications")} {t("Discuss the use of shilajit with your doctor if you are taking other medications to avoid unwanted interactions")}.

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
        {t("Keep shilajit out of reach of children")}, {t("as there is insufficient research on its effect and safety for children")}.

        </Card.Text>
      </Card.Body>
    </Card>
  </div>
</div>




{/* ========================== */}

<div className="product-description" style={{paddingTop:'3%'}}> 

<p> <b>{t("Remember")}  !</b>{t("that shilajit is a dietary supplement and should not replace a balanced diet and a healthy lifestyle")} . {t("If you experience any unusual side effects or health issues after taking shilajit")},{t("consult a doctor immediately")} . {t("This warning is for informational purposes only and is not intended as medical advice")}.</p>

<p><b> {t("Please note")}: </b> {t("Shilajit is not a medicine and should not be used as an alternative to medication")}. {t("Its effects can vary from person to person")}. {t("Shilajit is a resin-like substance that is sourced from the Himalayan mountains and is often marketed as a natural health supplement")}. {t("While it contains various minerals and compounds that may have potential health benefits")} , 
{t("it is essential to understand that it is not a substitute for medical treatment")}. {t("If you have specific health concerns or conditions")}, {t("it is advisable to consult with a healthcare professional for proper diagnosis and treatment")}. {t("Additionally")},{t("individual reactions to shilajit can differ")} , {t("so it's important to use it cautiously and in accordance with recommended guidelines")}. </p>
</div>
</div>
      </LayoutOne>
    </Fragment>
  );
};

export default ProductBenefits;
