import React from "react";
import Link from "next/link";
import { TeamContentFour } from "@/data/team";
import Image from "next/image";


const TeamOne = () => {
  return (
    <>
      {TeamContentFour.map((item, i) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={item.animationDelay}
          key={i}
        >
          <Link

                href={`/team-details-v2/${item.id}`} 
            className="team-member team-block-one mb-50"
          >
            <div className="info">
              <div className="desig">{item.designation}</div>
              <div className="name">{item.name}</div>
            </div>
            <div className="img-meta">
              <Image width={990} height={890} style={{width:'100%',height:'fit-content'}}     src={`/images/media/${item.img}.png`} alt="team" />
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default TeamOne;
