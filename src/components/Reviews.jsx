import React from "react";

function ReviewSection() {
  const rating = 4.2;
  const aspects = [
    { name: "Design", value: 4.5 },
    { name: "Quality", value: 4.0 },
    { name: "Fit", value: 3.8 },
    { name: "Comfort", value: 4.2 },
  ];

  const comments = [
    { name: "Arun", review: "Nice product 👌" },
    { name: "Meena", review: "Super quality, worth the money!" },
    { name: "Rahul", review: "Comfortable and stylish." },
    { name: "Priya", review: "Good fitting, loved it ❤️" },
  ];

  return (
    <div className="p-6 bg-gray-100 mt-8 rounded-lg">
      {/* Overall Rating */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Customer Reviews</h2>
        <p className="text-4xl font-bold text-green-600 mt-2">{rating} ⭐</p>
        <p className="text-gray-600">Based on 120 reviews</p>
      </div>

      {/* Aspects Circle Progress */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {aspects.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white p-4 rounded-xl shadow"
          >
            <div className="relative w-20 h-20">
              <svg className="w-20 h-20 transform -rotate-90">
                <circle
                  cx="40"
                  cy="40"
                  r="35"
                  stroke="gray"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="35"
                  stroke="green"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={2 * Math.PI * 35}
                  strokeDashoffset={
                    2 * Math.PI * 35 * (1 - item.value / 5)
                  }
                  strokeLinecap="round"
                />
              </svg>
              <p className="absolute inset-0 flex items-center justify-center font-bold">
                {item.value}
              </p>
            </div>
            <p className="mt-2">{item.name}</p>
          </div>
        ))}
      </div>

      
    </div>
  );
}

export default ReviewSection;
