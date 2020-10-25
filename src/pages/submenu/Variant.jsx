import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import SideBar from "../../components/SideBar/SideBar";

const Variant = () => {
	return (
		<>
			<TopBar category="variant" />
			<SideBar />
			<div className="variant-container pl-32 pr-5 mt-36 w-full">
				<div className="card-product flex justify-between bg-gray-400 rounded-2xl px-6 py-2 mb-2">
					<div className="var_code flex items-center">
						<span className="ml-4">size</span>
					</div>
					<div className="var_name flex border-l-2 justify-center border-white items-center">
						<span>assigned to 8 product</span>
					</div>
					<div className="var_variants flex flex-col justify-center border-l-2 border-white items-center">
							"no-variants"
					</div>
					<div className="var_outlet flex border-l-2 justify-center border-white items-center">
						<span className="mx-1 rounded-full px-4 py-1 bg-teal-400">3 variant options</span>
					</div>
					<div className="var_category flex justify-center border-l-2 border-white items-center">
						<span>single choose</span>
					</div>
					<div className="var_price flex justify-center border-l-2 border-white items-center">
						<div className="px-4 py-2 text-white rounded-full bg-indigo-1000 mr-2">Add new option</div>
						<div className="px-4 py-2 text-white rounded-full bg-indigo-1000 mr-2">Add new option</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Variant;
