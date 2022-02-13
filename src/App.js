import React from "react";
import Main from "./Main";
import Description from "./Components/Description/Description";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/description/:id">
            <Description />
          </Route>

          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
