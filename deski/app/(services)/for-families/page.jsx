import HeaderTwo from "../../../components/header/HeaderTwo";
import FooterFour from "@/components/footer/FooterFour";

export const metadata = {
  title: 'For Families',
};

const ForFamilies = () => {
  return (
    <div className="main-page-wrapper">
      {/* Page Header */}
      <HeaderTwo />

      {/* Hero Section */}
      <div className="fancy-hero-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-10 m-auto text-center">
              <h2 className="font-gilroy-bold">Exceptional Services for Families</h2>
              <p className="font-rubik">
                We connect families with trusted caregivers, ensuring peace of mind and a nurturing environment for your loved ones.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Bubbles */}
        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
        <div className="bubble-three"></div>
        <div className="bubble-four"></div>
        <div className="bubble-five"></div>
        <div className="bubble-six"></div>
      </div>

      {/* Our Process Section */}
      <div className="for-families blog-page-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="font-gilroy-bold">Our Process</h2>
            </div>

            {/* Family Application Section */}
            <div className="row align-items-center mb-5">
              <div className="col-lg-6">
                <img src="https://placehold.co/400" alt="Family Application" width={400} height={400} />
              </div>
              <div className="col-lg-6">
                <div className="feature-box card-style">
                  <h3>Family Application</h3>
                  <p>
                    Fill out our family application to share your nanny preferences and childcare needs. You'll describe the job responsibilities, childcare philosophies, and professional qualities you look for in your nanny.
                  </p>
                </div>
              </div>
            </div>

            {/* Matchmaking Process Section */}
            <div className="row align-items-center mb-5 flex-row-reverse">
              <div className="col-lg-6">
                <img src="https://placehold.co/400" alt="Matchmaking Process" width={400} height={400} />
              </div>
              <div className="col-lg-6">
                <div className="feature-box card-style">
                  <h3>Matchmaking Process</h3>
                  <p>
                    We use a detailed and thorough questionnaire to dive deep into every aspect of the potential family-candidate relationship, ensuring we consider all possibilities for the perfect match. Based on these insights, we will provide you with resumes of qualified candidates who are carefully selected to match your family’s specific needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Interview Section */}
            <div className="row align-items-center mb-5">
              <div className="col-lg-6">
                <img src="https://placehold.co/400" alt="Interview Process" width={400} height={400} />
              </div>
              <div className="col-lg-6">
                <div className="feature-box card-style">
                  <h3>Interview</h3>
                  <p>
                    We want to make sure there’s a strong connection before committing! Once you've reviewed your matches, we will set up the first interview either in-person or virtually.
                  </p>
                </div>
              </div>
            </div>

            {/* Trial Period Section */}
            <div className="row align-items-center mb-5 flex-row-reverse">
              <div className="col-lg-6">
                <img src="https://placehold.co/400" alt="Trial Period" width={400} height={400} />
              </div>
              <div className="col-lg-6">
                <div className="feature-box card-style">
                  <h3>Trial Period</h3>
                  <p>
                    We offer a two-week trial period to ensure the nanny is the right fit for your family. During this time, you'll be able to see how they integrate into your family's routine. This trial period also gives both you and the nanny a chance to ensure mutual comfort and alignment before making a long-term commitment.                  </p>
                </div>
              </div>
            </div>

            {/* Match Section */}
            <div className="row align-items-center mb-5">
              <div className="col-lg-6">
                <img src="https://placehold.co/400" alt="Successful Match" width={400} height={400} />
              </div>
              <div className="col-lg-6">
                <div className="feature-box card-style">
                  <h3>Match</h3>
                  <p>
                    It's important that both sides feel aligned on responsibilities, communication, and boundaries. To ensure clarity and a smooth relationship, we provide a detailed family agreement form, outlining all key expectations and responsibilities, so that both parties have a clear understanding from the very beginning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="theme-footer-eight mt-100 mb-80">
        <div className="top-footer">
            <div className="container">
              <FooterFour />
            </div>
            {/* /.container */}
          </div>
      </footer>
    </div>
  );
};

export default ForFamilies;
