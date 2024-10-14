import React from "react";

import HeroBannerFour from "../components/hero-banner/HeroBannerFour";
import FooterFour from "../components/footer/FooterFour";
import CallToActionFive from "../components/call-to-action/CallToActionFive";
import Image from "next/image";
import WhyUs from "../components/features/WhyUs";
import Quote from "../components/quote/Quote";
import HeaderTwo from "/components/header/HeaderTwo";


export const metadata = {
  title: 'Love And Learn',
}

export default function Home() {
  return (
    <div className="main-page-wrapper p0">
      <HeaderTwo />
      {/* End HeaderFour */}

      <HeroBannerFour />
      {/* End Hero Banner Four */}

      {/* 
     =============================================
				Fancy Text Block
		============================================== */}
      <div className="fancy-text-block-nineteen mt-250 mb-200 md-mt-150 md-mb-150">
        <div className="container">
          <Quote />
        </div>
      </div>
      {/* End  .fancy-text-block-nineteen*/}

      <div className="fancy-feature-nine">
        <Image
          width={14}
          height={19}
          src="/images/shape/107.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <Image
          width={20}
          height={17}
          src="/images/shape/108.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <Image
          width={16}
          height={24}
          src="/images/shape/109.svg"
          alt="shape"
          className="shapes shape-three"
        />
        <Image
          width={16}
          height={24}
          src="/images/shape/110.svg"
          alt="shape"
          className="shapes shape-four"
        />
        <Image
          width={18}
          height={22}
          src="/images/shape/111.svg"
          alt="shape"
          className="shapes shape-five"
        />
        <Image
          width={23}
          height={18}
          src="/images/shape/112.svg"
          alt="shape"
          className="shapes shape-six"
        />

        <div className="container">
          <div className="title-style-five text-center mb-60 md-mb-30">
          <section id="why-us">
            <h6>Love and Learn</h6>
          </section>
            <h2>
                <span>Why Us?</span>
            </h2>
          </div>
          {/* End title */}

          <WhyUs />
        </div>
      </div>

    {/* 
    ==============================================
				Client Feedback Slider
		============================================== */}
      {/* <div className="client-feedback-slider-three mt-250 mb-250 ">
        <div className="container">
          <div className="title-style-five text-center mb-80 md-mb-50">
            <div className="row">
              <div className="col-lg-7 col-md-9 m-auto">
                <h2 data-aos="fade-up" data-aos-duration="1200">
                  <span>Check what’s our client </span>say about us.
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-7 col-lg-9 m-auto">
              <div className="testimonial-slider-wrapper">
                <Image width={75} height={54} src="/images/icon/65.svg" alt="icon" className="m-auto" />
                <div className="clientSliderThree">
                  <TestimonialThree />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          width={82} height={82}
          src="/images/media/img_59.png"
          alt="media"
          className="shapes shape_1"
        />
        <Image width={46} height={46}
          src="/images/media/img_60.png"
          alt="media"
          className="shapes shape_2"
        />
        <Image width={87} height={87}
          src="/images/media/img_61.png"
          alt="media"
          className="shapes shape_3"
        />
        <Image width={46} height={46}
          src="/images/media/img_62.png"
          alt="media"
          className="shapes shape_4"
        />
        <Image width={111} height={111}
          src="/images/media/img_63.png"
          alt="media"
          className="shapes shape_5"
        />
        <Image width={57} height={57}
          src="/images/media/img_64.png"
          alt="media"
          className="shapes shape_6"
        />
      </div>

      <div>
        <Image
          src="https://placehold.co/900x200/png"
          alt="image"
          layout="responsive"
          width={600}
          height={200}
        />
      </div> */}
      {/* 
    ==============================================
			Call To Action
		============================================== */}
      <div className="fancy-short-banner-five pt-150 pb-150 md-pt-100 md-pb-100">
        <div className="container">
          <CallToActionFive />
        </div>
      </div>
      {/* End .fancy-short-banner-five */}

      {/* 
    ==============================================
			Footer Four
		============================================== */}
      <footer className="theme-footer-four">
        <div className="top-footer">
          <div className="container">
            <FooterFour />
          </div>
          {/* /.container */}
        </div>
      </footer>
      {/* /.theme-footer-four */}
    </div>
  );
};


