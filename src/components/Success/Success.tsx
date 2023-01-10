import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="success">
      <h2>your account has been successfully created, click to sign in</h2>
      <Link to="/sign-in">Sign in</Link>
    </div>
  );
};

export default Success;
