import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Variant from "./pages/submenu/Variant";
import Categories from "./pages/submenu/Categories";

function App() {
	const userCookie = document.cookie;
	const findCookie = userCookie
		?.split(";")
		.find((cookie) => cookie.startsWith("DALENTA_USER"));

	let ourCookie;
	if (findCookie) {
		const strCookie = findCookie?.split("=")[1];
		ourCookie = JSON.parse(strCookie);
	}

	const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });

	return (
		<Router history={history}>
			<Switch>
				<Route
					exact
					path="/"
					render={() =>
						ourCookie ? <Home /> : <Redirect to="/login" />
					}
				/>
				<Route
					exact
					path="/login"
					render={() => (ourCookie ? <Redirect to="/" /> : <Login />)}
				/>
				<Route exact path="/home" component={Home} />
				<Route exact path="/variant" component={Variant} />
				<Route exact path="/categories" component={Categories} />
			</Switch>
		</Router>
	);
}

export default App;
