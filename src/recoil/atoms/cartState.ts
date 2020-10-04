import { atom } from "recoil";

type CartStateProps = {
	key: string;
	default: {};
};
export const cartState = atom({
	key: "cartState",
	default: {} as any,
});
