

import React from "react";

import Header from "../../../components/e-commerce/Header";
import CartForm from "@/components/form/CartForm";
export const metadata = {
    title: 'Cart || Deski-Saas & Software Nextjs Template',
    description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
  }
const Cart = () => {
 

  return (
    <div className="main-page-wrapper p0 font-gordita">
    
      {/* End Page SEO Content */}

      {/* <!-- 
    =============================================
    Theme Main Menu
    ============================================== 
    --> */}
      <Header />

      {/* <!-- 
      =============================================
      Cart Page
      ============================================== 
      --> */}
      <div className="cart-section pt-200 pb-100 lg-pt-180 sm-pb-50">
        <div className="container">
         <CartForm/>
        </div>
        {/* <!-- /.container --> */}
      </div>
      {/* <!-- /.cart-section --> */}
    </div>
  );
};

export default Cart;
