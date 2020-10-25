import React, { useEffect, useState } from "react";
import CardProduct from "../../components/CardProduct/CardProduct";
import Axios from "../../utils/axios";
import { useHistory } from "react-router-dom";

const Product = () => {
	const [products, setProducts] = useState(null);
	const history = useHistory();

	useEffect(() => {
		const getAllProduct = async () => {
			try {
				const userCookie = document.cookie;
				const findCookie = userCookie
					?.split(";")
					.find((cookie) => cookie.startsWith("DALENTA_USER"));

				let ourCookie;
				if (findCookie) {
					const strCookie = findCookie?.split("=")[1];
					ourCookie = JSON.parse(strCookie);
				}

				Axios.defaults.headers.common["x-access-token"] =
					ourCookie.userToken;

				const data = await Axios.get("/product");
				setProducts(data.data.products);
			} catch (error) {
				console.error(error.response.status);
				if (error.response.status === 401) history.push("/login");
			}
		};

		getAllProduct();
	}, []);

	console.log(products);

	return (
		<div className="product-container pl-32 pr-5 w-full">
			{products?.map((product) => {
				return (
					<CardProduct key={product.productId} product={product} />
				);
			})}
		</div>
	);
};

export default Product;
