
const anoAtualSpan = document.querySelector("#anoatual");
const hoje = new Date();
anoAtualSpan.textContent = hoje.getFullYear();


const ultimaModificacaoP = document.querySelector("#ultimaModificacao");
ultimaModificacaoP.textContent = `Última Modificação: ${document.lastModified}`;