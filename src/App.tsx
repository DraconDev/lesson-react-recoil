import React, { FC } from "react";
import { RecoilRoot } from "recoil";
import AvailableItems from "./components/AvailableItems";
import Cart from "./components/Cart";
import CartItems from "./components/CartItems";
import Shipping from "./components/Shipping";
import Totals from "./components/Totals";

interface AppProps {}

const App: FC<AppProps> = () => {
	return (
		<RecoilRoot>
			<AvailableItems></AvailableItems>
			<Cart></Cart>
			<CartItems></CartItems>
			<Shipping></Shipping>
			<Totals></Totals>
		</RecoilRoot>
	);
};

export default App;
