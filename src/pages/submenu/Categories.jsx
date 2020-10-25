import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import SideBar from "../../components/SideBar/SideBar";

const Categories = () => {
	return (
		<>
			<TopBar category="categories" />
			<SideBar />
			<div className="category-container pl-32 pr-5 mt-36 w-full">
				<h1>Categoriess</h1>
			</div>
		</>
	);
};

export default Categories;
