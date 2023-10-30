import React, { Fragment } from "react"; 
import { useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import RelatedProductSlider from "../../wrappers/product/RelatedProductSlider";
import ProductDescriptionTab from "../../wrappers/product/ProductDescriptionTab";
import ProductImageDescription from "../../wrappers/product/ProductImageDescription";

const Product = () => {
  let { pathname } = useLocation();
  let { id } = useParams();
  const { products } = useSelector((state) => state.product);
  const product = products.find(product => product.id === id);
  

  return (
    <Fragment>
      <SEO
        titleTemplate="Product Page"
        description="Ren Shilajit er et naturlig organisk stoff kjent for å styrke kroppen og øke din vitalitet. Legg dette til din daglige rutine og øk kraften din."
      />

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb 
          pages={[
            {label: "Hjem", path: process.env.PUBLIC_URL + "/" },
            {label: "Handle produkt", path: process.env.PUBLIC_URL + pathname }
          ]} 
        />

        {/* product description with image */}
        <ProductImageDescription
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          product={product}
        />

        {/* product description tab */}
        <ProductDescriptionTab
          spaceBottomClass="pb-90"
          productFullDesc={product.fullDescription}
        />

        {/* related product slider */}

         {/* <RelatedProductSlider
          spaceBottomClass="pb-95"
          category={product.category[0]}
        />  */}

          <div>
      {product.id === '64e72e94c7d66dd42dacfd74' ? (
        <p></p>
      ) : (
        <RelatedProductSlider spaceBottomClass="pb-95" category={product.category[0]} />
      )}
    </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Product;
