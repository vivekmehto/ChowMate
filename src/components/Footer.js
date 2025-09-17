import { Link } from "react-router";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand / Logo */}
        <div className="footer-logo">
          <h2>ChowMate 🍲♟️</h2>
          <p>Your smart food delivery partner</p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <Link href="https://facebook.com">Facebook</Link>
          <Link href="https://instagram.com">Instagram</Link>
          <Link href="https://twitter.com">Twitter</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ChowMate. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
