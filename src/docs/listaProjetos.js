/* eslint-disable max-len */
import wallet from '../img/wallet.png';
import trivia from '../img/trivia.png';
import cats from '../img/cats.png';
import shoppingCart from '../img/shopping-cart.png';
import solar from '../img/solar.png';
import pixel from '../img/pixel.png';

// Atualize aqui a lista de projetos
// Caso queira definir a ordem, mude aqui, ou altere "order" no css

const listaProjetos = [
  {
    nome: 'Wallet',
    descricao:
      'Uma carteira virtual, onde é possível registrar os gastos, em diferentes moedas, colocando categoria, método de pagameto, e podendo ver a soma dos gastos.',
    link: 'https://lucasbitencourt.com.br/tp-wallet/',
    github: 'https://github.com/xlucasbitencourt/tp-wallet',
    img: wallet,
    tec: ['React', 'Redux', 'Router', 'CSS', 'API'],
  },
  {
    nome: 'Trivia',
    descricao:
      'Um jogo de perguntas e respostas, com pontuação, ranking, utilizando a API Open Trivia DB.',
    link: 'https://lucasbitencourt.com.br/tp-trivia/',
    github: 'https://github.com/xlucasbitencourt/tp-trivia',
    img: trivia,
    tec: ['React', 'Redux', 'Router', 'CSS', 'RTL', 'API'],
  },
  {
    nome: 'Landing Cats',
    descricao:
      'Uma landing page feita utilizando React e Bootstrap para React. O tema escolhido para a landing page não poderia ser outro: Gatos!',
    link: 'https://lucasbitencourt.com.br/lb-cats/',
    github: 'https://github.com/xlucasbitencourt/lb-cats',
    img: cats,
    tec: ['React', 'CSS', 'Bootstrap'],
  },
  {
    nome: 'Shopping Cart',
    descricao:
      'Uma simulação de um carrinho de compras, feito utilizando a API do Mercado Livre.',
    link: 'https://lucasbitencourt.com.br/tp-shopping-cart/',
    github: 'https://github.com/xlucasbitencourt/tp-shopping-cart',
    img: shoppingCart,
    tec: ['HTML', 'CSS', 'Javascript', 'API', 'Web Storage', 'Jest'],
  },
  {
    nome: 'Solar System',
    descricao:
      'Primeiro projeto em React, onde mostro o básico da biblioteca, mexendo com componentes e ilustrando como é feita a renderização.',
    link: 'https://lucasbitencourt.com.br/tp-solar-system/',
    github: 'https://github.com/xlucasbitencourt/tp-solar-system',
    img: solar,
    tec: ['React', 'CSS'],
  },
  {
    nome: 'Pixel Art',
    descricao:
      'Uma paleta de cores, onde é possível pintar a paleta com as cores, geradas aleatoriamente. Também é possivel definir o tamanho da paleta.',
    link: 'https://lucasbitencourt.com.br/tp-pixel/',
    github: 'https://github.com/xlucasbitencourt/tp-pixel',
    img: pixel,
    tec: ['HTML', 'CSS', 'Javascript', 'DOM'],
  },
];

export default listaProjetos;
