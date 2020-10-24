import React from "react";

const ButtonIcon = ({ type }) => {
	const bg =
		type === "dark" ? "bg-indigo-1000" : "bg-white border border-gray-900";

	return (
		<div
			className={`button flex items-center ${bg} text-white mr-4 rounded-full py-1 px-4`}
		>
			<Duplicate />
			<span className="ml-2">Duplicate</span>
		</div>
	);
};

export default ButtonIcon;
