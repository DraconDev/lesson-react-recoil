import React from "react";
import { useRecoilState } from "recoil";
import { inventory } from "../constants/inventory";
import { cartState } from "../recoil/atoms/cartState";

function AvailableItems() {
	const [cart, setCart] = useRecoilState(cartState);
	// console.log("cart", cart);
	return (
		<div>
			<h2>Available items</h2>
			<pre>{JSON.stringify(cart, null, 2)}</pre>
			<ul>
				{Object.entries(inventory).map(([key, { name, price }]) => (
					<li key={key}>
						<button
							onClick={() => {
								setCart({ ...cart, [key]: (cart[key] || 0) + 1 });
							}}
						>
							{name} ${price}
						</button>
						<button
							onClick={() => {
								const copy = { ...cart };
								// console.log("copy", copy, key, copy[key]);
								if (copy[key] === 1) {
									delete copy[key];
									setCart(copy);
								} else {
									setCart({ ...copy, [key]: copy[key] - 1 });
								}
							}}
						>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default AvailableItems;
