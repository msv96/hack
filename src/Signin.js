import React from "react";
import { useHistory } from "react-router";

function Signin() {
	const history = useHistory();

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
							<div className="d-grid py-3">
								<button
									type="submit"
									className="btn btn-danger text-uppercase fw-bold"
									onClick={() => history.push("/forgot")}
								>
									Forgot Password ?
								</button>
							</div>
							<hr className="my-4" />
							<div className="d-grid py-3">
								<button
									type="submit"
									className="btn btn-outline-success text-uppercase fw-bold"
									onClick={() => history.push("/")}
								>
									Home
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Signin;
