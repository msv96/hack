import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

function User() {
	const history = useHistory();
	const [userdata, setUserdata] = useState([]);
	const [main, setMain] = useState(false);

	useEffect(() => {
		setMain(true);
		let fetch = async () => {
			try {
				let apidata = await axios.post("http://localhost:3500/");
				setUserdata([...apidata.data]);
			} catch (error) {
				console.log(error);
			}
		};
		fetch();
	}, []);
	let handleLogout = async () => {
		try {
			await axios.get("http://localhost:3500/logout");
			history.push("/signin");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="container">
			<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
				<div className="card border-0 shadow rounded-3 my-5">
					{main ? (
						<div className="card-body p-4 p-sm-5">
							<h3 className="card-title text-center mb-5 fw-light fs-5">
								Welcome
							</h3>
							<h5 className="text-center">
								{userdata.map((e) => e.name)}
							</h5>
							<button
								type="submit"
								className="btn btn-danger text-center text-uppercase fw-bold"
								onClick={handleLogout}
							>
								Logout
							</button>
						</div>
					) : (
						<h1 className="card-title text-center mb-5 fw-light fs-5 text-danger text-uppercase fw-bold">
							Please Login to use Google Drive Clone App
						</h1>
					)}
				</div>
			</div>
		</div>
	);
}

export default User;
