import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Carregando from '../components/Carregando';
import Formulario from '../components/Formulario';

function Contato() {
  const ONE_SECOND = 1000;
  const [carregou, setCarregou] = useState(false);
  const [github, setGithub] = useState({});

  const getGithub = async () => {
    const fetchGithub = await fetch('https://api.github.com/users/xlucasbitencourt', {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    });
    const data = await fetchGithub.json();
    setGithub(data);
    setCarregou(true);
  };

  useEffect(() => {
    setTimeout(() => {
      getGithub();
    }, ONE_SECOND);
  }, []);

  return (
    <div className="abaixo">
      {!carregou ? (
        <Carregando />
      ) : (
        <>
          <h3 className="header">Entre em contato comigo:</h3>
          <div className="container">
            <div className="social-card card">
              <div className="github-icon">
                <span>
                  {/* eslint-disable-next-line react/jsx-max-depth */}
                  <FontAwesomeIcon size="3x" icon={ faGithub } />
                </span>
                <span>{github.name}</span>
              </div>
              <img src={ github.avatar_url } alt="github" />
              <a
                target="_blank"
                rel="noreferrer"
                href={ github.html_url }
              >
                {github.login}
              </a>
              <p>{github.bio}</p>
              <p>{github.location}</p>
            </div>
            <div className="social-card card">
              <span>
                <FontAwesomeIcon size="3x" icon={ faLinkedin } />
              </span>
              <br />
              <a
                className="libutton"
                href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=lucasbitencourt"
                target="_blank"
                rel="noreferrer"
              >
                Follow on LinkedIn
              </a>
            </div>
            <div className="social-card card">
              <span>
                <FontAwesomeIcon size="3x" icon={ faEnvelope } />
              </span>
              <a href="mailto:klucasbitencourt@gmail.com">klucasbitencourt@gmail.com</a>
            </div>
          </div>
          <Formulario />
        </>
      )}
    </div>
  );
}

export default Contato;
