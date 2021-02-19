import React from "react";
import CurrencyFormat from "react-currency-format";

// redux
import { selectBasket } from "./features/basketSlice";
import { useSelector } from "react-redux";

// css
import "./Subtotal.css";

const Subtotal = () => {
	const data = useSelector(selectBasket);
	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<>
						{Object.entries(data).map((item, i) => (
							<p key={i}>
								Subtotal ({0} items): <strong>0</strong>
							</p>
						))}

						<small className="subtotal__gift">
							<input type="checkbox" /> &nbsp; this order contains a gift
						</small>
					</>
				)}
				decimalScale={2}
				value={0}
				displayType="text"
				thousandSeparator={true}
				prefix={"₹"}
			/>
			<button>Proceed to checkout</button>
		</div>
	);
};

export default Subtotal;
