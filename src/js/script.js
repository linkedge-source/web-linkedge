window.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-blur");
  } else {
    navbar.classList.remove("navbar-blur");
  }
});

document.querySelectorAll(".menu-item").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("menu-toggle").checked = false;
  });
});

const perguntas = [
  {
    p: "Qual o principal objetivo do LinkEdge?",
    r: [
      "Monitorar tráfego",
      "Conectar áreas isoladas",
      "Vender satélites",
      "Criar jogos",
    ],
    c: 1,
  },
  {
    p: "O que é uma rede Mesh?",
    r: [
      "Rede de fibra",
      "Conexão estática",
      "Nós interconectados",
      "Telefonia fixa",
    ],
    c: 2,
  },
  {
    p: "Qual o tempo limite do alerta proposto?",
    r: ["1 minuto", "5 minutos", "30 segundos", "1 hora"],
    c: 2,
  },
  {
    p: "Qual o custo alvo por nó IoT?",
    r: ["R$ 100", "R$ 500", "R$ 1.000", "R$ 5.000"],
    c: 1,
  },
  {
    p: "Qual o papel do Arduino no projeto?",
    r: ["Sensor", "Servidor", "Satélite", "Provedor"],
    c: 0,
  },
  {
    p: "Quem é o público-alvo principal?",
    r: ["Turistas", "Defesa Civil", "Empresas", "Escolas"],
    c: 1,
  },
  {
    p: "Qual a tecnologia de comunicação?",
    r: ["Rádio", "Fibra", "Satelital Mesh", "Wi-Fi"],
    c: 2,
  },
  {
    p: "O LinkEdge depende de torres?",
    r: ["Sim", "Não", "Às vezes", "Apenas em cidades"],
    c: 1,
  },
  {
    p: "Qual é a principal função da trigonometria no algoritmo do LinkEdge?",
    r: [
      "Calcular o custo do hardware",
      "Determinar o tempo de bateria",
      "Escolher o melhor ângulo de visada para o satélite",
      "Medir a velocidade do vento",
    ],
    c: 2,
  },
  {
    p: "Como o histórico de leituras do LinkEdge contribui para a Defesa Civil?",
    r: [
      "Aumenta o custo de operação dos resgates",
      "Substitui a necessidade de bombeiros em campo",
      "Alimenta modelos preditivos para prevenção de desastres futuros",
      "Serve apenas para armazenamento de logs técnicos sem utilidade prática",
    ],
    c: 2,
  },
];

let indice = 0;
let acertos = 0;

const quizButton = document.getElementById("botao-quiz");
const quizOnClick = document.getElementById("quiz-on-click");
const quizMain = document.getElementById("quiz-principal");

function carregarPergunta() {
  const perguntaAtual = perguntas[indice];
  const letras = ["A", "B", "C", "D"];

  let conteudo = `<h1>${indice + 1} - ${perguntaAtual.p}</h1><div class="flow">`;

  perguntaAtual.r.forEach((texto, i) => {
    conteudo += `
        <button type="button" class="flow-item" onclick="responder(${i})">
            <div class="flow-num">${letras[i]} .</div>
            <div class="flow-connector"><div class="flow-line"></div></div>
            <div class="flow-content"><h2>${texto}</h2></div>
        </button>`;
  });

  conteudo += `</div>`;
  quizMain.innerHTML = conteudo;
}

window.responder = function (opcaoEscolhida) {
  if (opcaoEscolhida === perguntas[indice].c) acertos++;
  indice++;

  if (indice < perguntas.length) {
    carregarPergunta();
  } else {
    quizMain.innerHTML = `
      <div style="text-align: center; padding: 40px;">
        <h1>Quiz Finalizado!</h1>
        <p style="font-size: 24px;">Você acertou ${acertos} de ${perguntas.length} questões.</p>
        <button class="botao-p" onclick="reiniciarQuiz()">Reiniciar Quiz</button>
      </div>`;
  }
};

window.reiniciarQuiz = function () {
  indice = 0;
  acertos = 0;
  carregarPergunta();
};

quizButton.addEventListener("click", () => {
  quizOnClick.style.display = "none";
  quizMain.style.display = "block";
  carregarPergunta();
});

(function () {
  const colorBtns = document.querySelectorAll(".color-btn");
  const root = document.documentElement;

  function aplicarCor(color) {
    root.style.setProperty("--primary-color", color);
    const hex = color.replace("#", "");
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    root.style.setProperty("--secondary-color", `rgba(${r}, ${g}, ${b}, 0.25)`);
    root.style.setProperty("--helper", `rgba(${r}, ${g}, ${b}, 0.5)`);
    root.style.setProperty("--bi-hover", `rgba(${r}, ${g}, ${b}, 0.08)`);
  }

  const corSalva = localStorage.getItem("primaryColor");
  if (corSalva) {
    aplicarCor(corSalva);
    colorBtns.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.color === corSalva);
    });
  }

  colorBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const color = btn.dataset.color;
      aplicarCor(color);
      localStorage.setItem("primaryColor", color);
      colorBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
})();

(function () {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".slideshow-dot");
  const btnAnt = document.querySelector(".slideshow-btn--ant");
  const btnProx = document.querySelector(".slideshow-btn--prox");
  let atual = 0;
  let timer;

  function goTo(index) {
    slides[atual].classList.remove("active");
    dots[atual].classList.remove("active");
    atual = (index + slides.length) % slides.length;
    slides[atual].classList.add("active");
    dots[atual].classList.add("active");
  }

  function next() {
    goTo(atual + 1);
  }
  function prev() {
    goTo(atual - 1);
  }

  function startAuto() {
    timer = setInterval(next, 5000);
  }
  function resetAuto() {
    clearInterval(timer);
    startAuto();
  }

  btnProx.addEventListener("click", () => {
    next();
    resetAuto();
  });
  btnAnt.addEventListener("click", () => {
    prev();
    resetAuto();
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      goTo(Number(dot.dataset.index));
      resetAuto();
    });
  });

  startAuto();
})();
