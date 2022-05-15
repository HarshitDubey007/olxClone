import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { logout } from "./redux/user";
import api from "./utils/api";

//const [islogin, setislogin] = useState(false);

function Createuser() {
  // const auth = localStorage.getItem("xceltrip_user");
  // const authentication = JSON.parse(auth);
  const [data, setData] = useState([]);
  const [currency, setCurrency] = useState(["₹"]);
  const navigate = useNavigate();
  useEffect(() => {
    const sell = api.get(`/getsell`).then((data) => {
      console.log("daa", data);
      setData(data?.data?.Buy);
    });
  }, [""]);

  return (
    <>
      <div className="m-3">
        <div className="container">
          <div className="h-3">
            Category:
            <span className="px-2" style={{ fontWeight: "bold" }}>
              {/* Cars */}
            </span>
          </div>
          <div
            className="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            {data.map((data) => (
              <div
                className="card col-md-3 m-2 px-2"
                style={{ width: "18rem", cursor: "pointer" }}
                onClick={() =>
                  navigate("/productdetail", { state: { car: "sdfsf" } })
                }
              >
                <div
                  className="my-2"
                  style={{ minHeight: "190px", background: "rgba(0,0,0,0.09)" }}
                >
                  <img
                    className="card-img-top"
                    src="https://apollo-singapore.akamaized.net/v1/files/i149au2olvcc2-IN/image;s=300x600;q=60"
                    alt="Card image cap"
                  />
                </div>
                <div className="card-body p-0 m-0 py-2">
                  <h5>
                    {currency + " "}
                    {data.amount}
                  </h5>
                  <h6>
                    {data.brand} {data.name}
                  </h6>
                  <span>{data.discription}</span>
                  <span>{data.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Createuser;
