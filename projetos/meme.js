const textInput = document.getElementById('text-input'); // caixa de texto
const memeImageContainer = document.getElementById('meme-image-container'); // div onde contém imagem e texto
const memeText = document.getElementById('meme-text'); // texto que será inserido na caixa de texto vai aqui
const memeImage = document.getElementById('meme-image'); // local onde fica a imagem
const memeInsert = document.getElementById('meme-insert'); // local para upload da imagem
const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');
const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');
const meme4 = document.getElementById('meme-4');

function insereTexto() { // Requisito 1
  memeText.innerHTML = textInput.value;
}

textInput.addEventListener('keyup', insereTexto);

function mostraImagem(imagem) { // Requisito 2
  memeImage.src = URL.createObjectURL(imagem.target.files[0]);
}

memeInsert.addEventListener('change', mostraImagem);

// Requisito 6
function setFire() {
  memeImageContainer.style.border = '3px dashed red';
}

function setWater() {
  memeImageContainer.style.border = '5px double blue';
}

function setEarth() {
  memeImageContainer.style.border = '6px groove green';
}

fire.addEventListener('click', setFire);
water.addEventListener('click', setWater);
earth.addEventListener('click', setEarth);

// Requisito 7
function escolheImg(alvo) {
  memeImage.src = alvo.target.src;
}

meme1.addEventListener('click', escolheImg);
meme2.addEventListener('click', escolheImg);
meme3.addEventListener('click', escolheImg);
meme4.addEventListener('click', escolheImg);
