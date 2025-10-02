// Pricing.js
import React from 'react';

function Pricing() {
  const pricingPlans = [
    {
      name: 'Basic',
      price: '₦20,000',
      duration: '/Monthly',
      features: [
        '3 Days a Week',
        'Dedicated Trainer Allocated',
        'Swimming pool included',
        'Morning and Evening Batches',
      ],
      isHighlighted: false, // For the red button
    },
    {
      name: 'Standard',
      price: '₦50,000',
      duration: '/Monthly',
      features: [
        '3 Days a Week',
        'Dedicated Trainer Allocated',
        'Swimming pool included',
        'Morning and Evening Batches',
      ],
      isHighlighted: true, // This plan will have the red button
    },
    {
      name: 'Premium',
      price: '₦100,000',
      duration: '/Monthly',
      features: [
        '3 Days a Week',
        'Dedicated Trainer Allocated',
        'Swimming pool included',
        'Morning and Evening Batches',
      ],
      isHighlighted: false, // For the red button
    },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          <span className="relative inline-block">
            <span className="relative z-10">Pricing Plans</span>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/4 h-1 bg-red-600 z-0"></span>
          </span>
        </h2>
        <p className="mt-2 text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do
          eiusmod tempor incididunt ut labore.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {plan.name}
              </h3>
              <div className="text-5xl font-extrabold text-gray-900 mb-6">
                {plan.price}
                <span className="text-lg font-medium text-gray-600">
                  {plan.duration}
                </span>
              </div>
              <ul className="text-gray-600 space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center justify-center">
                    <svg
                      className="h-5 w-5 text-red-600 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 px-6 rounded-md text-white font-medium transition-colors duration-300 ${
                  plan.isHighlighted
                    ? 'bg-red-600 hover:bg-red-700'
                    : 'bg-gray-700 hover:bg-gray-800'
                }`}
              >
                Purchase Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;