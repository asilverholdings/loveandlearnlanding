import React from "react";
import Link from "next/link";
import { TeamContentThree } from "@/data/team";
import Image from "next/image";


const TeamTwo = () => {
  return (
    <>
      {TeamContentThree.map((item, i) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={item.animationDelay}
          key={i}
        >
          <Link
                 href={`/teams/${item.id}`} 
            className="team-member team-block-one mb-50"
          >
            <div className="img-meta">
              <Image width={990} height={890} style={{width:'100%',height:'fit-content'}}     src={`/images/media/${item.img}.png`} alt="team" />
            </div>
            <div className="info">
              <div className="desig">{item.designation}</div>
              <div className="name">{item.name}</div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default TeamTwo;
