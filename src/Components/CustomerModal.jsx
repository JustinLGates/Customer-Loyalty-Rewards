import React, { Component } from "react";

class CustomerModal extends Component {
  state = {};
  render() {
    return (
      <div className="modal fade" id="exampleModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className=" d-flex p-0 m-0 justify-content-between ">
              <div>
                <h4 className="m-0 px-2 pt-2">{this.props.customer.name}</h4>{" "}
                <br />
                <h4 className="m-0 px-2">{this.props.customer.phone}</h4>
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
                  className="p-2 m-2 w-100"
                  type="text"
                  placeholder={this.props.customer.name}
                />
                <br />
                <label className="p-0 m-0 px-2 mx-2">Phone number</label>
                <br />
                <input
                  className="p-2 m-2 w-100"
                  type="text"
                  placeholder={this.props.customer.phone}
                />
              </div>
              <div className="col-6 p-0 m-auto d-flex flex-column justify-content-center align-items-center">
                <div>
                  <h4 className="p-2">Points</h4>
                  <br />
                </div>
                <div>
                  <h3 className="p-2 m-2 w-100">
                    {this.props.customer.points || "0"}
                  </h3>
                </div>
              </div>
              <div>
                <button className="btn btn-primary">Add Punch</button>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-success">
                Save changes
              </button>
              <button
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
  }
}
export default CustomerModal;
