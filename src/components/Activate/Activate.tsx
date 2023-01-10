import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { activation } from "../../redux/actionCreators/userActionCreators";

const Activate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const splitInfo = window.location.pathname.split("/");
    dispatch(activation({ uid: splitInfo[2], token: splitInfo[3] }, navigate));
  }, []);
  return (
    <div>
      <span>Account activation in progress</span>
    </div>
  );
};

export default Activate;
