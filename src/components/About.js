const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Header Section */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          About <span className="text-amber-400">ChowMate</span>
        </h1>
        <p className="text-gray-600 text-lg mb-10">
          Your trusted food companion — delivering happiness, one meal at a
          time.
        </p>

        {/* Mission Section */}
        <div className="bg-white shadow-lg rounded-2xl p-8 mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            At ChowMate, our mission is to make food delivery fast, reliable,
            and fun! Whether you’re craving a comforting meal or discovering new
            cuisines, we’re here to connect you with your favorite local
            restaurants and hidden gems around the city.
          </p>
        </div>

        {/* Vision Section */}
        <div className="bg-white shadow-lg rounded-2xl p-8 mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">
            Our Vision
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We believe food brings people together. Our vision is to create a
            platform that not only delivers meals but also builds a community of
            food lovers. With the power of technology, we aim to make every bite
            memorable and every order seamless.
          </p>
        </div>

        {/* Team Section */}
        <div className="bg-white shadow-lg rounded-2xl p-8 mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">
            Meet the Creator
          </h2>
          <p className="text-gray-600 leading-relaxed">
            ChowMate was crafted with passion and code by{" "}
            <span className="font-semibold text-gray-800">Vivek Mehto</span>.
            Combining creativity, design, and a love for technology, ChowMate is
            built to offer a delightful user experience and empower small
            restaurants to reach food lovers everywhere.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-10">
          <a
            href="/contact"
            className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-orange-600 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
