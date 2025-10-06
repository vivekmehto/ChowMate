import React from "react";

const Shimmer = () => {
  // Array to render multiple shimmer cards
  const shimmerArray = Array(9).fill(0);

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {shimmerArray.map((_, index) => (
        <div
          key={index}
          className="w-64 h-72 bg-gray-200 rounded-xl overflow-hidden animate-pulse m-4 flex flex-col"
        >
          <div className="w-full h-40 bg-gray-300"></div>
          <div className="h-6 bg-gray-300 m-4 rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
