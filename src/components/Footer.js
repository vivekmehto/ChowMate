import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand / Logo */}
        <div className="footer-logo">
          <Link to="/">
            <h2>ChowMate 🍲♟️</h2>
          </Link>
          <p>Your smart food delivery partner</p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank">
            Facebook
          </a>
          <a href="https://instagram.com" target="_blank">
            Instagram
          </a>
          <a href="https://twitter.com" target="_blank">
            Twitter
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ChowMate. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
