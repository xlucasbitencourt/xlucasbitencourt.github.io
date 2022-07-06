function ProjetoCard({nome, img, descricao, linkPagina, linkGithub}) {
  return ( 
    <div className='card projeto-card'>
          <p>{nome}</p>
          <img src={img} alt={nome} />
          <p>{descricao}</p>
          <a href={linkPagina}>Link da página</a>
          <a href={linkGithub}>Link do Github</a>
        </div>
   );
}

export default ProjetoCard;
