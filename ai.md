Prompt: Faça uma animação fade-in / out com keyframes

Resultado: 

#quiz-principal {
    animation: fade-in 1s ease-in-out forwards;
}

---

Prompt: Me faça 10 perguntas para o quiz do projeto:

Resultado:

Quiz: LinkEdge - Rede Mesh Satelital

Responda às questões a seguir para testar seu conhecimento sobre o projeto.

1. Qual o principal objetivo do LinkEdge?
- [ ] Monitorar tráfego
- [x] Conectar áreas isoladas
- [ ] Vender satélites
- [ ] Criar jogos

2. O que é uma rede Mesh?
- [ ] Rede de fibra
- [ ] Conexão estática
- [x] Nós interconectados
- [ ] Telefonia fixa

3. Qual o tempo limite do alerta proposto?
- [ ] 1 minuto
- [ ] 5 minutos
- [x] 30 segundos
- [ ] 1 hora

4. Qual o custo alvo por nó IoT?
- [ ] R$ 100
- [x] R$ 500
- [ ] R$ 1.000
- [ ] R$ 5.000

5. Qual o papel do Arduino no projeto?
- [x] Hardware de sensores
- [ ] Servidor web
- [ ] Satélite
- [ ] Provedor de energia

6. Quem é o público-alvo principal?
- [ ] Turistas
- [x] Defesa Civil
- [ ] Empresas
- [ ] Escolas

7. Qual a tecnologia de comunicação principal?
- [ ] Rádio comum
- [ ] Fibra óptica
- [x] Satelital Mesh
- [ ] Wi-Fi convencional

8. O LinkEdge depende de torres terrestres para funcionar?
- [ ] Sim
- [x] Não
- [ ] Apenas em áreas urbanas
- [ ] Depende do clima

9. O LinkEdge depende de torres terrestres para funcionar?
- [ ] Sim
- [x] Não
- [ ] Apenas em áreas urbanas
- [ ] Depende do clima

11. Qual é a principal função da trigonometria no algoritmo do LinkEdge?
- [ ] Calcular o custo do hardware
- [ ] Determinar o tempo de bateria
- [x] Escolher o melhor ângulo de visada para o satélite
- [ ] Medir a velocidade do vento

12. Como o histórico de leituras do LinkEdge contribui para a Defesa Civil?
- [ ] Aumenta o custo de operação dos resgates
- [ ] Substitui a necessidade de bombeiros em campo
- [x] Alimenta modelos preditivos para prevenção de desastres futuros
- [ ] Serve apenas para armazenamento de logs técnicos sem utilidade prática

O que foi adicionado: const perguntas = [
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

---

Prompt: Como inserir HTML dentro do JavaScript.

Resultado: Para inserir HTML dinamicamente via JavaScript, utilizamos principalmente a propriedade `.innerHTML`. 

O fluxo funciona da seguinte maneira:

Seleção: Você usa document.getElementById("id-do-elemento") para apontar o lugar na sua página onde o conteúdo deve aparecer.
Construção: Você cria uma variável (geralmente usando crases `` ` `` para permitir múltiplas linhas e variáveis) contendo o código HTML que deseja exibir.
Injeção: Ao atribuir essa variável ao `.innerHTML` do elemento selecionado, o navegador processa o texto como código HTML real e desenha os elementos na tela.

```javascript
const container = document.getElementById("quiz-principal");

let meuHtml = `
    <div class="card">
        <h1>Título do Quiz</h1>
        <button onclick="alert('Clicou!')">Opção A</button>
    </div>
`;

container.innerHTML = meuHtml;
```

O que foi adicionado: let conteudo = `<h1>${indice + 1} - ${perguntaAtual.p}</h1><div class="flow">`;

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

---


Prompt: Como fazer um carrousel de imagens automático.

Resultado: function startAuto() {
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

  icone.forEach((dot) => {
    dot.addEventListener("click", () => {
      goTo(Number(dot.dataset.index));
      resetAuto();
    });
  });

  startAuto();
})();

---

Prompt: No meu script.js eu tenho um sistema de quiz, porém, ao clicar "Reiniciar quiz" ele volta a cor normal do site (azul). Como fazer para que não volte a cor primário e continue com a cor que estava salva já pelo usuário?

Resultado: O problema é o location.reload() — ele recarrega a página inteira, perdendo tudo. A solução é salvar a cor no localStorage e restaurá-la no carregamento, e trocar o reload por uma função que reinicia só o quiz.
Foram duas mudanças:
1. location.reload() → reiniciarQuiz() Em vez de recarregar a página (o que apaga tudo da memória), agora a função apenas zera indice e acertos e chama carregarPergunta() de novo — a página continua intacta com a cor que estava.
2. localStorage no color switcher

Ao clicar em uma cor, ela é salva com localStorage.setItem("primaryColor", color)
Ao carregar a página, o código lê localStorage.getItem("primaryColor") e reaplicar a cor automaticamente, inclusive marcando o botão correto como .active
Assim, mesmo que o usuário recarregue a página manualmente (F5), a cor escolhida persiste.

O que foi alterado/adicionado: if (indice < perguntas.length) {
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

---
