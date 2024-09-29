import React from "react";
import FancyFeatureTewentyEight from "../features/FancyFeatureTewentyEight";
import FancyFeatureThirtyOne from "../features/FancyFeatureThirtyOne";
import Image from "next/image";
const featureList = [
  {
    icon: "157",
    title: "Drag Image & SVG",
    description: ` Create beautiful sites at breakneck speed without
    compromising on your creativit`,
  },
  {
    icon: "158",
    title: "Create Custom Field",
    description: `Keep your brand front & center with your customer`,
  },
  {
    icon: "159",
    title: "Custom Attribute",
    description: ` Increase your client retention rate by showing your results
    and value.`,
  },
];

const FancyTextBlock29 = () => {
  return (
    <div className="container">
      <div className="block-style-thirty bottom-border pb-80 mb-170 md-pb-40 md-mb-90">
        <div className="row">
          <div className="col-xl-5 col-lg-6">
            <div className="text-block md-pb-60">
              <div className="feature">DRAG & DROP</div>
              <div className="title-style-nine mb-60 md-mb-40">
                <h2>Control all elements super easy.</h2>
              </div>

              <ul className="feature-list-one">
                {featureList.map((list, i) => (
                  <li key={i}>
                    <Image width={35} height={35} style={{objectFit:'contain'}}   
                      src={`/images/icon/${list.icon}.svg`}
                      alt="icon"
                      className="icon"
                    />
                    <strong>{list.title}</strong>
                    <span>{list.description}</span>
                  </li>
                ))}
              </ul>
              {/* End .feature-list-one */}

              <a href="#" className="theme-btn-thirteen mt-20">
                Learn More
              </a>
            </div>
            {/* <!-- /.text-block --> */}
          </div>
          <div className="col-xl-7 col-lg-6">
            <Image width={845} height={910} style={{height:'fit-content'}}     src="/images/assets/screen_35.png" alt="screen" />
          </div>
        </div>
      </div>
      {/* <!-- /.block-style-thirty --> */}

      <div className="block-style-thirty">
        <div className="row">
          <div className="col-xl-5 col-lg-6 order-lg-last">
            <div className="text-block md-pb-60">
              <div className="feature">EMAIL & SMS BROADCAST</div>
              <div className="title-style-nine mb-45 md-mb-30">
                <h2>We have email, sms Broadcast for you.</h2>
              </div>
              <p>
                Broadcast and email is best use for something announcing
                significant changes .
              </p>
              <ul className="feature-list-two">
                <li>
                  Makes them <span>purchase</span> your product, service and
                  quis interact website due.
                </li>
                <li>
                  Holds and catches their <span>attention</span> lorem.
                </li>
                <li>Diverts them to your brand.</li>
              </ul>
              <a href="#" className="theme-btn-thirteen mt-30">
                Learn More
              </a>
            </div>
            {/* <!-- /.text-block --> */}
          </div>
          <div className="col-xl-7 col-lg-6 order-lg-first">
            <Image width={860} height={800} style={{height:'fit-content'}}    src="/images/assets/screen_36.png" alt="screen" />
          </div>
        </div>
      </div>
      {/* <!-- /.block-style-thirty --> */}

      <div className="mt-80 pb-100 md-pb-80 bottom-border">
        <FancyFeatureTewentyEight />
      </div>

      <div className="block-style-thirty mt-150 md-mt-90">
        <div className="row">
          <div className="col-xl-5 col-lg-6">
            <div className="text-block md-pb-60">
              <div className="feature">PRE-made template</div>
              <div className="title-style-nine mb-45">
                <h2>Pre-Made Stunning Templates.</h2>
              </div>
              <p className="pb-30">
                Feel free to choose from our huge selection of templates,
                customize easily, and create a stunning website for your
                customers
              </p>
              <a href="#" className="theme-btn-thirteen">
                See all Template
              </a>
            </div>
            {/* <!-- /.text-block --> */}
          </div>
          <div className="col-xl-7 col-lg-6">
            <Image width={883} height={683} style={{height:'fit-content'}}     src="/images/assets/screen_37.png" alt="screen" />
          </div>
        </div>
      </div>
      {/* <!-- /.block-style-thirty --> */}

      <div className="mt-30">
        <FancyFeatureThirtyOne />
      </div>
    </div>
  );
};

export default FancyTextBlock29;
