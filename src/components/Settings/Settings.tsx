import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/actionCreators/userActionCreators";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(logOut());
    navigate("/sign-in");
    localStorage.removeItem("jwtAccess");
    localStorage.removeItem("jwtRefresh");
  };

  return (
    <div>
      <Header />
      <h1 className="title">settings</h1>
      <button onClick={handleLogOut}>Log out</button>
    </div>
  );
};

export default Settings;
