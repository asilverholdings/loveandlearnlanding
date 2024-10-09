import React from "react";
import Link from "next/link";
import HeaderThree from "../../../components/header/HeaderThree";
import FooterEight from "../../../components/footer/FooterEight";
import CopyRightFour from "../../../components/footer/CopyRightFour";
import FancyFeatureThirtyFive from "../../../components/features/FancyFeatureThirtyFive";
import CounterSix from "../../../components/counter/CounterSix";
import Image from "next/image";
import HeaderTwo from "../../../components/header/HeaderTwo";

export const metadata = {
    title: 'Nanny Service || Screening & Matchmaking',
    description: `Explore our comprehensive screening and matchmaking services for families and nannies. We ensure a perfect match by conducting thorough background checks and personality assessments.`,
}

const ServiceV3 = () => {
  return (
    <div className="main-page-wrapper for-nannies">
      <HeaderTwo />

      {/* =============================================
          Hero Section
      ============================================== */}
      <div className="fancy-hero-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 m-auto">
              <h2>For Nannies</h2>
            </div>
            <div className="col-xl-9 m-auto">
              <p>
                We help families find the perfect nanny and support nannies in securing their ideal job.
              </p>
            </div>
          </div>
        </div>
        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
        <div className="bubble-three"></div>
        <div className="bubble-four"></div>
        <div className="bubble-five"></div>
        <div className="bubble-six"></div>
      </div>
      {/* =============================================
          For Nannies Section
      ============================================== */}
<div className="fancy-text-block-seven">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-5">
        <div className="img-holder mb-50" data-aos="fade-right" data-aos-duration="1200">
          <img
            width={400}
            height={400}
            style={{ height: 'fit-content' }}
            src="https://placehold.co/400"
            alt="Nanny Service"
          />
        </div>
      </div>

      <div className="col-lg-7" data-aos="fade-left" data-aos-duration="1200">
        <h3>For Nannies</h3>
        <ul className="service-list">
          <li>Minimum 2 years of childcare experience</li>
          <li>CPR and First Aid Certification</li>
          <li>Non-Smoker</li>
          <li>Fantastic work and personal references</li>
          <li>U.S. Driver's License</li>
        </ul>
      </div>
    </div>
        <p>Come join our team, and we’ll walk you through the process of securing a fantastic family! Our support starts with training and regular check-ins to help you succeed.</p>
  </div>
</div>


      {/* =============================================
          Our Process Section
      ============================================== */}
      {/* Our Process Section */}
      <div className="for-families blog-page-bg mt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="font-gilroy-bold">Our Process</h2>
            </div>

            {/* Nanny Application Section */}
            <div className="row align-items-center mb-5">
              <div className="col-lg-6">
                <img src="https://placehold.co/400" alt="Family Application" width={400} height={400} />
              </div>
              <div className="col-lg-6">
                <div className="feature-box">
                  <h3>Nanny Application</h3>
                  <p>
                    Find your next great position! Share your childcare experience, philosophies you are most aligned with, and any certifications and/or training you have so we can match you with the right family. 
                  </p>
                </div>
              </div>
            </div>

            {/* Interview Process Section */}
            <div className="row align-items-center mb-5 flex-row-reverse">
              <div className="col-lg-6">
                <img src="https://placehold.co/400" alt="Matchmaking Process" width={400} height={400} />
              </div>
              <div className="col-lg-6">
                <div className="feature-box">
                  <h3>Interview</h3>
                  <p>
                    We will arrange a personal meeting, either in person or virtually, at a time that fits your schedule. We are excited to meet you and learn about the qualities that make you unique!
                  </p>
                </div>
              </div>
            </div>

            {/* Matchmaking Section */}
            <div className="row align-items-center mb-5">
              <div className="col-lg-6">
                <img src="https://placehold.co/400" alt="Interview Process" width={400} height={400} />
              </div>
              <div className="col-lg-6">
                <div className="feature-box">
                  <h3>Matching Tailored to You</h3>
                  <p>
                    We take the time to understand your job preferences, including schedule, location, children's ages, values, and other important factors, to make sure each family you connect with is an ideal match.
                  </p>
                </div>
              </div>
            </div>

            {/* References/Background Check Section */}
            <div className="row align-items-center mb-5 flex-row-reverse">
              <div className="col-lg-6">
                <img src="https://placehold.co/400" alt="Trial Period" width={400} height={400} />
              </div>
              <div className="col-lg-6">
                <div className="feature-box">
                  <h3>References and Background Check</h3>
                  <p>
                    Minimum of 3 references (work and personal)
                    We carefully review all of your references, as they play a key role in showcasing your experience, reliability, and the positive impact you've had on families you've worked with
                    All of our successful candidates are thoroughly background checked. (Available investigations include - Criminal Background Investigation, DMV Driving Record, Social Security Number Verification, Sex Offender Registry Check, Civil Restraining Orders Check, National Wants and Warrants)
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Support Section */}
            <div className="row align-items-center mb-5">
              <div className="col-lg-6">
                <img src="https://placehold.co/400" alt="Successful Match" width={400} height={400} />
              </div>
              <div className="col-lg-6">
                <div className="feature-box">
                  <h3>Professional Support</h3>
                  <p>
                    We're here for you! With our monthly activity guides, hands-on curricula, and more, you’ll always feel supported. Facing a new challenge? Reach out to us, and we'll provide helpful solutions!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =============================================
          Screening and Matchmaking Section
      ============================================== */}
      <div className="fancy-feature-thirtyTwo pt-110 pb-160 md-pt-90 md-pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="title-style-eleven text-center pb-50">
                <h2>Screening and Matchmaking</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6" data-aos="fade-up" data-aos-duration="1200">
              <h3>Screening</h3>
              <ul className="service-list">
                <li>Educational Background</li>
                <li>Work History</li>
                <li>Childcare Experience</li>
                <li>Work and Personal References</li>
                <li>Criminal Background Checks (7 Years)</li>
                <li>Social Security Verification</li>
                <li>National Sex Offender Registry Check</li>
                <li>Nationwide Driving Record Check</li>
              </ul>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
              <h3>Matchmaking</h3>
              <p>
                We connect with the family via Zoom or in-person to ensure every aspect of the potential relationship is explored for a perfect match.
              </p>
              <p>
                Both family and nanny take a specialized personality assessment to enhance compatibility and long-term success.
              </p>
            </div>
          </div>
        </div>
      </div>


      <footer className="theme-footer-eight mt-100">
        <div className="container">
          <FooterEight />
        </div>
        <div className="container">
          <div className="bottom-footer mt-50 md-mt-30">
            <CopyRightFour />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServiceV3;
