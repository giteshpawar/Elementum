import "./Services.css";

const services = [
  {
    small: "Office of multiple interest content",
    title: "Collaborative & partnership",
  },
  {
    small: "The hanger US Air force digital experimental",
    title: "We talk about our weight",
  },
  {
    small: "Delta faucet content, social, digital",
    title: "Piloting digital confidence",
  },
];

const Services = () => {
  return (
    <section id="services" className="services">
        <div className="vector-2516"></div>
      <div className="heading">
        <h2>
          What we <span className="canny">can</span>
          <br />
          <span  className="can">offer</span> you!
        </h2>
      </div>

      <div className="services-list">
        {services.map((item, index) => (
          <div className="service" key={index}>

            <p>{item.small}</p>

            <h3>{item.title}</h3>

            <span>→</span>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Services;