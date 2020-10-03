import React, { FC } from "react";
import { atom, RecoilRoot, useRecoilState } from "recoil";

interface AppProps {}

const inventory = {
	a: { name: "coffee", price: 5 },
	b: { name: "tea", price: 25 },
	c: { name: "milk", price: 54 },
};

const destinations = {
	US: 25,
	CA: 35,
	CO: 12,
};

const App: FC<AppProps> = () => {
	return (
		<RecoilRoot>
			<div></div>
			<AvailableItems></AvailableItems>
			<Cart></Cart>
		</RecoilRoot>
	);
};

const cartState = atom({ key: "cartState", default: {} as any });

function AvailableItems() {
	const [cart, setCart] = useRecoilState(cartState);

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
								console.log("copy", copy, key, copy[key]);
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

function Cart() {
	return (
		<div>
			<h2>Cart</h2>
		</div>
	);
}

export default App;
