import {

  FaInstagram,
  
  FaMusic,
  
  FaReadme,
  
  FaTelegram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

import { FaCableCar, FaRadio, FaSquareFacebook } from "react-icons/fa6";

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
                   

                    
                    <h1 className="display-5 fw-bolder mb-5">
                      <span className="text-gradient d-inline">
                        Hi, I'm <span className="text-danger">Emmy.</span> i design & build website and mobile app.
                      </span>
                    </h1>
                    <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-2">
                      <Link to="/resumed">
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
                        src="image/johnny.PNG"
                        alt="..."
                        width={260}
                        height={200}
                        style={{ objectFit: "cover" }}
                      />
                      <h3> <b> IDOKO EMMANUEL</b></h3>
                      <label className="text-danger">Lagos, Nigeria</label>
                      <p>Software Developer</p>

                      <div className="d-flex justify-content-center fs-2 gap-4">
                      <a className="text-gradient" href="#!">
                        <i className="bi bi-twitter">
                          <span>
                            <FaTwitter />
                          </span>
                        </i>
                      </a>
                      <a className="text-gradient" href="#!">
                        <i className="bi bi-linkedin">
                          <span>
                            <FaSquareFacebook />
                          </span>
                        </i>
                      </a>
                      <a className="text-gradient" href="#!">
                        <i className="bi bi-github">
                          <span>
                            <FaTelegram />
                          </span>
                        </i>
                      </a>
                      <a className="text-gradient" href="#!">
                        <i className="bi bi-github">
                          <span>
                            <FaInstagram />
                          </span>
                        </i>
                      </a>
                      
                      <a className="text-gradient" href="#!">
                        <i className="bi bi-github">
                          <span>
                            <FaWhatsapp />
                          </span>
                        </i>
                      </a>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <section className="bg-light ">
            <div className="container px-3">
              <div className="row gx-5 justify-content-center">
                <div className="col-xxl-8">
                  <div className="text-center my-3">
                    <h2 className="display-5 fw-bolder">
                      <span className="text-gradient d-inline bg-danger text-white p-2 ">About Me</span>
                    </h2>
                  
                    <p className="text-muted">
        
                      I'm a front end
                      developer with two years of experience in web
                      development. I've worked on different variety of projects for
                      clients.
                      I'm passionate about creating great user experiences and
                      have a strong understanding of usability and accessibility
                      standards.
                      I'm always looking for new opportunities to learn and grow. If you have any questions
                       or just want to say hi, feel free to reach out. is my plessure to here from you!

                      Thanks for stopping by!
                    </p>
                   
                  </div>

                  
                </div>
              </div>
            </div>
          </section>
            
            <div className="row gx-5 justify-content-center">
            <div className="col-lg-11 col-xl-9 col-xxl-8">
              
          <div className="card shadow border-0 rounded-4 mb-5 ">
                  <div className="card-body p-5">
                    <div className="row align-items-center gx-5">
                    <h4 className="text-danger">SkILL</h4>
                            <label className="muted">related to software development.</label>
                            
                      <div className="col text-center text-lg-start mb-4 mb-lg-0">
                        <div className="bg-light p-4 rounded-4">
                          <div className="">
                            
                           
                            <button className=" btn btn-info rounded-circle  m-2 text-white">HTML</button>
                            <button className=" btn btn-danger rounded-circle m-2">CSS</button>
                            <button className=" btn btn-success rounded-circle m-2">REACT</button>
                            <button className="btn btn-warning rounded-circle m-2 text-white">TYPESCRIPT</button>
                            <button  className="btn btn-primary rounded-circle m-2">JAVASCRIPT</button>
                            <button className="btn btn-danger rounded-circle m-2">BOOTSTRAP</button>
                            
                            </div>
                            </div>
                            </div>
                            </div>
                            </div>
                          </div>
                          </div>
                          <div className="col-lg-11 col-xl-9 col-xxl-8">
              
                          <div className="card shadow border-0 rounded-4 mb-5 ">
                  <div className="card-body p-5">
                    <h5 className="text-danger">INTEREST</h5>
                    <p>a few things i occupy myself with..</p>
                    <div className="row align-items-center gx-5">
                      <div className="col text-center text-lg-start mb-4 mb-lg-0">
                        <div className="bg-light p-4 rounded-4">
                          <div className="text-secondary fw-bolder mb-2">
                            <button className="btn btn-primary m-2 rounded-circle"><span><FaMusic/></span> Music</button>
                            <button className="btn btn-danger m-2 rounded-circle"><span><FaCableCar/></span> Travlling</button>
                            <button className="btn btn-success m-2 rounded-circle"><FaReadme/> Reading</button>
                            <button className="btn btn-warning m-2 rounded-circle text-white"><span><FaRadio/> Writing </span></button>
                           
              
                            </div>
                            
                            </div>
                            </div>
                            </div>
                            </div>
                            
                          </div>
                          
                          <div className="d-flex justify-content-between">
              <a href="https://github.com/EmmyScript" target="_blank" className="btn btn-secondary text-white">
                Github
              </a>
              
             <Link to ="/contact">
              <h3 className="btn btn-secondary">Contact me</h3>
             </Link>
                          </div>
                          
                          </div>
                          </div>
              
              
          
        </main>
      </body>
    </>
  );
};

export default Home;
