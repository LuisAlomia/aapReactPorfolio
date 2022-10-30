import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import eCommerce from "../assets/img/project/eCommerce.png";
import rickAndMorty from "../assets/img/project/rickAndMorty.png";
import theMovieInfo from "../assets/img/project/theMovieInfo.png";
import notesApp from "../assets/img/project/notesApp.png";
import api from "../assets/img/project/api1.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";

export const Projects = () => {
  const projects = [
    {
      title: "The Movie Info",
      description:
        "Tecnologias (Vite, React, React-router-dom, React context Api, css módulos y Axios.)",
      imgUrl: theMovieInfo,
      deploy: "https://flav-theinfomovies.netlify.app/",
      code: "https://github.com/LuisAlomia/The-Info-Movies",
    },
    {
      title: "Rick And Morty APP",
      description:
        "Tecnologias (Vite, React, custom Hooks, css módulos y Fetch Api.)",
      imgUrl: rickAndMorty,
      deploy: "https://flav-rickandmorty-app.netlify.app/",
      code: "https://github.com/LuisAlomia/RickAndMortyAPP",
    },
    {
      title: "e-Commerce",
      description:
        "Tecnoologias (Vite, React, Redux, css módulos, Mongo DB, Express, JWT JSON Web Token, roles y Axios.)",
      imgUrl: eCommerce,
      deploy: "https://github.com/LuisAlomia/aComerce",
      code: "https://github.com/LuisAlomia/aComerce",
    },
    {
      title: "Notes App",
      description:
        "Tecnoologias (Vite, React, css módulos, Node JS, Mongo DB, Express y Axios.)",
      imgUrl: notesApp,
      deploy: "https://flav-notesapp.netlify.app/",
      code: "https://github.com/LuisAlomia/NotesApp",
    },
    {
      title: "API Blog",
      description:
        "Tecnoologias (Node JS, Posgress, Express, JWT JSON Web Token, roles, autenticacion, corss.)",
      imgUrl: api,
      deploy: "https://github.com/LuisAlomia/apiBlog",
      code: "https://github.com/LuisAlomia/apiBlog",
    },
    {
      title: "API Chat",
      description:
        "Tecnoologias (Node JS, Posgress, Express, JWT JSON Web Token, roles, autenticacion, rutas protegidas.)",
      imgUrl: api,
      deploy: "https://github.com/LuisAlomia/appChat",
      code: "https://github.com/LuisAlomia/appChat",
    },
    {
      title: "API de Comidas",
      description:
        "Tecnoologias (Node JS, Posgress, Express, JWT JSON Web Token, roles, autenticacion.)",
      imgUrl: api,
      deploy: "https://github.com/LuisAlomia/apiRecetas/",
      code: "https://github.com/LuisAlomia/apiRecetas/",
    },
  ];

  const react = [
    {
      title: "The Movie Info",
      description:
        "Tecnologias (Vite, React, React-router-dom, React context Api, css módulos y Axios.)",
      imgUrl: theMovieInfo,
      deploy: "https://flav-theinfomovies.netlify.app/",
      code: "https://github.com/LuisAlomia/The-Info-Movies",
    },
    {
      title: "Rick And Morty APP",
      description:
        "Tecnologias (Vite, React, custom Hooks, css módulos y Fetch Api.)",
      imgUrl: rickAndMorty,
      deploy: "https://flav-rickandmorty-app.netlify.app/",
      code: "https://github.com/LuisAlomia/RickAndMortyAPP",
    },
    {
      title: "e-Commerce",
      description:
        "Tecnoologias (Vite, React, Redux, css módulos, Mongo DB, Express, JWT JSON Web Token, roles y Axios.)",
      imgUrl: eCommerce,
      deploy: "https://github.com/LuisAlomia/aComerce",
      code: "https://github.com/LuisAlomia/aComerce",
    },
    {
      title: "Notes App",
      description:
        "Tecnoologias (Vite, React, css módulos, Node JS, Mongo DB, Express y Axios.)",
      imgUrl: notesApp,
      deploy: "https://flav-notesapp.netlify.app/",
      code: "https://github.com/LuisAlomia/NotesApp",
    },
  ];

  const node = [
    {
      title: "API Blog",
      description:
        "Tecnoologias (Node JS, Posgress, Express, JWT JSON Web Token, roles, autenticacion, corss.)",
      imgUrl: api,
      deploy: "https://github.com/LuisAlomia/apiBlog",
      code: "https://github.com/LuisAlomia/apiBlog",
    },
    {
      title: "API Chat",
      description:
        "Tecnoologias (Node JS, Posgress, Express, JWT JSON Web Token, roles, autenticacion, rutas protegidas.)",
      imgUrl: api,
      deploy: "https://github.com/LuisAlomia/appChat",
      code: "https://github.com/LuisAlomia/appChat",
    },
    {
      title: "API de Comidas",
      description:
        "Tecnoologias (Node JS, Posgress, Express, JWT JSON Web Token, roles, autenticacion.)",
      imgUrl: api,
      deploy: "https://github.com/LuisAlomia/apiRecetas/",
      code: "https://github.com/LuisAlomia/apiRecetas/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Estos son algunos de los proyectos en los que he trabajado
                    de manera personal, haciendo uso del stack de tecnologías
                    MERN (MogooDB, Express, React, Redux, Node JS)
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Todos</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">React</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Node Js</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {react.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {node.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
        <button className="buttonColor">
          <a
            className="buttonLink buttonColor"
            href="https://www.linkedin.com/in/luis-fidela-alomia-valencia-87b24923b/"
            target={"_blank"}
            rel="noreferrer"
          >
            Contacta con migo <ArrowRightCircle size={25} />{" "}
          </a>
        </button>
      </Container>
    </section>
  );
};
