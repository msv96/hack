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
        <Route to="/" component={Home} exact={true}></Route>
        <Route to="/signin" component={Signin} exact={true}></Route>
        <Route to="/register" component={Register} exact={true}></Route>
        <Route to="/forgot" component={Forgot} exact={true}></Route>
      </Switch>
    </Router>
	);
}

export default App;
