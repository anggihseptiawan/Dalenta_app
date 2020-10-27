import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import useCookie from "../../utils/hook/useCookie";

const ModalBox = () => {
	const [form, setForm] = useState({
		name: "",
		code: "",
		cost: "",
		price: "",
		category: "",
		variants: [25],
		image: "",
	});
	const [image, setImage] = useState("");
	const [categories, setCategories] = useState(null);
	const [loading, setLoading] = useState(false);

	console.log(form);

	const uploadImage = (e) => {
		setImage(e.target.files[0]);
		setForm({ ...form, image: e.target.files[0] });
	};
	const ourCookie = useCookie();

	const submit = (e) => {
		e.preventDefault();
		setLoading(true);
		const formData = new FormData();
		formData.append("name", form.name);
		formData.append("code", form.code);
		formData.append("cost", form.cost);
		formData.append("price", form.price);
		formData.append("category", form.category);
		formData.append("variants", form.variants);
		formData.append("image", form.image);

		const createProduct = async () => {
			try {
				const postProduct = await axios(
					"http://f-test.dalenta.tech/product",
					{
						method: "POST",
						data: formData,
						headers: {
							"Content-Type": "multipart/form-data",
							"x-access-token": ourCookie.userToken,
						},
					}
				);

				console.log(formData);

				const res = await postProduct;
				if (res) {
					setLoading(false);
					console.log(res);
				}
			} catch (error) {
				setLoading(false);
				console.log(error);
			}
		};

		createProduct();
	};

	useEffect(() => {
		const getCategory = async () => {
			try {
				const category = await axios.get(
					"http://f-test.dalenta.tech/category",
					{
						headers: {
							"x-access-token": ourCookie.userToken,
						},
					}
				);
				const response = await category;
				response && setCategories(response.categories);
			} catch (error) {
				console.log(error);
			}
		};

		getCategory();
	}, []);

	const dispatch = useDispatch();

	const handleModal = () => {
		dispatch({ type: "SET_MODAL", value: false });
	};

	return (
		<div className="modal-wrapper fixed top-0 left-0 z-10 flex justify-end items-center w-full h-screen">
			<div className="modal w-3/4 relative h-screen bg-white rounded-3xl py-5 px-8">
				<div className="modal-title flex justify-between border-b-2 border-gray-800 pb-2">
					<h1 className="text-2xl font-bold">Create new product</h1>
					<h1
						className="text-4xl cursor-pointer"
						onClick={handleModal}
					>
						&times;
					</h1>
				</div>
				<div className="add-product mt-5">
					<form action="#" onSubmit={submit}>
						<div className="top-section border-b border-gray-400 flex">
							<div className="w-2/12">
								<div
									className="flex justify-center items-center bg-gray-300 rounded-lg cursor-pointer relative"
									style={{ width: "130px", height: "130px" }}
								>
									<span className="">
										{image ? image.name : "Upload images"}
									</span>
									<div
										className="absolute opacity-0"
										style={{
											width: "130px",
											height: "130px",
										}}
									>
										<input
											type="file"
											className="w-full h-full cursor-pointer"
											onChange={uploadImage}
										/>
									</div>
								</div>
							</div>
							<div className="w-10/12 flex pb-5">
								<div className="w-1/2 pl-4">
									<div className="pro_name flex mb-2">
										<label
											htmlFor="name"
											className="mr-2 flex-1"
										>
											Product name
										</label>
										<input
											type="text"
											className="px-4 py-2 rounded-full border border-gray-800 focus:outline-none placeholder-black"
											placeholder="Enter product name"
											onChange={(e) =>
												setForm({
													...form,
													name: e.target.value,
												})
											}
										/>
									</div>
									<div className="pro_code flex mb-2">
										<label
											htmlFor="name"
											className="mr-2 flex-1"
										>
											Product code
										</label>
										<input
											type="text"
											className="px-4 py-2 rounded-full border border-gray-800 focus:outline-none placeholder-black"
											placeholder="Enter product code"
											onChange={(e) =>
												setForm({
													...form,
													code: e.target.value,
												})
											}
										/>
									</div>
									<div className="pro_category flex mb-2">
										<label
											htmlFor="name"
											className="mr-2 flex-1"
										>
											Category
										</label>
										<select
											name=""
											id=""
											className="px-4 py-2 rounded-full border border-gray-800 focus:outline-none placeholder-black"
											onChange={(e) =>
												setForm({
													...form,
													category: e.target.value,
												})
											}
										>
											{categories?.map((category) => {
												return (
													<option
														value={category.id}
														key={category.id}
													>
														{category.categoryName}
													</option>
												);
											})}
										</select>
									</div>
								</div>
								<div className="w-1/2 pl-4">
									<div className="pro_cost flex mb-2">
										<label
											htmlFor="name"
											className="mr-2 flex-1"
										>
											Cost
										</label>
										<input
											type="text"
											className="px-4 py-2 rounded-full border border-gray-800 focus:outline-none placeholder-black"
											placeholder="Input cost price"
											onChange={(e) =>
												setForm({
													...form,
													cost: e.target.value,
												})
											}
										/>
									</div>
									<div className="pro_price flex mb-2">
										<label
											htmlFor="name"
											className="mr-2 flex-1"
										>
											Selling price
										</label>
										<input
											type="text"
											className="px-4 py-2 rounded-full border border-gray-800 focus:outline-none placeholder-black"
											placeholder="Input selling price"
											onChange={(e) =>
												setForm({
													...form,
													price: e.target.value,
												})
											}
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="middle-section">
							<div className="w-full flex border-b border-gray-400 py-10">
								<span className="mr-4 px-4 py-2 text-red-600 underline">
									Outlets
								</span>
								<span className="mr-4 px-4 py-2 border border-pink-400 rounded-full">
									Gading Serpong
								</span>
								<span className="mr-4 px-4 py-2 border border-teal-400 rounded-full">
									Bandar Sunway
								</span>
								<span className="mr-4 px-4 py-2 border border-gray-900 rounded-full">
									Kota Bahru
								</span>
								<span className="mr-4 px-4 py-2 border border-gray-900 rounded-full">
									Waroeng Batavia
								</span>
							</div>
						</div>
						<div className="bottom-section">
							<div className="w-full flex border-b border-gray-400 py-10">
								<span className="mr-4 px-4 py-2 text-red-600 underline">
									Variants
								</span>
								<span className="mr-4 px-6 py-2 border-2 border-gray-900 rounded-full">
									Add another variant
								</span>
								<span className="mr-4 px-6 py-2 border-2 border-gray-900 rounded-full">
									Add another variant
								</span>
								<span className="mr-4 px-6 py-2 border-2 border-gray-900 rounded-full">
									Add another variant
								</span>
							</div>
						</div>

						<button
							className="bg-red-600 rounded-full text-white cursor-pointer absolute right-0 bottom-0 mr-4 mb-4 hover:bg-red-500 px-6 py-2"
							type="submit"
							onClick={submit}
						>
							{loading ? "wait.." : "Finish create"}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ModalBox;
