import React, { useState } from 'react';

const FORMSPARK_ACTION_URL = 'https://submit-form.com/zgGsYYas';

function Formulario() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    await fetch(FORMSPARK_ACTION_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        nome,
        email,
        telefone,
        mensagem,
      }),
    });
    // eslint-disable-next-line no-alert
    alert('Mensagem enviada! Em breve, entrarei em contato.');
    setNome('');
    setEmail('');
    setTelefone('');
    setMensagem('');
  };

  // Mexer somente daqui pra baixo

  return (
    <form className="formulario card" onSubmit={ onSubmit }>
      <p>Deixe sua mensagem</p>
      <label htmlFor="nome">
        <span>Nome:</span>
        <input value={ nome } required onChange={ (e) => setNome(e.target.value) } />
      </label>
      <label htmlFor="email">
        <span>E-mail:</span>
        <input value={ email } onChange={ (e) => setEmail(e.target.value) } />
      </label>
      <label htmlFor="telefone">
        <span>Telefone:</span>
        <input value={ telefone } onChange={ (e) => setTelefone(e.target.value) } />
      </label>
      <label htmlFor="mensagem">
        <span>Mensagem:</span>
        <textarea
          value={ mensagem }
          required
          onChange={ (e) => setMensagem(e.target.value) }
        />
      </label>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
