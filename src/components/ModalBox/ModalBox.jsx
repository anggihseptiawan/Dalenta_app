import React from "react";
import { useDispatch } from "react-redux";

const ModalBox = () => {
	const dispatch = useDispatch();

	const handleModal = () => {
		dispatch({ type: "SET_MODAL", value: false });
	};

	return (
		<div className="modal-wrapper fixed top-0 left-0 z-10 flex justify-end items-center w-full h-screen">
			<div className="modal w-3/4 bg-white rounded-3xl py-5 px-8">
				<div className="modal-title flex justify-between border-bottom border-gray-800 pb-4">
					<h1 className="text-2xl font-bold">Create new product</h1>
					<h1
						className="text-4xl cursor-pointer"
						onClick={handleModal}
					>
						&times;
					</h1>
				</div>
			</div>
		</div>
	);
};

export default ModalBox;
