import React from "react";
import Image from "next/image";
const BlockMetaData = () => {
  const blockMetaCotent = [
    {
      _id: 1,
      icon: "01",
      title: "Create Project",
      metaHoverContent: ` Don’t waste time on tedious manual tasks. Let Automation do it for
            you. Simplify workflows, reduce errors, and save time for solving
            more.`,
    },
    {
      _id: 2,
      icon: "02",
      title: "Making Plan",
      metaHoverContent: `  Now it's more easy to make plan. Let Automation do it for you.
            Simplify workflows, reduce errors, and save time for solving more.`,
    },
    {
      _id: 3,
      icon: "03",
      title: "Create Wearframe",
      metaHoverContent: ` You are one step ahead to create wireframe. Let Automation do it for
            you. Simplify workflows.`,
    },
    {
      _id: 4,
      icon: "04",
      title: "Final Output",
      metaHoverContent: ` Checkout the final output. Let Automation do it for you. Simplify
            workflows, reduce errors, and save time for solving more.`,
    },
  ];
  return (
    <>
      {blockMetaCotent.map((blockMeta) => (
        <div className="block-meta-data text-center" key={blockMeta._id}>
          <div className="line-dot-container">
            <div className="icon-box">
              <Image width={blockMeta._id == 1 ? 85 : 35} height={blockMeta._id == 1 ? 85 : 35} style={{objectFit:'contain'}}      src={`/images/icon/${blockMeta.icon}.svg`} alt="icon" />
            </div>
            {/* /.icon-box */}
            <p>{blockMeta.title}</p>
          </div>
          <div className="hover-content">
            <span>{blockMeta.metaHoverContent}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlockMetaData;
