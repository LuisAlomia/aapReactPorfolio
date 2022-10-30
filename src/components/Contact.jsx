import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  const [send, setSend] = useState(false);

  const handleSubmit = async (e) => {
    setSend(true);
    setTimeout(() => {
      setSend(false);
    }, 2000);
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Contacta con migo</h2>
                  <form
                    onSubmit={handleSubmit}
                    action="https://formsubmit.co/08de2f24c73221785710d281508d5f64"
                    method="POST"
                  >
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="Nombre"
                          name="nombre"
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="Apellido"
                          name="apellido"
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          placeholder="Email"
                          name="email"
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          placeholder="Telefono"
                          name="telefono"
                          required
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          placeholder="Mensaje"
                          name="mensaje"
                          required
                        ></textarea>
                        <button type="submit">
                          <span>Enviar</span>
                        </button>
                      </Col>
                    </Row>
                    {send === true && (
                      <Row>
                        <p className=" sendData my-4">Mensaje enviado</p>
                      </Row>
                    )}
                    <input
                      type="hidden"
                      name="_next"
                      value="https://flav-luisfidelalomiav.netlify.app/"
                    />
                    <input type="hidden" name="_captcha" value="false" />
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
