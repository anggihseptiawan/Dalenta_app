import React from "react";
import { ReactComponent as Dashboard } from "../../assets/images/dashboard.svg";
import { ReactComponent as Home } from "../../assets/images/home.svg";
import { ReactComponent as Product } from "../../assets/images/product.svg";
import { ReactComponent as Device } from "../../assets/images/devices.svg";
import { ReactComponent as Statistics } from "../../assets/images/statistics.svg";
import { ReactComponent as User } from "../../assets/images/user.svg";
import { ReactComponent as Settings } from "../../assets/images/settings.svg";

const SideBar = () => {
	return (
		<div className="wrapper flex flex-col justify-between items-center bg-gray-400 h-full fixed top-0 left-0 px-6 py-20">
			<div className="menu">
				<Dashboard />
			</div>
			<div className="menu">
				<Home />
			</div>
			<div className="menu">
				<Product />
			</div>
			<div className="menu">
				<Device />
			</div>
			<div className="menu">
				<Statistics />
			</div>
			<div className="menu">
				<User />
			</div>
			<div className="menu">
				<Settings />
			</div>
		</div>
	);
};

export default SideBar;
