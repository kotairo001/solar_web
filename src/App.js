import "./App.css";
import About from "./component/About";
import Carousel from "./component/Carousel";
import Contact from "./component/Contact";
import Navbar from "./component/Navbar";
import Service from "./component/Service";
import Team from "./component/Team";

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* Navbar End */}
      {/* Carousel Start */}
      <Carousel></Carousel>
      {/* Carousel End */}
      {/* About Start */}
      <About></About>
      {/* About End */}
      {/* Service Start */}
      <Service></Service>
      {/* Service End */}
      {/* Team Start */}
      <Team></Team>
      {/* Team End */}
      {/* FAQs Start */}
      <div className="container-fluid py-5" id="faqs">
        <div className="container py-5">
          <div className="section-title position-relative text-center">
            <h6
              className="text-uppercase text-primary mb-3"
              style={{ letterSpacing: 3 }}
            >
              FAQs
            </h6>
            <h1 className="display-4">You Should Know</h1>
          </div>
          <div className="row">
            <div className="col-md-6 border-right border-primary">
              <div className="text-center text-md-right mr-md-3 mb-4 mb-md-0">
                <h3 className="mb-4">Why Switch to Solar?</h3>
                <h5 className="mb-3">
                  <i className="fa fa-check text-success float-md-right mr-2 mr-md-0 ml-md-2" />
                  Vero dolor amet no eos ipsum erat
                </h5>
                <h5 className="mb-3">
                  <i className="fa fa-check text-success float-md-right mr-2 mr-md-0 ml-md-2" />
                  Lorem tempor tempor gubergren dolor dolor dolor
                </h5>
                <h5 className="mb-3">
                  <i className="fa fa-check text-success float-md-right mr-2 mr-md-0 ml-md-2" />
                  Nonumy tempor dolores sadipscing duo
                </h5>
                <h5 className="mb-0">
                  <i className="fa fa-check text-success float-md-right mr-2 mr-md-0 ml-md-2" />
                  Kasd dolor ea dolores ut nonumy
                </h5>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-center text-md-left ml-md-3">
                <h3 className="mb-4">Why Choose Us?</h3>
                <h5 className="mb-3">
                  <i className="fa fa-check text-success mr-2" />
                  Vero dolor amet no eos ipsum erat
                </h5>
                <h5 className="mb-3">
                  <i className="fa fa-check text-success mr-2" />
                  Lorem tempor tempor gubergren dolor dolor dolor
                </h5>
                <h5 className="mb-3">
                  <i className="fa fa-check text-success mr-2" />
                  Nonumy tempor dolores sadipscing duo
                </h5>
                <h5 className="mb-0">
                  <i className="fa fa-check text-success mr-2" />
                  Kasd dolor ea dolores ut nonumy
                </h5>
              </div>
            </div>
            <div className="col-md-12 text-center pt-3">
              <a
                className="btn btn-primary font-weight-bold py-3 px-5 mt-4 btn-scroll"
                href="#contact"
              >
                Get A Quote
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* FAQs End */}
      {/* Contact Start */}
      <Contact></Contact>
      {/* Contact End */}
      {/* Footer Start */}
      <div
        className="container-fluid bg-dark text-white py-5 px-sm-3 px-lg-5"
        style={{ marginTop: 90 }}
      >
        <div className="row pt-5">
          <div className="col-12 mb-4 px-4">
            <div
              className="row mb-5 p-4"
              style={{ background: "rgba(256, 256, 256, 0.05)" }}
            >
              <div className="col-md-4">
                <div className="text-md-center">
                  <h5
                    className="text-primary text-uppercase mb-2"
                    style={{ letterSpacing: 5 }}
                  >
                    Our Office
                  </h5>
                  <p className="mb-4 m-md-0">HH4, Song Da</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-md-center">
                  <h5
                    className="text-primary text-uppercase mb-2"
                    style={{ letterSpacing: 5 }}
                  >
                    Email Us
                  </h5>
                  <p className="mb-4 m-md-0">info@example.com</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-md-center">
                  <h5
                    className="text-primary text-uppercase mb-2"
                    style={{ letterSpacing: 5 }}
                  >
                    Call Us
                  </h5>
                  <p className="m-0">+012 345 6789</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-12">
            <div className="row">
              <div className="col-md-6 mb-5">
                <p>
                  Et et amet ut elitr ipsum sit dolor dolor dolore. Sit accusam
                  elitr ut diam sit rebum. Eirmod duo kasd diam vero labore sea,
                  est et et lorem ut at erat, gubergren ipsum et ipsum elitr et
                  rebum rebum
                </p>
                <div className="d-flex justify-content-start mt-4">
                  <a
                    className="btn btn-lg btn-outline-light btn-lg-square mr-2"
                    href="#"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-lg btn-outline-light btn-lg-square mr-2"
                    href="#"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-lg btn-outline-light btn-lg-square mr-2"
                    href="#"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a
                    className="btn btn-lg btn-outline-light btn-lg-square"
                    href="#"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
              <div className="col-md-6 mb-5">
                <h5
                  className="text-primary text-uppercase mb-4"
                  style={{ letterSpacing: 5 }}
                >
                  Our Products
                </h5>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-white btn-scroll mb-2" href="#service">
                    <i className="fa fa-angle-right mr-2" />
                    Solar System
                  </a>
                  <a className="text-white btn-scroll mb-2" href="#service">
                    <i className="fa fa-angle-right mr-2" />
                    Wind Turbine
                  </a>
                  <a className="text-white btn-scroll mb-2" href="#service">
                    <i className="fa fa-angle-right mr-2" />
                    Wind Generator
                  </a>
                  <a className="text-white btn-scroll mb-2" href="#service">
                    <i className="fa fa-angle-right mr-2" />
                    Solar Energy
                  </a>
                  <a className="text-white btn-scroll" href="#service">
                    <i className="fa fa-angle-right mr-2" />
                    Solar Panel
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 mb-5">
            <h5
              className="text-primary text-uppercase mb-4"
              style={{ letterSpacing: 5 }}
            >
              Newsletter
            </h5>
            <p>
              Rebum labore lorem dolores kasd est, et ipsum amet et at kasd,
              ipsum sea tempor magna tempor. Accu kasd sed ea duo ipsum. Dolor
              duo eirmod sea justo no lorem est diam
            </p>
            <div className="w-100">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-light"
                  style={{ padding: 30 }}
                  placeholder="Your Email Address"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary px-4">Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid bg-dark text-white text-center border-top py-4 px-sm-3 px-md-5"
        style={{ borderColor: "rgba(256, 256, 256, 0.05) !important" }}
      >
        <p className="m-0 text-white">
          © <a href="#">Domain Name</a>. All Rights Reserved. Designed by
        </p>
      </div>
      {/* Footer End */}
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModalLong"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Solar Energy System
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <img className="img-fluid mb-4" src="img/carousel-1.jpg" alt="" />
              <p>
                Sit eos diam rebum amet stet sit lorem invidunt, kasd dolor ea
                dolores ut nonumy, sea est rebum dolore dolor. Lorem tempor
                tempor gubergren dolor dolor dolor. Kasd amet labore voluptua
                justo diam, dolore accusam duo est stet nonumy tempor dolores
                sadipscing duo. Stet at et nonumy erat et sed.
              </p>
              <p>
                Sit eos diam rebum amet stet sit lorem invidunt, kasd dolor ea
                dolores ut nonumy, sea est rebum dolore dolor. Lorem tempor
                tempor gubergren dolor dolor dolor. Kasd amet labore voluptua
                justo diam, dolore accusam duo est stet nonumy tempor dolores
                sadipscing duo. Stet at et nonumy erat et sed.
              </p>
              <p>
                Sit eos diam rebum amet stet sit lorem invidunt, kasd dolor ea
                dolores ut nonumy, sea est rebum dolore dolor. Lorem tempor
                tempor gubergren dolor dolor dolor. Kasd amet labore voluptua
                justo diam, dolore accusam duo est stet nonumy tempor dolores
                sadipscing duo. Stet at et nonumy erat et sed.
              </p>
              <p>
                Sit eos diam rebum amet stet sit lorem invidunt, kasd dolor ea
                dolores ut nonumy, sea est rebum dolore dolor. Lorem tempor
                tempor gubergren dolor dolor dolor. Kasd amet labore voluptua
                justo diam, dolore accusam duo est stet nonumy tempor dolores
                sadipscing duo. Stet at et nonumy erat et sed.
              </p>
              <p>
                Sit eos diam rebum amet stet sit lorem invidunt, kasd dolor ea
                dolores ut nonumy, sea est rebum dolore dolor. Lorem tempor
                tempor gubergren dolor dolor dolor. Kasd amet labore voluptua
                justo diam, dolore accusam duo est stet nonumy tempor dolores
                sadipscing duo. Stet at et nonumy erat et sed.
              </p>
              <p>
                Sit eos diam rebum amet stet sit lorem invidunt, kasd dolor ea
                dolores ut nonumy, sea est rebum dolore dolor. Lorem tempor
                tempor gubergren dolor dolor dolor. Kasd amet labore voluptua
                justo diam, dolore accusam duo est stet nonumy tempor dolores
                sadipscing duo. Stet at et nonumy erat et sed.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      {/* Back to Top */}
      <a
        href="#"
        className="btn btn-lg btn-outline-primary btn-lg-square back-to-top"
      >
        <i className="fa fa-angle-double-up" />
      </a>
    </>
  );
}

export default App;
