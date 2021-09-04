import React from "react";
import { Link } from "react-router-dom";

function Signin() {
	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
					<div className="card border-0 shadow rounded-3 my-5">
						<div className="card-body p-4 p-sm-5">
							<h5 className="card-title text-center mb-5 fw-light fs-5">
								Sign In
							</h5>
							<form>
								<div className="form-floating mb-3">
									<input
										type="email"
										className="form-control"
										id="floatingInput"
										placeholder="name@example.com"
									/>
									<label htmlFor="floatingInput">
										Email address
									</label>
								</div>
								<div className="form-floating mb-3">
									<input
										type="password"
										className="form-control"
										id="floatingPassword"
										placeholder="Password"
									/>
									<label htmlFor="floatingPassword">
										Password
									</label>
								</div>
								<div className="d-grid py-3">
									<button
										className="btn btn-primary btn-login text-uppercase fw-bold"
										type="submit"
									>
										Sign in
									</button>
								</div>
							</form>
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
				<div className="col-lg-6 mx-auto">
					<Link to="/">
						<button type="submit" className="btn btn-primary">
							Home
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Signin;
