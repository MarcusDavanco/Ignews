import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_API_KEY, {
  //@ts-ignore
  apiVersion: null,
  appInfo: {
    name: "Ignews",
    version: "0.10",
  },
});
