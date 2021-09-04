import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Signin from "./Signin";
import Register from "./Register";
import Forgot from "./Forgot";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/signin" exact>
					<Signin />
				</Route>
				<Route path="/register" exact>
					<Register />
				</Route>
				<Route path="/forgot" exact>
					<Forgot />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
