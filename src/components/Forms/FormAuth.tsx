import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn } from "../../redux/actionCreators/userActionCreators";

const FormAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const onSubmit = (event: { preventDefault: () => any; target: any }) => {
    event.preventDefault();
    if (event.target < 0) {
      setError(true);
    } else {
      setError(false);

      dispatch(
        signIn(
          {
            email: event.target[0].value,
            password: event.target[1].value,
          },
          navigate
        )
      );
    }
  };

  return (
    <div className="authorization">
      <h1 className="title">Sign in</h1>
      <form className="form-auth" onSubmit={onSubmit}>
        <label>
          <span>Email</span>
          <input
            className={`form-input form-input--${error ? "error" : ""}`}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={6}
            required
          />
        </label>
        <button>Sign in</button>
        <Link to="/sign-up">Sign up</Link>
      </form>
    </div>
  );
};

export default FormAuth;
