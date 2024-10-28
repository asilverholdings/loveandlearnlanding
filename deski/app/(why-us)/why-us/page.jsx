import HeaderTwo from "../../../components/header/HeaderTwo";
import FooterFour from "@/components/footer/FooterFour";

export const metadata = {
  title: 'Why Us',
};

const About = () => {
  return (
    <div className="main-page-wrapper">
      <HeaderTwo />
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
        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="card shadow-card mb-5">
              <h3>Why Us?</h3>
              <p>Our nannies are dedicated to fostering engaging learning experiences tailored to your child’s development. In addition to focusing on your child's needs, they also offer holistic household support, such as preparing meals for the children, handling laundry, organizing, and more.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card shadow-card mb-5">
              <h3>Comprehensive Process</h3>
              <p>We make finding the perfect nanny easy and stress-free! Every candidate you meet has been thoroughly vetted, screened, and matched to your specific needs. Your candidate is equipped with the skills, knowledge, or experience needed to create a stimulating environment designed to support your child's learning and developmental milestones. Allow us to match you with candidates who align with your needs through a trusted and personalized placement process.
              </p>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="card shadow-card mb-5">
              <h3>Dependable Service</h3>
              <p>We want to ensure that you always have high-quality care you can trust! If your nanny is ever unavailable due to illness or a family emergency, we’ll provide a professional back-up nanny to fill in.
              </p>
              <p>
                We guide you through every step of the hiring process, from the interview to the final decision.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card shadow-card mb-5">
              <h3>Continued Support</h3>
              <p>We stand behind our service with a satisfaction guarantee. If you feel the nanny you’ve hired isn’t the right fit, we offer a 90 day replacement guarantee.
              </p>
              <p>
                Biweekly check-ins for the first few months to address concerns.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card shadow-card mb-5">
              <h3>Curriculum</h3>
              <p>At our nannying agency, we’re dedicated to providing families with exceptional care that supports the whole child. What sets us apart is our commitment to fostering an enriching environment custom to each stage of your child’s development. We’ve developed a specialized curriculum, filled with hands-on activities and educational tools, designed for our nannies to use in nurturing your child's physical, cognitive, and emotional development. Additionally, we design monthly activity kits tailored to each age group, with fascinating activities centered around a new theme every month. Our nannies are more than just caregivers – they create fun, stimulating learning experiences, making sure your child grows in a safe and engaging environment. Choose us for personalized, high-quality care that helps your child reach their fullest potential.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="theme-footer-eight pt-130 md-pt-70">
        <div className="top-footer">
          <div className="container">
            <FooterFour />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
