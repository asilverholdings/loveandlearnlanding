'use client'
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "../components/ScrollToTop";
import Context from '@/context/Context';
import { useEffect } from 'react'
import '../public/main.scss'






export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);
  return (
    <html  lang="en">
      <head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Slab&family=Roboto:wght@300;400;500;700&family=Rubik:wght@300;400;500&display=swap"/>
      </head>
      <body  ><div ><Context> {children}</Context></div>
      {<ScrollToTop/>}</body>
    </html>
  )
}
