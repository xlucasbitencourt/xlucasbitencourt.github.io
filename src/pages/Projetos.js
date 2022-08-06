import React, { useEffect, useState } from 'react';
import Carregando from '../components/Carregando';
import ProjetoCard from '../components/ProjetoCard';
import listaProjetos from '../docs/listaProjetos';

function Projetos() {
  const ONE_SECOND = 1000;
  const [carregou, setCarregou] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCarregou(true);
    }, ONE_SECOND);
  }, []);

  return (
    <div className="abaixo">
      {!carregou ? (
        <Carregando />
      ) : (
        <>
          <h3>Projetos</h3>
          <div className="container">
            {listaProjetos.map((pro, index) => (
              <ProjetoCard
                key={ index }
                nome={ pro.nome }
                descricao={ pro.descricao }
                linkPagina={ pro.link }
                linkGithub={ pro.github }
                img={ pro.img }
                tec={ pro.tec }
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Projetos;
