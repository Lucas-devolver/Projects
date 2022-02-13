const botao = document.getElementById('btn-mobile');

function toggle (){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')

}

botao.addEventListener('onmouseover',toggle);


