import React from "react";
import { stripePromise } from "../../lib/stripe";

// {/* <p className="text-yellow-600 bg-yellow-100 p-2 rounded mb-4">
//   ⚠️ Stripe redirect is fake right now. Backend integration is pending.
// </p> */}

const plans = [
  { id: 1, name: "Basic", price: "$9/month", features: ["Feature A", "Feature B"] },
  { id: 2, name: "Pro", price: "$29/month", features: ["Feature A", "Feature B", "Feature C"] },
  { id: 3, name: "Enterprise", price: "Contact us", features: ["All features"] },
];
const Plans = () => {
  const handleSubscribe = async () => {
  const stripe = await stripePromise;

  // Fake session ID for now, backend will generate this later
  const sessionId = "dummy_session_id";

  // Redirect to Stripe checkout (not real yet)
  await stripe.redirectToCheckout({
    sessionId: sessionId,
  });
};

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Subscription Plans</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map(plan => (
          <div key={plan.id} className="border rounded-lg p-6 shadow hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
            <p className="text-2xl font-bold mb-4">{plan.price}</p>
            <ul className="mb-6 list-disc list-inside text-gray-700">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button
              onClick={() => handleSubscribe(plan)}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
