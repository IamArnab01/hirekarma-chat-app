import React, { Component, Suspense } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
const Home = React.lazy(() => import("../app/components/home"));

class App extends Component {
  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Suspense>
    );
  }
}

export default withRouter(App);
