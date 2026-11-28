const anoAtualSpan = document.querySelector("#anoatual");
const hoje = new Date();
if (anoAtualSpan) {
    anoAtualSpan.textContent = hoje.getFullYear();
}

const ultimaModificacao = document.querySelector("#ultimaModificacao");
if (ultimaModificacao) {
    ultimaModificacao.textContent = `Última Modificação: ${document.lastModified}`;
}