import "./Hero.css";

import hero1 from "../assets/hero1.jpeg";
import hero2 from "../assets/hero2.jpeg";
import hero3 from "../assets/hero3.jpeg";
import hero4 from "../assets/hero4.jpeg";
import hero5 from "../assets/hero5.jpeg";
import hero6 from "../assets/hero6.jpeg";
import hero7 from "../assets/hero7.jpeg";
import hero8 from "../assets/hero1.jpeg";


const Hero = () => {
  const images = [hero1, hero2, hero3, hero4, hero5, hero6, hero7,hero8];

  return (
    <section id="home" className="hero">
      <div className="left-black"></div>
      <div className="left-orange"></div>
      

      <div className="hero-content">
        <h1>
          The <span className="thinkers">thinkers</span> and
          <br />
          doers were ch<span className="pink">anging</span>
          <br />
          the <span className="green">status</span> Quo with
        </h1>

        <p>
          We are a team of strategists, designers communicators,
          researchers. Together, we believe that progress only happens
          when you refuse to play things safe.
        </p>
      </div>

      <div className="hero-images">
        {images.map((img, i) => (
          <img key={i} src={img} alt={`team-${i}`} />
        ))}
      </div>
    </section>
  );
};

export default Hero;