import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import env from "./Settings";

function Signin() {
	const history = useHistory();
	const [mail, setMail] = useState("");
	const [pwd, setPwd] = useState("");
	const [loading, setLoading] = useState("");
	const [current, setCurrent] = useState([]);

	let handleSubmit = async (e) => {
		e.preventDefault();
		try {
			let apidata = await axios.post(`${env.api}/signin`, {
				mail,
				pwd,
			});
			// console.log(apidata);
			if (apidata.data.code) {
				setCurrent([apidata.data.user]);
				// history.push("/user");
			} else {
				setLoading(apidata.data.msg);
			}
			setMail("");
			setPwd("");
			setTimeout(() => {
				setLoading("");
			}, 5000);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="container">
			<div className="row">
				{current.length === 0 ? (
					<div
						className="col-sm-9 col-md-7 col-lg-5 mx-auto"
						key="fhhji"
					>
						<div className="card border-0 shadow rounded-3 my-5">
							<div className="card-body p-4 p-sm-5">
								<h5 className="card-title text-center mb-5 fw-light fs-5">
									Sign In
								</h5>
								{loading ? (
									<h5
										key="fsa"
										className="card-title text-center m-3 fw-light fs-5 text-danger text-uppercase fw-bold"
									>
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
											onChange={(e) =>
												setPwd(e.target.value)
											}
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
				) : (
					<div className="col text-center" key="akji">
						{current.map((e) => (
							<>
								<h2 className="text-capitalize">
									welcome {e.name}
								</h2>
								<button
									key="ldo1"
									type="submit"
									className="btn btn-danger text-uppercase fw-bold"
									onClick={() => setCurrent([])}
								>
									Logout
								</button>
							</>
						))}
					</div>
				)}
			</div>
		</div>
	);
}

export default Signin;
