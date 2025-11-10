// ===== hide-on-scroll da navegação =====
let ultimoScroll = 0;

window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navegacao");
  if (!nav) return; // segurança

  const scrollAtual = window.scrollY;

  if (scrollAtual > ultimoScroll && scrollAtual > 100) {
    // descendo
    nav.classList.add("ocultar");
  } else {
    // subindo
    nav.classList.remove("ocultar");
  }

  ultimoScroll = scrollAtual;
});


// ===== envio WhatsApp =====
function enviarwhats(event) {
  event.preventDefault();
  const nomeInput = document.getElementById("nome");
  const mensagemInput = document.getElementById("mensagem");

  // segurança: se inputs não existirem, aborta
  const nome = nomeInput ? nomeInput.value.trim() : "";
  const mensagem = mensagemInput ? mensagemInput.value.trim() : "";

  if (!nome && !mensagem) {
    alert("Por favor, preencha nome ou mensagem antes de enviar.");
    return;
  }

  const telefone = "5585996661811";
  const texto = `Olá, me chamo ${nome}. ${mensagem}`;
  const msgFormatada = encodeURIComponent(texto);
  const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

  window.open(url, "_blank");
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".chuva-folhas");
  if (!container) return;

  function criarFolha() {
    const folha = document.createElement("div");
    folha.className = "folha";

    // posição horizontal
    folha.style.left = Math.random() * 100 + "vw";

    // tamanho aleatório
    const largura = 20 + Math.random() * 60; // 20..80px
    const altura  = Math.round(largura * 0.7); // proporção
    folha.style.width = largura + "px";
    folha.style.height = altura + "px";

    // duração da queda (controls 'cair' animation) e do balanço
    const duracaoCair = 5 + Math.random() * 6; // 5..11s
    const duracaoBalanco = 2 + Math.random() * 2; // 2..4s

    // delay para variedade
    const delay = Math.random() * 2; // 0..2s

    // aplica durações e delay (ordem deve corresponder às animações no CSS)
    folha.style.animationDuration = `${duracaoCair}s, ${duracaoBalanco}s`;
    folha.style.animationDelay = `${delay}s, ${delay}s`;

    // opcional: pequena rotação inicial para mais naturalidade
    const rot = (Math.random() - 0.5) * 60; // -30..30deg
    folha.style.transform = `rotate(${rot}deg)`;

    container.appendChild(folha);

    // remove depois da queda terminar
    setTimeout(() => {
      folha.remove();
    }, (duracaoCair + delay) * 1000 + 100); // +100ms de segurança
  }

  // cria várias folhas com intervalo
  const intervalo = 300; // ms
  setInterval(criarFolha, intervalo);
});
