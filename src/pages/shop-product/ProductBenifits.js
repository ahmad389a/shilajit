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
const ProductBenifits = () => {
  let { pathname } = useLocation();

  return (
    <Fragment>
      <SEO
        titleTemplate="About Shilajit"
        description="Blog of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
         {/* breadcrumb */}
        <Breadcrumb 
          pages={[
            {label: "Home", path: process.env.PUBLIC_URL + "/" },
            {label: "Benefits", path: process.env.PUBLIC_URL + pathname }
          ]} 
        />
        <div className="container">
        <h3 style={{textAlign:'center',paddingTop:'3%'}}>Pure Himalayan Shilajit</h3>

             <p style={{textAlign:'center'}}>Pure Himalayan Shilajit is a blackish-brown tar-like material collected from the Himalayan mountain ranges and renowned as Elixir of Life - your all-time superfood.  
As more individuals resort to natural, herbal solutions for their health and well-being, how far might genuine Himalayan Shilajit fall in the race of the top most effective herbs? 
It is one of the most potent rejuvenating anti-aging blockbusters known to mankind. Pure Himalayan Shilajit is said to have mystical healing abilities. So, what exactly is this tar-like, sticky substance, shilajit? Let's learn everything we can about this mystical black weed.
</p>

        <TeamMemberOne spaceTopClass="pt-95" spaceBottomClass="pb-70" /> 

        {/* ===============Benifits=============== */}

                <div className="product-description">              
          <h3 style={{textAlign:'center'}}>Benefits of Pure Shilajit</h3>

  <h4>Energy and Stamina:</h4>
  <p>Shilajit has been used for centuries to increase physical stamina and energy levels. It is thought to aid in the body's energy-producing activities, especially through assisting with the metabolism of fats and carbohydrates. Shilajit's possible energising benefits may be attributable to its involvement in assisting mitochondrial function, which is in charge of generating energy within cells.</p>

  <h4>Rich in Minerals and Fulvic Acid:</h4>
  <p>Shilajit is a food that is abundant in minerals and fulvic acid, both of which are necessary for many body processes. Magnesium, iron, zinc, copper, and selenium are a few of these. These minerals help with metabolic functions, immune system support, and bone health maintenance. Shilajit contains fulvic acid, a natural substance that is proven to improve the body's absorption of minerals and other nutrients. It might improve these nutrients' bioavailability by assisting in their transit through cell membranes.</p>

  <h4>Anti-Aging Superstar:</h4>
  <p>Pure Himalayan Shilajit has an unrivalled ability to slow and reverse the ageing process. It aids in the acceleration of protein and nucleic acid metabolism and accelerates energy-producing pathways.</p>

  <h4>Male Health:</h4>
  <p>Shilajit has long been utilised to support the health of male reproduction. It is thought to have favourable effects on testosterone levels, which are essential for male reproductive health as well as muscle and bone density. Shilajit intake may increase sperm count, motility, and fertility in males, according to some studies, though more studies are required to completely understand these benefits.</p>
   
  <h4>Bone Wellness:</h4>
  <p>Calcium and magnesium are two minerals found in shilajit that are crucial for supporting strong, healthy bones. To avoid disorders like osteoporosis, which results in weakening bones and an elevated risk of fractures, an adequate intake of these minerals is necessary. Shilajit may support general bone health and density by supplying these minerals.</p>
   
  <h4>Pure Himalayan Shilajit For Skin Care:</h4>
  <p>Acne and dull skin issues can be treated with pure Himalayan Shilajit. Shilajit's anti-inflammatory qualities aid in preventing the cellular harm brought on by free radicals. It can be combined with your usual face packs to give you skin that is naturally glowing.</p>
  
  <h4>Stress Reliever:</h4>
  <p>Because of the androgen-like qualities of Pure Himalayan Shilajit, it may help balance out stress-causing hormones, making it simpler for both your mind and body to deal with stress signals in a healthier and calmer manner.</p>

  <h4>Other Benefits:</h4>
  <p>Shilajit is thought to have a number of advantages, including being rich in minerals and fulvic acid, which promote nutrient absorption and cellular function. Antioxidants in it can fight off free radicals and promote cellular health. It has long been used to increase energy and endurance, but it may also improve memory and focus while protecting brain cells, which could enhance cognitive performance. It could help with illnesses like arthritis because of its anti-inflammatory effects. Shilajit's immuno-modulating properties may help the immune system function better. Its nutrients and antioxidants support skin health by potentially having anti-aging benefits. It might have a favourable effect on testosterone levels and sexual function in men. The mineral content, which includes calcium and magnesium, may help maintain healthy bones.</p>
  
  <h4>How to use Pure Himaliyan Shilajit?</h4>
  <p>Dissolve with milk, tea, or warm, non-chlorinated water to drink. For general wellbeing, we advise beginning with a rice grain to pea-sized quantity, once day. The dosage can be raised for more power and effect, but it shouldn't go over 1 gram daily.
Pure Himalayan Shilajit is known as the "Nectar of God," capable of curing all illnesses and maintaining youth due to its medicinal properties. It is referred to as Amrit or the Fountain of Youth in ancient Chinese and Indian literature.
</p><br/>
</div>
<hr/>
{/* ===========Warnings============= */}

<h3 style={{textAlign:'center'}}> <span style={{color:'red'}}>Warning: </span>Please be aware of the following before using shilajit</h3>
<br/>

<p style={{textAlign:'center'}}>Shilajit is a natural dietary supplement that has been used in traditional medicine for centuries. Before you begin using shilajit, Ensure that you purchase shilajit from reputable sources that test the product for purity and quality.
  please consider the following warnings and guidelines:</p><br/>

<div className="row">
  <div className="col-md-4">
  <Card style={{height:'95%', textAlign:'center', backgroundColor:'#78d23d'}}>
      <Card.Body>
      <h2> <MdOutlineHealthAndSafety/></h2>
        <Card.Title style={{fontWeight:'500'}}>Consult a healthcare professional:</Card.Title>
     
        <Card.Text>
        Before starting any dietary supplement, including shilajit, it is essential to consult a qualified healthcare professional or doctor, especially if you have underlying medical conditions or are taking other medications.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
  <div className="col-md-4">
  <Card style={{height:'95%', textAlign:'center', backgroundColor:'#78d23d'}}>
      <Card.Body>
      <h2> <GiOverdose/></h2>
        <Card.Title style={{fontWeight:'500'}}>Dosage</Card.Title>
     
        <Card.Text>
        Carefully follow the dosage instructions provided on the product label or as recommended by healthcare professionals. Overdosing can lead to undesirable side effects.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
  <div className="col-md-4 col-lg-4">
  <Card style={{height:'95%',  textAlign:'center', backgroundColor:'#78d23d'}}>
      <Card.Body>
      <h2> <FaPersonBreastfeeding/></h2>
        <Card.Title style={{fontWeight:'500'}}>Pregnant and nursing women:</Card.Title>
       
        <Card.Text>
        Pregnant and nursing women should avoid the use of shilajit unless otherwise advised by a healthcare professional.

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
        <Card.Title style={{fontWeight:'500'}}>Allergic reactions:</Card.Title>
    
        <Card.Text>
        If you experience allergic reactions such as rash, itching, swelling, or difficulty breathing after taking shilajit, discontinue use immediately and seek medical assistance.

        </Card.Text>
      </Card.Body>
    </Card>
  </div>
  <div className="col-md-4">
  <Card style={{height:'95%',  textAlign:'center', backgroundColor:'#78d23d'}}>
      <Card.Body>
      <h2> <RiMedicineBottleLine/></h2>
        <Card.Title style={{fontWeight:'500'}}>Interactions with medications:</Card.Title>
      
        <Card.Text>
        Shilajit may potentially interact with certain medications. Discuss the use of shilajit with your doctor if you are taking other medications to avoid unwanted interactions.

        </Card.Text>
      </Card.Body>
    </Card>
  </div>
  <div className="col-md-4 col-lg-4">
  <Card style={{height:'95%',  textAlign:'center', backgroundColor:'#78d23d'}}>
      <Card.Body>
      <h2> <LiaChildSolid/></h2>
        <Card.Title style={{fontWeight:'500'}}>Children:</Card.Title>
        <Card.Text>
        Keep shilajit out of reach of children, as there is insufficient research on its effect and safety for children.

        </Card.Text>
      </Card.Body>
    </Card>
  </div>
</div>




{/* ========================== */}

<div className="product-description" style={{paddingTop:'3%'}}> 

<p> <b>Remember !</b> that shilajit is a dietary supplement and should not replace a balanced diet and a healthy lifestyle. If you experience any unusual side effects or health issues after taking shilajit, consult a doctor immediately. This warning is for informational purposes only and is not intended as medical advice.</p>

<p><b> Please note: </b> Shilajit is not a medicine and should not be used as an alternative to medication. Its effects can vary from person to person. Shilajit is a resin-like substance that is sourced from the Himalayan mountains and is often marketed as a natural health supplement. While it contains various minerals and compounds that may have potential health benefits, it is essential to understand that it is not a substitute for medical treatment. If you have specific health concerns or conditions, it is advisable to consult with a healthcare professional for proper diagnosis and treatment. Additionally, individual reactions to shilajit can differ, so it's important to use it cautiously and in accordance with recommended guidelines. </p>
</div>
</div>
      </LayoutOne>
    </Fragment>
  );
};

export default ProductBenifits;
