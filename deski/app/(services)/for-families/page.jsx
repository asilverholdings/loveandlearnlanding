import Header from "../../../components/header/Header";
import HeaderTwo from "../../../components/header/HeaderTwo";
import Footer from "../../../components/footer/Footer";
import CopyRight from "../../../components/footer/CopyRight";
import Image from "next/image"; // Import the Image component for optimization

export const metadata = {
  title: 'For Families || Deski-Saas & Software Next.js Template',
  description: `Discover our tailored services for families, designed to provide exceptional care and support. From screening to matchmaking, our solutions are crafted to meet your needs.`,
};

const ForFamilies = () => {
  return (
    <div className="main-page-wrapper">
      {/* Page Header */}
      <HeaderTwo />

      {/* Hero Section */}
      <div className="fancy-hero-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-10 m-auto text-center">
              <h2 className="font-gilroy-bold">Exceptional Services for Families</h2>
              <p className="font-rubik">
                We connect families with trusted caregivers, ensuring peace of mind and a nurturing environment for your loved ones.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Bubbles */}
        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
        <div className="bubble-three"></div>
        <div className="bubble-four"></div>
        <div className="bubble-five"></div>
        <div className="bubble-six"></div>
      </div>

      {/* Our Process Section */}
      <div className="for-families blog-page-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="font-gilroy-bold">Our Process</h2>
            </div>

            {/* Family Application Section */}
            <div className="row align-items-center mb-5">
              <div className="col-lg-6">
                <img src="https://placehold.co/400" alt="Family Application" width={400} height={400} />
              </div>
              <div className="col-lg-6">
                <div className="feature-box">
                  <h3>Family Application</h3>
                  <p>
                    Fill out our <a href="#" className="link-highlight">family application</a> to share your nanny preferences and childcare needs. You'll describe the job responsibilities, childcare philosophies, and professional qualities you look for in your nanny.
                  </p>
                </div>
              </div>
            </div>

            {/* Matchmaking Process Section */}
            <div className="row align-items-center mb-5 flex-row-reverse">
              <div className="col-lg-6">
                <img src="https://placehold.co/400" alt="Matchmaking Process" width={400} height={400} />
              </div>
              <div className="col-lg-6">
                <div className="feature-box">
                  <h3>Matchmaking Process</h3>
                  <p>
                    We use a thorough questionnaire to dive deep into every aspect of the potential family-candidate relationship. This includes a personality assessment to ensure a high compatibility, and based on these insights, we provide resumes of carefully selected candidates who match your family's needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Interview Section */}
            <div className="row align-items-center mb-5">
              <div className="col-lg-6">
                <img src="https://placehold.co/400" alt="Interview Process" width={400} height={400} />
              </div>
              <div className="col-lg-6">
                <div className="feature-box">
                  <h3>Interview</h3>
                  <p>
                    Once you've reviewed your matches, we set up an in-person or virtual interview to ensure a strong connection before committing.
                  </p>
                </div>
              </div>
            </div>

            {/* Trial Period Section */}
            <div className="row align-items-center mb-5 flex-row-reverse">
              <div className="col-lg-6">
                <img src="https://placehold.co/400" alt="Trial Period" width={400} height={400} />
              </div>
              <div className="col-lg-6">
                <div className="feature-box">
                  <h3>Trial Period</h3>
                  <p>
                    We offer a two-week trial period to ensure the nanny is the right fit for your family. This allows you to see how they integrate into your family routine, and gives both sides a chance to ensure mutual comfort before a long-term commitment.
                  </p>
                </div>
              </div>
            </div>

            {/* Match Section */}
            <div className="row align-items-center mb-5">
              <div className="col-lg-6">
                <img src="https://placehold.co/400" alt="Successful Match" width={400} height={400} />
              </div>
              <div className="col-lg-6">
                <div className="feature-box">
                  <h3>Match</h3>
                  <p>
                    Both sides should feel aligned on responsibilities, communication, and boundaries. We provide a detailed family agreement form outlining key expectations to ensure clarity and a smooth relationship from the start.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="theme-footer-one pt-130 md-pt-70">
        <div className="top-footer">
          <div className="container">
            <Footer />
          </div>
        </div>
        <div className="container">
          <div className="bottom-footer-content">
            <CopyRight />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ForFamilies;
