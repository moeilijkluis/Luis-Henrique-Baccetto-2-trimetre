const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Kratos é o protagonista principal da série God of War",
        alternativas: [
            {
                texto: "Certo. O protagonista se chama Kratos",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "Errado. O protagonista se chama Zeus",
                afirmacao: "Falso"
            }
        ]
    },
    {
        enunciado: "O primeiro jogo da série God of War foi lançado originalmente para PlayStation 3.",
        alternativas: [
            {
                texto: "Errado. O primeiro foi originalmente lançado para PlayStation2",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "Certo. Foi lançado originalmente no PlayStation 3",
                afirmacao: "Falsa"
            }
        ]
    },
    {
        enunciado: "A ambientação principal dos jogos da série God of War é inspirada na mitologia grega.",
        alternativas: [
            {
                texto: "Certo. O jogo se passa na mitologia grega na versão antiga",
                afirmacao: "Verdeiro"
            },
            {
                texto: "Errado. Se passa pela mitologia brasileira",
                afirmacao: "Falso"
            }
        ]
    },
    {
        enunciado: "Em God of War (2018), Kratos viaja para a mitologia nórdica.",
        alternativas: [
            {
                texto: "Correto, pois o jogo se passa pela mitologia nórdica",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "Errado. O jogo se passa pela mitologia grega",
                afirmacao: "Falso"
            }
        ]
    },
    {
        enunciado: "O principal instrumento de combate de Kratos é uma espada chamada Leviathan Axe.",
        alternativas: [
            {
                texto: "Ele usa um machado",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "Ele usa um arco",
                afirmacao: "Falso"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Respostas";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
