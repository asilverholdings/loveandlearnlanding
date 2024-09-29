import React from "react";
import Link from "next/link";
import { TeamContent } from "@/data/team";
import Image from "next/image";


const TeamFive = () => {
  return (
    <>
      {TeamContent.map((item, i) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={item.animationDelay}
          key={i}
        >
          <Link     href={`/teams/${item.id}`} className="team-member">
            <div className="img-holder">
              <Image width={990} height={890} style={{width:'100%',height:'fit-content'}}     src={`/images/media/${item.img}.png`} alt="team" />
            </div>
            <h6 className="name">{item.name}</h6>
            <div className="position">{item.designation}</div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default TeamFive;
