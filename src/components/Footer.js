import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 mt-1 px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between gap-8">
        {/* Brand / Logo */}
        <div>
          <Link to="/">
            <h2 className="text-2xl font-bold text-amber-400 mb-1">
              ChowMate 🍲♟️
            </h2>
          </Link>
          <p className="text-sm text-gray-400">
            Your smart food delivery partner
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2">
          <Link
            className="text-gray-300 text-sm hover:text-amber-400 transition"
            to="/about"
          >
            About Us
          </Link>
          <Link
            className="text-gray-300 text-sm hover:text-amber-400 transition"
            to="/contact"
          >
            Contact
          </Link>
        </div>

        {/* Social Media */}
        <div className="flex gap-2">
          <a
            className="text-gray-300 text-sm hover:text-amber-400 transition"
            href="https://facebook.com"
            target="_blank"
          >
            Facebook
          </a>
          <a
            className="text-gray-300 text-sm hover:text-amber-400 transition"
            href="https://instagram.com"
            target="_blank"
          >
            Instagram
          </a>
          <a
            className="text-gray-300 text-sm hover:text-amber-400 transition"
            href="https://twitter.com"
            target="_blank"
          >
            Twitter
          </a>
        </div>
      </div>

      <div className="text-center border-t border-gray-700 mt-8 pt-4">
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} ChowMate. All rights reserved.
        </p>
        <p className="text-sm">
          Made with <span className="text-red-500">❤️</span> by{" "}
          <span className="font-semibold text-white">
            <a
              className="text-gray-300 text-sm hover:text-amber-400 transition"
              href="https://www.instagram.com/vivekmehto/"
              target="_blank"
            >
              Vivek Mehto
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
