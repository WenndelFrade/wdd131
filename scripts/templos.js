const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open'); // 
    hamButton.classList.toggle('open');
});

const anoAtualSpan = document.querySelector("#anoatual");
const hoje = new Date();
anoAtualSpan.textContent = hoje.getFullYear();


const ultimaModificacaoP = document.querySelector("#ultimaModificacao");
ultimaModificacaoP.textContent = `Última Modificação: ${document.lastModified}`;