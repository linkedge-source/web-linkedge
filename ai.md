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
