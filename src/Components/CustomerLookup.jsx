import React, { useState } from "react";
import { api } from "../axios";

let phoneNumber = ""; //(123)123-3456
let formatPhoneNumber = (str) => {
  let num = "";
  for (let i = 0; i < str.length; i++) {
    if (i == 0 && str.length > 3 && str[0] !== "(") {
      num += "(";
    }
    if (i == 3 && str.length > 3 && str[4] != ")") {
      num += ")";
    }
    if (i == 6 && str[6] != "-" && str.length > 6) {
      num += "-";
    }
    num += str[i];
    if (num.length >= 16) {
      return num;
    }
  }
  return num;
};

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
          <div className="col-12 d-flex justify-content-center">
            <div className="num-box m-2">
              <button
                className="num-box btn btn-dark "
                value={1}
                onClick={addToNumber}
              >
                1
              </button>
            </div>
            <div className="num-box m-2">
              <button
                className="  text-large   num-box btn btn-dark "
                value={2}
                onClick={addToNumber}
              >
                2
              </button>
            </div>

            <div className="num-box m-2">
              <button
                className=" text-large num-box btn btn-dark "
                value={3}
                onClick={addToNumber}
              >
                3
              </button>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-12 d-flex justify-content-center">
            <div className="m-2">
              <button
                className=" text-large num-box btn btn-dark "
                value={4}
                onClick={addToNumber}
              >
                4
              </button>
            </div>

            <div className="m-2">
              <button
                className=" my-1 p-md-4 text-large   num-box btn btn-dark "
                value={5}
                onClick={addToNumber}
              >
                5
              </button>
            </div>
            <div className="m-2">
              <button
                className=" my-1 p-md-4 text-large   num-box btn btn-dark "
                value={6}
                onClick={addToNumber}
              >
                6
              </button>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-12  d-flex justify-content-center">
            <div className="m-2">
              <button
                className="text-large num-box btn btn-dark "
                value={7}
                onClick={addToNumber}
              >
                7
              </button>
            </div>
            <div className="m-2">
              <button
                className=" my-1 p-md-4 text-large   num-box btn btn-dark "
                value={8}
                onClick={addToNumber}
              >
                8
              </button>
            </div>
            <div className="m-2">
              <button
                className=" my-1 p-md-4 text-large   num-box btn btn-dark "
                value={9}
                onClick={addToNumber}
              >
                9
              </button>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-12 d-flex justify-content-center">
            <div className="m-2">
              <button
                className="text-large num-box btn btn-outline-secondary "
                onClick={removeLastDidget}
              >
                <i className="fas fa-long-arrow-alt-left"></i>
              </button>
            </div>
            <div className="m-2">
              <button
                className="text-large num-box btn btn-dark"
                value={0}
                onClick={addToNumber}
              >
                0
              </button>
            </div>
            <div className="m-2">
              <button
                className="text-large  num-box btn-outline-danger  btn "
                onClick={ClearNumber}
              >
                Clear
              </button>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-center">
          <input
            className="p-2 m-2"
            value={formatPhoneNumber(phoneNumberQuery)}
          />
          <button className="btn btn-success m-2 p-2">New</button>
        </div>
        <div className="text-left ">
          <h4 className=""> Customers</h4>
          <div className="box customer-list">
            <div className="customer-list my-1 p-md-4 text-large  ">
              {customers.length > 0 ? (
                <div className="row">
                  <div className="col-4">
                    <label>Name</label>
                  </div>
                  <div className="col-4">
                    <label>Phone</label>
                  </div>
                </div>
              ) : (
                <div>No account matches {formatPhoneNumber(phoneNumber)}</div>
              )}
              <div className="row">
                <div className="col-12">
                  <hr />
                </div>
              </div>
              {customers.length > 0 ? (
                customers.map((customer, index) => {
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
                })
              ) : (
                <div className="row">
                  <div className="col-12">
                    <label className="p-0 m-0" htmlFor="">
                      Name
                    </label>
                    <br />
                    <input type="text" placeholder="John doe" />
                  </div>
                  <br />
                  <div className="col-12 pt-3">
                    <label className="p-0 m-0">Phone number</label>
                    <div className="col-12">
                      <span className="border-bottom">
                        {phoneNumber.length > 0 ? (
                          <label className="text-dark">{phoneNumber}</label>
                        ) : (
                          <label className="text-secondary">
                            {"(123)456-7890"}
                          </label>
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="fa fa-plus btn btn-primary"></button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerLookUp;
