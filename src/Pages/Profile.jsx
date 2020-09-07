import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import CustomerLookUp from "../Components/CustomerLookup";

const Profile = () => {
  // async function makeRequest() {
  //   try {
  //     let res = await api.get("customers"); // pass phone number......
  //     console.log(JSON.stringify(res.data));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  const { isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-12">
            {/* <div className="p-2 m-2">
              <img className="profileImg" src={user.picture} alt={user.name} />
              <h2>{user.nickname}</h2>
              <p>{user.email}</p>
            </div> */}
            {/* <button className="btn btn-dark" onClick={makeRequest}>
              Make api request
            </button> */}
          </div>
          <CustomerLookUp />
        </div>
      </div>
    )
  );
};

export default Profile;
