import "./Features.css";

const Features = () => {
  return (
    <section className="features">

      <div className="feature">
        <div>
          <h2>Tomorrow should be better than today</h2>
          <p>
            We believe progress only happens when you refuse to play things safe.
          </p>
        </div>

        <img src="/hero/team1.jpg" alt="" />
      </div>

      <div className="feature reverse">
        <img src="/hero/team2.jpg" alt="" />

        <div>
          <h2>See how we can help you progress</h2>
          <p>
            We add insight and action that allows change makers to accelerate.
          </p>
        </div>
      </div>

    </section>
  );
};

export default Features;