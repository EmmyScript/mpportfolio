import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div className=" project d-flex flex-column h-100 bg-light">
      <main className="flex-shrink-0">
        <section className="py-5">
          <div className="container px-5 mb-5">
            <div className="text-center mb-5">
              <h1 className="display-5 fw-bolder mb-0">
                <span className="text-gradient d-inline">Projects</span>
              </h1>
            </div>
            <div className="row gx-5 justify-content-center">
              <div className="col-lg-11 col-xl-9 col-xxl-8">
                <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                  <div className="card-body p-0">
                    <div className="d-flex align-items-center">
                      <div className="p-5">
                        <h2 className="fw-bolder">Project Name 1: Todo-List</h2>
                        <p>
                           
                          A to do list allows you to prioritize the tasks that
                          are more important. This means you don't waste time on
                          tasks that don't require your immediate attention.
                          Your list will help you stay focused on the tasks that
                          are the most important.
                        </p>
                     
                      </div>
                      <img
                        className="img-fluid"
                        src="./image/todo.jpg"
                        alt="..."
                        width={50}
                      />
                          <button className="btn btn-primary">https://emmy-todo.netlify.app</button>
                    </div>
                  </div>
                </div>

                <div className="card overflow-hidden shadow rounded-4 border-0">
                  <div className="card-body p-0">
                    <div className="d-flex align-items-center">
                      <div className="p-5">
                        <h2 className="fw-bolder">Project Name 2:Modern Note-Taking</h2>
                        <p>
                        Their core purpose: notes apps help make the process of
                         jotting down thoughts or information easier and more straightforward.
                      the following are the capabilities of this note-taking app.
                      The ability to create and store text and tags.
                    Synchronization of different tags across single page.
                    ability to Search title and tags for efficient organization.
                    Cross-page accessibility.
                        </p>
                       
                      </div>
                      <img
                        className="img-fluid"
                        src="./image/note.jpg"
                        alt="..."
                        width={50}
                      />
                       <button className="btn btn-primary">https://idokocreatenoteapp.netlify.app</button> 
                    </div>
                  </div>
                </div>

                
                <div className="card overflow-hidden shadow rounded-4 border-0 mt-5">
                  <div className="card-body p-0">
                    <div className="d-flex align-items-center">
                      <div className="p-5">
                        <h2 className="fw-bolder">Project Name 3:E-commerce Shopping Cart</h2>
                        <p>
                        A shopping cart is an online retailer's site is a piece of software that facilitates
                         the purchase of a product or service. 
                        It accepts the customer's payment and organizes the distribution of that information to the merchant
                        </p>
                        
                      </div>
                      <img
                        className="img-fluid"
                        src="./image/shop.jpg"
                        alt="..."
                        width={50}
                      />
                       <button className="btn btn-primary">https://userexprience.netlify.app</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5 bg-primary text-white">
          <div className="container px-5 my-5">
            <div className="text-center">
              <h2 className="display-4 fw-bolder mb-4">
                Let's build something together
              </h2>
              <Link to="/contact">
                <a
                  className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder"
                  href="contact.html"
                >
                  Contact me
                </a>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white py-4 mt-auto">
        <div className="container px-5">
          <div className="row align-items-center justify-content-between flex-column flex-sm-row">
            <div className="col-auto">
              <div className="small m-0">
                Copyright &copy; Your Website 2023
              </div>
            </div>
            <div className="col-auto">
              <a className="small" href="#!">
                Privacy
              </a>
              <span className="mx-1">&middot;</span>
              <a className="small" href="#!">
                Terms
              </a>
              <span className="mx-1">&middot;</span>
              <a className="small" href="#!">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Project;
