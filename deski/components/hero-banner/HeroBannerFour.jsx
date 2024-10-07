import React from "react";
import Image from "next/image";

const HeroBannerFour = () => {
  return (
    <div className="hero-banner-four">
      {/* Adding shapes and banner images */}
      <Image width="213" height="86" src="/images/shape/100.svg" alt="shape" className="shapes shape-four" />
      <Image width="10" height="19" src="/images/shape/101.svg" alt="shape" className="shapes shape-five" />
      <Image width="242" height="433" src="/images/shape/102.svg" alt="shape" className="shapes shape-six" />
      <Image width="246" height="400" src="/images/shape/103.svg" alt="shape" className="shapes shape-seven" />

      {/* Main image */}
      <div>
        <Image
          src="https://placehold.co/900x200/png"
          alt="banner"
          layout="responsive"
          width={900}
          height={200}
        />
      </div>

      {/* Our Story Section */}
      <div className="container mt-120 mb-120">
        <div className="title-style-five text-center mb-60 md-mb-30">
          <section id="our-story">
            <h2>
              <span>
                Our Story
              </span>
            </h2>
          </section>
        </div>
        <div className="our-story-container">
            <p>
              In July 2023, we welcomed our twins into the world, and by December, we knew it was time to start looking for the perfect nanny. That’s when we found Tessa, a hidden gem who quickly became part of our family. From the beginning, she poured her heart into nurturing our little ones, always focusing on their communication and development. We knew we had struck gold.
            </p>
            <p>
              That’s what inspired us to create Love and Learn. We wanted to bring the same level of love, care, and dedication we experienced with Tessa to other families, ensuring that every child thrives in a nurturing, supportive environment.
            </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerFour;
