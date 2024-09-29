import React from "react";
import Link from "next/link";
import Image from "next/image";
export const metadata = {
    title: 'Not Found || Deski-Saas & Software Nextjs Template',
    description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
  } 
const NotFound = () => {
  return (
    <div className="main-page-wrapper p0">
    
      {/* End Page SEO Content */}

      <div className="error-page d-lg-flex align-items-center">
        <div className="img-holder order-lg-last">
          <Image
            src="/images/media/404.svg"
           
            fill
           
            
            alt="media"
            className="w-100 illustration"
          />
          <Image
          width={104}
          height={151}
            src="/images/media/404-q.svg"
            alt="media"
            className="shapes qus"
          />
        </div>
        <div className="text-wrapper order-lg-first">
          <div className="logo">
            <Link href="/">
              <Image width={136} 
              height={43} src="/images/logo/deski_05.svg" alt="logo" />
            </Link>
          </div>
          <h1 className="font-slab">
            Sorry, <br />
            The Page Can’t <br />
            be Found.
          </h1>
          <p className="font-rubik">
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat
          </p>

          <Link
            href="/"
            className="back-home font-rubik d-flex align-items-center justify-content-center"
          >
            <span>Back to Home</span>
            <Image width={21} height={10} src="/images/icon/53.svg" alt="icon" />
          </Link>
        </div>
        {/* /.text-wrapper */}
      </div>
      {/* /.error-page */}
    </div>
  );
};

export default NotFound;
