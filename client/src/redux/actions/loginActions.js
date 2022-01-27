import { API } from "../../backend";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { setCurrentUser, setUserLoaded } from "./helperActions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

// Login - get user token
export const loginUser = (userData) => (dispatch) => {
  console.log(userData);
  axios
    .post(`${API}/login`, userData)
    .then((res) => {
      // Set token to localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(localStorage.getItem("jwtToken"));
      // Decode token to get user data
      const decoded = jwt_decode(token);
      console.log(decoded);
      // // Set current user
      dispatch(setCurrentUser(decoded));
      // login messag on succes
      toast("Logged in Successfully", { type: "success" });
      // set loading to false
      dispatch(setUserLoaded());
    })
    .catch((err) => {
      dispatch(setUserLoaded());
      // error message
      console.log(err);
      // if (err.response.status > 400 && err.response.status < 500) {
      //   toast(err.response.data.message, { type: "warning" });
      // } else if (err.response.status > 500) {
      //   toast("Internal Server Error", { type: "error" });
      // }
    });
};

// Log user out
export const logoutUser = (history) => (dispatch) => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
  if (history) {
    history.push("/");
  }
  toast("Logged out Successfully", { type: "warning" });
};
