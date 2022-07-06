import React from "react";
import { Content } from "react-bulma-components";

function Lucas() {
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
            Estou estudando desenvolvimento web na Trybe (Clique{" "}
            <a target="_blank" rel="noreferrer" href="https://www.betrybe.com/">
              AQUI
            </a>{" "}
            para saber mais).
          </p>
          <p>Possuo formação acadêmica em Administração pela UNIRIO - RJ.</p>
          <p>
            Gosto de tecnologia, e estou sempre por dentro de novidades. Busco estar
            sempre conectado, com pessoas, novas tecnologias, e tudo relacionado a este
            mundo tecnológico. Estou disponível para trabalhos, parcerias, e qualquer
            coisa que tenha a ver com essa mundo mágico da programação.
          </p>
          <p>Navegue pelo menu acima para saber mais e entrar em contato comigo.</p>
          <p>Site feito utilizando React.</p>
        </Content>
      </>
    );
  }

export default Lucas;
