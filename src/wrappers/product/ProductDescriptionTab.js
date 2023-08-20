import PropTypes from "prop-types";
import clsx from "clsx";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";


const ProductDescriptionTab = ({ spaceBottomClass, productFullDesc }) => {
  return (
    <div className={clsx("description-review-area", spaceBottomClass)}>
      <div className="container">
        <div className="description-review-wrapper">
          <Tab.Container defaultActiveKey="productDescription">
            <Nav variant="pills" className="description-review-topbar">
              <Nav.Item>
                <Nav.Link eventKey="additionalInfo">
                  Additional Information
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="productDescription">Description</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="productReviews">Reviews(2)</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="description-review-bottom">
              <Tab.Pane eventKey="additionalInfo">
                <div className="product-anotherinfo-wrapper">
                  <ul>
                    <li>
                      <span>Weight</span> 400 g
                    </li>
                    <li>
                      <span>Dimensions</span>10 x 10 x 15 cm{" "}
                    </li>
                    <li>
                      <span>Materials</span> 60% cotton, 40% polyester
                    </li>
                    <li>
                      <span>Other Info</span> American heirloom jean shorts pug
                      seitan letterpress
                    </li>
                  </ul>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="productDescription" className="product-description"> 
              <h4>Pure Himalayan Shilajit</h4>
              <p >Pure Himalayan Shilajit is a blackish-brown tar-like material collected from the Himalayan mountain ranges and renowned as Elixir of Life - your all-time superfood. <br/> 
As more individuals resort to natural, herbal solutions for their health and well-being, how far might genuine Himalayan Shilajit fall in the race of the top most effective herbs? <br/> 
It is one of the most potent rejuvenating anti-aging blockbusters known to mankind. Pure Himalayan Shilajit is said to have mystical healing abilities. So, what exactly is this tar-like, sticky substance, shilajit? Let's learn everything we can about this mystical black weed.</p>

<h4>Other Names of Pure Himalayan Shilajit</h4>
<p>There are allegedly more than 85 ionic minerals in Shilajit. Fulvic Acids, Dibenzo Alpha Pyrones, Humans, Humic Acids, trace minerals, Vitamins A, B, C, and P (citrines), phospholipids and polyphenol complexes, and Terpenoids are the main active constituents in Shilajit. Microelements (cobalt, nickel, copper, zinc, manganese, chrome, iron, magnesium, and others) are additionally present. The majority of shilajit formulations include between 60 and 80 percent fulvic acid, and the more fulvic acid a molecule has, the more anti-aging benefits it has.</p>


<h4>Origin of Pure Himalayan Shilajit</h4>
<p>The plant life in the Himalayan region, which encircles the expanse of China, Tibet, and other regions of Central Asia, is thought to be the source of pure Himalayan Shilajit. <br/>
Shilajit is a viscous resin that oozes out of crevices in the Himalayan mountains throughout the summer as the heat of the season raises the temperature of the rock. It develops over many years as a result of the decay of plants and the activities of unusual microorganisms like Trifolium Repens and Euphorbia Royleana. Shilajit is thought by experts to be a millennia-old creation of nature because it takes centuries to develop.
</p>

<h4>Ingredients in Pure Himalayan Shilajit</h4>
<p>There are allegedly more than 85 ionic minerals in Shilajit. Fulvic Acids, Dibenzo Alpha Pyrones, Humans, Humic Acids, trace minerals, Vitamins A, B, C, and P (citrines), phospholipids and polyphenol complexes, and Terpenoids are the main active constituents in Shilajit. Microelements (cobalt, nickel, copper, zinc, manganese, chrome, iron, magnesium, and others) are additionally present. The majority of shilajit formulations include between 60 and 80 percent fulvic acid, and the more fulvic acid a molecule has, the more anti-aging benefits it has.</p>

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

<h2 style={{textAlign:'center'}}> <span style={{color:'red'}}>Warning: </span>Please be aware of the following before using shilajit</h2>
<br/>

<p>Shilajit is a natural dietary supplement that has been used in traditional medicine for centuries. Before you begin using shilajit, please consider the following warnings and guidelines:</p>

<h4>Consult a healthcare professional:</h4>
<p>Before starting any dietary supplement, including shilajit, it is essential to consult a qualified healthcare professional or doctor, especially if you have underlying medical conditions or are taking other medications.
</p>

<h4>Dosage:</h4>
<p>Carefully follow the dosage instructions provided on the product label or as recommended by healthcare professionals. Overdosing can lead to undesirable side effects.
</p>

<h4>Pregnant and nursing women:</h4>
<p>Pregnant and nursing women should avoid the use of shilajit unless otherwise advised by a healthcare professional.</p>

<h4>Allergic reactions:</h4>
<p> If you experience allergic reactions such as rash, itching, swelling, or difficulty breathing after taking shilajit, discontinue use immediately and seek medical assistance.
</p>

<h4>Interactions with medications:</h4>
<p>Shilajit may potentially interact with certain medications. Discuss the use of shilajit with your doctor if you are taking other medications to avoid unwanted interactions.</p>

<h4>Children:</h4>
<p>Keep shilajit out of reach of children, as there is insufficient research on its effect and safety for children.
</p>

<h4>Quality and source:</h4>
<p>Ensure that you purchase shilajit from reputable sources that test the product for purity and quality.</p>

<p> <b>Remember !</b> that shilajit is a dietary supplement and should not replace a balanced diet and a healthy lifestyle. If you experience any unusual side effects or health issues after taking shilajit, consult a doctor immediately. This warning is for informational purposes only and is not intended as medical advice.</p>

<p><b> Please note: </b> that this warning is general, and individual considerations may apply depending on a person's specific health and medical history. It's always best to consult a doctor before starting any new dietary supplement or medication.</p>
              </Tab.Pane>
              <Tab.Pane eventKey="productReviews">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="review-wrapper">
                      <div className="single-review">
                        <div className="review-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/testimonial/1.jpg"
                            }
                            alt=""
                          />
                        </div>
                        <div className="review-content">
                          <div className="review-top-wrap">
                            <div className="review-left">
                              <div className="review-name">
                                <h4>White Lewis</h4>
                              </div>
                              <div className="review-rating">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                              </div>
                            </div>
                            <div className="review-left">
                              <button>Reply</button>
                            </div>
                          </div>
                          <div className="review-bottom">
                            <p>
                              Vestibulum ante ipsum primis aucibus orci
                              luctustrices posuere cubilia Curae Suspendisse
                              viverra ed viverra. Mauris ullarper euismod
                              vehicula. Phasellus quam nisi, congue id nulla.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="single-review child-review">
                        <div className="review-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/testimonial/2.jpg"
                            }
                            alt=""
                          />
                        </div>
                        <div className="review-content">
                          <div className="review-top-wrap">
                            <div className="review-left">
                              <div className="review-name">
                                <h4>White Lewis</h4>
                              </div>
                              <div className="review-rating">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                              </div>
                            </div>
                            <div className="review-left">
                              <button>Reply</button>
                            </div>
                          </div>
                          <div className="review-bottom">
                            <p>
                              Vestibulum ante ipsum primis aucibus orci
                              luctustrices posuere cubilia Curae Suspendisse
                              viverra ed viverra. Mauris ullarper euismod
                              vehicula. Phasellus quam nisi, congue id nulla.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="ratting-form-wrapper pl-50">
                      <h3>Add a Review</h3>
                      <div className="ratting-form">
                        <form action="#">
                          <div className="star-box">
                            <span>Your rating:</span>
                            <div className="ratting-star">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="rating-form-style mb-10">
                                <input placeholder="Name" type="text" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="rating-form-style mb-10">
                                <input placeholder="Email" type="email" />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="rating-form-style form-submit">
                                <textarea
                                  name="Your Review"
                                  placeholder="Message"
                                  defaultValue={""}
                                />
                                <input type="submit" defaultValue="Submit" />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
};

ProductDescriptionTab.propTypes = {
  productFullDesc: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

export default ProductDescriptionTab;
