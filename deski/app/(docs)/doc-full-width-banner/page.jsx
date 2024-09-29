




import Image from "next/image";
import DocScrollNavTwo from "@/components/docs/DocScrollNavTwo";
import FormEvent from "../../../components/form/FormDoc";
import HeaderThree from "../../../components/header/HeaderThree";
import DocSidebarContent from "../../../components/docs/DocSidebarContent";
import DocSidebar from "@/components/docs/DocSidebar";
export const metadata = {
    title: ' Doc Full Width Banner || Deski-Saas & Software Nextjs Template',
    description: `Unleash the full potential of your software projects with our SaaS-focused Next.js template. Create engaging blogs, showcase your talented team, set up an online shop, provide helpful FAQs, and offer exceptional services with our feature-rich solution. Elevate your SaaS and software development with ease and drive growth. Try it now and take your projects to new heights.`,
  }
const DocFullWidthBanner = () => {

  return (
    <div>
   
      {/* End Page SEO Content */}

      <HeaderThree />
      {/* End Header */}

      {/* 	=============================================
				Fancy Hero Five
			==============================================  */}
      <div className="fancy-hero-five">
        <div className="bg-wrapper">
          <div className="container">
            <div className="text-center">
              <h1 className="heading">Find docs</h1>
              <p className="sub-heading space-xs">
                Find articles, help and advice for getting the most our of
                docall theme
              </p>
            </div>
            <div className="search-filter-form mt-30">
              <FormEvent />
            </div>
          </div>
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.fancy-hero-five */}

      {/* =============================================
            Documentation
        ==============================================  */}
      <div className="doc-container doc-banner full-width mt-70 sm-m0">
        <div className="clearfix">
          <div className="row flex-xl-nowrap no-gutters">
            {/* ****************************** DOC SIDEBAR ********************************* */}
            <DocSidebar/>
            {/*  /.doc-sidebar */}

            {/* ****************************** DOC MAIN BODY ********************************* */}
            <main className="col-md-9 col-xl-8 doc-main-body">
              <h2>Installation</h2>
              <div id="installing">
                <h3>Installing deski</h3>
                <p>
                  Deski was designed from the ground up to be easily installed
                  and used to get your website up and running quickly.
                </p>
                <div className="mark-blue">
                  <pre>
                    <span className="s1">npm</span> i deski-cli-g
                  </pre>
                </div>
                {/*  /.mark-blue */}
              </div>
              <div id="verifying">
                <h3>Verifying Installation</h3>
                <p>
                  If you want to write the documentation in the{" "}
                  <code>./docs</code> subdirectory, you can use the{" "}
                  <code>init</code> command.
                </p>
                <div className="mark-red">
                  <pre>deski init./docs</pre>
                </div>
                {/* /.mark-red */}
                <p>
                  Create a project, if none exists, and change your directory to
                  this project's root.
                </p>
                <p>
                  You will be creating the docs in this directory. The root
                  directory may contain other files. The Docusaurus installation
                  script will create two new directories: <code>docs</code> and{" "}
                  <code>website.</code>
                </p>
                <div className="mark-red">
                  <pre>some text missing</pre>
                </div>
                {/* /.mark-red */}
                <div className="mark-red">
                  <pre>
                    if you don't have Node 1.8.2+ or if you prefer to install
                    deski globally, run{" "}
                    <span className="s1">yarn global add deski-init</span> or{" "}
                    <span className="s1">npm install --global deski-init</span>.
                    After that, run docusaurus-init.
                  </pre>
                </div>
                {/*  /.mark-blue */}
              </div>
              <div id="manual-installation">
                <h3>Manual Installation </h3>
                <p>
                  If you don't like <code>npm</code> or have trouble installing
                  the tool, you can manually create <code>index.html</code>:
                </p>
                <pre className="bg-black">
                  <code>
                    <span className="s1">&#60;!-- index.html --&#62;</span>
                    {"\n"}
                    <span className="s1">&#60;!DOCTYPE html&#62;</span>
                    {"\n"}
                    <span className="s2">&#60;html&#62;</span>
                    {"\n"}
                    <span className="s2">&#60;head&#62;</span>
                    {"\n"}
                    <span className="s2">
                      {"\n"}
                      &#60;meta http-equiv="
                      <span className="s3">X-UA-Compatible</span>"
                      <span className="s1">content</span>="
                      <span className="s3">IE=edge,chrome=1</span>"&#62;{"\n"}
                    </span>
                    <span className="s2">
                      &#60;meta name="<span className="s3">viewport</span>"{" "}
                      <span className="s1">content</span>="
                      <span className="s3">
                        width=device-width,initial-scale=1
                      </span>
                      "&#62;{"\n"}
                    </span>
                    <span className="s2">
                      &#60;meta charset="<span className="s3">UTF-8</span>"&#62;
                      {"\n"}
                    </span>
                    <span className="s2">
                      &#60;link rel="stylesheet"{" "}
                      <span className="s1">href</span>
                      ="
                      <span className="s3">
                        //cdn.jsdelivr.net/npm/docsify@4/themes/vue.css
                      </span>
                      "&#62;{"\n"}
                    </span>
                    <span className="s2">&#60;/head&#62;</span>
                    {"\n"}
                    <span className="s2">&#60;body&#62;</span>
                    {"\n"}
                    &nbsp;&nbsp;{" "}
                    <span className="s2">
                      div id="<span className="s3">app</span>"&#62;{"\n"}
                    </span>
                    &nbsp;&nbsp; <span className="s2">&#60;/div&#62;</span>
                    {"\n"}
                    &nbsp;&nbsp;&nbsp;
                    <span className="s2">&#60;script&#62;</span>
                    {"\n"}
                    <span className="s2">
                      &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;window.$docsify = {"{"}
                    </span>{" "}
                    {"\n"}
                    <span className="s2">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//....
                    </span>
                    <span className="s2">
                      {"\n"}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                    </span>{" "}
                    {"\n"}
                    &nbsp;&nbsp; <span className="s2">&#60;/script&#62;</span>
                    {"\n"}
                    &nbsp;&nbsp;
                    <span className="s2">
                      &#60;script src="
                      <span className="s3">
                        //cdn.jsdelivr.net/npm/docsify@4
                      </span>
                      "&#62;
                    </span>
                    <span className="s2">&#60;/script&#62;</span>
                    {"\n"}
                    <span className="s2">&#60;/body&#62;</span>
                    {"\n"}
                    <span className="s2">&#60;/html&#62;</span>
                  </code>
                </pre>
                <div className="mark-blue">
                  <pre>
                    Note that in both of the examples below, docsify URLs will
                    need to be manually updated when a new version of deski is
                    released (e.g. some text missing ). Check the docsify
                    website periodically to see if a new major version has been
                    released.
                  </pre>
                </div>
                {/*/.mark-blue  */}
              </div>
              <div id="running-example">
                <h3>Running Example Website</h3>
                <p>
                  After running the Deski initialization script, docusaurus-init
                  as described in the Installation section, you will have a
                  runnable, example website to use as your site's base. To run:
                </p>
                <ul className="list-item-one">
                  <li>
                    It can have an identifier which is either a number or a
                    string.
                  </li>
                  <li>
                    Loads navbar from the Markdown file <code>_navbar.md</code>{" "}
                    if true, else loads it from the path specified.
                  </li>
                  <li>
                    Load the example site at <code>http://localhost:3000</code>{" "}
                    if it did not already open automatically. If port{" "}
                    <code>3000</code> has already been taken, another port will
                    be used. Look at the console messages to see which
                  </li>
                </ul>
                <Image width={1007} height={602} style={{height:'fit-content'}}    
                  src="/images/doc/img_01.png"
                  alt="doc"
                  className="img-meta"
                />
              </div>

              <div id="launching-server">
                <h3>Launching the server </h3>
                <p>
                  If you are behind a corporate proxy, you need to disable it
                  for the development server requests. It can be using the{" "}
                  <code>NO_PROXY</code> environment variable.
                </p>
                <div className="mark-red">
                  <pre>
                    window.$deski = {"{"}
                    <code>
                      {" "}
                      <br /> name:{" "}
                      <span className="s1">
                        <code>'&#60;span&#62;deski&#60;/span&#62;'</code>
                      </span>
                      , <br />
                    </code>
                    {"}"}
                  </pre>
                </div>
                {/* /.mark-red */}
              </div>

              <div id="loading-dialog">
                <h3>Loading dialog</h3>
                <div className="mark-red">
                  <pre>
                    &#60;!-- index.html --&#62; <br />
                    <br />
                    &#60;div id="<span className="s1">app</span>"&#62;Please
                    wait...&#60;/div&#62;
                  </pre>
                </div>{" "}
                {/* /.mark-red */}
                <p>
                  You should set the <code>data-app</code> attribute if you
                  changed <code>el</code> :
                </p>
                <div className="mark-blue">
                  <pre>
                    &#60;!-- index.html --&#62; <br />
                    <br />
                    &#60;div data-app id="<span className="s1">main</span>
                    "&#62;Please wait...&#60;/div&#62; <br />
                    <span className="s2">&#60;script&#62;</span>
                    <br />
                    &nbsp;&nbsp;{" "}
                    <span className="s2">
                      window.$docsify = {"{"} <br />
                    </span>
                    &nbsp;&nbsp;{" "}
                    <span className="s2">
                      el: '<span className="s1">#main</span>'
                    </span>
                    <span className="s2">
                      {" "}
                      <br /> {"}"}
                    </span>{" "}
                    <br />
                    <span className="s2">&#60;/script&#62;</span>
                  </pre>
                </div>
                {/* /.mark-blue */}
                <p>You can update to the latest version of Docusaurus by:</p>
                <pre className="bg-black">
                  <code>
                    <span>
                      yarn <span className="s3">upgrade</span> deski --latest
                    </span>
                  </code>
                </pre>
                {/*  /.bg-black */}
              </div>

              <div className="doc-pagination pt-40">
                <ul className="d-flex align-items-center justify-content-between">
                  <li className="d-flex align-items-center">
                    <a href="#">
                      <i className="fa fa-angle-left" aria-hidden="true"></i>
                    </a>
                    &nbsp;&nbsp;&nbsp;
                    <span>Quick Start</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span>Site Preparation</span> &nbsp;&nbsp;&nbsp;
                    <a href="#">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </main>

          <DocScrollNavTwo/>
            {/* End Right Sidebar Menu */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocFullWidthBanner;
