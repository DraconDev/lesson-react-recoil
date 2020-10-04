import { atom } from "recoil";

export const shippingState = atom({
	key: "shippingState",
	default: "US",
});
