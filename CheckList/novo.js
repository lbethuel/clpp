function novaCheckList(){
    document.getElementById('novoCheckList').disabled = false;
}


const add = document.querySelector('.buttonSalvar');
const oi = document.querySelector('.perguntas')
let copia = document.querySelector('article')

add.addEventListener('click', () => {
    oi.setAttribute('class', 'pergunta0');
})


$( ".adicao1" ).click(function() {
    let a= copia.cloneNode(true);
    oi.appendChild(a);
  });