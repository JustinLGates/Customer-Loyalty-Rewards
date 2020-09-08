import React from "react";
import SignupButton from "../Components/Signup";
import { useAuth0 } from "@auth0/auth0-react";
import CustomerPic from "../Assets/buying.jpeg";
import { Link } from "react-router-dom";
const LandingPage = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="container-fluid bg-light">
      <div className="row">
        <div className="col-12 pt-5">
          <h1 className="p-2 m-2 text-center">
            Reward your customers and keep them comming back.
          </h1>
          <div className="col-12 col-lg-6 pt-4 text-dark m-auto">
            <p className="m-0">
              Punch cards and point systems are becoming more and more popular
              in todays rapidly changing world. Technology is making customer
              data easier to maintain and more powerful. How do you stay current
              without breaking the bank. Don't waste money on paper or plasic
              cards. Our app is easy to use, and free. We can keep you up to
              date with the latest Technology trends. Sign up today for free.
            </p>
          </div>
        </div>
        <div className="col-12 col-lg-6 m-auto text-right p-0 m-0 pr-5">
          {isAuthenticated ? (
            <Link className="btn btn-success" to="/profile">
              Go To Profile
            </Link>
          ) : (
            <SignupButton />
          )}
          <img className="img-fluid p-2 m-2" src={CustomerPic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
