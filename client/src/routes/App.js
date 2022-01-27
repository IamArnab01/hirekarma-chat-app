import React, { Component, Suspense } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
const Home = React.lazy(() => import("../app/components/home"));
const Login = React.lazy(() => import("../app/components/login"));

class App extends Component {
  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <PrivateRoute exact path={["/", "/home"]} component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Suspense>
    );
  }
}

export default withRouter(App);
