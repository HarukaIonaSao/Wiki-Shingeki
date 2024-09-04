const cardInput = document.getElementById("titansInput");
const resultadoDiv = document.getElementById("card");
const buscaButton = document.getElementById("buscaButton");

const titans = [
  {
    id: 1,
    nome: "Titã de Ataque",
    imagem: "assets/img/eren.jpg",
    portador: "Eren Yeager",
    habilidades:
      "Habilidades de combate. Acesso às memórias de todos os eldianos e visões do futuro.",
    nacionalidade: "Eldia",
    linkVideo: "https://youtu.be/63CfyMA4bRs?si=_LUy9lS9wuxp1XbX",
  },
  {
    id: 2,
    nome: "Titã Fundador",
    imagem: "assets/img/fundador.jpg",
    portador: "Grisha Yeager/Eren Yeager",
    habilidades:
      "Pode criar e controlar todos os titãs, modificar as memórias e corpos dos eldianos.",
    nacionalidade: "Eldia",
    linkVideo: "https://youtu.be/j60Ng_bWa38?si=Ygy0UJS1oeu8vIS4",
  },
  {
    id: 3,
    nome: "Titã Colossal",
    imagem: "assets/img/colossal.jpg",
    portador: "Bertolt Hoover/Armin Arlet",
    habilidades:
      "É enorme e pode evaporar seu corpo para liberar imensas quantidades de vapor.",
    nacionalidade: "Marley/Eldia",
    linkVideo: "https://youtu.be/gsTIs917Exg?si=YmfNoDVVbvmHm6E7",
  },
  {
    id: 4,
    nome: "Titã Fêmea",
    imagem: "assets/img/femea.jpg",
    portador: "Annie Leonhart",
    habilidades:
      "Pode herdar habilidades muito mais facilmente do que qualquer um dos outros Titãs. Alta habilidade de regeneração.",
    nacionalidade: "Marley",
    linkVideo: "https://youtu.be/xui4AbAsKlY?si=KjisCUsYtaxte2pn",
  },
  {
    id: 5,
    nome: "Titã Blindado",
    imagem: "assets/img/blindado.jpg",
    portador: "Reiner Braun",
    habilidades:
      "Ele também possui a capacidade de endurecer seus braços e pés em garras mais afiadas que podem ser usadas para escalar estruturas como as Muralhas.",
    nacionalidade: "Marley",
    linkVideo: "https://youtu.be/NEG1cndv1OI?si=RHeUdNzfin2B_3K2",
  },
  {
    id: 6,
    nome: "Titã Bestial",
    imagem: "assets/img/bestial.jpg",
    portador: "Zeke Yeager",
    habilidades:
      "É o único além do quadrúpede capaz de falar na forma de Titã, podendo controlar titãs puros através da conversa e até mesmo transformar pessoas ao seu redor em Titãs puro",
    nacionalidade: "Eldia",
    linkVideo: "https://youtu.be/bOWpgoVqJ2U?si=_Zg6m6xKWmrC3Ao5",
  },
  {
    id: 7,
    nome: "Titã Mandíbula",
    imagem: "assets/img/mandibula.jpg",
    portador: "Marcel Galliard/Ymir/Porco Galliard/Falco",
    habilidades:
      "É o mais rápido dos Nove Titãs, tem dentes afiados e endurecidos e garras capazes de quebrar quase qualquer coisa",
    nacionalidade: "Marley/Marley",
    linkVideo: "https://youtu.be/n7_nfe7DceM?si=thpgmtlGmHjdCwgb",
  },
  {
    id: 8,
    nome: "Titã Carroceiro",
    imagem: "assets/img/Carroceiro.jpg",
    portador: "Pieck Finger",
    habilidades:
      "Grande resistência que o permite permanecer transformado por longos períodos de tempo",
    nacionalidade: "Marley",
    linkVideo: "https://youtu.be/0OYdAITH1gw?si=M0E0s1pMI8-WyjJ4",
  },
  {
    id: 9,
    nome: "Titã Martelo de Guerra",
    imagem: "assets/img/martelo.jpg",
    portador: "Lala Tybur/Eren Yeager",
    habilidades:
      "Pode endurecer sua carne em várias armas e estruturas. Pode ser controlado a distância.",
    nacionalidade: "Marley/Eldia",
    linkVideo: "https://www.youtube.com/watch?v=ssyZGQn9_ns",
  },
];

function mostrarCard(id) {
  const titan = titans.find((titan) => titan.id === parseInt(id));
  const botaoSaibaMais = criarBotaoSaibaMais(titan.linkVideo);

  if (titan) {
    resultadoDiv.querySelector("img").src = titan.imagem;
    resultadoDiv.querySelector("h2").textContent = titan.nome;
    resultadoDiv.querySelector("h3").textContent = titan.portador;
    resultadoDiv.querySelector("li").textContent = titan.nacionalidade;
    resultadoDiv.querySelector("p").textContent = titan.habilidades;
    resultadoDiv.appendChild(botaoSaibaMais);
    resultadoDiv.style.display = "block";
  } else {
    resultadoDiv.innerHTML = "<p>Titã não encontrado.</p>";
    resultadoDiv.style.display = "block";
  }

  cardInput.value = "";
}

function criarBotaoSaibaMais(linkVideo) {
  const botao = document.createElement("button");
  botao.textContent = "Saiba Mais";
  botao.href = linkVideo;
  botao.target = "_blank";
  botao.addEventListener("click", (event) => {
    event.preventDefault();
    window.open(linkVideo, "_blank");
  });

  return botao;
}

buscaButton.addEventListener("click", () => {
  const id = cardInput.value;
  mostrarCard(id);
});

cardInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const id = cardInput.value;
    mostrarCard(id);
  }
});
