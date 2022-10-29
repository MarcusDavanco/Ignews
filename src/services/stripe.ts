import Stripe from "stripe";
import { version } from "../../package.json";

export const stripe = new Stripe(process.env.STRIPE_API_KEY, {
  //@ts-ignore
  apiVersion: null,
  appInfo: {
    name: "Ignews",
    version,
  },
});
