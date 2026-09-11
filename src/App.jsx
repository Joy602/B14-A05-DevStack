import React, { useState } from 'react';
import Navbar from './components/Navbar';
import StackCards from './components/StackCards';
import SelectedList from './components/SelectedList';

function App() {
  const [selectedStacks, setSelectedStacks] = useState([]);

  const handleSelect = (stack) => {
    if (!selectedStacks.find((item) => item.id === stack.id)) {
      setSelectedStacks([...selectedStacks, stack]);
    }
  };

  const handleRemove = (id) => {
    setSelectedStacks(selectedStacks.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="text-center py-16 bg-white shadow-sm mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Build Your Ultimate Dev Stack</h1>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Choose and customize the best modern technologies for your next web application project with ease.
        </p>
      </div>

      <SelectedList selectedStacks={selectedStacks} onRemove={handleRemove} />

      <StackCards selectedStacks={selectedStacks} onSelect={handleSelect} />
    </div>
  );
}

export default App;