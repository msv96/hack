import React from "react";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
					<div className="card text-center border-0 shadow rounded-3 my-5">
						<p className="m-5">
							Don't have an account,
							<br />
							register here
						</p>
						<Link to="/register">
							<button
								type="submit"
								className="btn btn-outline-success"
							>
								Register
							</button>
						</Link>
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
						<p className="m-5">Forgot your account password?</p>
						<Link to="/forgot">
							<button
								type="submit"
								className="btn btn-outline-danger mb-5"
							>
								Forgot Password
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
