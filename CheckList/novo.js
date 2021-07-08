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
    let a = copia.cloneNode(true);
    oi.appendChild(a);
  });



////////////////////////////////////////////////////////////
 const ad2 = document.querySelector('.adicao3');
  const adi = document.querySelector('.corpoPergunta1');

/*  ad2.addEventListener('click', () => {
    adi.setAttribute('class', 'corpoPergunta2');
})  */ 

/////////////////////////////////////////////////////////////
let replicar = document.querySelector('.corpoPergunta1')
const ad3 = document.querySelector('.perg');

$( ".adicao3" ).click(function() {
    let b = adi.cloneNode(true);
    ad3.appendChild(b);
    b.setAttribute('class', 'corpoPergunta2');
  });