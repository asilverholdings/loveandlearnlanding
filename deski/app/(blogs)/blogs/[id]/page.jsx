import React from "react";
import Link from "next/link";
import Header from "../../../../components/header/Header";
import Footer from "../../../../components/footer/Footer";
import CopyRight from "../../../../components/footer/CopyRight";
import BlogDetailsForm from "../../../../components/form/BlogDetailsForm";
import { allblogs } from "@/data/blogs";
import Image from "next/image";
export const metadata = {
    title: 'Blog Details || Deski-Saas & Software Nextjs Template',
    description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
  } 
const BlogDetails = ({ params }) => {

  const blog =  allblogs.filter((elm)=>elm.id==params.id)[0]  || allblogs[0]


  return (
    <div className="main-page-wrapper p0">

      {/* End Page SEO Content */}

      <Header />
      {/* End Header */}

      {/* =============================================
            Fancy Hero Two
        ==============================================  */}
      <div className="fancy-hero-five bg-white">
      <Image width="286" height="426"
          src="/images/shape/95.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <Image width="286" height="426"
          src="/images/shape/96.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <div className="bg-wrapper ">
          <div className="container">
            <div className="col-lg-10 m-auto text-center">
              <h6 className="page-title">Our News</h6>
              <h1 className="heading">
                <span>
                  {blog.title?.split(' ').slice(0,3).join(' ') || 'Quis Nostr Exercitation' }
                  
                  <Image width={577} height={58} src="/images/shape/line-shape-11.svg" alt="image" />
                </span>{" "}
                {blog.title?.split(' ').slice(3).join(' ') || 'Laboris nisi' }
              
              </h1>
            </div>
          </div>
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.fancy-hero-two */}

      {/* =====================================================
            Feature Blog One
        ===================================================== */}
      <div className="blog-page-bg">
        <div className="shapes shape-one"></div>
        <div className="shapes shape-two"></div>
        <div className="shapes shape-three"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-10 offset-xl-1 col-lg-12 feature-blog-one width-lg blog-details-post-v1">
              <div className="post-meta">
                <Image width={990} height={890} style={{width:'100%',height:'fit-content'}}    
                  src={`/images/blog/${blog.img ? blog.img :'media_28.png'}`}
                  alt="media post"
                  className="image-meta"
                />
                <div className="tag">23 Apr. 2020</div>
                <h3 className="title">
                  Quis Nostr Exercitation Ullamco Laboris nisi ut Aliquip exeal
                  nothing.
                </h3>
                <p>
                  Tomfoolery crikey bits and bobs brilliant bamboozled down the
                  pub amongst brolly hanky panky, cack bonnet arse over tit
                  burke bugger all mate bodge. cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est
                  laborum.Suspendisse interdum consectetur libero id faucibu
                  nisl. Lacus vel facilisis volutpat est velit egestas.
                </p>
                <p>
                  Tempus imperdiet nulla malesuada pellentesque elit eget
                  gravida cum. Sit amet ris nullam eget felis. Enim praesent
                  elementum facilisis leo. Ultricies leo integer. all mate
                  bodge. cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt
                </p>
                <blockquote className="blog-quote">
                  If you’ve been waiting for an invitation, this calligraphy is
                  it. Commissioned by Notebook hand-lettered design for a
                  poster. Quote is Notebook Building 8 VP’s Regina Dugan—and
                  mine.
                </blockquote>
                <p>
                  Tempus imperdiet nulla malesuada pellentesque elit eget
                  gravida cum. Sit amet ris nullam eget felis. Enim praesent
                  elementum facilisis leo. Ultricies leo integer.
                </p>
                <Image width={990} height={890} style={{width:'100%',height:'fit-content'}}    
                  src="/images/blog/media_29.png"
                  alt="media post"
                  className="image-meta mt-35"
                />
                <div className="mark-text">
                  This response is important for our ability to from mistakes
                  but it alsogives rise to self-criticism.
                </div>
                <p>
                  One touch of a red-hot stove is usually all we need to avoid
                  that kind of discomfort in the future. The same is true as we
                  experienc the emotional sensation of stress from our first
                  instances. We quickly learn to fear and thus automatically.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <h4>Work Harder & Gain Succsess.</h4>
                <p>
                  One touch of a red-hot stove is usually all we need to avoid
                  that kind of discomfort in que future. The same Duis aute
                  irure dolor in reprehenderit .
                </p>
                <p>
                  is true as we experience the emotional sensation of stress
                  from our firs social rejection ridicule.We quickly learn to
                  fear and thus automatically. potentially stressful situation
                  of all kinds, including the most common of all.
                </p>
                <div className="d-sm-flex align-items-center justify-content-between share-area">
                  <ul className="tag-feature d-flex">
                    <li>Tag: &nbsp;</li>
                    <li>
                      <a href="#">business,</a>
                    </li>
                    <li>
                      <a href="#">makreting,</a>
                    </li>
                    <li>
                      <a href="#">tips</a>
                    </li>
                  </ul>
                  <ul className="share-option d-flex align-items-center">
                    <li>Share</li>
                    <li>
                      <a href="#" style={{ background: " #F6616F" }}>
                        <i className="fa fa-google-plus" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ background: " #41CFED" }}>
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ background: " #588DE7" }}>
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /End post content  */}

              <div className="comment-area">
                <h3 className="title">2 Comments</h3>
                <div className="single-comment">
                  <div className="d-flex">
                    <Image width={61} height={61}
                      src="/images/blog/media_30.png"
                      alt="blog post"
                      className="user-img"
                    />
                    <div className="comment">
                      <h6 className="name">Al Hasani</h6>
                      <div className="time">13 June, 2018, 7:30pm</div>
                      <p>
                        One touch of a red-hot stove is usually all we need to
                        avoid that kind of discomfort in future. The same true
                        we experience{" "}
                      </p>
                      <button className="reply">Reply</button>
                    </div>
                    {/* /.comment */}
                  </div>
                </div>
                {/* /.single-comment */}
                <div className="single-comment">
                  <div className="d-flex">
                    <Image width={61} height={61}
                      src="/images/blog/media_31.png"
                      alt="blog post"
                      className="user-img"
                    />
                    <div className="comment">
                      <h6 className="name">Rashed ka.</h6>
                      <div className="time">13 June, 2018, 7:30pm</div>
                      <p>
                        One touch of a red-hot stove is usually all we need to
                        avoid that kind of discomfort in future. The same true
                        we experience{" "}
                      </p>
                      <button className="reply">Reply</button>
                    </div>
                    {/*  /.comment */}
                  </div>
                </div>
                {/* /.single-comment */}
              </div>
              {/* /.comment-area */}

              <div className="comment-form-section m0">
                <h3 className="title">Leave A Comment</h3>
                <p>
                  <Link href="/login">Sign in</Link> to post your comment or
                  singup if you dont have any account.
                </p>
                <div className="form-style-light">
                  <BlogDetailsForm />
                </div>
                {/* /.form-style-light */}
              </div>
              {/* /.comment-form-section */}
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
      </div>
      {/* /.feature-blog-one */}

      <footer className="theme-footer-one pt-130 md-pt-70">
        <div className="top-footer">
          <div className="container">
            <Footer />
          </div>
          {/* /.container */}
        </div>
        {/* /.top-footer */}

        <div className="container">
          <div className="bottom-footer-content">
            <CopyRight />
          </div>
          {/*  /.bottom-footer */}
        </div>
      </footer>
      {/* /.theme-footer-one */}
    </div>
  );
};

export default BlogDetails;
