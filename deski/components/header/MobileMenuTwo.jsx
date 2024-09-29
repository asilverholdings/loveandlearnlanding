
'use client'

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React , {useState,useEffect} from 'react'
export const menuList = [
    {
      title: "Home",
      links:  [
        {
          label: "Event Organiser",
          href: "/",
        },
        {
          label: "Project Management",
          href: "/project-management",
        },
        {
          label: "Customer Support",
          href: "/customer-support",
        },
        {
          label: "Doc landing",
          href: "/doc-landing",
        },
        {
          label: "Product landing",
          href: "/product-landing",
        },
        {
          label: "Product landing Dark",
          href: "/product-landing-dark",
        },
        {
          label: "Note Taking App landing",
          href: "/note-taking-landing",
        },
        {
          label: "Video Editor Landing",
          href: "/video-editor-landing",
        },
        {
          label: "Appointment Scheduling",
          href: "/appointment-scheduling",
        },
        {
          label: "Mobile App",
          href: "/mobile-app-landing",
        },
        {
          label: "Doc Signature",
          href: "/doc-signature",
        },
        {
          label: "Website Builder",
          href: "/website-builder",
        },
        {
          label: "Form Survey",
          href: "/form-survey-landing",
        },
        {
          label: "VR Landing",
          href: "/vr-landing",
        },
        {
          label: "E-Commerce",
          href: "/e-commerce",
        },
        {
          label: "Coming Soon",
          href: "/coming-soon",
        },
      ],
    },
    {
      title: "Pages",
      links: [
        {
          title: "Pricing",
          links: [
            {
              label: "Customer Support",
              href: "/pricing-cs",
            },
            {
              label: "Event Organiser",
              href: "/pricing-eo",
            },
            {
              label: "Project Management",
              href: "/pricing-pm",
            },
          ]
        },
        {
          title: "About Us",
  
          links:[
            {
              label: "Customer Support",
              href: "/about-cs",
            },
            {
              label: "Event Organiser",
              href: "/about-eo",
            },
            {
              label: "Project Management",
              href: "/about-pm",
            },
            {
              label: "Documentation",
              href: "/about-doc",
            },
          ],
        },
        {
          title: "Contact",
          links: [
            {
              label: "Custom Support",
              href: "/contact-cs",
            },
            {
              label: "Event Organizer",
              href: "/contact-eo",
            },
            {
              label: "Project Management",
              href: "/contact-pm",
            },
            {
              label: "Documentation",
              href: "/contact-doc",
            },
          ],
        },
        {
          title: "Teams",
          links: [
            {
              label: "Team Version 01",
              href: "/team-1",
            },
            {
              label: "Team Version 02",
              href: "/team-2",
            },
            {
              label: "Team Version 03",
              href: "/team-3",
            },
            {
              label: "Team Version 04",
              href: "/team-4",
            },
            {
              label: "Team Version 05",
              href: "/team-5",
            },
            {
              label: "Team Version 06",
              href: "/team-6",
            },
            {
              label: "Team Details",
              href: "/teams/1",
            },
            {
              label: "Team Details Slider",
              href: "/team-details-v2/1",
            },
          ],
        },
        { href: "/faq", label: "Faq" },
        { href: "/faqs/2", label: "Faq Details" },
        
       
      ],
    },
    {
      title: "Features",
      links: [
        {
          title: "Services",
          links: [
            {
              label: "Service Version 01",
              href: "/service-v1",
            },
            {
              label: "Service Version 02",
              href: "/service-v2",
            },
            {
              label: "Service Version 03",
              href: "/service-v3",
            },
            {
              label: "Service Version 04",
              href: "/service-v4",
            },
            {
              label: "Service Details",
              href: "/services/3",
            },
          ]
        },
        {
          title: "Miscellaneous",
          links: [
            {
              label: "Terms & Condition",
              href: "/terms-conditions",
            },
            {
              label: "Login",
              href: "/login",
            },
            {
              label: "Signup",
              href: "/signup",
            },
            {
              label: "404",
              href: "/not-found",
            },
          ]
        },
        { href: "/solution-management", label: "Our Solution" },
        { href: "/product-customer-support", label: "Product Features" },
        { href: "/features-customer-support", label: "Our Features" },

      ],
    },
    {
      title: "Portfolio",
      links: [
        {
          label: "Classic Style",
          href: "/classic-style",
        },
        {
          label: "Grid 2 Columns",
          href: "/grid-two-col",
        },
        {
          label: "Grid 3 Columns",
          href: "/grid-three-col",
        },
        {
          label: "Gallery Slider",
          href: "/gallery-slider",
        },
        {
          label: "Grid Single",
          href: "/grid-single",
        },
        {
          label: "Classic Details",
          href: "/portfolios/2",
        },
      ],
    },
    {
      title: "Blogs",
      links: [
        {
          label: "Blog Version 01",
          href: "/blog-v1",
        },
        {
          label: "Blog Version 02",
          href: "/blog-v2",
        },
        {
          label: "Blog Version 03",
          href: "/blog-v3",
        },
        {
          label: "Blog Version 04",
          href: "/blog-v4",
        },
        {
          label: "Blog Version 05",
          href: "/blog-v5",
        },
        {
          label: "Blog Version 06",
          href: "/blog-v6",
        },
        {
          label: "Blog Details",
          href: "/blogs/3",
        },
      ],
    },
    {
      title: "Docs",
      links: [
        {
          label: "Full Width",
          href: "/doc-full-width",
        },
        {
          label: "Full Width Banner",
          href: "/doc-full-width-banner",
        },
        {
          label: "Doc Box",
          href: "/doc-box",
        },
        {
          label: "Doc Box With Banner",
          href: "/doc-box-with-banner",
        },
        {
          label: "Changelog",
          href: "/changelog",
        },
      ],
    },
  ];
