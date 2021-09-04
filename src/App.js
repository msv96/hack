import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Home";
import Signin from "./Signin";
import Register from "./Register";
import Forgot from "./Forgot";

function App() {
	return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact={true}></Route>
        <Route path="/signin" component={Signin} exact={true}></Route>
        <Route path="/register" component={Register} exact={true}></Route>
        <Route path="/forgot" component={Forgot} exact={true}></Route>
      </Switch>
    </Router>
	);
}

export default App;
