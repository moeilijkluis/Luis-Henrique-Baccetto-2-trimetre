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
                texto: "Verdadeiro",
                afirmacao: "afirmação"
            },
            {
                texto: "Falso",
                falsa: "falsa"
            }
        ]
    },
    {
        e3nunciado: "O primeiro jogo da série God of War foi lançado originalmente para PlayStation 3.",
        alternativas: [
            {
                texto: "Falso. O primeiro foi originalmente lançado para PlayStation2",
                afirmacao: "afirmação"
            },
            {
                texto: "Verdadeiro",
                afirmacao: "falsa"
            }
        ]
    },
    {
        enunciado: "A ambientação principal dos jogos da série God of War é inspirada na mitologia grega.",
        alternativas: [
            {
                texto: "Verdadeiro",
                afirmacao: "verdeiro"
            },
            {
                texto: "Falso",
                afirmacao: "falso"
            }
        ]
    },
    {
        enunciado: "Em God of War (2018), Kratos viaja para a mitologia nórdica.",
        alternativas: [
            {
                texto: "Verdadeiro.",
                afirmacao: "verdadeiro"
            },
            {
                texto: "Falso.",
                afirmacao: "falso"
            }
        ]
    },
    {
        enunciado: "O principal instrumento de combate de Kratos é uma espada chamada Leviathan Axe.",
        alternativas: [
            {
                texto: "Verdadeiro",
                afirmacao: "verdadeiro"
            },
            {
                texto: "Falso. Ele usa um arco",
                afirmacao: "falso"
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
