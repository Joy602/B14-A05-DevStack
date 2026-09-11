import React from "react";

const SelectedList = ({ selectedStacks, onRemove }) => {
  const totalPrice = selectedStacks.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 mb-12 bg-white rounded-2xl shadow-md border border-gray-100">
      <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-100">
        <h3 className="text-2xl font-bold text-gray-800">
          Your Selected Stacks
        </h3>
        <span className="text-indigo-600 font-bold text-lg">
          Total: ${totalPrice}
        </span>
      </div>

      {selectedStacks.length === 0 ? (
        <p className="text-gray-500 text-center py-4">
          No stacks selected yet. Choose from above!
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {selectedStacks.map((stack) => (
            <div
              key={stack.id}
              className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-200"
            >
              <div>
                <h4 className="font-bold text-gray-800">{stack.name}</h4>
                <span className="text-sm font-semibold text-indigo-600">
                  ${stack.price}
                </span>
              </div>
              <button
                onClick={() => onRemove(stack.id)}
                className="bg-red-500 text-white text-xs px-3 py-1.5 rounded-lg hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectedList;
