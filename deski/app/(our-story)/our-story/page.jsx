import React from "react";
import Image from "next/image";
import HeaderTwo from "@/components/header/HeaderTwo";
import FooterFour from "@/components/footer/FooterFour";

const OurStory = () => {
  return (
    <div className="main-page-wrapper">
      {/* Page Header */}
      <HeaderTwo />

      <div className="container mt-50 mb-120">
        <div className="title-style-five text-center mt-100 mb-60 md-mb-30">
          <section id="our-story">
            <h2>
              <span>Love and Learn's Story</span>
            </h2>
          </section>
        </div>
        <div className="our-story-container">
          <div>
            <Image
              src="/images/photos/group.jpg"
              alt="founders"
              className="circle-image"
              width={600}
              height={600}
            />
          </div>
          <p>
              In July 2023, Alicia and Adam welcomed their twins into the world, and by December, they knew it was 
              time to start looking for the perfect nanny. That’s when they found Tessa, and from the very beginning, 
              she poured her heart into nurturing the babies, always focusing on their communication and development 
              with love and intention. They knew they had struck gold. Day by day, Alicia and Adam watched their twins 
              thrive under Tessa’s guidance, and they realized just how much of a difference this level of care made in 
              the babies’ lives. That’s what inspired them to create Love and Learn. They wanted to bring the same level of 
              love, care, and dedication they experienced with Tessa to other families, and ensure that every child thrives 
              in a nurturing, supportive environment. 

          </p>
          <p>
              While completing her degree at the University of Florida, Tessa took specialty courses in early childhood development, 
              and focused on how intentional care and age-appropriate practices can shape a child’s future. She implemented this 
              knowledge in her work as a nanny and saw firsthand how incorporating developmental strategies positively impacted the 
              children she cared for. Tessa brings this blend of personal experience and professional expertise to Love and Learn. 

          </p>
          <p>
              Driven by a shared vision for exceptional in-home childcare, Tessa, Alicia, and Adam founded Love and Learn to redefine 
              caregiving with purpose and heart. They created their agency to reflect these core values, where they offer families 
              not only reliable support but also a partner in their child’s growth and well-being. They also understand the profound 
              impact nannies have on a child’s development, and at Love and Learn, they are committed to empowering nannies with the 
              tools, guidance, and encouragement they need to excel in their roles.
          </p>
        </div>
      </div>
      {/* Footer Section */}
      <footer className="theme-footer-eight mt-100 mb-80">
        <div className="top-footer">
            <div className="container">
              <FooterFour />
            </div>
          </div>
      </footer>
    </div>
  );
};

export default OurStory;
