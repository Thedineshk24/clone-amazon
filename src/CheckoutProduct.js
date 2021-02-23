import React from "react";
import { useDispatch, useSelector } from "react-redux";

// css
import "./CheckoutProduct.css";
import { selectBasket, REMOVE_FROM_BASKET } from "./features/basketSlice";

const CheckoutProduct = ({ id, image, price, title, rating }) => {
	const dispatch = useDispatch();
	const basket = useSelector(selectBasket);

	const removeFromBasket = () => {
		dispatch(
			REMOVE_FROM_BASKET({
				id,
			}),
		);
	};
	return (
		<div className="checkoutProduct">
			<img className="checkoutProduct__image" src={image} alt={title} />
			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title">{title?.substr(0, 90)}</p>
				<p className="checkoutProduct__price">
					<small>₹</small> <strong>{price}</strong>
				</p>
				<div className="checkoutProduct__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p key={i}>⭐</p>
						))}
				</div>
				<button onClick={removeFromBasket}>Remove from Basket</button>
			</div>
		</div>
	);
};

export default CheckoutProduct;
