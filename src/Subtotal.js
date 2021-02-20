import React from "react";
import CurrencyFormat from "react-currency-format";

// redux
import { selectBasket } from "./features/basketSlice";
import { useSelector } from "react-redux";

// css
import "./Subtotal.css";

const Subtotal = () => {
	const basket = useSelector(selectBasket);

	// calculating total price through iterating over basket array using reduce method
	const getBasketTotal = (basket) =>
		basket?.reduce((amount, item) => item.price + amount, 0);

	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<React.Fragment>
						<p>
							Subtotal ({basket.length || 0} items):
							<strong>{value || 0}</strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" /> &nbsp; this order contains a gift
						</small>
					</React.Fragment>
				)}
				decimalScale={2}
				value={getBasketTotal(basket)}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"₹"}
				thousandSpacing={3}
			/>
			<button>Proceed to checkout</button>
		</div>
	);
};

export default Subtotal;
