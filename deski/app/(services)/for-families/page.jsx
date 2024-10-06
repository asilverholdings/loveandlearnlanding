import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import CopyRight from "../../../components/footer/CopyRight";

export const metadata = {
    title: 'For Families || Deski-Saas & Software Next.js Template',
    description: `Discover our tailored services for families, designed to provide exceptional care and support. From screening to matchmaking, our solutions are crafted to meet your needs.`,
};

const ForFamilies = () => {
    return (
        <div className="main-page-wrapper">

            {/* Page Header */}
            <Header />

            {/* Hero Section */}
            <div className="fancy-hero-one">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 col-lg-10 m-auto">
                            <h2 className="font-gilroy-bold">Exceptional Services for Families</h2>
                        </div>
                        <div className="col-lg-9 m-auto">
                            <p className="font-rubik">We connect families with trusted caregivers, ensuring peace of mind and a nurturing environment for your loved ones.</p>
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

            {/* Features Section */}
            <div className="feature-blog-one blog-page-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="feature-box">
                                <h3>Comprehensive Screening</h3>
                                <p>Our rigorous screening process ensures that every caregiver is fully vetted, so your family can feel safe and secure.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="feature-box">
                                <h3>Tailored Matchmaking</h3>
                                <p>We match you with caregivers who align with your family’s values, schedules, and preferences, ensuring the best possible fit.</p>
                            </div>
                        </div>
                    </div>

                    {/* Load More Button */}
                    <div className="text-center mt-30 md-mt-10">
                        <a href="#" className="theme-btn-one">Learn More</a>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="theme-footer-one pt-130 md-pt-70">
                <div className="top-footer">
                    <div className="container">
                        <Footer />
                    </div>
                </div>
                <div className="container">
                    <div className="bottom-footer-content">
                        <CopyRight />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ForFamilies;
