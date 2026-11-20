const anoAtualSpan = document.querySelector("#anoatual");
const hoje = new Date();
if (anoAtualSpan) {
    anoAtualSpan.textContent = hoje.getFullYear();
}

const ultimaModificacao = document.querySelector("#ultimaModificacao");
if (ultimaModificacao) {
    ultimaModificacao.textContent = `Última Modificação: ${document.lastModified}`;
}

//usei a IA para calculo

const unidade = "metrica"; 
const temperatura = 8;
const velocidadeVento = 10;

function condicaoViavel(temp, vel, sistema) {
    if (sistema === "metrica") {
        return temp <= 10 && vel > 4.8;
    }
    if (sistema === "imperial") {
        return temp <= 50 && vel > 3;
    }
    return false;
}

function calcularSensacaoTermica(temp, vel, sistema = "metrica") {
    return sistema === "imperial"
        ? 35.74 + 0.6215 * temp - 35.75 * (vel ** 0.16) + 0.4275 * temp * (vel ** 0.16)
        : 13.12 + 0.6215 * temp - 11.37 * (vel ** 0.16) + 0.3965 * temp * (vel ** 0.16);
}

window.addEventListener("DOMContentLoaded", () => {
    const elementoSensacao = document.querySelector("#sensacao-termica");
    if (!elementoSensacao) return;

    const sufixo = unidade === "imperial" ? "°F" : "°C";

    if (condicaoViavel(temperatura, velocidadeVento, unidade)) {
        const resultado = calcularSensacaoTermica(temperatura, velocidadeVento, unidade);
        elementoSensacao.textContent = `${resultado.toFixed(1)}${sufixo}`;
    } else {
        elementoSensacao.textContent = "N/A";
    }
});