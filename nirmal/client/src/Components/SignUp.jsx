import { createRef, useEffect, useState } from "react";
// import ReCAPTCHA from "react-google-recaptcha";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getFormData } from "../helpers/helper";
import api from "../utils/api";

export default function SignUp() {
  const [isSignupSuccessful, setIsSignupSuccessful] = useState();

  function registerUser(e) {
    e.preventDefault();
    const formData = getFormData(e.target);
    const signupRes = api.post("/signup", formData);

    toast
      .promise(signupRes, {
        loading: "Registration in progress...",
        success: (data) => {
          console.log(data);
          setIsSignupSuccessful({ ...data.data.data });
          return `Congratulations, you have successfully registered.`;
        },
        error: (err) => {
          return (
            err?.response?.data?.errors ??
            err?.response?.data?.message ??
            err?.message ??
            "OOPs something went wrong."
          );
        },
      })
      .then((data) => {
        e.target.reset();
      });
  }

  return (
    <>
      <div className="container-fluid p-0 m-0" style={{background:"#85c3a9"}}>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 py-3 px-0 m-0">
            <section className="vh-lg-100 d-flex align-items-center">
              {isSignupSuccessful ? (
                <div className="container col-md-6">
                  <h1 className="font-righteous">Congratulations,</h1>
                  <h4 className=" font-righteous">
                    You have successfully registered. Your login credentials
                    are.
                  </h4>
                  <hr />
                  <div className="d-flex">
                    <div className="fw-bold" style={{ minWidth: "200px" }}>
                      Member ID :{" "}
                    </div>
                    <div>{isSignupSuccessful?.member_id}</div>
                  </div>
                  <div className="d-flex">
                    <div className="fw-bold" style={{ minWidth: "200px" }}>
                      Email Address :{" "}
                    </div>
                    <div>{isSignupSuccessful?.email}</div>
                  </div>
                  <div className="d-flex">
                    <div className="fw-bold" style={{ minWidth: "200px" }}>
                      Password :{" "}
                    </div>
                    <div>{isSignupSuccessful?.password}</div>
                  </div>
                  <div className="d-flex">
                    <div className="fw-bold" style={{ minWidth: "200px" }}>
                      Transaction Password :{" "}
                    </div>
                    <div>{isSignupSuccessful?.txn_password}</div>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-end">
                    <div>
                      <Link
                        to="/signup"
                        className="btn yamgo-blue darken-3 me-3 rounded shadow-sm py-3 px-5 fw-bold"
                        onClick={(e) => {
                          setIsSignupSuccessful(null);
                        }}
                      >
                        SIGN UP
                      </Link>

                      <Link
                        to="/signin"
                        className="btn orange rounded shadow-sm py-3 px-5 fw-bold"
                      >
                        SIGN IN
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="container">
                  <div
                    className="row justify-content-center form-bg-image"
                    //data-background-lg="/theme_files/assets/img/illustrations/signin.svg"
                    style={{
                      backgroundImage:
                        "url(/theme_files/assets/img/illustrations/signin.svg)",
                    }}
                  >
                    <div className="col-12 d-flex align-items-center justify-content-center">
                      <div className="signin-inner mnpregcard my-3 my-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                        <div className="text-center text-md-center mb-2 mt-md-0">
                          <h1 className="mb-0 h3 text-light">Create an account</h1>
                        </div>
                        <form
                          onSubmit={(e) => {
                            registerUser(e);
                          }}
                        >
                          {/* <div className="form-group mb-2">
                    <label for="sponsor_id">Sponsor ID</label>
                    <div className="input-group">
                      <span className="input-group-text" id="basic-addon3">
                        <span className="fas fa-user"></span>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Sponsor ID"
                        id="sponsor_id"
                        name="sponsor_id"
                        defaultValue={referrer}
                        autofocus
                        required
                        onBlur={(e) => {
                          verifyMemberID(e.target.value);
                        }}
                      />
                    </div>
                    {isMemberVerified && (
                      <div
                        className="fw-bold text-success"
                        style={{ fontSize: "12px" }}
                      >
                        Member Name :{" "}
                        {isMemberVerified?.full_name ?? "Name not available"}
                      </div>
                    )}
                  </div> */}

                          <div className="form-group mb-2 text-warning">
                            <label for="fullname">Full Name</label>
                            <div className="input-group">
                              
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Full Name"
                                id="name"
                                name="name"
                                autofocus
                                required
                              />
                            </div>
                          </div>

                          <div className="form-group mb-2 text-warning">
                            <label for="email">Email ID</label>
                            <div className="input-group">
                         
                              <input
                                type="email"
                                className="form-control"
                                placeholder="example@company.com"
                                id="email"
                                name="email"
                                autofocus
                                required
                              />
                            </div>
                          </div>

                          <div className="form-group mb-2 text-warning">
                            <label for="mobile">Phone Number</label>
                            <div className="input-group">
                            
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Phone Number"
                                id="mobile"
                                name="mobile"
                                autofocus
                                required
                              />
                            </div>
                          </div>

                          <div className="form-group text-warning">
                            {/* Password ConfirmPassword */}
                            <div className="form-group mb-2">
                              <label for="password">Your Password</label>
                              <div className="input-group">
                              
                                <input
                                  type="password"
                                  placeholder="Password"
                                  className="form-control"
                                  id="password"
                                  name="password"
                                  required
                                />
                              </div>
                            </div>

                            <div className="form-group mb-2">
                              <label for="confirm_password">
                                Confirm Password
                              </label>
                              <div className="input-group">
                               
                                <input
                                  type="password"
                                  placeholder="Confirm Password"
                                  className="form-control"
                                  id="confirm_password"
                                  name="confirm_password"
                                  required
                                />
                              </div>
                            </div>
                            <div className="form-check mb-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="terms"
                                required
                              />
                              <label className="form-check-label" for="terms">
                                I agree to the{" "}
                                <Link to="">terms and conditions</Link>
                              </label>
                            </div>
                          </div>

                          <button
                            type="submit"
                            className="btn btn-block btn-warning text-dark"
                          >
                            Sign Up
                          </button>
                        </form>
                        <div className="d-flex justify-content-center align-items-center mt-4">
                          <span className="font-weight-normal">
                            Already have an account?
                            <Link to="/signin" className="font-weight-bold">
                              Login here
                            </Link>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 p-0 m-0">
            <img
              src="https://business.adobe.com/blog/how-to/media_1a875d1a5e81e7fe4b1d700803fd33681b2ce1f05.png?width=750&format=png&optimize=medium"
              style={{
                height: "100%",
                width: "100%",
                backgroundSize: "contain",
              }}
              className="p-0 m-0"
            />
          </div>
        </div>
      </div>
    </>
  );
}
