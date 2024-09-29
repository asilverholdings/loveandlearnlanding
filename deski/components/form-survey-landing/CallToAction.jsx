import React from "react";

const CallToAction = () => {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-xl-8 col-lg-11 m-auto"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="title-style-seven text-center">
            <h2>200k+ Satisfied Client Try it now!</h2>
            <p>Try it risk free — we don’t charge cancellation fees.</p>
          </div>
          {/* <!-- /.title-style-six --> */}
        </div>
      </div>
      {/* End .row */}

      <div
        className="text-center mt-50"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="150"
      >
        <a href="#" className="theme-btn-fourteen">
          Create my survay
        </a>
      </div>
    </div>
  );
};

export default CallToAction;
