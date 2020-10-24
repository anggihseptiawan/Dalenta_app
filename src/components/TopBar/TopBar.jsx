import React, { useState } from "react";
import { ReactComponent as Duplicate } from "../../assets/images/copy.svg";
import { ReactComponent as Delete } from "../../assets/images/trash.svg";
import { ReactComponent as Arrow } from "../../assets/images/arrow.svg";
import { ReactComponent as Search } from "../../assets/images/search.svg";
import { Link } from "react-router-dom";

const TopBar = () => {
	const [subMenu, setSubMenu] = useState(false);
	console.log(subMenu);

	return (
		<div className="top-bar fixed top-0 left-0 w-full py-5 bg-white shadow-lg pl-32 pr-5">
			<div className="flex justify-between items-center">
				<div className="sub-menu w-1/6 relative cursor-pointer">
					<div
						className="title flex"
						onClick={() => setSubMenu(!subMenu)}
					>
						<h2 className="font-bold mr-4">Products</h2>
						<Arrow />
					</div>

					{subMenu && (
						<div className="absolute bg-white shadow px-6 py-4">
							<div className="menu hover:bg-indigo-1000 hover:text-white px-4 py-2 rounded-lg">
								<Link className="no-underline" to="/variant">
									Variants
								</Link>
							</div>
							<div className="menu hover:bg-indigo-1000 hover:text-white px-4 py-2 rounded-lg">
								<Link className="no-underline" to="/categories">
									Categories
								</Link>
							</div>
						</div>
					)}
				</div>
				<div className="features flex justify-end items-center w-5/6">
					<div className="duplicate flex items-center bg-indigo-1000 text-white mr-4 rounded-full py-1 px-4">
						<Duplicate />
						<span className="ml-2">Duplicate</span>
					</div>
					<div className="duplicate flex items-center bg-indigo-1000 text-white mr-4 rounded-full py-1 px-4">
						<Delete />
						<span className="ml-2">Delete</span>
					</div>
					<div className="filter flex items-center border border-gray-900 mr-4 rounded-full py-1 px-4">
						<span className="mr-8">Filter</span>
						<Arrow />
					</div>
					<div className="search flex items-center border border-gray-900 mr-4 rounded-full py-1 px-4">
						<Search />
						<span className="ml-2">Search</span>
					</div>
					<div className="duplicate bg-red-400 text-white mr-4 rounded-full py-1 px-8">
						<span>+ Add new product</span>
					</div>
				</div>
			</div>
			<div className="flex justify-between pt-2 mt-4 border-t border-gray-900">
				<div className="field">
					<span>Code</span>
				</div>
				<div className="field">
					<span>Product name</span>
				</div>
				<div className="field">
					<span>Variants</span>
				</div>
				<div className="field">
					<span>Outlets</span>
				</div>
				<div className="field">
					<span>Category</span>
				</div>
				<div className="field">
					<span>Price</span>
				</div>
				<div className="field">
					<span>Cost</span>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
