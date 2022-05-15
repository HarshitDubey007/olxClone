import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getFormData } from '../helpers/helper';
import api from '../utils/api';

function Sell() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function sellProduct(e) {
    e.preventDefault();
    //e.target.onSubmit(recaptchaValue);
    const auth = localStorage.getItem("xceltrip_user");
    const authentication = JSON.parse(auth);
    console.log("authentication", authentication.userInfo.token)

    const formData = getFormData(e.target);
    const sell = api.post("/sell", formData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + authentication.userInfo.token
      }
    });
    toast
      .promise(sell, {
        loading: "Loading",
        success: (data) => {
          return `Your order will be live.`;
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
        navigate("../dashboard", { replace: true });
      });

  }
  return (
    <>
      <div className="bg-soft">
        <section className="vh-lg-100 d-flex align-items-center">
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
                <div className="signin-inner my-3 my-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                  <div className="text-center text-md-center mb-4 mt-md-0">
                    <h1 className="mb-0 h3">Sell Your Items</h1>
                  </div>
                  <form
                    className="mt-4"
                    onSubmit={(e) => {
                      sellProduct(e);
                    }}
                  >
                    <div className="form-group mb-4">
                      <label for="email">Categroy</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="example@company.com"
                          id="categroy"
                          name="categroy"
                          autofocus
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group mb-4">
                      <label for="email">Brand</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="example@company.com"
                          id="brand"
                          name="brand"
                          autofocus
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group mb-4">
                      <label for="email">Product Name</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="example@company.com"
                          id="name"
                          name="name"
                          autofocus
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group mb-4">
                      <label for="email">Price</label>
                      <div className="input-group">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="example@company.com"
                          id="amount"
                          name="amount"
                          autofocus
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group mb-4">
                      <label for="email">Discription</label>
                      <div className="input-group">
                        <input
                          type="text-aria"
                          className="form-control"
                          placeholder="example@company.com"
                          id="discription"
                          name="discription"
                          autofocus
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="form-group mb-4">
                        <label for="password">location</label>
                        <div className="input-group">
                          <input
                            type="text"
                            placeholder="location"
                            className="form-control"
                            id="location"
                            name="location"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="form-group mb-4">
                        <label for="contact">Contact</label>
                        <div className="input-group">
                          <input
                            type="text"
                            placeholder="contact"
                            className="form-control"
                            id="contact"
                            name="contact"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-block btn-primary">
                      Sell
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Sell