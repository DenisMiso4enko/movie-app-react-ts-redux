import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/actionCreators/userActionCreators";
// fipol50178@cmeinbox.com
// fipol50178@cmeinbox.com
// User-Name
// 12345qazwsx
const FormReg = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const onSubmit = (event: { preventDefault: () => any; target: any }) => {
    event.preventDefault();
    if (event.target < 0) {
      setError(true);
    } else {
      setError(false);

      dispatch(
        signUp({
          username: event.target[0].value,
          email: event.target[1].value,
          password: event.target[2].value,
        })
      );
      event.target.reset();
    }
  };
  return (
    <div className="registration">
      <h1>Sign Up</h1>
      <form className="form-reg" onSubmit={onSubmit}>
        <label>
          <span>Username</span>
          <input
            className={`form-input form-input--${error ? "error" : ""}`}
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // pattern={"/^[w-.]+@([w-]+.)+[w-]{2,4}$/g"}
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
        <button type="submit">Sign up</button>
      </form>
      <Link to="/sign-in">Sign in</Link>
    </div>
  );
};

export default FormReg;
