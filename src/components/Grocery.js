const Grocery = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-br from-orange-100 via-yellow-50 to-orange-200 text-center px-4">
      <h1 className="text-5xl font-extrabold text-orange-600 mb-4">
        🛒 ChowMate Grocery
      </h1>
      <p className="text-2xl text-gray-700 font-medium animate-bounce">
        Launching Soon 🚀
      </p>
      <p className="mt-4 text-gray-600 max-w-md">
        We’re working hard to bring fresh groceries to your doorstep. Stay tuned
        for the launch of our grocery section — powered by love, freshness, and
        ChowMate!
      </p>
      <button className="mt-8 px-6 py-3 bg-orange-500 text-white rounded-full text-lg font-semibold shadow-lg hover:bg-orange-600 transition duration-300">
        Notify Me 🔔
      </button>
    </div>
  );
};

export default Grocery;
