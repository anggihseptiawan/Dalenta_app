import React from "react";

import TopBar from "../../components/TopBar/TopBar";
import SideBar from "../../components/SideBar/SideBar";
import Product from "../submenu/Product";

const Home = () => {
	return (
		<div className="pt-36">
			<TopBar />
			<SideBar />
			<Product />
		</div>
	);
};

export default Home;
