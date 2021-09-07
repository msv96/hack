import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import env from "./Settings";

function Register() {
	const history = useHistory();
	const [name, setName] = useState("");
	const [mail, setMail] = useState("");
	const [pwd, setPwd] = useState("");
	const [loading, setLoading] = useState("");

	let handleSubmit = async (e) => {
		e.preventDefault();
		try {
			let apidata = await axios.post(`${env.api}/register`, {
				name,
				mail,
				pwd,
			});
			// console.log(apidata.data);
			if (apidata.data.code) {
				history.push("/signin");
			} else {
				setLoading(apidata.data.msg);
			}
			setTimeout(() => {
				setName("");
				setMail("");
				setPwd("");
				setLoading("");
			}, 5000);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
					<div className="card border-0 shadow rounded-3 my-5">
						<div className="card-body p-4 p-sm-5">
							<h5 className="card-title text-center mb-5 fw-light fs-5">
								Register
							</h5>
							{loading ? (
								<h5 className="card-title m-3 text-center text-danger text-uppercase fw-bold fw-light m-5  fs-5">
									{loading}
								</h5>
							) : (
								""
							)}
							<form onSubmit={handleSubmit}>
								<div className="form-floating mb-3">
									<input
										type="text"
										className="form-control"
										id="floatingName"
										placeholder="name"
										value={name}
										onChange={(e) =>
											setName(e.target.value)
										}
										required
									/>
									<label htmlFor="floatingName">Name</label>
								</div>
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
								<div className="d-grid py-3">
									<button
										className="btn btn-primary btn-login text-uppercase fw-bold"
										type="submit"
									>
										Sign Up
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

export default Register;
