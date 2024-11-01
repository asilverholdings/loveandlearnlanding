import React from "react";
import HeaderTwo from "../../../components/header/HeaderTwo";
import FooterFour from "@/components/footer/FooterFour";
import Link from "next/link";

export const metadata = {
    title: 'Nanny Service',
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
            <div className="m-auto">
              <h2>For Nannies</h2>
            </div>
            <div className="m-auto">
              <p>
              Come join our team and we will walk you through the process of securing a fantastic 
              family! We’re here to support you every step of the way, starting with training that 
              helps you create fun and enriching experiences for children. Once you're placed with a 
              family, we’ll maintain regular check-ins, offering professional coaching, guidance, and 
              encouragement to help you succeed.
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
    <div className="nanny-requirements">
      <h3>Our Requirements</h3>
      <div className="card-style mt-5">
        <ul className="service-list">
          <li>Minimum 2 years of childcare experience</li>
          <li>CPR and First Aid Certification</li>
          <li>Non-Smoker</li>
          <li>Passion for childcare</li>
          <li>Fantastic work and personal references</li>
          <li>U.S. Driver's License</li>
        </ul>
      </div>
    </div>
  </div>
</div>
<div className="text-center mt-3">
  <Link
    href="/nanny-application"
    className="theme-btn-five"
    data-aos="fade-up"
    data-aos-duration="1200"
    data-aos-delay="200"
    style={{ width: '15%', display: 'inline-block' }}
  >
    Application
  </Link>
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
                <div className="feature-box card-style">
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
                <div className="feature-box card-style">
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
                <div className="feature-box card-style">
                  <h3>Matching Tailored to You</h3>
                  <p>
                    We take the time to understand your job preferences, including schedule, location, children's ages, values, and other important factors to make sure each family you connect with is an ideal match.
                  </p>
                </div>
              </div>
            </div>

            {/* References/Background Check Section */}
            <div className="row align-items-center mb-5">
              <div className="col-lg-6">
                <div className="feature-box card-style">
                  <h3>References and Background Check</h3>
                  <p>
                    Minimum of 3 references. We carefully review all of your references, as they play a key role in showcasing your experience, reliability, and the positive impact you've had on families you've worked with.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <img src="https://placehold.co/400" alt="Interview Process" width={400} height={400} />
              </div>
            </div>



            {/* Professional Support Section */}
            <div className="row align-items-center mb-5">
              <div className="col-lg-6">
                <img src="https://placehold.co/400" alt="Successful Match" width={400} height={400} />
              </div>
              <div className="col-lg-6">
                <div className="feature-box card-style">
                  <h3>Professional Support</h3>
                  <p>
                    We're here for you! With our monthly activity guides, hands-on curricula, and various training opportunities, you’ll always feel supported. Facing a new challenge? Reach out to us, and we'll provide helpful solutions!
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

      <footer className="theme-footer-eight mt-100 mb-80">
        <div className="top-footer">
            <div className="container">
              <FooterFour />
            </div>
            {/* /.container */}
          </div>
      </footer>
    </div>
  );
};

export default ServiceV3;
