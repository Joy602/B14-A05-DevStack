import React, { useState, useEffect } from "react";
import stacksData from "../data/stacks.json";

const StackCards = () => {
  const [stacks, setStacks] = useState([]);
  const [selectedStacks, setSelectedStacks] = useState([]);

  useEffect(() => {
    setStacks(stacksData);
  }, []);

  const handleSelect = (stack) => {
    if (!selectedStacks.find((item) => item.id === stack.id)) {
      setSelectedStacks([...selectedStacks, stack]);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Selection Counter Header */}
      <div className="mb-8 bg-white p-4 rounded-xl shadow-sm flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">
          Available Tech Stacks
        </h2>
        <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-lg font-semibold text-sm">
          Selected Stacks: {selectedStacks.length}
        </span>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stacks.map((stack) => {
          const isSelected = selectedStacks.some(
            (item) => item.id === stack.id,
          );
          return (
            <div
              key={stack.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col"
            >
              <img
                src={stack.image}
                alt={stack.name}
                className="w-full h-44 object-cover"
              />
              <div className="p-5 flex flex-col flex-grow">
                <span className="self-start text-xs font-semibold bg-indigo-100 text-indigo-600 px-2.5 py-1 rounded-full">
                  {stack.category}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mt-3">
                  {stack.name}
                </h3>
                <p className="text-gray-600 text-sm mt-2 flex-grow">
                  {stack.description}
                </p>
                <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
                  <span className="text-lg font-bold text-indigo-600">
                    ${stack.price}
                  </span>
                  <button
                    onClick={() => handleSelect(stack)}
                    disabled={isSelected}
                    className={`text-sm px-4 py-2 rounded-lg transition ${
                      isSelected
                        ? "bg-green-600 text-white cursor-not-allowed"
                        : "bg-indigo-600 text-white hover:bg-indigo-700"
                    }`}
                  >
                    {isSelected ? "Selected" : "Select Stack"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StackCards;
