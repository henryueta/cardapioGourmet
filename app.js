let pedido=0;

const usuarioConta = document.querySelector('.usuarioConta');
const usuarioOpcoes = document.querySelector('.usuarioOpcoes');
const visibilidade = document.querySelector('.visibilidade');
const linha1 = document.querySelector('.usuarioAcesso>div:first-child');
const linha2 = document.querySelector('.usuarioAcesso>div:last-child');
const usuarioAcesso = document.querySelector('.usuarioAcesso');
const carrinho = document.querySelector('#carrinho');
const valorCarrinho = document.querySelector('#carrinho>p')
const notification = document.querySelector('#notification');
const carregador = document.querySelector('#carregador');
const numeroPedido = document.querySelector('#numeroPedido');
const slidesSite = document.querySelector('#slidesSite');
const slides = setTimeout(imag1,5000);
const aparecer= document.querySelector('.aparecer');
const numCarrinho = document.querySelector('.usuarioOpcoes>div>div:last-child');
const saidaPop = document.querySelector('#saidaPop');
const intangivel = document.querySelector('#intangivel');

const ig = document.querySelector('#imagemGrande');
const fotosComida = document.querySelectorAll('#fotosComida>div>img');


function imag0(){
    document.getElementById('slidesSite').style.backgroundImage="url(img/fundo1.jpg)";
    setTimeout(imag1,5000);
}

function imag1(){
    document.getElementById('slidesSite').style.backgroundImage="url(img/fundo2.jpg)";
    setTimeout(imag2,5000);
}

function imag2(){
    document.getElementById('slidesSite').style.backgroundImage="url(img/VinhoMesa.jpg)";
    setTimeout(imag0,5000);

}


function registroPedidos(){
   
        document.getElementById('notification').style.visibility="visible"
        numeroPedido.innerHTML=pedido;
        numCarrinho.innerHTML = "Carrinho("+pedido+")";
}

numCarrinho.addEventListener('click',()=>{
    if(pedido > 0){
    numCarrinho.innerHTML = "Carrinho";
    document.getElementById('notification').style.visibility="hidden"
    }
    
});







fotosComida.forEach(element =>
element.addEventListener('click', ()=>{
ig.src = "img/paraGrande/"+element.dataset.nome;

})
);

usuarioAcesso.addEventListener('click', ()=>{
    usuarioConta.classList.toggle('visibilidade');
    usuarioOpcoes.classList.toggle('exibir');
    linha1.classList.toggle('linha1');
    linha2.classList.toggle('linha2');

    });
    
    saidaPop.addEventListener('click',()=>{
        intangivel.style.display="none";
    })

carrinho.addEventListener('click', ()=>{
document.getElementById('carregador').style.display="flex"
valorCarrinho.innerHTML="Adicionando ao Carrinho"
const carregando = setTimeout(ColocarCarrinho, 4200);

});

function ColocarCarrinho(){
    intangivel.style.display="flex";
    valorCarrinho.innerHTML="Adicionar no Carrinho"
    document.getElementById('carregador').style.display="none"
    document.getElementById('notification').style.visibility="visible"
    pedido++;
registroPedidos();

}



