import React, { FC } from "react";
import { useRecoilValue } from "recoil";
import { destinations } from "../constants/destinations";
import totalsState from "../recoil/selectors/totalState";

interface TotalsProps {}

const Totals: FC<TotalsProps> = () => {
	const totals = useRecoilValue(totalsState);
	console.log("total", totals);
	return (
		<div>
			<h2>Totals</h2>
			<div>{totals.subTotal.toFixed(2)}</div>
			<div>{(destinations as any)[totals.shipping].toFixed(2)}</div>
			<div>{totals.total.toFixed(2)}</div>
		</div>
	);
};

export default Totals;
