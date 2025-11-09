let ultimoScroll = 0;

window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navegacao");
  const scrollAtual = window.scrollY;

  if (scrollAtual > ultimoScroll && scrollAtual > 100) {
    // Rolando para baixo → esconde
    nav.classList.add("ocultar");
  } else {
    // Rolando para cima → mostra
    nav.classList.remove("ocultar");
  }

  ultimoScroll = scrollAtual;
});

function enviarwhats(event) {
event.preventDefault();
const nome = document.getElementById('nome').value;
const mensagem = document.getElementById('mensagem').value;
const telefone = '5585996661811'

const texto = `Olá, Me chamo ${nome}, ${mensagem}`
const msgFormatada = encodeURIComponent(texto);

const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

console.log(url);

window.open(url, '_blank');
}