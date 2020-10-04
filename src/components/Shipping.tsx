import React, { FC } from "react";
import { destinations } from "./../constants/destinations";
import { useRecoilState } from "recoil";
import { shippingState } from "../recoil/atoms/shippingState";

interface ShippingProps {}

const Shipping: FC<ShippingProps> = () => {
	const [shipping, setShipping] = useRecoilState(shippingState);
	// console.log("shipping", shipping);
	return (
		<div>
			{Object.entries(destinations).map(([country, price]) => {
				// console.log("country, price", country, price);
				return (
					<button
						onClick={() => {
							setShipping(country);
						}}
					>
						{country} at {price}
						{country === shipping ? <span> Ship</span> : ""}
					</button>
				);
			})}
		</div>
	);
};

export default Shipping;
