import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { getDiscountPrice } from "../../helpers/product";
import Table from 'react-bootstrap/Table';
import ProductImageGallery from "../../components/product/ProductImageGallery";
import ProductDescriptionInfo from "../../components/product/ProductDescriptionInfo";
import ProductImageGallerySideThumb from "../../components/product/ProductImageGallerySideThumb";
import ProductImageFixed from "../../components/product/ProductImageFixed";
import "./Productdescription.css";
import { Button } from "react-bootstrap";
import { useState } from 'react';

const ProductImageDescription = ({ spaceTopClass, spaceBottomClass, galleryType, product }) => {
  const currency = useSelector((state) => state.currency);
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);
  const wishlistItem = wishlistItems.find(item => item.id === product.id);
  const compareItem = compareItems.find(item => item.id === product.id);

  const discountedPrice = getDiscountPrice(product.price, product.discount);
  const finalProductPrice = +(product.price * currency.currencyRate).toFixed(2);
  const finalDiscountedPrice = +(
    discountedPrice * currency.currencyRate
  ).toFixed(2);
  
const imgs=[
  {id:0,value:"../assets/img/product/fruits/1.png"},
  {id:1,value:"../assets/img/product/fruits/2.jpg"},
  {id:2,value:"../assets/img/product/fruits/9.jpg"},
  {id:3,value:"../assets/img/product/fruits/2.jpg"},
  ];
  const [sliderData, setSliderData]=useState(imgs[0])
  const handleClick=(index)=>{
     console.log(index);
     const slider=imgs[index];
     setSliderData(slider);
        }

  return (
    <div className={clsx("shop-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">      
        <div class="row" style={{marginTop:'0px'}}>
{/* <!-- ===========Image================ --> */}

    <div className="col-md-6 ">        
        <img className='Imgwidth' src={sliderData.value} height={400} />
            <div className="flex-row">
               {
                  imgs.map((data,i)=>
                  <div className="thumbnail" key={data.id} >
                     <img className={sliderData.id==i?"clicked":""}
                      src={data.value} onClick={()=>handleClick(i)} height={50 } width={70}
                      />
                  </div>
                  )
               }
            </div>
    </div>
    
   {/* <!-- ===========details================ --> */}
     
     <div className="col-md-6" >
      <div className="p-3 pt-0">
         <h2>Naturensskater Shilajit</h2>
         <h3 className="price">kr900</h3>
         <p>Discover the power of nature in its purest form with our Shilajit resin from the majestic Himalayan mountains. This unique natural product has been used for centuries in traditional Ayurvedic medicine and is considered a treasure from the mountains</p>
         {/* ========table============ */}
         {/* <Table className="table">
      <tbody>
        <tr>
          <td colSpan={2}>Larry the Bird</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td colSpan={2}>Larry the Bird</td>
          <td>@fat</td>
        </tr>
        <tr>        
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table> */}
    <div>
      <spam className="des" >Weight:</spam>  <spam className="desR" >100 mg</spam><br/>
      <spam className="des">Dimenssions:</spam>  <spam>100 mg</spam><br/>
      <spam className="des">Material:</spam>  <spam>100 mg</spam><br/>
      <spam className="des">Other Info:</spam>  <spam>100 mg</spam><br/>
    </div><br/>
    <Button variant="dark">Add to Cart</Button>

    </div>
       
     </div>

      </div>
      </div>
    </div>
  );
};

ProductImageDescription.propTypes = {
  galleryType: PropTypes.string,
  product: PropTypes.shape({}),
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default ProductImageDescription;
