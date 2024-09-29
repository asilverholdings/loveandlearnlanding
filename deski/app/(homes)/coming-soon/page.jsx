import CommingSoonForm from "@/components/form/CommingSoonForm";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
    title: 'Appointment Scheduling || Deski-Saas & Software Nextjs Template',
    description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
  }
const socialContent = [
  {
    icon: "fa-facebook",
    link: "https://www.facebook.com/",
  },
  {
    icon: "fa-instagram",
    link: "https://www.instagram.com/",
  },
  {
    icon: "fa-pinterest-p",
    link: "https://www.pinterest.com/",
  },

  {
    icon: "fa-linkedin",
    link: "https://www.linkedin.com/",
  },
];

const ComingSoon = () => {
  
  return (
    <>
     
      {/* End Page SEO Content */}
      <div className="full-height-layout d-flex align-items-center">
        <div className="coming-soon-content font-gordita">
          <div className="logo coming-soon-brand">
            <Link href="/">
              <Image width="138" height="47" src="/images/logo/deski_06.svg" alt="brand logo" />
            </Link>
          </div>
          <h6>COMING SOON</h6>
          <h1 data-aos="fade-up">Get notified when we’r ready to launch!</h1>
          <div className="row">
            <div className="col-lg-9 m-auto">
              <p>
                We're under construction. Check back for an update soon. Stay in
                touch!
              </p>
            </div>
          </div>
          <CommingSoonForm/>

          <ul className="social-icon d-flex justify-content-center">
            {socialContent.map((val, i) => (
              <li key={i}>
                <a href={val.link} target="_blank" rel="noreferrer">
                  <i className={`fa ${val.icon}`}></i>
                </a>
              </li>
            ))}
          </ul>

          <Image width={94} height={188}
            src="/images/shape/179.svg"
            alt="shape"
            className="shapes shape-one"
          />
          <Image width={12} height={12}
            src="/images/shape/180.svg"
            alt="shape"
            className="shapes shape-two"
          />
          <Image width={39} height={41}
            src="/images/shape/181.svg"
            alt="shape"
            className="shapes shape-three"
          />
          <Image width={55} height={55}
            src="/images/shape/182.svg"
            alt="shape"
            className="shapes shape-four"
          />
          <Image width={18} height={18}
            src="/images/shape/183.svg"
            alt="shape"
            className="shapes shape-five"
          />
          <Image width={16} height={16}
            src="/images/shape/184.svg"
            alt="shape"
            className="shapes shape-six"
          />
          <Image width={46} height={46}
            src="/images/shape/185.svg"
            alt="shape"
            className="shapes shape-seven"
          />
          <Image width={25} height={25}
            src="/images/shape/186.svg"
            alt="shape"
            className="shapes shape-eight"
          />
          <Image width={12} height={12}
            src="/images/shape/187.svg"
            alt="shape"
            className="shapes shape-nine"
          />
          <Image width={233} height={111}
            src="/images/shape/188.svg"
            alt="shape"
            className="shapes shape-ten"
          />
        </div>
        {/* /.coming-soon-content */}
      </div>
    </>
  );
};

export default ComingSoon;
