import { BUY_CAKE } from "./cakeIceCreamTypes";
import { BUY_ICECREAM } from "./cakeIceCreamTypes";
export const buyCake = () => {
  return {
    type: BUY_CAKE,
  };
};
export const buyIceCream = () => {
  return {
    type: BUY_ICECREAM,
  };
};
