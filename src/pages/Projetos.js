import React, { useEffect, useState } from "react";
import Carregando from "../components/Carregando";
import ProjetoCard from "../components/ProjetoCard";
import wallet from "../img/wallet.png";

function Projetos() {
  const [carregou, setCarregou] = useState(true);

  useEffect(() => {
    setCarregou(false);
    setTimeout(() => {setCarregou(true)}, 1000)
  }, []);

  const descricao = {
    wallet: "Uma carteira virtual, onde é possível registrar os gastos, em diferentes moedas, colocando categoria, método de pagameto, e podendo ver a soma dos gastos.",
  };

  const linkPagina = {
    wallet: "https://lucasbitencourt.com.br/tp-wallet/",
  };

  const linkGithub = {
    wallet: "https://github.com/xlucasbitencourt/tp-wallet",
  };

  return (
    <div className="abaixo">
      {!carregou ? (
        <Carregando />
      ) : (
        <>
          <h3>Projetos</h3>
          <ProjetoCard
            nome="Wallet"
            img={wallet}
            descricao={descricao.wallet}
            linkPagina={linkPagina.wallet}
            linkGithub={linkGithub.wallet}
          />
        </>
      )}
    </div>
  );
}

export default Projetos;
