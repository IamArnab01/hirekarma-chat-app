import React, { Component } from "react";
import BgImage from "../../assets/images/auth-bg.jpg";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../../redux/actions/loginActions";
import { setUserLoading } from "../../../redux/actions/helperActions";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to the page they came from
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  componentDidUpdate(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/"); // push user toto the page they came from when they login
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData); // since we handle the redirect within our component,
    //we don't need to pass in this.props.history as a parameter
    this.props.setUserLoading(); // settting loading true to display the loader
  };

  render() {
    return (
      <div
        style={{ backgroundImage: `url(${BgImage})` }}
        className="th-auth-bg"
      >
        <div className="card p-md-5 p-3">
          <h3 className="th-auth-heading">Sign In</h3>
          <p className="th-auth-text mb-md-4 mb-2">
            Welcome back! Please login to your account.
          </p>
          <form onSubmit={this.handleSubmit}>
            <div class="row justify-content-center">
              <div class="col-12 pb-md-4 pb-2">
                <div className="th-auth-form-group">
                  <input
                    type="text"
                    className="th-auth-form-control form-control"
                    id="validationDefault01"
                    name="email"
                    value={this.state.email}
                    onChange={(e) => {
                      this.setState({
                        [e.target.name]: e.target.value,
                      });
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
                    value={this.state.password}
                    onChange={(e) => {
                      this.setState({
                        [e.target.name]: e.target.value,
                      });
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
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loginUser, setUserLoading })(
  withRouter(Login)
);
