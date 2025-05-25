import { loadStripe } from "@stripe/stripe-js";

// Replace with your test public key from Stripe Dashboard
export const stripePromise = loadStripe("pk_test_1234567890yourkeyhere");
