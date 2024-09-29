import React from "react";

import SignUpForm from "../../../components/contact/form/SignUpForm";
import Link from "next/link";
import Image from "next/image";
export const metadata = {
    title: 'Sign Up || Deski-Saas & Software Nextjs Template',
    description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
  } 
const SignUp = () => {
  return (
    <div className="main-page-wrapper p0">
     
      {/* End Page SEO Content */}
      <div className="user-data-page clearfix d-lg-flex">
        <div className="illustration-wrapper d-flex align-items-center justify-content-between flex-column">
          <h3 className="font-rubik">
            We have a “strategic” plan its <br /> called doing things.
          </h3>
          <div className="illustration-holder">
            <Image width="930" height="738"
              src="/images/assets/ils_08.svg"
              alt="illustration"
              className="illustration"
            />
            <Image width="554" height="672"
              src="/images/assets/ils_08.1.svg"
              alt="illustration"
              className="shapes shape-one"
            />
            <Image  width="369" height="728"
              src="/images/assets/ils_08.2.svg"
              alt="illustration"
              className="shapes shape-two"
            />
          </div>
        </div>
        {/* /.illustration-wrapper  */}

        <div className="form-wrapper">
          <div className="d-flex justify-content-between">
            <div className="logo">
              <Link href="/">
                <Image  width="87" height="40" src="/images/logo/deski_01.svg" alt="logo" />
              </Link>
            </div>
            <Link className="font-rubik go-back-button" href="/">
              Go to home
            </Link>
          </div>
          {/* End d-flex */}
          <div className="mt-30">
            <h2>Join with thousands of startup!</h2>
            <p className="header-info pt-30 pb-50">
              Already have an account? <Link href="/login">Login</Link>
            </p>
          </div>
          <SignUpForm />
          {/* End Signup Form */}
          <p className="text-center font-rubik copyright-text">
            Copyright @{new Date().getFullYear()}{" "}
            <a
              href="https://themeforest.net/user/ib-themes/portfolio"
              target="_blank"
              title="myFrame"
              rel="noreferrer"
            >
              ib-themes
            </a>{" "}
            inc.
          </p>
          {/* End .copyright */}
        </div>
        {/* /.form-wrapper */}
      </div>
      {/* /.user-data-page */}
    </div>
  );
};

export default SignUp;