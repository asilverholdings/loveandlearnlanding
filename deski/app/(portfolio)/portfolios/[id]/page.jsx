

import Header from "../../../../components/header/Header";
import FooterSeven from "../../../../components/footer/FooterSeven";
import CopyRightThree from "../../../../components/footer/CopyRightThree";
import BrandSeven from "../../../../components/brand/BrandSeven";
import { allItems } from "@/data/portfolios";
import Image from "next/image";

const projectInfo = [
    { title: "DATE", meta: "23 July, 2020" },
    { title: "Client", meta: "Mariona Adisson, USA" },
    { title: "Project Type", meta: "3D Design, Apartment" },
    { title: "Duration", meta: "36 Days" },
  ];


export const metadata = {
    title: 'Portfolio Details V1 || Deski-Saas & Software Nextjs Template',
    description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
  }

const PortfolioV5 = ({ params }) => {
    const item =  allItems.filter((elm)=>elm.id==params.id)[0]  || allItems[0]
  return (
    <div className="main-page-wrapper">

      {/* End Page SEO Content */}

      <Header />
      {/* End Header */}

      {/* =============================================
         Fancy Hero Six
        ==============================================  */}
      <div className="portfolio-details-one mt-75 mb-150 md-mb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-11 m-auto">
              <div className="header text-center">
                <div className="tag">{item.meta  || 'Redesign, Branding' }</div>
                <div className="title-style-ten">
                  <h2>{item.title  || 'Deski - Landing page design with Branding' }</h2>
                </div>
                <ul className="d-flex justify-content-center social-icon mt-35">
                  <BrandSeven />
                </ul>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="main-content mt-75">
            <Image width={1200} height={620} style={{width:'100%',height:'fit-content',maxHeight:'550px',objectFit:'contain'}}    
              src={item.img  || '/images/gallery/img_33.jpg' }
              alt="gallery"
              className="mb-90 md-mb-50"
            />
            <div className="row">
              <div className="col-xl-11 m-auto">
                <div className="row">
                  <div className="col-md-4 order-md-last">
                    <ul className="project-info clearfix ps-xl-5">
                       {projectInfo.map((val, i) => (
        <li key={i}>
          <strong>{val.title}</strong>
          <span>{val.meta}</span>
        </li>
      ))}
                    </ul>
                    {/* End .project info */}
                  </div>
                  {/* End .col */}

                  <div className="col-md-8 order-md-first">
                    <h4>Overviw</h4>
                    <p>
                      Commonly used in the graphic, prit quis due & publishing
                      indust for previewing lightly visual mockups.
                    </p>
                    <h4>Task</h4>
                    <p>
                      Rebuild a unified visual system for the advertising
                      agency, made of steel which can change the world in a
                      while.
                    </p>
                    <a
                      href="https://dribbble.com/ib-themes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="theme-btn-eight"
                    >
                      Check Live Link
                    </a>
                  </div>
                  {/* End .col */}
                </div>
                {/* End .row */}

                <div className="top-border mt-70 pt-50 md-mt-40">
                  <ul className="portfolio-pagination d-flex justify-content-between">
                    <li>
                      <a href="#" className="d-flex align-items-center">
                        <Image width={75} height={79} style={{height:'fit-content'}}    
                          src="/images/gallery/img_34.jpg"
                          alt="gallery"
                          className="d-none d-lg-block"
                        />
                        <span className="d-inline-block ps-lg-4">
                          <span className="tp1 d-block">Previous</span>
                          <span className="tp2 d-block">Product Branding</span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="d-flex flex-row-reverse align-items-center text-end"
                      >
                        <Image width={75} height={79} style={{height:'fit-content'}}   
                          src="/images/gallery/img_35.jpg"
                          alt="gallery"
                          className="d-none d-lg-block"
                        />
                        <span className="d-inline-block pe-lg-4">
                          <span className="tp1 d-block">Next</span>
                          <span className="tp2 d-block">Uber App Design</span>
                        </span>
                      </a>
                    </li>
                  </ul>
                  {/* End .portfolio-pagination */}
                </div>
                {/* End .top-border */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /.fancy-hero-six */}

      {/* =====================================================
            Footer Style Seven
        ===================================================== */}
      <footer className="theme-footer-seven dark-bg pt-120 md-pt-100">
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

export default PortfolioV5;