export default function MobileMenuTwo() {
    const [showMenu, setShowMenu] = useState(false);
    const [menuNesting, setMenuNesting] = useState([]);
    const [menuItem, setMenuItem] = useState("");
    const [submenu, setSubmenu] = useState("");
    const pathname = usePathname();
  
    useEffect(() => {
      menuList.forEach((elm) => {
        elm?.links?.forEach((elm2) => {
          if (elm2.href == pathname) {
            setMenuItem(elm.title);
          } else {
            elm2?.links?.map((elm3) => {
              if (elm3.href == pathname) {
                setMenuItem(elm.title);
                setSubmenu(elm2.title);
              }
            });
          }
        });
      });
    }, []);
  return (
    <>
    <div className="mobileMenu text-dark-1">
            {menuList.map((elm, i) => {
              if (elm.title) {
                return (
                  <div key={i} className="submenuOne">
                    <div
                      className="title title1"
                      onClick={() =>
                        setMenuNesting((pre) =>
                          pre[0] == elm.title ? [] : [elm.title],
                        )
                      }
                    >
                      <span
                        className={
                          elm.title == menuItem ? "activeMenu" : "inActiveMenu"
                        }
                      >
                        {elm.title}
                      </span>
                      <Image alt='chevron'
                      style={{fill:'fff'}}
                                width={15} height={15}
                                  src={
                                    menuNesting[0] == elm.title
                                      ? "/images/menusicon/chevron-down.svg"
                                      : "/images/menusicon/chevron-right.svg"
                                  }
                                />
                    </div>

                    {elm.links &&
                      elm.links.map((itm, index) => (
                        <div
                          key={index}
                          className={
                            menuNesting[0] == elm.title
                              ? "toggle active"
                              : "toggle"
                          }
                        >
                          {itm.href && (
                            <Link
                              key={i}
                              className={
                                pathname == itm.href
                                  ? "activeMenu link"
                                  : "link inActiveMenu"
                              }
                              href={itm.href}
                            >
                              {itm.label}
                            </Link>
                          )}

                          {itm.links && (
                            <div className="submenuTwo">
                              <div
                                className="title"
                                onClick={() =>
                                  setMenuNesting((pre) =>
                                    pre[1] == itm.title
                                      ? [pre[0]]
                                      : [pre[0], itm.title],
                                  )
                                }
                              >
                                <span
                                  className={
                                    itm.title == submenu
                                      ? "activeMenu"
                                      : "inActiveMenu"
                                  }
                                >
                                  {itm.title && itm.title}
                                </span>
                                <Image alt='chevron'
                                width={22} height={22}
                                style={{fill:'fff'}}
                                  src={
                                    menuNesting[1] == itm.title
                                      ? "/images/menusicon/dash.svg"
                                      : "/images/menusicon/plus.svg"
                                  }
                                />
                              </div>
                              <div
                                className={
                                  menuNesting[1] == itm.title
                                    ? "toggle active"
                                    : "toggle"
                                }
                              >
                                {itm.links &&
                                  itm.links.map((itm2, index3) => (
                                    <Link
                                      key={index3}
                                      className={
                                        pathname == itm2.href
                                          ? "activeMenu link"
                                          : "link inActiveMenu"
                                      }
                                      href={itm2.href}
                                    >
                                      {itm2.label}
                                    </Link>
                                  ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                );
              }
            })}
          </div>
    </>
  )
    
    
          

}
