import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);

	const history = useHistory();

	const submit = (e) => {
		e.preventDefault();
		setLoading(true);

		const reqLogin = async () => {
			try {
				const login = await axios("http://f-test.dalenta.tech/signin", {
					method: "POST",
					data: JSON.stringify({
						username: name,
						password: password,
					}),
					headers: {
						"Content-type": "application/json; charset=UTF-8",
						accesskey: process.env.REACT_APP_ACCESS_KEY,
					},
				});

				const res = await login;
				if (res) {
					const userCookie = {
						userToken: res.token,
					};

					const expires = new Date(
						new Date().getTime() + 1 * 2 * 60 * 60 * 1000
					);

					document.cookie = `DALENTA_USER=${JSON.stringify(
						userCookie
					)}; expires=${expires}`;

					history.push("/home");
				}
			} catch (error) {
				console.log(error);
			}
		};

		reqLogin();
	};

	return (
		<div className="login flex justify-center items-center bg-gray-400 w-full h-screen overflow-hidden">
			<div className="card-login bg-white rounded-lg px-10 py-5">
				<h2 className="text-xl mb-3 text-gray-900">
					Selamat datang, silahkan login terlebih dahulu..
				</h2>
				<form action="#" onSubmit={submit}>
					<div className="username flex flex-col mb-3">
						<label className="text-gray-700" htmlFor="name">
							Username
						</label>
						<input
							type="text"
							className="py-2 px-4 border border-gray-400 focus:outline-none"
							id="name"
							name="name"
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className="password flex flex-col mb-3">
						<label className="text-gray-700" htmlFor="password">
							Password
						</label>
						<input
							type="password"
							className="py-2 px-4 border border-gray-400 focus:outline-none"
							id="password"
							name="password"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<button
						type="submit"
						className="text-white w-full text-center py-2 mt-5 rounded-lg bg-indigo-1000 hover:bg-indigo-900"
						onClick={submit}
					>
						{loading ? "WAIT.." : "LOGIN"}
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
