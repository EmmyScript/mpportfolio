import {FaEye, FaTwitter } from "react-icons/fa"
import{FaBandcamp, FaGun, FaHand, FaMusic, FaPersonDrowning, FaSquareFacebook } from "react-icons/fa6"
import Footer from "../page/Footer";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <body className=" home d-flex flex-column h-100">
        <main className="flex-shrink-0">
          <header className="py-5">
            <div className="container px-5 pb-5">
              <div className="row gx-5 align-items-center">
                <div className="col-xxl-5">
                  <div className="text-center text-xxl-start">
                    <div className="badge bg-gradient-primary-to-secondary text-white mb-4">
                      <div className="text-uppercase">
                        Design &middot; Development &middot; Marketing
                      </div>
                    </div>
                    <div className="fs-3 fw-light bg-primary text-white">
                      congrats DJ UNique my<FaHand/>and <FaEye/> on you!!<FaGun/>ur <FaBandcamp/>
                    </div>
                    <h1 className="display-3 fw-bolder mb-5">
                      <span className="text-gradient d-inline">
                        booms and grow fast 
                      </span>
                    </h1>
                    <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                      <Link to ="/resumed">
                      <a
                        className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder"
                        href="resume.html"
                      >
                        Resume
                      </a>
                      </Link>
                      <Link to="project">
                      <a
                        className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder"
                        href="projects.html"
                      >
                        Projects
                      </a>
</Link>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-7">
                  <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                    <div className="profile bg-gradient-primary-to-secondary">
                      <img
                        className="profile-img"
                        src="image/finaye.jpg"
                        alt="..."
                     width={260} height={200} style={{objectFit:"cover"}} />
        
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <section className="bg-light py-5">
            <div className="container px-5">
              <div className="row gx-5 justify-content-center">
                <div className="col-xxl-8">
                  <div className="text-center my-5">
                    <h2 className="display-5 fw-bolder">
                      <span className="text-gradient d-inline">About Me</span>
                    </h2>
                    <p className="lead fw-light mb-4">
                      My Name Is Dj Unique 
                    </p>
                    <p className="text-muted">
                      now the vision is fully activated am available for all event.

                      Kudos to you for this remarkable achievement! ...
                            Cheers to your well-deserved success! ...<FaPersonDrowning/>

                      <span><FaMusic/></span>
                    </p>
                    <div className="d-flex justify-content-center fs-2 gap-4">
                      <a className="text-gradient" href="#!">
                        <i className="bi bi-twitter"><span><FaTwitter /></span></i>
                      </a>
                      <a className="text-gradient" href="#!">
                        <i className="bi bi-linkedin"><span><FaSquareFacebook /></span></i>
                      </a>
                      <a className="text-gradient" href="#!">
                        <i className="bi bi-github"><span><FaTwitter/></span></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer/>
        </main>
      </body>
    </>
  );
};

export default Home;
