function compararNumeros (a,b){
    var res = (a===b)? '':'não'
    return `Os números ${a} e ${b} ${res} são iguais`
}
function somar (a,b){
    return a+b
}
function comparar10 (a,b){
    return (a+b > 10)? 'maior que 10':'menor que 10'
}
function comparar20(a,b){
    return (a+b > 20)? 'maior que 20':'menor que 20'
}
var a = 3
var b = 3
console.log(compararNumeros(a,b) + '. Sua soma é '+somar(a,b)+', que é '+comparar10(a,b)+ ' e '+comparar20(a,b))