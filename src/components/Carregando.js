import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Carregando() {
  return (
    <p className="carregando">
      <FontAwesomeIcon size="10x" icon={faArrowRotateRight} />
    </p>
  );
}

export default Carregando;