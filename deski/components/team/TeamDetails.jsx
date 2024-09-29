import React from "react";
import Image from "next/image";
export default function TeamDetails({data}) {
  const SliderContent = [
    {
      bigImage: "img_104",
      name: data.name  ||  data.title   || data.designation  || ' Single Profile',
      designation: data.designation  ||  "Senior Product Designer",
      aboutDetails: `Lorem ipsum dolor amet, consetre adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dole magna aliqua. Ut enim`,
      Experience: ` Lorem ipsum dolor amet, consetre adipiscing elit, sed do eiusmod
      tempor incididunt`,
      social: [
        {
          icon: "fa fa-facebook",
          link: "https://www.facebook.com/",
        },
        {
          icon: "fa fa-twitter",
          link: "https://twitter.com/",
        },
        {
          icon: "fa fa-dribbble",
          link: "https://dribbble.com/",
        },
        {
          icon: "fa fa-linkedin",
          link: "https://www.linkedin.com/",
        },
      ],
    },
  ];

  return (
    <>
      {SliderContent.map((val, i) => (
        <div className="main-bg d-lg-flex align-items-center" key={i}>
          <div className="img-meta">
            <Image width={990} height={890} style={{width:'100%',height:'fit-content',objectFit:'cover'}}    
              src={`/images/media/${data.img}.png`}
              alt="team"
              className="w-100"
            />
          </div>
          {/* End img-meta */}

          <div className="text-wrapper">
            <div className="name font-gilroy-bold">{val.name}</div>
            <div className="position">{val.designation}</div>
            <h6 className="font-gilroy-bold">ABOUT ME</h6>
            <p className="pb-45">{val.aboutDetails}</p>
            <h6 className="font-gilroy-bold">Experties</h6>
            <p className="pb-45">{val.Experience}</p>
            <h6 className="font-gilroy-bold">FOLLOW & CONTACT</h6>
            <ul className="social-icon d-flex pt-15">
              {val.social.map((social, i) => (
                <li key={i}>
                  <a href={social.link} target="_blank" rel="noreferrer">
                    <i className={social.icon}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* /.text-wrapper */}
        </div>
      ))}
    </>
  );
}
