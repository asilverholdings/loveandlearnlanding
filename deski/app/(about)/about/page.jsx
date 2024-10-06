import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import CopyRight from "../../../components/footer/CopyRight";

export const metadata = {
    title: 'About Us || Deski-Saas & Software Nextjs Template',
    description: `Learn more about our company, mission, and the values that drive us forward. Explore the story behind our team and how we provide top-notch SaaS solutions to help businesses grow.`,
};

const About = () => {
  return (
    <div className="main-page-wrapper">
      {/* End Page SEO Content */}
      <Header />
      {/* End Header */}

      {/* 	=============================================
            Fancy Hero Section
        ==============================================  */}
      <div className="fancy-hero-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-10 m-auto">
              <h2 className="font-gilroy-bold">About Us</h2>
            </div>
            <div className="col-lg-9 m-auto">
              <p className="font-rubik">
                Discover who we are and what we stand for. Our company’s story and vision drive us to deliver excellence.
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
      {/* /.fancy-hero-one */}

      {/* =====================================================
            About Section
        ===================================================== */}
      <div className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 m-auto">
              <h3>Our Mission</h3>
              <p>
                Our mission is to empower businesses by providing innovative SaaS solutions that streamline operations and foster growth.
              </p>
              <h3>Our Vision</h3>
              <p>
                We envision a future where technology and human creativity work hand-in-hand to drive business success and positive change.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* /.about-section */}

      <footer className="theme-footer-one pt-130 md-pt-70">
        <div className="top-footer">
          <div className="container">
            <Footer />
          </div>
          {/* /.container */}
        </div>
        {/* /.top-footer */}

        <div className="container">
          <div className="bottom-footer-content">
            <CopyRight />
          </div>
          {/* /.bottom-footer */}
        </div>
      </footer>
      {/* /.theme-footer-one */}
    </div>
  );
};

export default About;
