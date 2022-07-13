import React, { useEffect, useState } from "react";
import Carregando from "../components/Carregando";
import ProjetoCard from "../components/ProjetoCard";
import listaProjetos from "../docs/listaProjetos";

function Projetos() {
  const [carregou, setCarregou] = useState(false);

  useEffect(() => {
    // setCarregou(false);
    setTimeout(() => {
      setCarregou(true);
    }, 1000);
  }, []);

  return (
    <div className="abaixo">
      {!carregou ? (
        <Carregando />
      ) : (
        <>
          <h3>Projetos</h3>
          <div className="container">
            {listaProjetos.map((pro) => (
              <ProjetoCard
                nome={pro.nome}
                descricao={pro.descricao}
                linkPagina={pro.link}
                linkGithub={pro.github}
                img={pro.img}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Projetos;
