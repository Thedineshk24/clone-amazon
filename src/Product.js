import React from "react";

// redux
import { ADD_TO_BASKET } from "./features/basketSlice";
import { useDispatch } from "react-redux";

// css
import "./Product.css";

const Product = ({ id, title, price, image, rating }) => {
	const dispatch = useDispatch();

	// add to basket method
	const addToBasket = () => {
		// store data in redux basket slice
		dispatch(
			ADD_TO_BASKET({
				id: id,
				title: title,
				price: price,
				image: image,
				rating: rating,
			}),
		);
	};
	return (
		<div className="product">
			<div className="product__info">
				<p>{title.substr(0, 90)}</p>
				<p className="product__price">
					<small>₹</small>
					<strong>{price}</strong>
				</p>

				<div className="product__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p key={i}>⭐</p>
						))}
				</div>
			</div>

			<img src={image} alt={title} />

			<button onClick={addToBasket}>Add to basket</button>
		</div>
	);
};

export default Product;
