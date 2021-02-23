import React from "react";

// css
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

// redux
import { useSelector } from "react-redux";
import { selectBasket } from "./features/basketSlice";

const Checkout = () => {
	var basket = useSelector(selectBasket);

	return (
		<div className="checkout">
			<div className="checkout__left">
				<img
					className="checkout__ad"
					src="https://images-eu.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668jpg"
					alt="amazon-ad"
				/>

				<div>
					<h2 className="checkout__title">Your shopping Basket</h2>

					{/*checkout product comp.*/}
					{basket.map((item, i) => (
						<CheckoutProduct
							id={item.id}
							title={item.title}
							price={item.price}
							rating={item.rating}
							image={item.image}
						/>
					))}
				</div>
			</div>

			<div className="checkout__right">
				<Subtotal />
			</div>
		</div>
	);
};

export default Checkout;
