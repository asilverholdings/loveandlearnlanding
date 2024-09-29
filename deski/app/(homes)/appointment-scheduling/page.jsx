



import FancyFeatureTewentyFour from "../../../components/features/FancyFeatureTewentyFour";
import FancyFeatureTewentyTwo from "../../../components/features/FancyFeatureTewentyTwo";
import HeaderLandingAppointment from "../../../components/header/landing/HeaderLandingAppointment";
import HeroBannerNine from "../../../components/hero-banner/HeroBannerNine";
import TestimonialSeven from "../../../components/testimonial/TestimonialSeven";
import SocialTwo from "../../../components/social/SocialTwo";
import FooterEight from "../../../components/footer/FooterEight";
import CopyRightFour from "../../../components/footer/CopyRightFour";
import FancybBannerTen from "@/components/fancy-features/FancybBannerTen";
import Image from "next/image";
import dynamic from "next/dynamic";
const Scrollspy = dynamic(() => import('@/components/scrollpy/Scrollphy'), {
  ssr: false,

})

export const metadata = {
    title: 'Appointment Scheduling || Deski-Saas & Software Nextjs Template',
    description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
  }

const AppointmentScheduling = () => {


  return (
    <div className="main-page-wrapper p0 font-gordita">
     

      <HeaderLandingAppointment />
      {/* End Header Landing Appoinment Scheduling */}
      <Scrollspy>

      <div id="home">
        <HeroBannerNine />
      </div>
      {/* End Hero Banner Nine */}

      {/* =============================================
            Fancy Feature Twenty Two
        ==============================================  */}
      <div className="fancy-feature-twentyTwo mt-200 md-mt-120">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-7 col-md-8 m-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="title-style-eight text-center mb-40 md-mb-10">
                <h2>
                  One Platform. For any{" "}
                  <span>
                    business <Image width={313} height={67} src="/images/shape/191.svg" alt="shape" />
                  </span>
                </h2>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <FancyFeatureTewentyTwo />
          </div>
        </div>
      </div>
      {/* /.fancy-feature-twentyTwo */}

      {/* =============================================
            Fancy Feature Twenty Three
        ==============================================  */}
      <div className="fancy-feature-twentyThree pt-170 md-pt-100" id="feature">
        <div className="container">
          <div
            className="title-style-nine text-center pb-180 md-pb-100"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <h6>Our Features</h6>
            <h2>
              Deski is all About Easy Bookings, Efficient Service, &{" "}
              <span>
                Robust Interface <Image width={442} height={67} src="/images/shape/192.svg" alt="shape" />
              </span>
            </h2>
            <p>
              Our online booking software allows you to schedule your client’s
              appointments easily & efficiently.
            </p>
          </div>
          {/* End title */}

          <div className="block-style-twentyThree">
            <div className="row align-items-center">
              <div
                className="col-lg-6 order-lg-last ms-auto"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="screen-container ms-auto">
                  <div
                    className="oval-shape"
                    style={{ background: "#69FF9C" }}
                  ></div>
                  <div
                    className="oval-shape"
                    style={{ background: "#FFF170" }}
                  ></div>
                  <Image width={504} height={374} style={{height:'fit-content'}}    
                    src="/images/assets/screen_18.png"
                    alt="image"
                    className="shapes shape-one"
                  />
                </div>
                {/* /.screen-container */}
              </div>
              <div
                className="col-lg-5 order-lg-first"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="text-wrapper">
                  <h6>One click away</h6>
                  <h3 className="title">Make your schedule Online easily.</h3>
                  <p>
                    From its medieval origins to the digital era, learn
                    everything there is to know about the ubiquitep lorem ipsum
                    passage.
                  </p>
                </div>
                {/*  /.text-wrapper */}
              </div>
            </div>
          </div>
          {/* /.block-style-twentyThree */}

          <div className="block-style-twentyThree">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="screen-container me-auto"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                >
                  <div
                    className="oval-shape"
                    style={{ background: "#FFDE69" }}
                  ></div>
                  <div
                    className="oval-shape"
                    style={{ background: "#FF77D9" }}
                  ></div>
                  <Image width={529} height={391} style={{height:'fit-content'}}    
                    src="/images/assets/screen_19.png"
                    alt="screen"
                    className="shapes shape-two"
                  />
                </div>
                {/* /.screen-container */}
              </div>
              <div
                className="col-lg-5 ms-auto"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="text-wrapper">
                  <h6>WORKFLOW MANAGEMENT</h6>
                  <h3 className="title">Automate reminders & follow-ups.</h3>
                  <p>
                    Calendly puts your entire meeting workflow on autopilot,
                    sending everything from reminder emails to thank you notes,
                    so you can focus on the work only you can do.
                  </p>
                </div>
                {/* /.text-wrapper */}
              </div>
            </div>
          </div>
          {/* /.block-style-twentyThree */}

          <div className="block-style-twentyThree">
            <div className="row">
              <div
                className="col-lg-6 order-lg-last ms-auto"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="screen-container ms-auto">
                  <div
                    className="oval-shape"
                    style={{ background: "#00F0FF" }}
                  ></div>
                  <div
                    className="oval-shape"
                    style={{ background: "#FC6BFF" }}
                  ></div>
                  <Image width={583} height={449} style={{height:'fit-content'}}    
                    src="/images/assets/screen_20.png"
                    alt="screen"
                    className="shapes shape-three"
                  />
                </div>
                {/* /.screen-container */}
              </div>
              <div
                className="col-lg-5 order-lg-first"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="text-wrapper">
                  <h6>ON-DEMAND SCHEDULING</h6>
                  <h3 className="title">
                    More connections and no cancellations.
                  </h3>
                  <p>
                    Prospects can schedule meetings in just a few clicks –
                    whenever the moment is right. And cancellations go down
                    because rescheduling is easy, fast, and on their terms.
                  </p>
                </div>
                {/* /.text-wrapper */}
              </div>
            </div>
          </div>
          {/* /.block-style-twentyThree */}
        </div>
      </div>
      {/* /.fancy-feature-twentyThree */}

      {/* 	=============================================
            Fancy Feature Twenty Four
        ==============================================  */}
      <div className="fancy-feature-twentyFour pt-140 md-pt-60" id="service">
        <div className="container">
          <div className="title-style-nine text-center">
            <h6>Indutries Include</h6>
            <h2>
              Deski has the ability to serve Any{" "}
              <span>
                Business Segment <Image width={555} height={67} src="/images/shape/194.svg" alt="shape" />
              </span>
            </h2>
          </div>
        </div>
        <div className="bg-wrapper mt-100 md-mt-80">
          <a
            href="#feedback"
            className="click-scroll-button scroll-target d-flex justify-content-center"
          >
            <Image width={20} height={39} src="/images/shape/200.svg" alt="shape" />
          </a>
          <div className="container">
            <FancyFeatureTewentyFour />
          </div>
          <Image width={56} height={55}
            src="/images/shape/195.svg"
            alt="shape"
            className="shapes shape-one"
          />
          <Image width={40} height={40}
            src="/images/shape/196.svg"
            alt="shape"
            className="shapes shape-two"
          />
          <Image width={51} height={51}
            src="/images/shape/197.svg"
            alt="shape"
            className="shapes shape-three"
          />
          <Image width={38} height={38}
            src="/images/shape/198.svg"
            alt="shape"
            className="shapes shape-four"
          />
          <Image width={29} height={29}
            src="/images/shape/199.svg"
            alt="shape"
            className="shapes shape-five"
          />
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* End .fancy feature twenty four */}

      {/* =====================================================
            Client Feedback Slider Six
        ===================================================== */}
      <div
        className="client-feedback-slider-six pt-170 md-pt-120"
        id="feedback"
      >
        <div className="inner-container">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-7 m-auto"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="title-style-nine text-center">
                  <h6>Testimonials</h6>
                  <h2>
                    What’s Our
                    <span>
                      Client <Image width={200} height={62} src="/images/shape/201.svg" alt="shape" />
                    </span>
                    Think About Us.
                  </h2>
                </div>
              </div>
            </div>
          </div>
          {/* End .container */}
          <div className="clientSliderSix style-two">
            <TestimonialSeven />
          </div>
        </div>
        {/*  /.inner-container */}
      </div>
      {/* /.client-feedback-slider-six */}

      {/*     =====================================================
        Partner Section One
    ===================================================== */}
      <div className="partner-section-one mt-170 md-mt-90 pb-120 md-pb-80">
        <div className="container">
          <div className="title-style-nine text-center mb-100">
            <h6>Our Partners</h6>
            <h2>
              They
              <span>
                Trust Us, <Image width={200} height={62} src="/images/shape/201.svg" alt="shape" />
              </span>{" "}
              & Vice Versa
            </h2>
          </div>
          {/* End title-style-nine */}
          <SocialTwo />
        </div>
        {/* End .container */}

        <Image width={55} height={55}
          src="/images/shape/202.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <Image width={25} height={25}
          src="/images/shape/203.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <Image width={46} height={46}
          src="/images/shape/204.svg"
          alt="shape"
          className="shapes shape-three"
        />
        <Image width={21} height={21}
          src="/images/shape/205.svg"
          alt="shape"
          className="shapes shape-four"
        />
        <Image width={36} height={36}
          src="/images/shape/206.svg"
          alt="shape"
          className="shapes shape-five"
        />
        <Image width={29} height={29}
          src="/images/shape/207.svg"
          alt="shape"
          className="shapes shape-six"
        />
        <Image width={57} height={57}
          src="/images/shape/208.svg"
          alt="shape"
          className="shapes shape-seven"
        />
        <Image width={28} height={28}
          src="/images/shape/209.svg"
          alt="shape"
          className="shapes shape-eight"
        />
      </div>
      {/*  /.partner-section-one */}

      {/* 	=====================================================
				Fancy Short Banner Ten
			===================================================== */}
     <FancybBannerTen/>
      {/*  /.fancy-short-banner-ten */}
      </Scrollspy>
      {/*  =====================================================
            Footer Style Eight
        ===================================================== */}
      <footer className="theme-footer-eight mt-100">
        <div className="top-footer">
          <div className="container">
            <FooterEight />
          </div>
          {/* /.container */}
        </div>

        <div className="container">
          <div className="bottom-footer mt-50 md-mt-30">
            <CopyRightFour />
          </div>
        </div>
      </footer>
      {/* /.theme-footer-eight  */}
    </div>
  );
};

export default AppointmentScheduling;


