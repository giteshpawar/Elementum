import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-logo">
          <h2>Elementum</h2>
        </div>

        <div className="footer-links">

          <div>
            <h4>Company</h4>
            <a href="/">Home</a>
            <a href="/">Studio</a>
            <a href="/">Services</a>
            <a href="/">Contact</a>
          </div>

          <div>
            <h4>Resources</h4>
            <a href="/">Blog</a>
            <a href="/">Careers</a>
            <a href="/">FAQs</a>
          </div>

          <div>
            <h4>Social</h4>
            <a href="/">Instagram</a>
            <a href="/">LinkedIn</a>
            <a href="/">Twitter</a>
          </div>

        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Elementum. All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;