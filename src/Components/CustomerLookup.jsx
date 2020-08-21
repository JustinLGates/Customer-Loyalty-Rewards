import React, { useState } from "react";
import { api } from "../axios";

const CustomerLookUp = () => {
  const [customers, setcustomers] = useState([
    { id: 0, Name: "Justin", PhoneNumber: "2086954231" },
    { id: 1, Name: "Steve", PhoneNumber: "208123456" },
  ]);
  const [phoneNumberQuery, setPhoneNumberQuery] = useState("");

  const updatePhoneNumberQeury = (event) => {
    setPhoneNumberQuery(event.target.value);
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
    <div className="col-6">
      <div className="p-2 m-2 text-center  box">
        <h2 className="text-dark">Customer Lookup</h2>
        <input
          className=" p-1 m-2"
          type="text"
          placeholder="phone number"
          value={phoneNumberQuery}
          onChange={updatePhoneNumberQeury}
        />
        <div className="text-left ">
          <h4 className=""> Customers</h4>
          <div className="box customer-list">
            <div className="customer-list p-2 ">
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
