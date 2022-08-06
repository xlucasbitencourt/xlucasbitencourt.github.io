import React from 'react';
import { Content } from 'react-bulma-components';
import { useHistory } from 'react-router-dom';

function Lucas() {
  const history = useHistory();

  return (
    <>
      <div className="lucas">
        <div className="line-1 anim-typewriter">
          <h1>Lucas Bitencourt</h1>
        </div>
        <h2 className="front">Front-end developer</h2>
      </div>
      <hr />
      <Content className="texto">
        <p>
          Ola! Sou Lucas, Desenvolvedor Front-end, e futuro deenvolvedor full-stack. Sou
          do Rio de Janeiro. Esta é a minha página, e aqui você poderá ver minhas
          habilidades, e entrar em contato para trabalhos e afins.
        </p>
        <p>
          Estou estudando desenvolvimento web na Trybe (Clique
          {' '}
          <a target="_blank" rel="noreferrer" href="https://www.betrybe.com/">
            AQUI
          </a>
          {' '}
          para saber mais).
        </p>
        <p>Possuo formação acadêmica em Administração pela UNIRIO - RJ.</p>
        <p>
          Gosto de tecnologia, e estou sempre por dentro de novidades. Busco estar sempre
          conectado, com pessoas, novas tecnologias, e tudo relacionado a este mundo
          tecnológico. Estou disponível para trabalhos, parcerias, e qualquer coisa que
          tenha a ver com essa mundo mágico da programação.
        </p>
        <p>
          Navegue pelo menu acima,
          ou clique nos botões abaixo para saber mais e entrar em contato comigo.
        </p>
        <div className="botoes">
          <button
            type="button"
            onClick={ () => {
              history.push('/habilidades');
            } }
          >
            Habilidades
          </button>
          <button
            type="button"
            onClick={ () => {
              history.push('/projetos');
            } }
          >
            Projetos
          </button>
          <button
            type="button"
            onClick={ () => {
              history.push('/contato');
            } }
          >
            Contato
          </button>
        </div>
      </Content>
    </>
  );
}

export default Lucas;
