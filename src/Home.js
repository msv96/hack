import React from "react";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div className="container app">
			<div className="row">
				<div className="col-md-4 text-center mx-auto">
					<p className="m-5">
						If you have an account,
						<br />
						please sign in
					</p>
					<Link to="/signin">
						<button
							type="submit"
							className="btn btn-outline-primary"
						>
							Sign In
						</button>
					</Link>
					<p className="m-5">
						Don't have an account,
						<br />
						register here
					</p>
					<Link to="/register">
						<button
							type="submit"
							className="btn btn-success"
						>
							Register
						</button>
					</Link>
					<p className="m-5">
						Forgot your account password?
					</p>
					<Link to="/forgot">
						<button
							type="submit"
							className="btn btn-danger"
						>
							Forgot Password
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Home;
