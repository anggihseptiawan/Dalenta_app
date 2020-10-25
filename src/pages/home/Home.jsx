import React from "react";

import TopBar from "../../components/TopBar/TopBar";
import SideBar from "../../components/SideBar/SideBar";
import Product from "../Submenu/Product";
import { useSelector } from "react-redux";
import ModalBox from "../../components/ModalBox/ModalBox";

const Home = () => {
	const state = useSelector((state) => state);
	console.log(state);

	return (
		<div className="pt-36">
			<TopBar category="product" />
			<SideBar />
			<Product />
			{state.modal.show && <ModalBox />}
		</div>
	);
};

export default Home;
