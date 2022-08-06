import { useHistory } from 'react-router-dom';

function Error() {
  const history = useHistory();

  return (
    <div className="abaixo error">
      <h3>Aconteceu algo inesperado!</h3>
      <p>
        Não se preocupe, você poderá continuar sua navegação, clicando em um dos botões
        abaixo:
      </p>
      <div className="botoes">
        <button
          type="button"
          onClick={ () => {
            history.push('/');
          } }
        >
          Início
        </button>
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
    </div>
  );
}

export default Error;
