import React from "react";
import Link from "next/link";
import LoginForm from "../../../components/contact/form/LoginForm";
import Image from "next/image";
export const metadata = {
    title: 'Login || Deski-Saas & Software Nextjs Template',
    description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
  }
const Login = () => {
  return (
    <div className="main-page-wrapper p0">
    
      {/* End Page SEO Content */}
      <div className="user-data-page clearfix d-lg-flex">
        <div className="illustration-wrapper d-flex align-items-center justify-content-between flex-column">
          <h3 className="font-rubik">
            Want your best managment <br />
            software? <Link href="/signup">sign up</Link>
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
        {/* /.illustration-wrapper */}

        <div className="form-wrapper">
          <div className="d-flex justify-content-between">
            <div className="logo">
              <Link href="/project-management">
                <Image  width="87" height="40" src="/images/logo/deski_01.svg" alt="logo" />
              </Link>
            </div>
            <Link
              className="font-rubik go-back-button"
              href="/project-management"
            >
              Go to home
            </Link>
          </div>
          <div className="mt-80 md-mt-40">
            <h2>
              Hi buddy, welcome <br /> Back!
            </h2>
            <p className="header-info pt-30 pb-50">
              Still don't have an account? <Link href="/signup">Sign Up</Link>
            </p>
          </div>

          <LoginForm />
          {/* Login Form End */}
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
        </div>
        {/* /.form-wrapper */}
      </div>
      {/* /.user-data-page */}
    </div>
  );
};

export default Login;
