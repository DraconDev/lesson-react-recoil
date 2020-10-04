import React from "react";
import { selector } from "recoil";
import { destinations } from "../../constants/destinations";
import { inventory } from "../../constants/inventory";
import { cartState } from "../atoms/cartState";
import { shippingState } from "../atoms/shippingState";

const totalsState = selector({
	key: "totalsState",
	get: ({ get }) => {
		const cart = get(cartState);
		// console.log("cart", cart);
		const shipping = get(shippingState);
		console.log("shipping", shipping);
		const shippingTotal = (destinations as any)[shipping];
		const subTotal = Object.entries(cart).reduce((acc, [key, value]) => {
			console.log("acc,key,value", acc, key, value, inventory[key].price);
			return acc + inventory[key].price * Number(value);
		}, 0);

		// return { cart: cart, shipping: shipping };
		console.log("shippingTotal", shippingTotal);

		return { subTotal, shipping: shipping, total: subTotal + shippingTotal };
	},
});

export default totalsState;
