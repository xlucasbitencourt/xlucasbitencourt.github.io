import React, { useEffect, useState } from "react";
import Carregando from "../components/Carregando";
import ProjetoCard from "../components/ProjetoCard";
import wallet from "../img/wallet.png";
import trivia from "../img/trivia.png";

function Projetos() {
  const [carregou, setCarregou] = useState(true);

  useEffect(() => {
    setCarregou(false);
    setTimeout(() => {
      setCarregou(true);
    }, 1000);
  }, []);

  const descricao = {
    wallet:
      "Uma carteira virtual, onde é possível registrar os gastos, em diferentes moedas, colocando categoria, método de pagameto, e podendo ver a soma dos gastos.",
    trivia:
      "Um jogo de perguntas e respostas, com pontuação, ranking, utilizando a API Open Trivia DB",
  };

  const linkPagina = {
    wallet: "https://lucasbitencourt.com.br/tp-wallet/",
    trivia: "https://lucasbitencourt.com.br/tp-trivia/",
  };

  const linkGithub = {
    wallet: "https://github.com/xlucasbitencourt/tp-wallet",
    trivia: "https://github.com/xlucasbitencourt/tp-trivia",
  };

  return (
    <div className="abaixo">
      {!carregou ? (
        <Carregando />
      ) : (
        <>
          <h3>Projetos</h3>
          <div className="container">
            <ProjetoCard
            nome="Wallet"
            img={wallet}
            descricao={descricao.wallet}
            linkPagina={linkPagina.wallet}
            linkGithub={linkGithub.wallet}
          />
          <ProjetoCard
            nome="Trivia"
            img={trivia}
            descricao={descricao.trivia}
            linkPagina={linkPagina.trivia}
            linkGithub={linkGithub.trivia}
          />
          </div>
          
        </>
      )}
    </div>
  );
}

export default Projetos;
