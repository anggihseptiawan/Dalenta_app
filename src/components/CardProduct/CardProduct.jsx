import React from "react";
import formatNumber from "../../utils/formatNumber";

const CardProduct = ({ product }) => {
	return (
		<div className="card-product flex justify-between bg-gray-400 rounded-2xl px-6 py-2 mb-2">
			<div className="pro_code flex items-center">
				<img
					src={product?.productImage}
					alt=""
					style={{
						width: "80px",
						height: "80px",
						objectFit: "cover",
						borderRadius: "15px",
					}}
				/>
				<span className="ml-4">{product?.productCode}</span>
			</div>
			<div className="pro_name flex border-l-2 pl-5 border-white items-center">
				<span className="ml-4">{product?.productName}</span>
			</div>
			<div className="pro_variants flex flex-col justify-center border-l-2 pl-5 border-white items-center">
				{product?.variants.length !== 0 ? (
					<span className="ml-4 rounded-full px-4 py-1 mb-2 bg-white border border-gray-900">
						size &times;
					</span>
				) : (
					"no-variants"
				)}
			</div>
			<div className="pro_outlet flex border-l-2 pl-5 border-white items-center">
				<span className="ml-4 rounded-full px-4 py-1 bg-pink-400 mr-1">
					BA
				</span>
				<span className="ml-4 rounded-full px-4 py-1 bg-pink-600 mr-1">
					GS
				</span>
				<span className="ml-4 rounded-full px-4 py-1 bg-teal-400 mr-1">
					SB
				</span>
			</div>
			<div className="pro_category flex border-l-2 pl-5 border-white items-center">
				<span className="ml-4">{product?.Category?.categoryName}</span>
			</div>
			<div className="pro_price flex border-l-2 pl-5 border-white items-center">
				<span className="ml-4">
					Rp. {formatNumber(product?.productPrice)}
				</span>
			</div>
			<div className="pro_cost flex border-l-2 pl-5 border-white items-center">
				<span className="ml-4">
					Rp. {formatNumber(product?.productCost)}
				</span>
			</div>
		</div>
	);
};

export default CardProduct;
