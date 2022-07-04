import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faHtml5,
  faReact,
  faPython,
  faCss3Alt,
  faNodeJs,
  faGitAlt,
  faDocker,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faFileCode } from "@fortawesome/free-solid-svg-icons";
import Carregando from "../components/Carregando";

class Habilidades extends Component {
  state = { carregou: true };

  componentDidMount() {
    this.setState({ carregou: false });
    setTimeout(() => {
      this.setState({ carregou: true });
    }, 2000);
  }

  render() {
    const { carregou } = this.state;
    return (
      <div className="abaixo">
        {!carregou ? (
          <Carregando />
        ) : (
          <div>
            <h3>Habilidades</h3>
            <div className="container">
              <div className="habilidade-card card">
                <FontAwesomeIcon size="5x" icon={faJs} />
                <p className="habilidade-texto">Javascript</p>
              </div>
              <div className="habilidade-card card">
                <FontAwesomeIcon size="5x" icon={faHtml5} />
                <p className="habilidade-texto">HTML</p>
              </div>
              <div className="habilidade-card card">
                <FontAwesomeIcon size="5x" icon={faCss3Alt} />
                <p className="habilidade-texto">CSS</p>
              </div>
              <div className="habilidade-card card">
                <FontAwesomeIcon size="5x" icon={faReact} />
                <p className="habilidade-texto">React</p>
              </div>
              <div className="habilidade-card card">
                <FontAwesomeIcon size="5x" icon={faNodeJs} />
                <p className="habilidade-texto">Node</p>
              </div>
              <div className="habilidade-card card">
                <FontAwesomeIcon size="5x" icon={faDatabase} />
                <p className="habilidade-texto">SQL</p>
              </div>
              <div className="habilidade-card card">
                <FontAwesomeIcon size="5x" icon={faGitAlt} />
                <p className="habilidade-texto">Git</p>
              </div>
              <div className="habilidade-card card">
                <FontAwesomeIcon size="5x" icon={faPython} />
                <p className="habilidade-texto">Python</p>
              </div>
              <div className="habilidade-card card">
                <FontAwesomeIcon size="5x" icon={faFileCode} />
                <p className="habilidade-texto">Algoritmos</p>
              </div>
              <div className="habilidade-card card">
                <FontAwesomeIcon size="5x" icon={faDocker} />
                <p className="habilidade-texto">Docker</p>
              </div>
              <div className="habilidade-card card">
                <FontAwesomeIcon size="5x" icon={faBootstrap} />
                <p className="habilidade-texto">Bootstrap</p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Habilidades;
