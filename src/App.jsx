import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section Placeholder */}
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to Dev Stack Builder
        </h1>
        <p className="text-gray-600 mt-4">
          Build your ultimate developer stack easily.
        </p>
      </div>
    </div>
  );
}

export default App;
