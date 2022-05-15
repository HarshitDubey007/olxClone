import React from "react";
import { useLocation } from "react-router-dom";

function ProductDetail() {
  const location = useLocation();
  console.log("location", location)
  return (
    <>
      <div className="container">
        <div className="my-3">
          Product details: {location.state.car.toUpperCase()}
        </div>
        <div
          className="row my-3"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className=" card col-lg-6 col-sm-12 border-0">
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
          </div>
          <div className="col-lg-6 col-sm-12">
            <h3>TATA HUNDAI</h3>
            <div className="px-5">
              <h5>Description</h5>
              <div className="px-5">
                <h6>Accidental: No</h6>
                <h6>Adjustable External Mirror: Power</h6>
                <h6>Adjustable Steering: Yes</h6>
                <h6>Air Conditioning: Automatic Climate Control</h6>
                <h6>Anti Theft Device: Yes </h6>
                <h6>Aux Compatibility: Yes</h6>
                <h6>Bluetooth: Yes</h6>
                <h6>Color: White</h6>
                <h6>Cruise Control: Yes</h6>
                <h6>Insurance Type: Comprehensive</h6>
                <h6>Lock System: Remote Controlled Central</h6>
                <h6>Make Month: May</h6>
                <h6>Power steering: Yes</h6>
                <h6>Power Windows: Front & rear</h6>
                <h6>AM/FM Radio: Yes</h6>
                <h6>Registration Place: MH</h6>
                <h6>Exchange: Yes</h6>
                <h6>Finance: Yes</h6>
                <h6>Service History: Available</h6>
                <h6>USB Compatibility: Yes</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
