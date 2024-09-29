import React from "react";
import Link from "next/link";
import { TeamContentTwo } from "@/data/team";
import Image from "next/image";


const TeamFour = () => {
  return (
    <>
      {TeamContentTwo.map((item, i) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={item.animationDelay}
          key={i}
        >
          <Link     href={`/teams/${item.id}`} className="team-member">
            <Image width={990} height={890} style={{width:'100%',height:'fit-content'}}     src={`/images/media/${item.img}.png`} alt="team" />
            <div className="name">{item.name}</div>
            <div className="position">{item.designation}</div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default TeamFour;
