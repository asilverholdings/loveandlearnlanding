import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import CopyRight from "../../../components/footer/CopyRight";
import Image from "next/image";

export const metadata = {
  title: 'About Us || Deski-Saas & Software Nextjs Template',
  description: `Learn more about our company, mission, and the values that drive us forward. Explore the story behind our team and how we provide top-notch SaaS solutions to help businesses grow.`,
};

const About = () => {
  return (
    <div className="main-page-wrapper">
      {/* SEO Content */}
      <Header />
      {/* End Header */}

      {/* Hero Section */}
      <div className="fancy-hero-one">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="font-gilroy-bold">What Sets Us Apart</h2>
              <p className="font-rubik">
                Discover who we are and what we stand for. Our company’s story and vision drive us to deliver excellence.
              </p>
            </div>
            <div className="col-lg-6">
                <img src="https://placehold.co/400" alt="Curriculum" width={400} height={400} />
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
      </div>
      {/* End Hero Section */}

      {/* Why Us Section */}
      <div className="about-section pt-90 pb-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
            </div>
            <div className="col-lg-6">
              <h3 className="font-gilroy-bold">Why Us?</h3>
              <p>
                At our agency, we offer families peace of mind by connecting them with nannies who align with their unique needs. Our services are built on trust, reliability, and an unwavering commitment to quality.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* End Why Us Section */}

      {/* Comprehensive Process Section */}
      <div className="about-section bg-light pt-90 pb-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h3 className="font-gilroy-bold">Comprehensive Process</h3>
              <p>
                We make finding the perfect nanny easy and stress-free! Every candidate you meet has been thoroughly vetted, screened, and matched to your specific needs. Our nannies are equipped with the skills, knowledge, and experience to create a stimulating environment designed to support your child's development.
              </p>
              <p>
                Let us guide you through a trusted and personalized placement process that aligns with your family’s needs.
              </p>
            </div>
            <div className="col-lg-6">
            </div>
          </div>
        </div>
      </div>
      {/* End Comprehensive Process Section */}

      {/* Dependable Service Section */}
      <div className="about-section pt-90 pb-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
            </div>
            <div className="col-lg-6">
              <h3 className="font-gilroy-bold">Dependable Service</h3>
              <p>
                We ensure high-quality care you can trust! If your nanny is unavailable due to illness or an emergency, we’ll provide a professional back-up nanny at no additional cost. We support you every step of the way, from interviews to final decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* End Dependable Service Section */}

      {/* Curriculum Section */}
      <div className="about-section bg-light pt-90 pb-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h3 className="font-gilroy-bold">Curriculum</h3>
              <p>
                Our thoughtfully designed curriculum provides nannies with hands-on activities and educational tools to support your child’s cognitive, physical, and emotional development. Each activity is tailored to age-appropriate milestones, ensuring an enriching and well-rounded experience for your child.
              </p>
              <p>
                Every week, our nannies receive customized activity kits centered around a new theme, fostering creativity and growth in a fun and engaging environment.
              </p>
            </div>
            <div className="col-lg-6">
            </div>
          </div>
        </div>
      </div>
      {/* End Curriculum Section */}

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
      {/* End Footer Section */}
    </div>
  );
};

export default About;
