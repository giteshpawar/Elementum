import "./Progress.css";

import meeting1 from "../assets/meeting1.png";
import meeting2 from "../assets/meeting2.png";

const Progress = () => {
  return (
    <section id="studio" className="progress">

      <div className="progress-row">

        <div className="image">
          <img src={meeting1} alt="Meeting" />
        </div>

        <div className="text">
          <h2>
            <span className="can">Tomorrow</span> should
            <br />
            be better than <span className="see">today</span>
          </h2>

          <p>
            We are a team of strategists, designers communicators,
            researchers. Together, we believe that progress only
            happens when you refuse to play things safe.
          </p>

          <a href="/" className="read-more">
            Read more
          </a>
        </div>

      </div>

      <div className="progress-row">

        <div className="text">
          <h2>
            <span className="see">See</span> how we can
            <br />
            help you <span className="can">progress</span>
          </h2>

          <p>
            We add a layer of fearless insights and action that
            allows change makers to accelerate their progress in
            areas such as brand, design, digital, comms and social
            research.
          </p>

          <a href="/" className="read-more">
            Read more
          </a>
        </div>

        <div className="image">
          <img src={meeting2} alt="Meeting" />
        </div>

      </div>

    </section>
  );
};

export default Progress;