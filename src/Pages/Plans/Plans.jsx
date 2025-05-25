import React from "react";

const plans = [
  { id: 1, name: "Basic", price: "$9/month", features: ["Feature A", "Feature B"] },
  { id: 2, name: "Pro", price: "$29/month", features: ["Feature A", "Feature B", "Feature C"] },
  { id: 3, name: "Enterprise", price: "Contact us", features: ["All features"] },
];
const Plans = () => {
  const handleSubscribe = (plan) => {
    alert(`Subscribed to ${plan.name} plan`);
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
