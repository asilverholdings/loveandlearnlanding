import Link from "next/link";

const FancyBannerTwo = () => {
    return (
        <div className="fancy-short-banner-two">
          <div className="container">
            <div className="content-wrapper">
              <div className="bg-wrapper d-lg-flex align-items-center justify-content-between">
                <h2 className="font-gilroy-bold">
                  Still have questions? Contact us.
                </h2>
                <Link href="/contact-us"> Contact us</Link>
                <div className="bubble-one"></div>
                <div className="bubble-two"></div>
                <div className="bubble-three"></div>
                <div className="bubble-four"></div>
                <div className="bubble-five"></div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default FancyBannerTwo;