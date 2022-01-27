import React, { useState } from "react";
import BgImage from "../../assets/images/auth-bg.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {};
  return (
    <div style={{ backgroundImage: `url(${BgImage})` }} className="th-auth-bg">
      <div className="card p-md-5 p-3">
        <h3 className="th-auth-heading">Sign In</h3>
        <p className="th-auth-text mb-md-4 mb-2">
          Welcome back! Please login to your account.
        </p>
        <form onSubmit={handleSubmit}>
          <div class="row justify-content-center">
            <div class="col-12 pb-md-4 pb-2">
              <div className="th-auth-form-group">
                <input
                  type="text"
                  className="th-auth-form-control form-control"
                  id="validationDefault01"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <label>Email</label>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-12 pb-md-4 pb-2">
              <div className="th-auth-form-group">
                <input
                  type="password"
                  className="th-auth-form-control form-control"
                  id="validationDefault01"
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <label>Password</label>
              </div>
            </div>
          </div>
          {/* buttons */}
          <div className="row justify-content-center pb-md-3 pb-2">
            <div className="col-12">
              <button class="th-signup-btn btn w-100" type="submit">
                <span> Sign in </span>
              </button>
            </div>
          </div>
        </form>
        <p className="th-auth-text mb-2">
          Don't have an account?{" "}
          <span style={{ color: "#124A53", cursor: "pointer" }}>Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
