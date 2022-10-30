import { useState } from "react";
import { Col } from "react-bootstrap";
import navIcon2 from "../assets/img/nav-icon4.svg";
import navIcon5 from "../assets/img/nav-icon5.svg";

export const ProjectCard = ({ title, description, imgUrl, deploy, code }) => {
  const [watch, setWatch] = useState(false);

  const watchLink = () => {
    setWatch(!watch);
  };
  return (
    <Col size={12} sm={6} md={4}>
      <div onClick={watchLink} className="proj-imgbx">
        <img className="proj-img" src={imgUrl} />
        <div className="proj-txtx">
          {watch === false ? (
            <>
              <h4>{title}</h4>
              <span>{description}</span>
            </>
          ) : (
            <div className="social-icon">
              <h4>{title}</h4>
              <a href={deploy} target={"_blank"} rel="noreferrer">
                <img src={navIcon5} alt="GitHab" />
              </a>
              <a href={code} target={"_blank"} rel="noreferrer">
                <img src={navIcon2} alt="GitHab" />
              </a>
            </div>
          )}
        </div>
      </div>
    </Col>
  );
};
