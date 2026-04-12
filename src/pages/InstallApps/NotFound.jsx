import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">

        {/* Illustration */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            {/* Cat / Icon */}
            <div className="text-7xl">🐱</div>

            {/* Not Found Badge */}
            {/* <div className="absolute left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-3 py-1 rounded-md text-xs font-bold shadow">
              NOT FOUND
            </div> */}
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 uppercase tracking-wide">
          OPPS!! APP NOT FOUND
        </h1>

        {/* Description */}
        <p className="text-gray-500 mt-3 text-sm">
          The app you are requesting is not found on our system. Please try another apps.
        </p>

        {/* Button */}
        <button
          onClick={() => window.history.back()}
          className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-md transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;