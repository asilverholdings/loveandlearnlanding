import React from "react";

import Header from "../../../../components/header/Header";
import Footer from "../../../../components/footer/Footer";
import CopyRight from "../../../../components/footer/CopyRight";
import TeamDetails from "../../../../components/team/TeamDetails";
import { allTeams } from "@/data/team";
import Image from "next/image";
export const metadata = {
    title: 'Team Details V1 || Deski-Saas & Software Nextjs Template',
    description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
  }
const TeamDetailsV1 = ({ params }) => {
  const team =  allTeams.filter((elm)=>elm.id==params.id)[0]  || allTeams[0]
  return (
    <div className="main-page-wrapper p0">
   
      {/* End Page SEO Content */}

      <Header />
      {/* End Header */}

      {/* =============================================
            Fancy Hero Two
        ==============================================  */}
      <div className="fancy-hero-five  bg-white">
        <Image width="286" height="426"
          src="/images/shape/95.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <Image width="286" height="426"
          src="/images/shape/96.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <div className="bg-wrapper">
          <div className="container">
            <div className="col-xl-9 col-lg-11 m-auto text-center">
              <h6 className="page-title">Team Details V1</h6>
              <h1 className="heading">
                <span>
                    {team.name  ||  team.title   || team.designation  || ' Single Profile'  }
                 
                  <Image width={577} height={58} src="/images/shape/line-shape-11.svg" alt="image" />
                </span>{" "}
              </h1>
            </div>
          </div>
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.fancy-hero-two */}

      {/* 	=====================================================
				Team Details
			===================================================== */}
      <div className="team-details mb-50 md-mb-10">
        <div className="container position-relative arrow-middle-center">
          <TeamDetails data={team} />
          {/* Team Details Gallery */}
        </div>
        <Image width="191" height="280"
          src="/images/shape/214.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <Image width="185" height="280"
          src="/images/shape/215.svg"
          alt="shape"
          className="shapes shape-two"
        />
      </div>
      {/* /.team-details */}

      {/* 	=====================================================
            Footer Style One
        ===================================================== */}
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
          {/*  /.bottom-footer */}
        </div>
      </footer>
      {/* /.theme-footer-one */}
    </div>
  );
};

export default TeamDetailsV1;
