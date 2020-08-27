import React, { useState } from "react";
import { api } from "../axios";
import CustomerModal from "./CustomerModal";

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
  const [customers, setcustomers] = useState([]);

  const [phoneNumberQuery, setPhoneNumberQuery] = useState("");

  const [selectedCustomer, setSelectedCustomer] = useState({
    name: "",
    phone: "",
    points: "",
  });
  const [nameFeild, setnameFeild] = useState("");
  const [nameFeildVisable, setnameFeildVisable] = useState(false);

  // function HandlesetSelectedCustomer(name, phone) {
  //   setSelectedCustomer({ name: name, phone: phone });
  // }

  const removeLastDidget = () => {
    phoneNumber = phoneNumber.slice(0, phoneNumber.length - 1);
    setPhoneNumberQuery(phoneNumber);
    GetCustomers();
  };
  const addToNumber = (event) => {
    phoneNumber += event.target.value;
    setPhoneNumberQuery(phoneNumber);
    GetCustomers();
  };
  const ClearNumber = () => {
    phoneNumber = "";
    setPhoneNumberQuery(phoneNumber);
    GetCustomers();
  };

  async function GetCustomers() {
    try {
      let res = await api.post("customers/get", {
        PhoneNumber: phoneNumberQuery,
      }); //NOTE this is actually a get request!!
      console.log(JSON.stringify(res.data));
      setcustomers(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  }
  const handleNameFeild = (event) => {
    setnameFeild(event.target.value);
  };
  const handleNameFeildVisable = () => {
    setnameFeildVisable(!nameFeildVisable);
  };

  async function handleCreateCustomer() {
    console.log("posting....");
    let data = {
      Phonenumber: phoneNumberQuery,
      Name: nameFeild,
    };
    try {
      let res = await api.post("customers/add", data);
      console.log(res.data);
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

        <div className="d-flex flex-column align-items-center justify-content-center">
          <div>
            <input
              className="p-2 m-2"
              value={formatPhoneNumber(phoneNumberQuery) || "phone number"}
            />
            <button
              className="btn btn-success m-2 p-2"
              onClick={handleNameFeildVisable}
            >
              New
            </button>
          </div>

          {nameFeildVisable ? (
            <div>
              <input
                className=" p-2 m-2"
                value={nameFeild}
                placeholder="Customer name"
                type="text"
                onChange={handleNameFeild}
              />{" "}
              {nameFeild.length >= 2 && phoneNumberQuery.length >= 10 ? (
                <button
                  className="btn btn-success"
                  onClick={handleCreateCustomer}
                >
                  Submit
                </button>
              ) : (
                <span></span>
              )}
            </div>
          ) : (
            <span></span>
          )}
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
                      onClick={() =>
                        setSelectedCustomer({
                          name: customer.name,
                          phone: formatPhoneNumber(customer.phoneNumber),
                          points: customer.points,
                        })
                      }
                      // @ts-ignore
                      type="button"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      {customer.key % 2 == 0 ? (
                        <div className="bg-secondary"></div>
                      ) : (
                        <div className="bg-secondary"></div>
                      )}
                      <div className="col bg-dark">
                        <h6>{customer.name}</h6>
                      </div>
                      <div className="col">
                        <h6>{formatPhoneNumber(customer.phoneNumber)}</h6>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="row">
                  <div className="col-12">
                    <span></span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <CustomerModal customer={selectedCustomer} />
        </div>
      </div>
    </div>
  );
};

export default CustomerLookUp;
