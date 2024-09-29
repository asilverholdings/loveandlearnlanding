
import Header from "../../../components/header/Header";
import PortfolioThree from "../../../components/portfolio/PortfolioThree";
import FooterSeven from "../../../components/footer/FooterSeven";
import CopyRightThree from "../../../components/footer/CopyRightThree";
import Link from "next/link";

export const metadata = {
    title: 'Portfolio Grid 2 Column || Deski-Saas & Software Nextjs Template',
    description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
  }

const PortfolioV2 = () => {
  return (
    <div className="main-page-wrapper">
 
      {/* End Page SEO Content */}

      <Header />
      {/* End Header */}

      {/* =============================================
         Fancy Hero Six
        ==============================================  */}
      <div className="fancy-hero-six">
        <div className="container">
          <h1 className="heading">Grid 2 Columns</h1>
          <p className="sub-heading">
            An original way to show your works in a good appearance
          </p>
        </div>
      </div>
      {/* /.fancy-hero-six */}

      {/*  =============================================
            Fancy Portfolio Two
        ==============================================  */}
      <div className="fancy-portfolio-three lg-container">
        <div className="container">
          <div className="top-border bottom-border pb-130 md-pb-90">
            <PortfolioThree />
            <div className="text-center mt-90 md-mt-50">
              <h2 className="contact-title font-gordita">
                Do you have any projects? <br />
                Contact us.
              </h2>
              <Link href="/contact-cs" className="theme-btn-nine mt-35">
                Contact Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* /.fancy-portfolio-two */}

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
  );
};

export default PortfolioV2;
