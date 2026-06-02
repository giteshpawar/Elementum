import "./Testimonials.css";

import test1 from "../assets/hero1.jpeg";
import test2 from "../assets/hero2.jpeg";
import test3 from "../assets/hero3.jpeg";
import test4 from "../assets/hero4.jpeg";
import test5 from "../assets/hero5.jpeg";
import test6 from "../assets/hero6.jpeg";
import test7 from "../assets/hero7.jpeg";
import test8 from "../assets/hero1.jpeg";

const Testimonials = () => {
  return (
    <section id="contact" className="testimonials">

      <h2>
        <span className="what">What</span> our customer
        <br />
        says <span className="can">About Us</span>
      </h2>

      <div className="testimonial-area">

        <img src={test1} alt="" className="avatar a1" />
        <img src={test2} alt="" className="avatar a2" />
        <img src={test3} alt="" className="avatar a3" />
        <img src={test4} alt="" className="avatar a4" />
        <img src={test5} alt="" className="avatar a5" />
        <img src={test6} alt="" className="avatar a6" />
        <img src={test7} alt="" className="avatar a7" />
        <img src={test8} alt="" className="avatar a8" />

        <div className="card">

          <div className="quote-start">❝</div>

          <p>
            Elementum delivered the site within the timeline
            as they requested. In the end, the client found a
            50% increase in traffic within days since its launch.
            They also had an impressive ability to use technologies
            that the company hadn't used, which have also proved
            to be easy to use and reliable.
          </p>

          <div className="quote-end">❞</div>

        </div>

      </div>

    </section>
  );
};

export default Testimonials;