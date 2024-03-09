import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div className="container-fluid">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bolder mb-0">
          <span className="text-gradient text-danger">Projects</span>
        </h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body p-3">
                <h3 className="fw-bold text-capitalize">Shopping-Cart</h3>
                <p>
                  It facilitates the transaction between a buyer and seller. the
                  customers make selections and paid form the items order.
                </p>
                <a
                  href="https://redirectshop.netlify.app"
                  target="_blank"
                  className="btn btn-primary mt-2"
                >
                  AddtoCart
                </a>
              </div>
            </div>
          </div>

          <div className=" col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body p-3">
                <h2 className="fw-bolder">Todo-List</h2>
                <p>
                  It's used to keep track of tasks that need to be completed.
                  and manage their time effectively, and stay focused on their
                  goals.
                </p>
                <a
                  href="https://emmy-todo.netlify.app"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Todo-List
                </a>
              </div>
            </div>
          </div>

          <div className=" col-md-4 mb-3 ">
            <div className="card h-100">
              <div className="card-body p-3 ">
                <h2 className="fw-bolder"> Note-Taking</h2>
                <p>
                  is a modern way to capture, organize and jotting. These apps
                  often include features such as title and tags which has{" "}
                  <span className="text-danger fw-bolder">Searching</span>{" "}
                  functionality.
                </p>

                <a
                  href="https://idokocreatenoteapp.netlify.app"
                  target="_blank"
                  className="btn btn-primary text-white mb-5 "
                >
                  note-taking
                </a>
              </div>
            </div>
          </div>

          <div className=" col-md-4 mb-3 ">
            <div className="card h-100">
              <div className="card-body p-3">
                <div className="d-flex a">
                  <div className="p-1">
                    <h2 className="fw-bolder">Shopping Cart</h2>
                    <p>
                      is an online retailer's site with a piece of software that
                      facilitates the purchase of a product or service.
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
          </div>
          <div className=" col-md-4 mb-3 ">
            <div className="card h-100">
              <div className="card-body p-3">
                <div className="d-flex align-items-center">
                  <div className="p-1">
                    <h2 className="fw-bolder">ITEMS PACKED</h2>

                    <p>
                      A packing list is used to identify the packages being
                      shipped with the help of coding and details of the
                      packages.
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
          <div className="col-md-4 mb-3 ">
            <div className="card h-100">
              <div className="card-body p-3">
                <h3 className="fw-bolder">GAMES APP</h3>
                <p>
                  static view of all type of games. with the following features
                  search, sortby genres.
                </p>
                <a
                  href="https://taleted-game.netlify.app"
                  target="_blank"
                  className="btn btn-primary"
                >
                  game app
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3 ">
            <div className="card h-100">
              <div className="card-body p-3">
                <h3 className="fw-bolder">Split Bill</h3>
                <p>
                  it help you to keep track of your shared expenses. by creating
                  group with friend. The bill sharing app automatically
                  calculates everyone share and distributes the expenses
                  accordingly.
                </p>
                <a
                  href="https://spilitbill.netlify.app"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Split-Bill
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3 ">
            <div className="card h-100">
              <div className="card-body p-3">
                <h3 className="fw-bolder">E-commerce pizza-items</h3>
                <p>
                  static view of pizza list and with logic of disabled sold-out{" "}
                </p>
                <a
                  href="https://ecommercepizza.netlify.app"
                  target="_blank"
                  className="btn btn-primary"
                >
                  pizza-item
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4  mb-3">
            <div className="card h-100">
              <div className="card-body p-3">
                <div className="p-1">
                  <h3 className="fw-bolder">Currency Converter</h3>
                  <p>
                    it help a user to convert money from one Currency to other
                    denomination
                  </p>
                  <a
                    href="https://dollarconv.netlify.app"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    Currency
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card h-100">
              <h4 className="fw-bolder">Global Weather APP</h4>
<div className="card-body p-3">
              <p>
                It's used to checked temperature, humidity, wind speed in
                lactions in the world, and they give precipitation levels, and
                more to keep you informed and safe of weather conditions.
              </p>
              <a href="https://wethader.netlify.app" target="_blank" className="btn btn-primary mb-5 justify-content-center">
                Check-weather
              </a>
            </div>
          </div>
          </div>

          <div className="col-md-4  mb-3">
            <div className="card h-100">
              <h3 className="fw-bolder">Pag-Error</h3>

              <div className="card-body p-3">
                <p>static view of pag errors message</p>
                <a
                  href="https://pag404.netlify.app"
                  target="_blank"
                  className="btn btn-primary  mb-5 justify-content-center"
                >
                  page-error
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-5 bg-primary text-white container-fluid">
        <div className="container px-5 my-5">
          <div className="text-center">
            <h2 className="display-4 fw-bolder mb-4">
              Am available at any time.
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
            <div className="col-auto"></div>
            <div className="col-md-6">
              <a
                href="https://github.com/EmmyScript"
                target="_blank"
                className="btn btn-danger text-white"
              >
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
