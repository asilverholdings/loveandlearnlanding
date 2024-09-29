import React from "react";

import HeaderThree from "../../../components/header/HeaderThree";
export const metadata = {
    title: 'Changelog || Deski-Saas & Software Nextjs Template',
    description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
  }
const Changelog = () => {
  return (
    <>
   
      {/* End Page SEO Content */}
      <HeaderThree />
      {/* End Header */}

      {/* 	=============================================
				Fancy Hero Five
			==============================================  */}
      <div className="fancy-hero-five">
        <div className="bg-wrapper">
          <div className="container">
            <div className="text-center">
              <h1 className="heading">Changelog</h1>
              <p className="sub-heading space-xs">
                Find the template Changelog here.
              </p>
            </div>
          </div>
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.fancy-hero-five */}

      {/* =============================================
            Documentation
        ==============================================  */}

      <div className="doc-container mt-70 sm-m0">
        <div className="container">
          <div className="row flex-xl-nowrap no-gutters">
            {/* <!-- ****************************** DOC MAIN BODY ********************************* --> */}
            <main className="col-12 doc-main-body">
             

              <h5 className="font-rubik mb-20">
                Release Date: <mark>12/08/2023</mark>
              </h5>
              <div className="mark-blue">
                <pre>#First Published</pre>
              </div>
              {/* <!-- /.mark-blue --> */}
            </main>
            {/* <!-- /.doc-main-body --> */}
          </div>
        </div>
      </div>
      {/* <!-- /.doc-container --> */}
    </>
  );
};

export default Changelog;
