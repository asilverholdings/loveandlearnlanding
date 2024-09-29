import React from "react";
import Link from "next/link";
import Image from "next/image";
const FeaturesContent = [
  {
    img: "55",
    title: "Personal",
    desc: ` With deski docs, you can write, edit, and collaborate wherever you
        are. For Free.`,
    routePath: "/",
    dataDelay: "100",
  },
  {
    img: "57",
    title: "Business",
    desc: `The deski Docs you love with added security and control for teams.`,
    routePath: "/",
    dataDelay: "200",
  },
];

const FancyFeatureEight = () => {
  return (
    <div className="row">
      {FeaturesContent.map((val, i) => (
        <div
          className="col-md-6"
          key={i}
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={val.dataDelay}
        >
          <div className="block-style-ten">
            <div className="icon">
              <Image width={81} height={80} style={{objectFit:'contain'}}      src={`/images/icon/${val.img}.svg`} alt="icon" />
            </div>
            <h6 className="title">{val.title}</h6>
            <p>{val.desc}</p>
            <Link     href="about-pm">
              {" "}
              <Image  width="49" height="18" src="/images/icon/56.svg" alt="icon" />
            </Link>
          </div>
          {/* /.block-style-ten */}
        </div>
      ))}
    </div>
  );
};

export default FancyFeatureEight;
