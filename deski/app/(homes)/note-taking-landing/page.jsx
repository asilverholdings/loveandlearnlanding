


import Link from "next/link";

import FancyTextBlock22 from "../../../components/fancy-text-block/FancyTextBlock22";
import HeaderLandingNoteTaking from "../../../components/header/landing/HeaderLandingNoteTaking";
import HeroBannerSeven from "../../../components/hero-banner/HeroBannerSeven";
import PricingSix from "../../../components/pricing/pricing-six/Pricing";
import TestimonialSix from "../../../components/testimonial/TestimonialSix";
import CopyRightThree from "../../../components/footer/CopyRightThree";
import FooterSeven from "../../../components/footer/FooterSeven";
import FancyFeatureSeventeen from "../../../components/features/FancyFeatureSeventeen";
import DocAsTabs from "../../../components/block-slider/DocAsTabs";
import FancyFeaturesTwo from "@/components/fancy-features/FancyFeaturesTwo";
import Image from "next/image";
import dynamic from "next/dynamic";
const Scrollspy = dynamic(() => import('@/components/scrollpy/Scrollphy'), {
  ssr: false,

})



export const metadata = {
    title: 'Mobile App Landing || Deski-Saas & Software Nextjs Template',
    description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
  }

const NoteTakingLanding = () => {

  return (
    <div className="main-page-wrapper font-gordita">
    
      {/* End Page SEO Content */}

      <HeaderLandingNoteTaking />
      {/* End Header Landing Note Talking */}

      {/* 	=============================================
				Theme Hero Banner
			==============================================  */}
      <Scrollspy>
      <div id="home">
        <HeroBannerSeven />
      </div>

      {/* =============================================
				Fancy Feature Fifteen
			==============================================  */}
      <div className="fancy-feature-fifteen pt-120 md-pt-80" id="product">
        <div className="bg-wrapper">
          <div className="container">
            <div className="sldier-wrapper">
              <DocAsTabs />
            </div>
            {/* /.sldier-wrapper */}
          </div>
          <Image width="82" height="204"
            src="/images/shape/168.svg"
            alt="shape"
            className="shapes shape-one"
          />
          <Image width="78" height="191"
            src="/images/shape/169.svg"
            alt="shape"
            className="shapes shape-two"
          />
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/*  /.fancy-feature-fifteen */}

      {/* 	=============================================
				Fancy Feature Sixteen
			==============================================  */}
      <div className="fancy-feature-sixteen pt-200 md-pt-100" id="features">
        <div className="container">
          <div className="block-style-eighteen">
            <div className="row align-items-center">
              <div
                className="col-lg-5"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="text-wrapper">
                  <h6>App Integration</h6>
                  <h3 className="title">
                    Connect with <span>software.</span>
                  </h3>
                  <p>
                    Share content across apps. Deski connects with the
                    productivity tools you already use, so you can work your
                    way.
                  </p>
                  <Link
                           href="/product-customer-support"
                    className="d-flex align-items-center learn-more"
                  >
                    <span>Learn More</span>
                    <Image  width="24" height="13" src="/images/icon/93.svg" alt="screen" />
                  </Link>
                </div>
                {/*  /.text-wrapper */}
              </div>
              <div
                className="col-lg-7"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div
                  className="
                    screen-holder-one
                    d-flex
                    align-items-center
                    justify-content-center
                  "
                >
                  <div
                    className="
                      round-bg
                      big_g
                      d-flex
                      align-items-center
                      justify-content-center
                    "
                    style={{ width: "193px", height: "193px", boxSizing:'border-box' }}
                  >
                    <Image width={89} height={88} style={{maxWidth:'50%',height:'fit-content'}} src="/images/logo/logo-26.png" alt="logo" />
                  </div>
                  <div
                    className="
                      round-bg
                      d-flex
                      align-items-center
                      justify-content-center
                      shapes
                      logo-one
                    "
                    style={{ width: "65px", height: "65px", boxSizing:'border-box' }}
                  >
                    <Image width={42} height={43} style={{maxWidth:'50%',maxHeight:'50%'}} src="/images/logo/logo-27.png" alt="logo" />
                  </div>
                  <div
                    className="
                      round-bg
                      d-flex
                      align-items-center
                      justify-content-center
                      shapes
                      logo-two
                    "
                    style={{ width: "105px", height: "105px", boxSizing:'border-box' }}
                  >
                    <Image width={67} height={67} style={{maxWidth:'50%',height:'fit-content'}}  src="/images/logo/logo-28.png" alt="logo" />
                  </div>
                  <div
                    className="
                      round-bg
                      d-flex
                      align-items-center
                      justify-content-center
                      shapes
                      logo-three
                    "
                    style={{ width: "81px", height: "81px", boxSizing:'border-box' }}
                  >
                    <Image width={38} height={38} style={{maxWidth:'50%',height:'fit-content'}}  src="/images/logo/logo-29.png" alt="logo" />
                  </div>
                  <div
                    className="
                      round-bg
                      d-flex
                      align-items-center
                      justify-content-center
                      shapes
                      logo-four
                    "
                    style={{ width: "148px", height: "148px", boxSizing:'border-box' }}
                  >
                    <Image width={86} height={83} style={{maxWidth:'50%',height:'fit-content'}}  src="/images/logo/logo-30.png" alt="logo" />
                  </div>
                  <div
                    className="
                      round-bg
                      d-flex
                      align-items-center
                      justify-content-center
                      shapes
                      logo-five
                    "
                    style={{ width: "148px", height: "148px" , boxSizing:'border-box' }}
                  >
                    <Image width={50} height={50} style={{maxWidth:'50%',height:'fit-content'}}  src="/images/logo/logo-31.png" alt="logo" />
                  </div>
                  <Image width="78" height="131"
                    src="/images/shape/170.svg"
                    alt="image"
                    className="shapes shape-one"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* /.block-style-eighteen */}

          <div className="block-style-eighteen mt-200 pt-50 md-mt-80">
            <div className="row align-items-center">
              <div
                className="col-lg-5 order-lg-last"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="text-wrapper">
                  <h6>Scanning & Doc</h6>
                  <h3 className="title">
                    Web doc <br />
                    file <span>Scanning.</span>
                  </h3>
                  <p>
                    Go paperless. Back up important documents to all your
                    devices, and keep the information not the clutter.
                  </p>
                  <Link
                           href="/product-customer-support"
                    className="d-flex align-items-center learn-more"
                  >
                    <span>Learn More</span>
                    <Image  width="24" height="13" src="/images/icon/93.svg" alt="screen" />
                  </Link>
                </div>
                {/* /.text-wrapper */}
              </div>
              <div
                className="col-lg-7 order-lg-first"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="screen-holder-two">
                  <Image width={460} height={447} style={{height:'fit-content'}}     src="/images/assets/screen_12.png" alt="screen" />
                  <Image width={206} height={416} style={{height:'fit-content'}}    
                    src="/images/assets/screen_13.png"
                    alt="image"
                    className="shapes screen-one"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* /.block-style-eighteen */}

          <div className="block-style-eighteen mt-200 pt-50 md-mt-80">
            <div className="row align-items-center">
              <div
                className="col-lg-5"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="text-wrapper">
                  <h6>Note & Docs</h6>
                  <h3 className="title">
                    <span>Clipper</span> & Rich notes
                  </h3>
                  <p>
                    Save web pages (without the ads) and mark them up with
                    arrows, highlights, and text to make them more useful.
                  </p>
                  <Link
                           href="/product-customer-support"
                    className="d-flex align-items-center learn-more"
                  >
                    <span>Learn More</span>
                    <Image  width="24" height="13" src="/images/icon/93.svg" alt="screen" />
                  </Link>
                </div>
                {/* /.text-wrapper */}
              </div>
              <div
                className="col-lg-7"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div
                  className="
                    screen-holder-three
                    d-flex
                    align-items-center
                    justify-content-center
                  "
                >
                  <Image width={456} height={428} style={{height:'fit-content'}}     src="/images/assets/screen_14.png" alt="screen" />
                </div>
              </div>
            </div>
          </div>
          {/* /.block-style-eighteen */}
        </div>
      </div>
      {/*  /.fancy-feature-sixteen */}

      {/* =====================================================
				Fancy Text Block Twenty Two
			===================================================== */}
      <div
        className="fancy-text-block-twentyTwo lg-container pt-200 md-pt-120"
        id="why_us"
      >
        <div className="container">
          <FancyTextBlock22 />
        </div>
      </div>
      {/* /.fancy-text-block-twentyTwo */}

      {/* =====================================================
				Fancy Feature Seventeen
			===================================================== */}
      <div className="fancy-feature-seventeen mt-150 md-mt-90" id="product">
        <div className="bg-wrapper">
          <div className="container">
            <div className="row">
              <FancyFeatureSeventeen />
            </div>
          </div>
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.fancy-feature-seventeen */}

      {/* 	=====================================================
				Pricing Section Six
			===================================================== */}
      <div className="pricing-section-six pt-200 md-pt-100" id="pricing">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 m-auto">
              <div className="title-style-seven text-center">
                <h2>
                  Solo, Agency or Team? We’ve got you <span>covered.</span>
                </h2>
              </div>
              {/* /.title-style-six */}
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
        <PricingSix />
      </div>
      {/* /.pricing-section-six */}

      {/* =====================================================
				Client Feedback Slider Six
			===================================================== */}
      <div
        className="client-feedback-slider-six pt-200 md-pt-120"
        id="feedback"
      >
        <div className="inner-container">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <Image  width="72" height="72" src="/images/icon/100.svg" alt="icon" className="m-auto" />
                <div className="title-style-seven text-center mt-20">
                  <h2>
                    <span>Client</span> love us & we love them
                  </h2>
                  <p>Kind words from our deski Clients.</p>
                </div>
                {/* /.title-style-six  */}
              </div>
            </div>
          </div>
          <div className="clientSliderSix">
            <TestimonialSix />
          </div>
        </div>
        {/* /.inner-container */}
      </div>
      {/* /.client-feedback-slider-six */}

      {/* 	=====================================================
				Fancy Short Banner Eight
			===================================================== */}
      <FancyFeaturesTwo/>
      {/*  /.fancy-short-banner-eight */}

      {/* 			=====================================================
				Footer Style Seven
			===================================================== */}
      </Scrollspy>
      <footer className="theme-footer-seven mt-120 md-mt-100">
        <div className="lg-container">
          <div className="container">
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
  );
};

export default NoteTakingLanding;
