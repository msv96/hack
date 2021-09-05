import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Signin from "./Signin";
import Register from "./Register";
import Forgot from "./Forgot";
import Topbar from "./Topbar";
import User from "./User";

function App() {
	return (
		<Router>
			<Topbar />
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/register" exact>
					<Register />
				</Route>
				<Route path="/forgot" exact>
					<Forgot />
				</Route>
				<Route path="/signin" exact>
					<Signin />
				</Route>
				<Route path="/user" exact>
					<User />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
