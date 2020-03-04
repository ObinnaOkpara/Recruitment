import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RecentJobs from "./components/usercontrols/RecentJobs";
import LatestPosts from "./components/usercontrols/LatestPosts";
import NavBar from "./components/NavBar";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="ie-panel">
          {" "}
          <a href="http://windows.microsoft.com/en-US/internet-explorer/">
            <img
              src="images/ie8-panel/warning_bar_0000_us.jpg"
              height="42"
              width="820"
              alt="You are using an outdated browser. For a faster, safer browsing experience, upgrade for free today."
            />
          </a>
        </div>
        <div className="preloader loaded">
          <div className="preloader-body">
            <div className="preloader-item">
              <svg width="40" height="40" viewBox="0 0 40 40">
                <polygon
                  className="rect"
                  points="0 0 0 40 40 40 40 0"
                ></polygon>
              </svg>
            </div>
          </div>
        </div>
        <div className="page animated" style={{ animationDuration: "500ms" }}>
          <header className="section page-header jumbotron-creative">
            <NavBar></NavBar>
            <div className="jumbotron-creative-inner">
              <div className="container">
                <div className="jumbotron-creative-main">
                  <h2 className="jumbotron-creative-title">
                    Start Building Your Own Career Now
                  </h2>
                  <div className="form-layout-search-outer">
                    <form className="form-layout-search form-lg">
                      <div className="form-wrap form-wrap-icon">
                        <input
                          className="form-input form-control-has-validation"
                          id="form-keywords"
                          type="text"
                          name="keywords"
                          data-constraints="@Required"
                        />
                        <span className="form-validation"></span>
                        <label
                          className="form-label rd-input-label"
                          htmlFor="form-keywords"
                        >
                          Keywords
                        </label>
                        <span className="icon fl-bigmug-line-circular224"></span>
                      </div>
                      <div className="form-wrap form-wrap-icon form-wrap-select">
                        <select
                          className="form-input select form-control-has-validation select2-hidden-accessible"
                          id="form-region"
                          data-placeholder="All Regions"
                          name="region"
                          data-minimum-results-for-search="Infinity"
                          data-constraints="@Selected"
                          tabIndex="-1"
                          aria-hidden="true"
                        >
                          <option label="All Regions"></option>
                          <option value="1">Seattle</option>
                          <option value="2">Miami</option>
                          <option value="3">Chicago</option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--default"
                          dir="ltr"
                          style={{ width: "100%" }}
                        >
                          <span className="selection">
                            <span
                              className="select2-selection select2-selection--single"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabIndex="0"
                              aria-labelledby="select2-form-region-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-form-region-container"
                              >
                                <span className="select2-selection__placeholder">
                                  All Regions
                                </span>
                              </span>
                              <span
                                className="select2-selection__arrow"
                                role="presentation"
                              >
                                <b role="presentation"></b>
                              </span>
                            </span>
                          </span>
                          <span
                            className="dropdown-wrapper"
                            aria-hidden="true"
                          ></span>
                        </span>
                        <span className="form-validation"></span>
                        <span className="icon fl-bigmug-line-big104"></span>
                      </div>
                      <div className="form-wrap form-wrap-button form-wrap-button-icon-only">
                        <button
                          className="button button-lg button-primary button-icon-only"
                          type="submit"
                          aria-label="search"
                        >
                          <span className="icon icon-4 fl-bigmug-line-search74"></span>
                        </button>
                      </div>
                    </form>
                  </div>
                  <p className="big text-gray-800">
                    We offer&nbsp;
                    <a href="job-listing.html">2,989 job vacancies</a> right
                    now!
                  </p>
                </div>
              </div>
              <div className="jc-decoration">
                <div className="jc-decoration-item jc-decoration-item-1">
                  <svg
                    version="1.1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 1446 970"
                    width="1446"
                    height="970"
                    preserveAspectRatio="none"
                  >
                    <path d="M-0.000,33.000 C-0.000,33.000 80.000,54.000 113.000,83.000 C146.000,112.000 147.000,152.000 183.000,174.000 C219.000,196.000 288.000,172.000 334.000,193.000 C380.000,214.000 379.000,282.000 427.000,317.000 C475.000,352.000 548.000,336.000 588.000,371.000 C628.000,406.000 614.000,483.000 647.000,513.000 C680.000,543.000 786.000,537.000 841.000,587.000 C896.000,637.000 885.000,739.000 932.000,776.000 C979.000,813.000 1026.000,796.000 1069.000,817.000 C1112.000,838.000 1135.000,865.000 1189.000,893.000 C1243.000,921.000 1433.000,970.000 1433.000,970.000 L1446.000,0.000 L-0.000,33.000 Z"></path>
                  </svg>
                </div>
                <div className="jc-decoration-item jc-decoration-item-2">
                  <svg
                    version="1.1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 1446 970"
                    width="1446"
                    height="970"
                    preserveAspectRatio="none"
                  >
                    <path d="M-0.000,33.000 C-0.000,33.000 80.000,54.000 113.000,83.000 C146.000,112.000 147.000,152.000 183.000,174.000 C219.000,196.000 288.000,172.000 334.000,193.000 C380.000,214.000 379.000,282.000 427.000,317.000 C475.000,352.000 548.000,336.000 588.000,371.000 C628.000,406.000 614.000,483.000 647.000,513.000 C680.000,543.000 786.000,537.000 841.000,587.000 C896.000,637.000 885.000,739.000 932.000,776.000 C979.000,813.000 1026.000,796.000 1069.000,817.000 C1112.000,838.000 1135.000,865.000 1189.000,893.000 C1243.000,921.000 1433.000,970.000 1433.000,970.000 L1446.000,0.000 L-0.000,33.000 Z"></path>
                  </svg>
                </div>
                <img
                  className="jc-decoration-image"
                  src="images/home-1-748x528.png"
                  alt=""
                  width="748"
                  height="528"
                />
              </div>
            </div>
          </header>
          <section className="section section-md bg-default text-center">
            <div className="container">
              <h3>
                Welcome to <span className="text-primary">Jobs</span>Factory
              </h3>
              <p className="text-spacing-05">
                A place where leading employers are already looking for your
                talent and experience.
              </p>
              <div className="row row-50 justify-content-center align-items-center text-left">
                <div className="col-md-10 col-lg-6">
                  <figure className="figure-responsive block-5">
                    <img
                      src="images/home-2-540x413.jpg"
                      alt=""
                      width="540"
                      height="413"
                    />
                  </figure>
                </div>
                <div className="col-md-10 col-lg-6">
                  <div className="row row-50 row-xl-70">
                    <div className="col-sm-6">
                      <article className="box-line box-line_sm">
                        <div className="box-line-inner">
                          <div className="box-line-icon icon mercury-icon-group"></div>
                          <h5 className="box-line-title">
                            More than 3.8 million visitors every day
                          </h5>
                        </div>
                      </article>
                    </div>
                    <div className="col-sm-6">
                      <article className="box-line box-line_sm">
                        <div className="box-line-inner">
                          <div className="box-line-icon icon mercury-icon-partners"></div>
                          <h5 className="box-line-title">
                            Leading recruiting website in the US and Europe
                          </h5>
                        </div>
                      </article>
                    </div>
                    <div className="col-sm-6">
                      <article className="box-line box-line_sm">
                        <div className="box-line-inner">
                          <div className="box-line-icon icon mercury-icon-chat"></div>
                          <h5 className="box-line-title">
                            24\7 Dedicated and free Support
                          </h5>
                        </div>
                      </article>
                    </div>
                    <div className="col-sm-6">
                      <article className="box-line box-line_sm">
                        <div className="box-line-inner">
                          <div className="box-line-icon icon mercury-icon-target"></div>
                          <h5 className="box-line-title">
                            Only relevant and verified vacancies{" "}
                          </h5>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section section-md bg-default text-center">
            <div className="container container-fullwidth">
              <h3>Popular Categories</h3>
              <div
                className="owl-carousel owl-carousel-stretch owl-loaded"
                data-items="1"
                data-sm-items="2"
                data-md-items="3"
                data-lg-items="3"
                data-xl-items="5"
                data-xxl-items="6"
                data-dots="true"
                data-nav="false"
                data-stage-padding="1"
                data-loop="false"
                data-margin="26"
                data-md-margin="20"
                data-lg-margin="26"
                data-autoplay="false"
                data-autoplay-timeout="3500"
                data-mouse-drag="false"
              >
                <div className="owl-stage-outer">
                  <div
                    className="owl-stage"
                    style={{
                      transform: "translate3d(0px, 0px, 0px)",
                      transition: "all 0s ease 0s",
                      width: "2151",
                      paddingLeft: "1px",
                      paddingRight: "1px"
                    }}
                  >
                    <div
                      className="owl-item active"
                      style={{ width: "242.6px", marginRight: "26px" }}
                    >
                      <a className="box-creative" href="job-listing-full.html">
                        <div className="box-creative-inner">
                          <div className="icon box-creative-icon mercury-icon-calc"></div>
                          <p className="box-creative-title">
                            Accounting &amp; Finance
                          </p>
                          <p>2590 open positions</p>
                        </div>
                        <div className="box-creative-dummy"></div>
                      </a>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: "242.6px", marginRight: "26px" }}
                    >
                      <a className="box-creative" href="job-listing-full.html">
                        <div className="box-creative-inner">
                          <div className="icon box-creative-icon mercury-icon-partners"></div>
                          <p className="box-creative-title">
                            Sales &amp; Marketing
                          </p>
                          <p>1214 open positions</p>
                        </div>
                        <div className="box-creative-dummy"></div>
                      </a>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: "242.6px", marginRight: "26px" }}
                    >
                      <a className="box-creative" href="job-listing-full.html">
                        <div className="box-creative-inner">
                          <div className="icon box-creative-icon mercury-icon-globe"></div>
                          <p className="box-creative-title">
                            Information Technology{" "}
                          </p>
                          <p>3213 open positions</p>
                        </div>
                        <div className="box-creative-dummy"></div>
                      </a>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: "242.6px", marginRight: "26px" }}
                    >
                      <a className="box-creative" href="job-listing-full.html">
                        <div className="box-creative-inner">
                          <div className="icon box-creative-icon mercury-icon-cup"></div>
                          <p className="box-creative-title">Food Service</p>
                          <p>3213 open positions</p>
                        </div>
                        <div className="box-creative-dummy"></div>
                      </a>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: "242.6px", marginRight: "26px" }}
                    >
                      <a className="box-creative" href="job-listing-full.html">
                        <div className="box-creative-inner">
                          <div className="icon box-creative-icon mercury-icon-presentation-2"></div>
                          <p className="box-creative-title">
                            Design &amp; Art{" "}
                          </p>
                          <p>3213 open positions</p>
                        </div>
                        <div className="box-creative-dummy"></div>
                      </a>
                    </div>
                    <div
                      className="owl-item"
                      style={{ width: "242.6px", marginRight: "26px" }}
                    >
                      <a className="box-creative" href="job-listing-full.html">
                        <div className="box-creative-inner">
                          <div className="icon box-creative-icon thin-icon-love"></div>
                          <p className="box-creative-title">Healthcare</p>
                          <p>3213 open positions</p>
                        </div>
                        <div className="box-creative-dummy"></div>
                      </a>
                    </div>
                    <div
                      className="owl-item"
                      style={{ width: "242.6px", marginRight: "26px" }}
                    >
                      <a className="box-creative" href="job-listing-full.html">
                        <div className="box-creative-inner">
                          <div className="icon box-creative-icon thin-icon-car"></div>
                          <p className="box-creative-title">Automotive</p>
                          <p>3813 open positions</p>
                        </div>
                        <div className="box-creative-dummy"></div>
                      </a>
                    </div>
                    <div
                      className="owl-item"
                      style={{ width: "242.6px", marginRight: "26px" }}
                    >
                      <a className="box-creative" href="job-listing-full.html">
                        <div className="box-creative-inner">
                          <div className="icon box-creative-icon mercury-icon-house"></div>
                          <p className="box-creative-title">Construction</p>
                          <p>1215 open positions</p>
                        </div>
                        <div className="box-creative-dummy"></div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="owl-nav disabled">
                  <div className="owl-prev"></div>
                  <div className="owl-next"></div>
                </div>
                <div className="owl-dots">
                  <div className="owl-dot active">
                    <span></span>
                  </div>
                  <div className="owl-dot">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section section-md bg-gray-100">
            <div className="container">
              <RecentJobs></RecentJobs>
            </div>
          </section>
          <section className="section section-sm bg-default">
            <div className="container">
              <h3 className="text-center">New Candidates</h3>
              <div
                className="owl-carousel owl-carousel-profile owl-loaded"
                data-items="1"
                data-sm-items="2"
                data-md-items="3"
                data-lg-items="4"
                data-dots="true"
                data-nav="false"
                data-stage-padding="0"
                data-loop="false"
                data-fade="true"
                data-margin="30"
                data-mouse-drag="false"
              >
                <div className="owl-stage-outer">
                  <div
                    className="owl-stage"
                    style={{
                      transform: "translate3d(0px, 0px, 0px)",
                      transition: "all 0s ease 0s",
                      width: "1200px"
                    }}
                  >
                    <div
                      className="owl-item active"
                      style={{ width: "270px", marginRight: "30px" }}
                    >
                      <a className="profile-classic" href="resume-page.html">
                        <figure className="profile-classic-figure">
                          <img
                            className="profile-classic-image"
                            src="images/candidates-grid-1-266x219.jpg"
                            alt=""
                            width="266"
                            height="219"
                          />
                        </figure>
                        <div className="profile-classic-main">
                          <h5 className="profile-classic-name">Amanda Cook</h5>
                          <ul className="profile-classic-list">
                            <li>
                              <span className="icon mdi mdi-map-marker"></span>
                              <span>Los Angeles, California</span>
                            </li>
                            <li>
                              <span className="icon mdi mdi-account"></span>
                              <span>Junior Web Designer</span>
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: "270px", marginRight: "30px" }}
                    >
                      <a className="profile-classic" href="resume-page.html">
                        <figure className="profile-classic-figure">
                          <img
                            className="profile-classic-image"
                            src="images/candidates-grid-2-266x219.jpg"
                            alt=""
                            width="266"
                            height="219"
                          />
                        </figure>
                        <div className="profile-classic-main">
                          <h5 className="profile-classic-name">Kevin Parker</h5>
                          <ul className="profile-classic-list">
                            <li>
                              <span className="icon mdi mdi-map-marker"></span>
                              <span>Seattle, Washington</span>
                            </li>
                            <li>
                              <span className="icon mdi mdi-account"></span>
                              <span>HR Manager</span>
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: "270px", marginRight: "30px" }}
                    >
                      <a className="profile-classic" href="resume-page.html">
                        <figure className="profile-classic-figure">
                          <img
                            className="profile-classic-image"
                            src="images/candidates-grid-3-266x219.jpg"
                            alt=""
                            width="266"
                            height="219"
                          />
                        </figure>
                        <div className="profile-classic-main">
                          <h5 className="profile-classic-name">
                            Sandy Williams
                          </h5>
                          <ul className="profile-classic-list">
                            <li>
                              <span className="icon mdi mdi-map-marker"></span>
                              <span>Miami, Florida</span>
                            </li>
                            <li>
                              <span className="icon mdi mdi-account"></span>
                              <span>Sales Manager</span>
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: "270px", marginRight: "30px" }}
                    >
                      <a className="profile-classic" href="resume-page.html">
                        <figure className="profile-classic-figure">
                          <img
                            className="profile-classic-image"
                            src="images/candidates-grid-4-266x219.jpg"
                            alt=""
                            width="266"
                            height="219"
                          />
                        </figure>
                        <div className="profile-classic-main">
                          <h5 className="profile-classic-name">
                            James Johnson
                          </h5>
                          <ul className="profile-classic-list">
                            <li>
                              <span className="icon mdi mdi-map-marker"></span>
                              <span>Boston, Massachusetts</span>
                            </li>
                            <li>
                              <span className="icon mdi mdi-account"></span>
                              <span>Programmer</span>
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="owl-nav disabled">
                  <div className="owl-prev"></div>
                  <div className="owl-next"></div>
                </div>
                <div className="owl-dots disabled">
                  <div className="owl-dot active">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="parallax-container section-md bg-primary bg-overlay-1 text-center"
            data-parallax-img="images/bg-image-7.jpg"
          >
            <div className="material-parallax parallax">
              <img
                src="images/bg-image-7.jpg"
                alt=""
                style={{ display: "block" }}
              />
            </div>
            <div className="parallax-content">
              <div className="container">
                <h3>Success Stories </h3>
                <div
                  className="owl-carousel owl-loaded"
                  data-items="1"
                  data-md-items="2"
                  data-dots="true"
                  data-nav="false"
                  data-stage-padding="0"
                  data-loop="false"
                  data-margin="30"
                  data-autoplay="true"
                  data-mouse-drag="false"
                >
                  <div className="owl-stage-outer">
                    <div
                      className="owl-stage"
                      style={{
                        transform: "translate3d(-600px, 0px, 0px)",
                        transition: "all 0.25s ease 0s",
                        width: "1800px"
                      }}
                    >
                      <div
                        className="owl-item"
                        style={{ width: "570px", marginRight: "30px" }}
                      >
                        <blockquote className="quote-mary">
                          <div className="quote-mary-main">
                            <svg
                              className="quote-mary-mark"
                              version="1.1"
                              x="0px"
                              y="0px"
                              viewBox="0 0 36 28"
                              width="38"
                              height="28"
                            >
                              <path d="M13,0l-2.4,13.3H15V28H0V13.1L4,0H13z M34,0l-2.4,13.3H36V28H20.9V13.1L25,0H34z"></path>
                            </svg>
                            <div className="quote-mary-text">
                              <p>
                                If I didn’t find JobsFactory I’m pretty sure I’d
                                be nowhere, they helped me find a job in less
                                than 2 days and the job is amazing. Thank you!
                              </p>
                            </div>
                          </div>
                          <div className="quote-mary-meta">
                            <img
                              className="quote-mary-avatar"
                              src="images/user-2-73x73.jpg"
                              alt=""
                              width="73"
                              height="73"
                            />
                            <div className="quote-mary-info">
                              <cite className="quote-mary-cite heading-5">
                                Karen Sanders
                              </cite>
                              <p className="quote-mary-subtitle">
                                Marketing Director
                              </p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "570px", marginRight: "30px" }}
                      >
                        <blockquote className="quote-mary">
                          <div className="quote-mary-main">
                            <svg
                              className="quote-mary-mark"
                              version="1.1"
                              x="0px"
                              y="0px"
                              viewBox="0 0 36 28"
                              width="38"
                              height="28"
                            >
                              <path d="M13,0l-2.4,13.3H15V28H0V13.1L4,0H13z M34,0l-2.4,13.3H36V28H20.9V13.1L25,0H34z"></path>
                            </svg>
                            <div className="quote-mary-text">
                              <p>
                                Within a couple of days after posting a CV, I
                                had possible employers contacting me. After
                                several interviews, I decided to accept a
                                position located nearby.
                              </p>
                            </div>
                          </div>
                          <div className="quote-mary-meta">
                            <img
                              className="quote-mary-avatar"
                              src="images/user-1-73x73.jpg"
                              alt=""
                              width="73"
                              height="73"
                            />
                            <div className="quote-mary-info">
                              <cite className="quote-mary-cite heading-5">
                                Walter Williams
                              </cite>
                              <p className="quote-mary-subtitle">HR Managers</p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "570px", marginRight: "30px" }}
                      >
                        <blockquote className="quote-mary">
                          <div className="quote-mary-main">
                            <svg
                              className="quote-mary-mark"
                              version="1.1"
                              x="0px"
                              y="0px"
                              viewBox="0 0 36 28"
                              width="38"
                              height="28"
                            >
                              <path d="M13,0l-2.4,13.3H15V28H0V13.1L4,0H13z M34,0l-2.4,13.3H36V28H20.9V13.1L25,0H34z"></path>
                            </svg>
                            <div className="quote-mary-text">
                              <p>
                                I found a job as a Web Developer and applied
                                through my iPhone with the JobsFactory website!
                                It’s very easy to search for jobs and apply
                                here!
                              </p>
                            </div>
                          </div>
                          <div className="quote-mary-meta">
                            <img
                              className="quote-mary-avatar"
                              src="images/user-4-73x73.jpg"
                              alt=""
                              width="73"
                              height="73"
                            />
                            <div className="quote-mary-info">
                              <cite className="quote-mary-cite heading-5">
                                Julia Smith
                              </cite>
                              <p className="quote-mary-subtitle">
                                Web Developer
                              </p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                  <div className="owl-nav disabled">
                    <div className="owl-prev"></div>
                    <div className="owl-next"></div>
                  </div>
                  <div className="owl-dots">
                    <div className="owl-dot">
                      <span></span>
                    </div>
                    <div className="owl-dot active">
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section section-md bg-default">
            <div className="container">
              <h3 className="text-center">Pricing</h3>
              <div className="row row-50 justify-content-center">
                <div className="col-md-6 col-lg-4">
                  <article className="pt pt-classic">
                    <div className="pt-classic-header">
                      <div className="pt-classic-item">
                        <p className="pt-title">Startup</p>
                        <span className="badge">7 Days Free</span>
                      </div>
                      <p className="pt-price">
                        <span className="pt-price-small pt-price-currency">
                          $
                        </span>
                        <span>59</span>
                        <span className="pt-price-small">00</span>
                      </p>
                    </div>
                    <div className="pt-classic-main">
                      <ul className="pt-classic-features">
                        <li>Post 8 Jobs</li>
                        <li>5 Highlighted Job Posts</li>
                        <li>Browse Your Job Listings</li>
                        <li>Access to Job Posting Stats</li>
                        <li>Email Support</li>
                        <li>Jobs Expire In 90 Days</li>
                      </ul>
                      <a
                        className="button button-primary-outline"
                        href="index.html#"
                      >
                        Get started
                      </a>
                    </div>
                  </article>
                </div>
                <div className="col-md-6 col-lg-4">
                  <article className="pt pt-classic">
                    <div className="pt-classic-header">
                      <div className="pt-classic-item">
                        <p className="pt-title text-tertiary">Company</p>
                      </div>
                      <p className="pt-price">
                        <span className="pt-price-small pt-price-currency">
                          $
                        </span>
                        <span>89</span>
                        <span className="pt-price-small">00</span>
                      </p>
                    </div>
                    <div className="pt-classic-main">
                      <ul className="pt-classic-features">
                        <li>Post 28 Jobs</li>
                        <li>10 Highlighted Job Posts</li>
                        <li>Edit Your Job Listings</li>
                        <li>Access to Job Posting Stats</li>
                        <li>Email and Phone Support</li>
                        <li>Jobs Expire In 180 Days</li>
                      </ul>
                      <a
                        className="button button-primary-outline"
                        href="index.html#"
                      >
                        Get started
                      </a>
                    </div>
                  </article>
                </div>
                <div className="col-md-6 col-lg-4">
                  <article className="pt pt-classic">
                    <div className="pt-classic-header">
                      <div className="pt-classic-item">
                        <p className="pt-title text-secondary">Enterprise</p>
                      </div>
                      <p className="pt-price">
                        <span className="pt-price-small pt-price-currency">
                          $
                        </span>
                        <span>199</span>
                        <span className="pt-price-small">00</span>
                      </p>
                    </div>
                    <div className="pt-classic-main">
                      <ul className="pt-classic-features">
                        <li>Post 35 Jobs</li>
                        <li>15 Highlighted Job Posts</li>
                        <li>Replace Your Job Listings</li>
                        <li>Access to Job Posting Stats</li>
                        <li>24/7 Support</li>
                        <li>Jobs Expire In 250 Days</li>
                      </ul>
                      <a
                        className="button button-primary-outline"
                        href="index.html#"
                      >
                        Get started
                      </a>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section>
          <section
            className="parallax-container section-md bg-primary bg-overlay-1 text-center"
            data-parallax-img="images/parallax-2.jpg"
          >
            <div className="material-parallax parallax">
              <img src="images/parallax-2.jpg" alt="" />
            </div>
            <div className="parallax-content">
              <div className="container container-fullwidth">
                <h3>Companies We've Helped</h3>
                <div
                  className="owl-carousel owl-carousel-stretch owl-loaded"
                  data-autoplay="true"
                  data-autoplay-timeout="4000"
                  data-items="1"
                  data-sm-items="2"
                  data-md-items="3"
                  data-lg-items="3"
                  data-xl-items="5"
                  data-xxl-items="6"
                  data-dots="true"
                  data-nav="false"
                  data-stage-padding="2"
                  data-loop="false"
                  data-margin="30"
                  data-mouse-drag="false"
                >
                  <div className="owl-stage-outer">
                    <div
                      className="owl-stage"
                      style={{
                        transform: "translate3d(-1883px, 0px, 0px)",
                        transition: "all 0.25s ease 0s",
                        width: "3232px",
                        paddingLeft: "2px",
                        paddingRight: "2px"
                      }}
                    >
                      <div
                        className="owl-item"
                        style={{ width: "239px", marginRight: "30px" }}
                      >
                        <a className="link-corporate" href="index.html#">
                          <img
                            src="images/brand-1-inverse-183x44.png"
                            alt=""
                            width="183"
                            height="44"
                          />
                        </a>
                      </div>
                      <div
                        className="owl-item"
                        style={{ width: "239px", marginRight: "30px" }}
                      >
                        <a className="link-corporate" href="index.html#">
                          <img
                            src="images/brand-2-inverse-118x82.png"
                            alt=""
                            width="118"
                            height="82"
                          />
                        </a>
                      </div>
                      <div
                        className="owl-item"
                        style={{ width: "239px", marginRight: "30px" }}
                      >
                        <a className="link-corporate" href="index.html#">
                          <img
                            src="images/brand-3-inverse-137x39.png"
                            alt=""
                            width="137"
                            height="39"
                          />
                        </a>
                      </div>
                      <div
                        className="owl-item"
                        style={{ width: "239px", marginRight: "30px" }}
                      >
                        <a className="link-corporate" href="index.html#">
                          <img
                            src="images/brand-4-inverse-133x77.png"
                            alt=""
                            width="133"
                            height="77"
                          />
                        </a>
                      </div>
                      <div
                        className="owl-item"
                        style={{ width: "239px", marginRight: "30px" }}
                      >
                        <a className="link-corporate" href="index.html#">
                          <img
                            src="images/brand-5-inverse-153x30.png"
                            alt=""
                            width="153"
                            height="30"
                          />
                        </a>
                      </div>
                      <div
                        className="owl-item"
                        style={{ width: "239px", marginRight: "30px" }}
                      >
                        <a className="link-corporate" href="index.html#">
                          <img
                            src="images/brand-6-inverse-90x68.png"
                            alt=""
                            width="90"
                            height="68"
                          />
                        </a>
                      </div>
                      <div
                        className="owl-item"
                        style={{ width: "239px", marginRight: "30px" }}
                      >
                        <a className="link-corporate" href="index.html#">
                          <img
                            src="images/brand-7-inverse-112x43.png"
                            alt=""
                            width="112"
                            height="43"
                          />
                        </a>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "239px", marginRight: "30px" }}
                      >
                        <a className="link-corporate" href="index.html#">
                          <img
                            src="images/brand-8-inverse-126x22.png"
                            alt=""
                            width="126"
                            height="22"
                          />
                        </a>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "239px", marginRight: "30px" }}
                      >
                        <a className="link-corporate" href="index.html#">
                          <img
                            src="images/brand-9-inverse-158x33.png"
                            alt=""
                            width="158"
                            height="33"
                          />
                        </a>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "239px", marginRight: "30px" }}
                      >
                        <a className="link-corporate" href="index.html#">
                          <img
                            src="images/brand-10-inverse-137x37.png"
                            alt=""
                            width="137"
                            height="37"
                          />
                        </a>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "239px", marginRight: "30px" }}
                      >
                        <a className="link-corporate" href="index.html#">
                          <img
                            src="images/brand-11-inverse-84x59.png"
                            alt=""
                            width="84"
                            height="59"
                          />
                        </a>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "239px", marginRight: "30px" }}
                      >
                        <a className="link-corporate" href="index.html#">
                          <img
                            src="images/brand-12-inverse-116x51.png"
                            alt=""
                            width="116"
                            height="51"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="owl-nav disabled">
                    <div className="owl-prev"></div>
                    <div className="owl-next"></div>
                  </div>
                  <div className="owl-dots">
                    <div className="owl-dot">
                      <span></span>
                    </div>
                    <div className="owl-dot">
                      <span></span>
                    </div>
                    <div className="owl-dot active">
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section section-md bg-default text-center">
            <div className="container">
              <h3>Just 3 Easy Steps to New Capabilities</h3>
              <ul className="list-linked">
                <li className="ll-item">
                  <div className="icon ll-item-icon thin-icon-email-search">
                    <svg
                      className="ll-item-icon-inner"
                      version="1.2"
                      baseProfile="tiny"
                      viewBox="-1 -1 102 102"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="50"
                        fill="none"
                        vectorEffect="non-scaling-stroke"
                      ></circle>
                    </svg>
                  </div>
                  <div className="ll-item-main">
                    <h5 className="ll-item-title">
                      <a href="job-listing.html">Browse Jobs</a>
                    </h5>
                    <p>Easy search by category</p>
                  </div>
                </li>
                <li className="ll-item">
                  <div className="icon ll-item-icon mercury-icon-target-2">
                    <svg
                      className="ll-item-icon-inner"
                      version="1.2"
                      baseProfile="tiny"
                      viewBox="-1 -1 102 102"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="50"
                        fill="none"
                        vectorEffect="non-scaling-stroke"
                      ></circle>
                    </svg>
                  </div>
                  <div className="ll-item-main">
                    <h5 className="ll-item-title">
                      <a href="job-details.html">Find Your Vacancy</a>
                    </h5>
                    <p>Choose a suitable job</p>
                  </div>
                </li>
                <li className="ll-item">
                  <div className="icon ll-item-icon ll-item-icon-sm mercury-icon-e-mail-o">
                    <svg
                      className="ll-item-icon-inner"
                      version="1.2"
                      baseProfile="tiny"
                      viewBox="-1 -1 102 102"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="50"
                        fill="none"
                        vectorEffect="non-scaling-stroke"
                      ></circle>
                    </svg>
                  </div>
                  <div className="ll-item-main">
                    <h5 className="ll-item-title">
                      <a href="submit-resume.html">Submit Resume</a>
                    </h5>
                    <p>Get a personal job offer</p>
                  </div>
                </li>
                <li className="ll-item">
                  <div className="icon ll-item-icon mercury-icon-touch">
                    <svg
                      className="ll-item-icon-inner"
                      version="1.2"
                      baseProfile="tiny"
                      viewBox="-1 -1 102 102"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="50"
                        fill="none"
                        vectorEffect="non-scaling-stroke"
                      ></circle>
                    </svg>
                  </div>
                  <div className="ll-item-main">
                    <a
                      className="button button-sm button-primary-outline"
                      href="job-listing.html"
                    >
                      Start Now
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <section className="section section-md bg-gray-100">
            <div className="container">
              <LatestPosts></LatestPosts>
            </div>
          </section>
          <section className="section section-md bg-default text-center">
            <div className="container">
              <h3>Get JobsFactory App for Your Mobile</h3>
              <p className="offset-top-20px">
                <span style={{ maxWidth: "670px" }}>
                  Searching for jobs has never been that easy. Now you can find
                  job matched your career expectation, apply for jobs and
                  receive feedback right on your mobile. Start your job search
                  now!
                </span>
              </p>
              <div className="group">
                <a
                  className="button button-primary button-fixed-size"
                  href="index.html#"
                >
                  <img
                    src="images/google-play-download-138x35.png"
                    alt=""
                    width="138"
                    height="35"
                  />
                </a>
                <a
                  className="button button-primary button-fixed-size"
                  href="index.html#"
                >
                  <img src="images/appstore.svg" alt="" />
                </a>
              </div>
            </div>
          </section>
          <footer className="section footer-creative context-dark">
            <div className="footer-creative-main">
              <div className="container">
                <div className="row row-50 justify-content-lg-between">
                  <div className="col-lg-5 col-xl-4">
                    <p className="footer-creative-title">Quick Links</p>
                    <div className="footer-creative-divider"></div>
                    <div className="row row-narrow row-15">
                      <div className="col-6">
                        <ul className="list-marked-1">
                          <li>
                            <a href="job-listing-full.html">Browse Jobs</a>
                          </li>
                          <li>
                            <a href="job-listing.html">Browse Categories</a>
                          </li>
                          <li>
                            <a href="submit-resume.html">Submit Resume</a>
                          </li>
                          <li>
                            <a href="companies.html">Companies</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-6">
                        <ul className="list-marked-1">
                          <li>
                            <a href="post-a-job.html">Post a Job</a>
                          </li>
                          <li>
                            <a href="candidates-grid.html">Find a Candidate</a>
                          </li>
                          <li>
                            <a href="pricing-tables.html">Pricing Table</a>
                          </li>
                          <li>
                            <a href="faq.html">FAQ </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <p className="footer-creative-title">Recent News posts</p>
                    <div className="footer-creative-divider"></div>
                    <div className="post-line-group">
                      <a className="post-line" href="blog-post.html">
                        <time className="post-line-time" dateTime="2019">
                          <span className="post-line-time-day">25</span>
                          <span className="post-line-time-month">April</span>
                        </time>
                        <p className="post-line-text">
                          Canada adds 12,500 jobs in modest July rebound
                        </p>
                      </a>
                      <a className="post-line" href="blog-post.html">
                        <time className="post-line-time" dateTime="2019">
                          <span className="post-line-time-day">14</span>
                          <span className="post-line-time-month">April</span>
                        </time>
                        <p className="post-line-text">
                          Outsourcing vs. In-House Digital Marketing
                        </p>
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <p className="footer-creative-title">
                      Jobs in Popular cities
                    </p>
                    <div className="footer-creative-divider"></div>
                    <div className="row row-narrow row-15">
                      <div className="col-6">
                        <ul className="list list-1 list-icons">
                          <li>
                            <a href="job-listing-full.html">
                              <span className="icon icon-sm mdi mdi-map-marker"></span>
                              <span>San Francisco</span>
                            </a>
                          </li>
                          <li>
                            <a href="job-listing-full.html">
                              <span className="icon icon-sm mdi mdi-map-marker"></span>
                              <span>Washington</span>
                            </a>
                          </li>
                          <li>
                            <a href="job-listing-full.html">
                              <span className="icon icon-sm mdi mdi-map-marker"></span>
                              <span>Sacramento</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-6">
                        <ul className="list list-1 list-icons">
                          <li>
                            <a href="job-listing-full.html">
                              <span className="icon icon-sm mdi mdi-map-marker"></span>
                              <span>New York</span>
                            </a>
                          </li>
                          <li>
                            <a href="job-listing-full.html">
                              <span className="icon icon-sm mdi mdi-map-marker"></span>
                              <span>Ontario</span>
                            </a>
                          </li>
                          <li>
                            <a href="job-listing-full.html">
                              <span className="icon icon-sm mdi mdi-map-marker"></span>
                              <span>Chicago</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-creative-aside">
              <div className="container">
                <p className="rights">
                  <span>JobsFactory</span>
                  <span>&nbsp;©&nbsp;</span>
                  <span className="copyright-year">2020</span>
                  <span>&nbsp;</span>
                  <a href="privacy-policy.html">Privacy Policy</a>
                </p>
              </div>
            </div>
          </footer>
        </div>

        <div className="snackbars" id="form-output-global"></div>
      </React.Fragment>
    );
  }
}

export default App;
