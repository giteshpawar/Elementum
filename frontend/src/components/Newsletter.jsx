import "./Newsletter.css";

const Newsletter = () => {
    return (
      
        <section  id="faq" className="newsletter">
            <div className="purple-shape"></div>
      <div className="newsletter-content">
        <h2>
          Subscribe to
          <br />
          our newsletter
        </h2>


        <p>
          To make your stay special and even more memorable
        </p>

        <button className="subscribe-btn">
          Subscribe Now
        </button>
      </div>

      <div className="footer-section">

        <div className="footer-column">
          <h4>Company</h4>
          <a href="/">Home</a>
          <a href="/">Studio</a>
          <a href="/">Service</a>
          <a href="/">Blog</a>
        </div>

        <div className="footer-column">
          <h4>Terms & Policies</h4>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms & Conditions</a>
          <a href="/">Explore</a>
          <a href="/">Accessibility</a>
        </div>

        <div className="footer-column">
          <h4>Follow Us</h4>
          <a href="/">Instagram</a>
          <a href="/">LinkedIn</a>
          <a href="/">Youtube</a>
          <a href="/">Twitter</a>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <p>1499W Fulton ste, STE</p>
          <p>2D Chicago, IL 63867.</p>
          <p>1(23) 456789000</p>
          <p>info@elementum.com</p>
        </div>

      </div>

      <div className="copyright">
        ©2023 Elementum. All rights reserved
      </div>

    </section>
  );
};

export default Newsletter;