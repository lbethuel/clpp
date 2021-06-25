function novaCheckList(){
    document.getElementById('novoCheckList').disabled = false;
}

const query = (a)=>document.querySelector(a);



const add = query('.buttonSalvar');
const oi = query('.perguntas')

add.addEventListener('click', () => {
    oi.setAttribute('class', 'pergunta0');
})