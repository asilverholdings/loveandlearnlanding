'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";
const HomeDropdown = [
  {
    img: "home01",
    routerPath: "/",
    inenerText: "",
    inenerTextWrapClass: "",
    clasName: `dropdown-item img-box`,
    title: "Event Organizer",
  },
  {
    img: "home02",
    routerPath: "/doc-landing",
    inenerText: "",
    inenerTextWrapClass: "",
    clasName: `dropdown-item img-box`,
    title: "Doc Landing",
  },
  {
    img: "home03",
    routerPath: "/project-management",
    inenerText: "",
    inenerTextWrapClass: "",
    clasName: `dropdown-item img-box`,
    title: "Project Management",
  },
  {
    img: "home04",
    routerPath: "/customer-support",
    inenerText: "",
    inenerTextWrapClass: "",
    clasName: `dropdown-item img-box`,
    title: "Customer Support",
  },
  {
    img: "home05",
    routerPath: "/product-landing",
    inenerText: "",
    inenerTextWrapClass: "",
    clasName: `dropdown-item img-box`,
    title: "Product Landing",
  },
  {
    img: "home06",
    routerPath: "/product-landing-dark",
    inenerText: "",
    inenerTextWrapClass: "",
    clasName: `dropdown-item img-box`,
    title: "Product Landing Dark",
  },
  {
    img: "home07",
    routerPath: "/note-taking-landing",
    inenerText: "",
    inenerTextWrapClass: "",
    clasName: `dropdown-item img-box`,
    title: "Not Taking Landing",
  },
  {
    img: "home08",
    routerPath: "/video-editor-landing",
    inenerText: "",
    inenerTextWrapClass: "",
    clasName: `dropdown-item img-box`,
    title: "Video Editor Landing",
  },
  {
    img: "home10",
    routerPath: "/appointment-scheduling",
    inenerText: "",
    inenerTextWrapClass: "",
    clasName: `dropdown-item img-box`,
    title: "Appointment Scheduling",
  },
  {
    img: "home13",
    routerPath: "/website-builder",
    inenerText: "",
    inenerTextWrapClass: "",
    clasName: `dropdown-item img-box`,
    title: "Website Builder",
  },
  {
    img: "home11",
    routerPath: "/mobile-app-landing",
    inenerText: "",
    inenerTextWrapClass: "",
    clasName: `dropdown-item img-box`,
    title: "Mobile App Landing",
  },
  {
    img: "home12",
    routerPath: "/doc-signature",
    inenerText: "",
    inenerTextWrapClass: "",
    clasName: `dropdown-item img-box`,
    title: "Doc Signature",
  },
  {
    img: "home14",
    routerPath: "/form-survey-landing",
    inenerText: "",
    inenerTextWrapClass: "",
    clasName: `dropdown-item img-box`,
    title: "Form Survey",
  },
  {
    img: "home16",
    routerPath: "/vr-landing",
    inenerText: "",
    inenerTextWrapClass: "",
    clasName: `dropdown-item img-box`,
    title: "VR Landing",
  },

  {
    img: "home09",
    routerPath: "/coming-soon",
    inenerText: "",
    inenerTextWrapClass: "",
    clasName: `dropdown-item img-box`,
    title: "Coming Soon",
  },
  {
    img: "home15",
    routerPath: "/e-commerce",
    inenerText: "",
    inenerTextWrapClass: "",
    clasName: `dropdown-item img-box`,
    title: "E-commerce",
  },
];
import { usePathname } from "next/navigation";
const MegaMenuLanding = () => {
  const pathname = usePathname();
  return (
    <ul className="mega-menu d-flex " style={{maxHeight:'calc(100vh - 100px)',overflowY:'scroll'}}>
      {HomeDropdown.map((val, i) => (
        <li key={i}>
          <Link     href={val.routerPath} className={val.clasName}>
            <Image width={990} height={890} style={{width:'100%',height:'fit-content'}}     src={`/images/menu/${val.img}.png`} alt="home-demo" />
            <span className={pathname == val.routerPath ? "font-rubik activeMenu" : 'font-rubik'}>{val.title}</span>
            <div className={val.inenerTextWrapClass}>
              <div className="font-rubik">{val.inenerText}</div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
  // End navbar nav mega menu main
};

export default MegaMenuLanding;
