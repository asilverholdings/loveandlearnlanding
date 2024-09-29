

import React from "react";

import BestSelling from "../../../components/e-commerce/BestSelling";
import CallToAction from "../../../components/e-commerce/CallToAction";
import Categorie from "../../../components/e-commerce/Categorie";
import FancyBlock from "../../../components/e-commerce/FancyBlock";
import FlashSaleBanner from "../../../components/e-commerce/FlashSaleBanner";
import GalleryBox from "../../../components/e-commerce/GalleryBox";
import Header from "../../../components/e-commerce/Header";
import Hero from "../../../components/e-commerce/Hero";
import TopItem from "../../../components/e-commerce/TopItem";
import CopyRightThree from "../../../components/footer/CopyRightThree";
import FooterSeven from "../../../components/footer/FooterSeven";
import Image from "next/image";
export const metadata = {
    title: 'eCommerce || Deski-Saas & Software Nextjs Template',
    description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
  }
const Ecommerce = () => {
  return (
    <div className="main-page-wrapper p0 font-gordita">
     
      {/* End Page SEO Content */}

      {/* <!-- 
        =============================================
        Theme Main Menu
        ============================================== 
        --> */}
      <Header />

      {/* <!-- 
        =============================================
        Theme Hero Banner
        ============================================== 
        --> */}
      <Hero />

      {/* <!-- 
        =============================================
        Fancy Feature Forty Two
        ============================================== 
        --> */}
      <div className="fancy-feature-fortyTwo lg-container pt-120 lg-pt-80">
        <div className="container">
          <div className="row align-items-center" data-aos="fade-up">
            <div className="col-md-7">
              <div className="title-style-eleven text-center text-md-left">
                <h2>Shop by categoris</h2>
              </div>
            </div>
            {/* End .col */}

            <div className="col-md-5">
              <a
                href="#"
                className="shop-btn-one tran3s d-none d-md-flex align-items-center justify-content-center rounded-circle ms-auto"
              >
                <Image  width="30" height="12"  src="/images/icon/202.svg" alt="icon" />
              </a>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}

        <div className="xl-container mt-60 lg-mt-20">
          <div className="row">
            <Categorie />
          </div>
        </div>
      </div>
      {/* End .fancy-feature-fortyTwo */}

      {/* <!-- 
        =============================================
            Fancy Feature Forty Two
        ============================================== 
        --> */}
      <div className="fancy-feature-fortyTwo lg-container pt-180 lg-pt-120">
        <div className="container">
          <div className="row align-items-center" data-aos="fade-up">
            <div className="col-md-7">
              <div className="title-style-eleven text-center text-md-left">
                <h2>Top Item</h2>
              </div>
            </div>
            {/* End .col */}

            <div className="col-md-5">
              <a
                href="#"
                className="shop-btn-one tran3s d-none d-md-flex align-items-center justify-content-center rounded-circle ms-auto"
              >
                <Image  width="30" height="12"  src="/images/icon/202.svg" alt="icon" />
              </a>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}

        <div className="xl-container mt-80 lg-mt-50">
          <div className="product_slider_two product_slider_space">
            <TopItem />
          </div>
        </div>
        {/* <!-- /.xl-container --> */}
      </div>
      {/* End .fancy-feature-fortyTwo */}

      {/* <!-- 
        =============================================
        Flash Sale Banner
        ============================================== 
		--> */}
      <div className="flash-sale-banner mt-150 lg-mt-120">
        <div className="xl-container">
          <FlashSaleBanner />
          {/* <!-- FlashSaleBanner --> */}
        </div>
        {/* <!-- /.xl-container --> */}
      </div>
      {/* <!-- /.flash-sale-banner --> */}

      {/* <!-- 
        =============================================
        Fancy Feature Forty Four
        ============================================== 
        --> */}
      <div className="fancy-feature-fortyFour lg-container mt-140 lg-mt-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-7 m-auto">
              <div
                className="title-style-eleven text-center mb-40 lg-mb-20"
                data-aos="fade-up"
              >
                <h2>We’r commited to provie quality services</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <FancyBlock />
          </div>
        </div>
        {/* End .container */}
      </div>
      {/* <!-- /.fancy-feature-fortyFour --> */}

      {/* <!-- 
        =============================================
        Fancy Feature Forty Two
        ============================================== 
        --> */}
      <div className="fancy-feature-fortyThree lg-container pt-120 pb-150 mt-150 lg-mt-120 lg-pt-80 lg-pb-80">
        <div className="container">
          <div className="row align-items-center" data-aos="fade-up">
            <div className="col-md-7">
              <div className="title-style-eleven text-center text-md-left">
                <h2>Best Selling</h2>
              </div>
            </div>
            {/* End .col */}

            <div className="col-md-5">
              <a
                href="#"
                className="shop-btn-one tran3s d-none d-md-flex align-items-center justify-content-center rounded-circle ms-auto"
              >
                <Image  width="30" height="12"  src="/images/icon/202.svg" alt="icon" />
              </a>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}

        <div className="xl-container mt-80 lg-mt-50">
          <div className="product_slider_two product_slider_space">
            <BestSelling />
          </div>
        </div>
        {/* <!-- /.xl-container --> */}
      </div>
      {/* End .fancy-feature-fortyTwo */}

      {/* <!--
        =====================================================
        Shop Discount Subscription
        =====================================================
        --> */}
      <div className="shop-discount-subscription lg-container mt-140 mb-150 lg-mt-100 lg-mb-100">
        <CallToAction />

        <div className="xl-container mt-110 lg-mt-80" data-aos="fade-up">
          <h4 className="text-center text-dark mb-40 lg-mb-20">
            Follow Us @TrendUi
          </h4>

          <GalleryBox />
        </div>
      </div>
      {/* <!-- /.shop-discount-subscription --> */}

      {/* =====================================================
        Footer Style Seven
        ===================================================== */}
      <footer className="theme-footer-seven mt-120 md-mt-100">
        <div className="lg-container">
          <div className="container inner-btn-black">
            <FooterSeven />
          </div>

          <div className="container">
            <div className="bottom-footer">
              <CopyRightThree />
            </div>
          </div>
        </div>
        {/* /.lg-container */}
      </footer>
      {/* /.theme-footer-seven */}
    </div>
    // End main-page-wrapper
  );
};

export default Ecommerce;
