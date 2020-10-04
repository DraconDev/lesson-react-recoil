import React from "react";
import { useRecoilValue } from "recoil";
import { inventory } from "../constants/inventory";
import { cartState } from "../recoil/atoms/cartState";

function CartItems() {
	const cart = useRecoilValue(cartState);
	if (Object.keys(cart).length === 0) return <p>no items</p>;
	return (
		<ul>
			{/* {Object.entries(cart).map(<T, U extends keyof T>([id, quantity]) => { */}
			{Object.entries(cart).map(([id, quantity]) => {
				// console.log("id, quantity", id, quantity);
				return (
					<li key={id}>
						{inventory[id].name} x {quantity}
					</li>
				);
			})}
		</ul>
	);
}

export default CartItems;
