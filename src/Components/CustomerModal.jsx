import React, { useState } from "react";
import { api } from "../axios";
import { useSelector } from "react-redux";

import {
  setName,
  setPhone,
  selectCustomerPhone,
  selectCustomerName,
  selectCustomerPoints,
} from "../Components/Example/Slice";

const Api = api;
const CustomerModal = () => {
  const customerPhone = useSelector(selectCustomerPhone);
  const customerName = useSelector(selectCustomerName);
  const customerPoints = useSelector(selectCustomerPoints);

  const [customerphone, setcustomerphone] = useState("");
  const [customername, setcustomername] = useState("");

  const handelDeleteCustomer = async () => {
    const res = await Api.delete("customers/" + customerPhone);
    console.log(res.data);
  };

  const handleChange = (event) => {
    if (event.target.name === "NameChange") {
      setcustomername(event.target.value);
    }
    if (event.target.name === "PhoneChange") {
      setcustomerphone(event.target.value);
    }
  };

  const handelEditCustomerInfo = async () => {
    const data = {
      phone: customerphone,
      name: customername,
    };
    try {
      const res = await api.put("customers/" + customerPhone, data);
      api.get("customers/");
    } catch (error) {
      console.error(error);
    }
    setcustomerphone("");
    setcustomername("");
  };

  return (
    <div className="modal fade" id="exampleModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className=" d-flex p-0 m-0 justify-content-between ">
            <div>
              <h4 className="m-0 px-2 pt-2">{customerName}</h4> <br />
              <h4 className="m-0 px-2">{customerPhone}</h4>
            </div>
            <div className="align-self-start p-2 pr-3">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <hr className="" />
            </div>
          </div>
          <div className="modal-body row">
            <div className="col-6 p-0 m-auto">
              <label className="p-0 m-0 px-2 mx-2">Name</label> <br />
              <input
                value={customername}
                name="NameChange"
                onChange={handleChange}
                className="p-2 m-2 w-100"
                type="text"
                placeholder={customerName}
              />
              <br />
              <label className="p-0 m-0 px-2 mx-2">Phone number</label>
              <br />
              <input
                value={customerphone}
                name="PhoneChange"
                onChange={handleChange}
                className="p-2 m-2 w-100"
                type="text"
                placeholder={customerPhone}
              />
            </div>
            <div className="col-6 p-0 m-auto d-flex flex-column justify-content-center align-items-center">
              <div>
                <h4 className="p-2">Points</h4>
                <br />
              </div>
              <div>
                <h3 className="p-2 m-2 w-100">{customerPoints || "0"}</h3>
              </div>
            </div>
            <div>
              <button className="btn btn-primary">Add Punch</button>
            </div>
          </div>
          <div className="modal-footer">
            <button
              onClick={handelEditCustomerInfo}
              type="button"
              className="btn 
            btn-success"
            >
              Save changes
            </button>
            <button
              onClick={handelDeleteCustomer}
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerModal;
