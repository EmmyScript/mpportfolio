import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="d-flex flex-column">

          <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
            <div className="container px-5">
              
                <img src="./image/johnny.PNG" alt="./image/johnny.png" className="rounded-circle" width={100} height={100}/>
              
              
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="  navs navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                  
                  <li className="nav-item">
                  <Link to= "/">
                    <a className="nav-link" href="index.html">
                      Homes
                    </a>
                    </Link>
                  </li>
                  
                 

                  
                  <li className="nav-item">
                  <Link to ="resumed" >
                    <a className="nav-link" href="resume.html">
                      Resume
                    </a>
                    </Link>
                  </li>
                  
                 
                  <li className="nav-item">
                  <Link to="project">
                    <a className="nav-link" href="projects.html">
                      Projects
                    </a>
                    </Link>
                  </li>
                  
                  
                  <li className="nav-item">
                  <Link to= "contact">
                    <a className="nav-link" href="contact.html">
                      Contact
                    </a>
                    </Link>
                  </li>
                  
                </ul>
              </div>
            </div>
          </nav>

          
        

       
      </div>
    </>
  );
};

export default Navbar;
