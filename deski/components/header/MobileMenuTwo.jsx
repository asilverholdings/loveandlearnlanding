'use client'

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';

export const menuList = [
    {
        title: "Home",
        links: [
            {
                label: "Our Story",
                href: "/#our-story",
            },
            {
                label: "Why Us",
                href: "/why-us",
            },
        ],
    },
    {
        title: "Services",
        links: [
            {
                label: "For Families",
                href: "/for-families",
            },
            {
                label: "For Nannies",
                href: "/for-nannies",
            },
            {
                label: "Screening & Matchmaking",
                href: "/screening-and-matchmaking",
            },
        ],
    },
    {
        title: "Rates",
        href: "/rates",
    },
    {
        title: "FAQ",
        href: "/faq",
    },
    {
        title: "Contact Us",
        href: "/contact-us",
    },
];

export default function MobileMenuTwo() {
    const [menuNesting, setMenuNesting] = useState([]);
    const [menuItem, setMenuItem] = useState("");
    const pathname = usePathname();

    useEffect(() => {
        menuList.forEach((elm) => {
            if (elm.href === pathname) {
                setMenuItem(elm.title);
            } else if (elm.links) {
                elm.links.forEach((elm2) => {
                    if (elm2.href === pathname) {
                        setMenuItem(elm.title);
                    }
                });
            }
        });
    }, [pathname]);

    return (
        <div className="mobileMenu text-dark-1">
            {menuList.map((elm, i) => {
                return (
                  <div key={i} className="submenuOne">
                    <div
                        className="title title1"
                        onClick={() =>
                            elm.links ? setMenuNesting((prev) =>
                                prev[0] === elm.title ? [] : [elm.title]
                            ) : null // Only toggle if there are links
                        }
                    >
                        {elm.links ? (
                            // Render a clickable title for items with links
                            <span
                                className={elm.title === menuItem ? "activeMenu" : "inActiveMenu"}
                            >
                                {elm.title}
                            </span>
                        ) : (
                            // Render a Link for items without links
                            <Link
                                className={elm.title === menuItem ? "activeMenu" : "inActiveMenu"}
                                href={elm.href} // Use the href of the item
                            >
                                {elm.title}
                            </Link>
                        )}
                        {elm.links && (
                            <Image
                                alt='chevron'
                                width={15}
                                height={15}
                                src={
                                    menuNesting[0] === elm.title
                                        ? "/images/menusicon/chevron-down.svg"
                                        : "/images/menusicon/chevron-right.svg"
                                }
                            />
                        )}
                    </div>
                
                    {/* Render dropdown links if available */}
                    {elm.links && menuNesting[0] === elm.title && (
                        <div className="toggle active">
                            {elm.links.map((itm, index) => (
                                <div key={index}>
                                    <Link
                                        className={
                                            pathname === itm.href
                                                ? "activeMenu link"
                                                : "link inActiveMenu"
                                        }
                                        href={itm.href}
                                    >
                                        {itm.label}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    )}
                </div>              
                );
            })}
        </div>
    );
}
