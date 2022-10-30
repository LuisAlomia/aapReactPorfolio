import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo1.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon4.svg";
import navIcon3 from "../assets/img/nav-icon6.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/luis-fidela-alomia-valencia-87b24923b/"
                target={"_blank"}
                rel="noreferrer"
                title="linkedin"
              >
                <img src={navIcon1} alt="linkedin" />
              </a>
              <a
                href="https://github.com/LuisAlomia/"
                target={"_blank"}
                rel="noreferrer"
                title="github"
              >
                <img src={navIcon2} alt="GitHab" />
              </a>
              <a
                href="https://drive.google.com/file/d/1lNphFcSB9BsLDaX3_yk_ft8ffeoV-tPb/view?usp=share_link"
                target={"_blank"}
                rel="noreferrer"
                title="CV"
              >
                <img src={navIcon3} alt="CV" title="CV" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
