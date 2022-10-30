import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import gitHub from "../assets/img/ico/github-icon.svg";
import javascript from "../assets/img/ico/javascript.svg";
import nodejs from "../assets/img/ico/nodejs-icon.svg";
import react from "../assets/img/ico/react.svg";
import redux from "../assets/img/ico/redux.svg";
import sequelize from "../assets/img/ico/sequelize.svg";
import typescript from "../assets/img/ico/typescript-icon.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Tecnologias</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={javascript} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={react} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={nodejs} alt="Image" />
                  <h5>Node Js</h5>
                </div>
                <div className="item">
                  <img src={typescript} alt="Image" />
                  <h5>TypeScript </h5>
                </div>
                <div className="item">
                  <img src={gitHub} alt="Image" />
                  <h5>GitHub </h5>
                </div>
                <div className="item">
                  <img src={redux} alt="Image" />
                  <h5>Redux </h5>
                </div>
                <div className="item">
                  <img src={sequelize} alt="Image" />
                  <h5>Sequelize </h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
