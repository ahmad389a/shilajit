import { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutThree from "../../layouts/LayoutThree";
import HeroSliderFive from "../../wrappers/hero-slider/HeroSliderFive";
import FeatureIconFour from "../../wrappers/feature-icon/FeatureIconFour";
import FeatureBlog from "../../wrappers/feature-icon/Featureblog";
import TabProductFour from "../../wrappers/product/TabProductFour";
import BannerFive from "../../wrappers/banner/BannerFive";
import CountDownTwo from "../../wrappers/countdown/CountDownTwo";
import TestimonialOne from "../../wrappers/testimonial/TestimonialOne";
import NewsletterTwo from "../../wrappers/newsletter/NewsletterTwo";

const HomeOrganicFood = () => {
  return (
    <Fragment>
      <SEO
        titleTemplate="Naturensskatter"
        description="Opplev bedre helse med ren Shilajit fra Himalaya! Få autentiske Shilajit-produkter for mer energi og velvære. Handle nå!"
        title= "Ren Shilajit kjøp naturens gave til ditt sunne liv"
      />
      <LayoutThree
        headerTop="visible"
        headerContainerClass="container-fluid"
        headerBorderStyle="fluid-border"
        headerPaddingClass="header-padding-2"
      >
        {/* hero slider */}
        <HeroSliderFive spaceLeftClass="ml-70" spaceRightClass="mr-70" />
        {/* feature icon */}
        <FeatureIconFour
          spaceTopClass="pt-10"
          spaceBottomClass="pb-90"
          containerClass="container-fluid"
          gutterClass="padding-10-row-col"
        />
        {/* tab product */}
        <TabProductFour
          spaceBottomClass="pb-100"
          category="Supplements"
          productTabClass="product-tab-fruits"
        />
        {/* banner */}
        {/* <BannerFive /> */}
        {/* countdown */}
        {/* <CountDownTwo
          spaceTopClass="pt-80"
          spaceBottomClass="pb-95"
          dateTime="November 13, 2023 12:12:00"
        /> */}
        {/* testimonial */}
        {/* <TestimonialOne
          spaceTopClass="pt-100"
          spaceBottomClass="pb-95"
          spaceLeftClass="ml-70"
          spaceRightClass="mr-70"
          bgColorClass="bg-gray-3"
        /> */}
        {/* newsletter */}
        {/* <FeatureBlog
          spaceTopClass="pt-10"
          spaceBottomClass="pb-90"
          containerClass="container-fluid"
          gutterClass="padding-10-row-col"
        /> */}

        <NewsletterTwo
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          subscribeBtnClass="green-subscribe"
        />
      </LayoutThree>
    </Fragment>
  );
};

export default HomeOrganicFood;
