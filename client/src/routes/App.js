import React, { Component, Suspense } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
const Home = React.lazy(() => import("../app/components/home"));

class App extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default withRouter(App);
