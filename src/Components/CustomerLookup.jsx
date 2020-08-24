import React, { useState } from "react";
import { api } from "../axios";

let phoneNumber = "";
const CustomerLookUp = () => {
  const [customers, setcustomers] = useState([
    { id: 0, Name: "Justin", PhoneNumber: "2086954231" },
    { id: 1, Name: "Steve", PhoneNumber: "208123456" },
  ]);
  const [phoneNumberQuery, setPhoneNumberQuery] = useState("");

  const removeLastDidget = () => {
    phoneNumber = phoneNumber.slice(0, phoneNumber.length - 1);
    setPhoneNumberQuery(phoneNumber);
    makeRequest();
  };
  const addToNumber = (event) => {
    phoneNumber += event.target.value;
    setPhoneNumberQuery(phoneNumber);
    makeRequest();
  };
  const ClearNumber = () => {
    phoneNumber = "";
    setPhoneNumberQuery(phoneNumber);
    makeRequest();
  };

  async function makeRequest() {
    try {
      let res = await api.post("customers", phoneNumberQuery); //NOTE this is actually a get request!!
      console.log(JSON.stringify(res.data));
      setcustomers(res.data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="col-12 col-xl-6 p-2 px-md-4">
      <div
        className="p-2 m-2

 text-center box"
      >
        <h2 className="text-dark">Customer Lookup</h2>
        <div className="row d-flex justify-content-center">
          <div className="col-4 col-md-3">
            <button
              className="p-2 px-3 my-1 p-md-4 px-md-5  num-box btn btn-dark "
              value={1}
              onClick={addToNumber}
            >
              1
            </button>
          </div>
          <div className="col-4 col-md-3">
            <button
              className="p-2 px-3 my-1 p-md-4 text-large px-md-5 p-lg-5  num-box btn btn-dark "
              value={2}
              onClick={addToNumber}
            >
              2
            </button>
          </div>
          <div className="col-4 col-md-3">
            <button
              className="p-2 px-3 my-1 p-md-4 text-large px-md-5 p-lg-5  num-box btn btn-dark "
              value={3}
              onClick={addToNumber}
            >
              3
            </button>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-4 col-md-3">
            <button
              className="p-2 px-3 my-1 p-md-4 text-large px-md-5 p-lg-5  num-box btn btn-dark "
              value={4}
              onClick={addToNumber}
            >
              4
            </button>
          </div>
          <div className="col-4 col-md-3">
            <button
              className="p-2 px-3 my-1 p-md-4 text-large px-md-5 p-lg-5  num-box btn btn-dark "
              value={5}
              onClick={addToNumber}
            >
              5
            </button>
          </div>
          <div className="col-4 col-md-3">
            <button
              className="p-2 px-3 my-1 p-md-4 text-large px-md-5 p-lg-5  num-box btn btn-dark "
              value={6}
              onClick={addToNumber}
            >
              6
            </button>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-4 col-md-3">
            <button
              className="p-2 px-3 my-1 p-md-4 text-large px-md-5 p-lg-5  num-box btn btn-dark "
              value={7}
              onClick={addToNumber}
            >
              7
            </button>
          </div>
          <div className="col-4 col-md-3">
            <button
              className="p-2 px-3 my-1 p-md-4 text-large px-md-5 p-lg-5  num-box btn btn-dark "
              value={8}
              onClick={addToNumber}
            >
              8
            </button>
          </div>
          <div className="col-4 col-md-3">
            <button
              className="p-2 px-3 my-1 p-md-4 text-large px-md-5 p-lg-5  num-box btn btn-dark "
              value={9}
              onClick={addToNumber}
            >
              9
            </button>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-4 col-md-3">
            <button
              className="p-2 px-3 my-1 p-md-4 text-large px-md-5 p-lg-5  num-box btn btn-dark  "
              onClick={removeLastDidget}
            >
              <i className="fas fa-long-arrow-alt-left"></i>
            </button>
          </div>
          <div className="col-4 col-md-3">
            <button
              className="p-2 px-3 my-1 p-md-4 text-large px-md-5 p-lg-5  num-box btn btn-dark "
              value={0}
              onClick={addToNumber}
            >
              0
            </button>
          </div>
          <div className="col-4 col-md-3">
            <button
              className="p-2 px-3 my-1 p-md-4 text-large px-md-5 p-lg-5  num-box btn btn-dark "
              onClick={ClearNumber}
            >
              Clear
            </button>
          </div>
        </div>

        <div>
          <input className="p-2 my-2 w-100" value={phoneNumberQuery} />
        </div>
        <button className="btn btn-primary">Add new</button>
        <div className="text-left ">
          <h4 className=""> Customers</h4>
          <div className="box customer-list">
            <div className="customer-listp-2 px-3 my-1 p-md-4 text-large px-md-5 p-lg-5 ">
              <div className="row">
                <div className="col-4">
                  <label>Name</label>
                </div>
                <div className="col-4">
                  <label>Phone</label>
                </div>
                <div className="col-12">
                  <hr />
                </div>
              </div>
              {customers.map((customer, index) => {
                return (
                  <div
                    key={index}
                    className="row highlight"
                    onClick={() => console.log("clicked", index)}
                  >
                    <div className="col-4">
                      <label>{customer.Name}</label>
                    </div>
                    <div className="col-4">
                      <label>{customer.PhoneNumber}</label>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerLookUp;
