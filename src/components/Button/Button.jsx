import React from "react";
import { Link } from "react-router-dom";
import "./Button.scss";

const Button = () => {
  return (
    <div>
      <Link to="/login">
        <button className="btn">
          <i className="fa fa-user-circle p-r " aria-hidden="true"></i>
          Sign In
        </button>
      </Link>
    </div>
  );
};

export default Button;
