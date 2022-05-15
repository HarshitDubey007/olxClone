import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import api from '../utils/api';

export default function Dashbord() {
  const auth = localStorage.getItem("xceltrip_user");
  const authentication = JSON.parse(auth);
  const [data, setData] = useState([])
  useEffect(() => {
    const sell = api.get(`/getsell?user=${authentication.userInfo.user._id}`).then((data) => {
      console.log("daa", data)
      setData(data?.data?.Buy)
    });
  },[""])

  return (
    <>
      <div className="m-3">
        <div className="container">
          <h1 className="h-3">All Your Sell</h1>
          <div className='row'>
          {data.map((data) => (
              <div className="card col-md-3 m-2" style={{ width: "18rem" }}>
              {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
              <div className="card-body">
                <h4>{data.amount}</h4>
                <h5>{data.name}</h5>
                <span>{data.discription}</span>
                <span>{data.location}</span>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </>
  )
}
