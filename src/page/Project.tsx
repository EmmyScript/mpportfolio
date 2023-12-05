import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div className="container-fluid project d-flex flex-column h-100 bg-light flex-wrap-wrap">
      <section className="py-5">
        <div className="container px-5 mb-5">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bolder mb-0">
              <span className="text-gradient d-inline">Projects</span>
            </h1>
          </div>

          <div className="row   justify-content-between ">
            <div className=" col-md-3 card overflow-hidden shadow rounded-4 border-0 mb-3 ">
              <div className="card-body p-0">
                <div className="d-flex align-items-center">
                  <div className="p-5">
                    <h2 className="fw-bolder">Todo-List</h2>
                    <p>
                      A to do list allows you to prioritize the tasks that are
                      more important. This means you don't waste time on tasks
                      that don't require your immediate attention. Your list
                      will help you stay focused on the tasks that are the most
                      important.
                    </p>
                    <a
                      href="https://emmy-todo.netlify.app"
                      target="_blank"
                      className="btn btn-primary"
                    >
                      Todo app
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className=" col-md-3 card overflow-hidden shadow rounded-4 border-0 mb-3">
              <div className="card-body p-0">
                <div className="d-flex align-items-center">
                  <div className="p-5">
                    <h2 className="fw-bolder">Modern Note-Taking</h2>
                    <p>
                      Their core purpose: notes apps help make the process of
                      jotting down thoughts or information easier and more
                      straightforward. the following are the capabilities of
                      this note-taking app. The ability to create and store text
                      and tags. Synchronization of different tags across single
                      page. ability to Search title and tags for efficient
                      organization. Cross-page accessibility.
                    </p>

                    <a
                      href="https://idokocreatenoteapp.netlify.app"
                      target="_blank"
                      className="btn btn-primary text-white"
                    >
                      note-taking
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className=" col-md-3 card overflow-hidden shadow rounded-4 border-0 mb-3">
              <div className="card-body p-0">
                <div className="d-flex align-items-center">
                  <div className="p-5">
                    <h2 className="fw-bolder">E-commerce Shopping Cart</h2>
                    <p>
                      A shopping cart is an online retailer's site is a piece of
                      software that facilitates the purchase of a product or
                      service. It accepts the customer's payment and organizes
                      the distribution of that information to the merchant
                    </p>
                    <a
                      href="https://userexprience.netlify.app"
                      target="_blank"
                      className="btn btn-primary"
                    >
                      Shopping-Cart
                    </a>
                  </div>
                </div>
              </div>

              
            </div>

           
            <div className=" col-md-3 card overflow-hidden shadow rounded-4 border-0 mb-3">
              <div className="card-body p-0">
                <div className="d-flex align-items-center">
                  <div className="p-5">
                    <h2 className="fw-bolder">
                      ITEMS PACKED 
                    </h2>

                    <p>
                     A packing list is used to identify
                      the packages being shipped with the help of coding and
                      details of the packages' weight, volume or number of
                      packages. It is an indispensable tool for ensuring the
                      packages are conform with the order placed when the seller
                      is preparing the invoice and the buyer checked-out items packed.
                      while the currency converter convert from selected currency to other currency.
                    </p>
                    <a
                      href="https://emmyidos.netlify.app"
                      target="_blank"
                      className="btn btn-primary"
                    >
                      Packing-list
                    </a>
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

      <footer className="bg-white py-4 mt-auto">
        <div className="container px-5">
          <div className="row align-items-center justify-content-between flex-column flex-sm-row">
            <div className="col-auto">
              
            </div>
            <div className="col-md-6">
              
              
              <a href="https://github.com/EmmyScript" target="_blank" className="btn btn-secondary text-white">
                Github
              </a>
             
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Project;
