import wallet from "../img/wallet.png";
import trivia from "../img/trivia.png";
import cats from "../img/cats.png";

// Atualize aqui a lista de projetos
// Caso queira definir a ordem, mude aqui, ou altere "order" no css

const listaProjetos = [
  {
    nome: "Wallet",
    descricao:
      "Uma carteira virtual, onde é possível registrar os gastos, em diferentes moedas, colocando categoria, método de pagameto, e podendo ver a soma dos gastos.",
    link: "https://lucasbitencourt.com.br/tp-wallet/",
    github: "https://github.com/xlucasbitencourt/tp-wallet",
    img: wallet,
  },
  {
    nome: "Trivia",
    descricao:
      "Um jogo de perguntas e respostas, com pontuação, ranking, utilizando a API Open Trivia DB",
    link: "https://lucasbitencourt.com.br/tp-trivia/",
    github: "https://github.com/xlucasbitencourt/tp-trivia",
    img: trivia,
  },
  {
    nome: "Landing Cats",
    descricao:
      "Uma landing page feita utilizando React e Bootstrap para React. O tema escolhido para a landing page não poderia ser outro: Gatos!",
    link: "https://lucasbitencourt.com.br/lb-cats/",
    github: "https://github.com/xlucasbitencourt/lb-cats",
    img: cats,
  },
];

export default listaProjetos;
