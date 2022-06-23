var numeroAtualtxt = document.getElementById('numeroAtual')
var numeroAtual = 0

function adicionar(){
    numeroAtual = numeroAtual + 1
    numeroAtualtxt.innerHTML = numeroAtual
}
function subtrair(){
    numeroAtual = numeroAtual - 1
    numeroAtualtxt.innerHTML = numeroAtual
}
