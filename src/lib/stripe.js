import "server-only";

import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const plans = {
  essentiel: {
    name: "Essentiel",
    priceId: "price_1RNAQiEF0zCpiQc1ZW9A6wLJ",
  },
  pro: {
    name: "Pro",
    priceId: "price_1RNARrEF0zCpiQc1sLGdxEQH",
  },
  premium: {
    name: "Premium",
    priceId: "price_1RNASUEF0zCpiQc1V0Sv6XUv",
  },
};
