import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import env from "./Settings";

function Forgot() {
	const history = useHistory();
	const [mail, setMail] = useState("");
	const [pwd, setPwd] = useState("");
	const [pwd2, setPwd2] = useState("");
	const [loading, setLoading] = useState("");

	let handleSubmit = async (e) => {
		e.preventDefault();
		if (pwd === pwd2) {
			try {
				let apidata = await axios.put(`${env.api}/forgot`, {
					mail,
					pwd,
				});
				setMail("");
				setPwd("");
				setPwd2("");
				if (apidata.data.code) {
					setLoading(apidata.data.msg);
					setTimeout(() => {
						history.push("/signin");
					}, 5000);
				} else {
					setLoading(apidata.data.msg);
					setTimeout(() => {
						setLoading("");
					}, 5000);
				}
			} catch (error) {
				console.log(error);
			}
		} else {
			setLoading("Password Mismatch. Try Again");
			setTimeout(() => {
				setLoading("");
			}, 5000);
		}
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
					<div className="card border-0 shadow rounded-3 my-5">
						<div className="card-body p-4 p-sm-5">
							<h5 className="card-title text-center mb-5 fw-light fs-5">
								Forgot Password
							</h5>
							{loading ? (
								<h5 className="card-title text-center m-3 fw-light fs-5 text-danger text-uppercase fw-bold">
									{loading}
								</h5>
							) : (
								""
							)}
							<form onSubmit={handleSubmit}>
								<div className="form-floating mb-3">
									<input
										type="email"
										className="form-control"
										id="floatingInput"
										placeholder="name@example.com"
										value={mail}
										onChange={(e) =>
											setMail(e.target.value)
										}
										required
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
										value={pwd}
										onChange={(e) => setPwd(e.target.value)}
										required
									/>
									<label htmlFor="floatingPassword">
										Password
									</label>
								</div>
								<div className="form-floating mb-3">
									<input
										type="password"
										className="form-control"
										id="confirmPassword"
										placeholder="Password"
										value={pwd2}
										onChange={(e) =>
											setPwd2(e.target.value)
										}
										required
									/>
									<label htmlFor="confirmPassword">
										Confirm Password
									</label>
								</div>
								<div className="d-grid py-3">
									<button
										className="btn btn-success btn-login text-uppercase fw-bold"
										type="submit"
									>
										Change Password
									</button>
								</div>
							</form>
							<div className="d-grid py-3">
								<button
									type="submit"
									className="btn btn-danger text-uppercase fw-bold"
									onClick={() => history.push("/")}
								>
									Cancel
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Forgot;
