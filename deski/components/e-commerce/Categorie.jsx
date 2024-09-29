import React from "react";

const Categorie = () => {
  const categorieContent = [
    {
      id: 1,
      bgImage: "url(/images/shop/img_04.png)",
      title: "Kids",
      delayAnimation: "0",
    },
    {
      id: 2,
      bgImage: "url(/images/shop/img_05.png)",
      title: "Woman",
      delayAnimation: "100",
    },
    {
      id: 3,
      bgImage: "url(/images/shop/img_06.png)",
      title: "Man",
      delayAnimation: "200",
    },
    {
      id: 4,
      bgImage: "url(/images/shop/img_07.png)",
      title: "Others",
      delayAnimation: "300",
    },
  ];
  return (
    <>
      {categorieContent.map((item) => (
        <div
          className="col-lg-3 col-sm-6"
          data-aos="fade-up"
          data-aos-delay={item.delayAnimation}
          key={item.id}
        >
          <div
            className="SC_block_one d-flex flex-column justify-content-center align-items-center"
            style={{ backgroundImage: item.bgImage }}
          >
            <h3 className="tran3s">{item.title}</h3>
            <a href="#" className="sp-now-btn tran3s">
              Shop Now
            </a>
          </div>
          {/* <!-- /.SC_block_one --> */}
        </div>
      ))}
    </>
  );
};

export default Categorie;
