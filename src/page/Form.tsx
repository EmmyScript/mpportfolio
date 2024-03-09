import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();
  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <div className="d-flex-column">
      <section className="py-5">
        <div className="container px-5">
          <div className="bg-light rounded-4 py-5 px-4 px-md-5">
            <div className="text-center mb-5">
              <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3">
                
              </div>
              <h1 className="fw-bolder">Get in touch</h1>
              <p className="lead fw-normal text-muted mb-0">
                Let's work together!
              </p>
            </div>
            <div className="row gx-5 justify-content-center">
              <div className="col-lg-8 col-xl-6">
                <form
                  className="form-control"
                  onSubmit={onSubmit}
                  target="_blank"
                  method="POST"
                  action="https//myemail"
                >
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="FULL-NAME"
                    {...register("name", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                  {errors.name && (
                    <p className="mt-1">
                      {errors.name.type === "required" && "this filed required"}
                      {errors.name.type === "maxLength" && "max chart is 100"}
                    </p>
                  )}
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="EMAIL"
                    {...register("email", {
                      required: true,
                      pattern: /^[a-zA-Z0-9]/i,
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1">
                      {errors.email.type === "required" &&
                        "this filed required"}
                      {errors.email.type === "pattern" && "invalid feild "}
                    </p>
                  )}

                  <input
                    type="tel"
                    className="form-control mb-3"
                    placeholder="PHONE NUMBER"
                    {...register("number", {
                      required: true,
                      maxLength:11
                    })}
                  />
                  {errors.number && (
                    <p className="mt-1">
                      {errors.number.type === "required" &&
                        "this filed required"}
                      {errors.number.type === "maxLength" && "max field 11 "}
                    </p>
                  )}

                  <textarea
                    
                    className="form-control mb-3"
                    rows={5}
                    cols={50}
                    placeholder="MESSAGE"
                    
                    {...register("messsge", {
                      required: true,
                      maxLength: 3000,
                    })}
                  />
                  {errors.message && (
                    <p className="mt-1">
                      {errors.message.type === "required" && "this filed required"}
                      {errors.message.type === "maxLength" && "max chart is 300"}
                    </p>
                  )}
                  <button type="submit" className="btn btn-primary">
                    submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Form;
