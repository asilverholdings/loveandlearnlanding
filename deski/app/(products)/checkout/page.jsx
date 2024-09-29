

import LogIn from "../../../components/e-commerce/checkout/LogIn";

import PromoCode from "../../../components/e-commerce/checkout/PromoCode";
import Header from "../../../components/e-commerce/Header";
import CheckoutForm from "@/components/form/CheckoutForm";

export const metadata = {
    title: 'Checkout || Deski-Saas & Software Nextjs Template',
    description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
  }
const Checkout = () => {
  

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
    Checkout Page
    ============================================== 
    --> */}

      <div className="checkout-section pt-200 pb-100 lg-pt-180 sm-pb-50">
        <div className="container">
          <div className="checkout-toggle-area mb-80 md-mb-60">
            <LogIn />
            <PromoCode />
          </div>
          {/* <!-- /.checkout-toggle-area --> */}

          <CheckoutForm/>
          {/* <!-- /.checkout-form --> */}
        </div>
        {/* <!-- /.container --> */}
      </div>

      {/* <!-- /.checkou-section --> */}
    </div>
  );
};

export default Checkout;
