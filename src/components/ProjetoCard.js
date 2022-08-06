import PropTypes from 'prop-types';

function ProjetoCard({ nome, img, descricao, linkPagina, linkGithub, tec }) {
  return (
    <div className="card projeto-card">
      <p>{nome}</p>
      <img src={ img } alt={ nome } />
      <p>{descricao}</p>
      <div className="container tec">
        {tec.map((item) => (
          <div key={ item } className="tec-item">{item}</div>
        ))}
      </div>
      <a target="_blank" rel="noreferrer" href={ linkPagina }>
        Link da página
      </a>
      <a target="_blank" rel="noreferrer" href={ linkGithub }>
        Link do Github
      </a>
    </div>
  );
}

ProjetoCard.propTypes = {
  nome: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  linkPagina: PropTypes.string.isRequired,
  linkGithub: PropTypes.string.isRequired,
  tec: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjetoCard;
