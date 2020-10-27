import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import Home from "./pages/Home/Home";

import Variant from "./pages/Submenu/Variant";
import Categories from "./pages/Submenu/Categories";
import useCookie from "./utils/hook/useCookie";
import Login from "./pages/Login/Login";

function App() {
	const ourCookie = useCookie();

	const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });

	return (
		<Router history={history}>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/login" component={Login} />
				<Route
					exact
					path="/home"
					render={() =>
						ourCookie ? <Home /> : <Redirect to="/login" />
					}
				/>
				<Route
					exact
					path="/variant"
					render={() =>
						ourCookie ? <Variant /> : <Redirect to="/login" />
					}
				/>
				<Route
					exact
					path="/categories"
					render={() =>
						ourCookie ? <Categories /> : <Redirect to="/login" />
					}
				/>
			</Switch>
		</Router>
	);
}

export default App;
