function verificarPalindromo(string){
    if (!string) return "string inexistente";

    return string.split('').reverse().join('') === string;
}
console.log(verificarPalindromo('roma me tem amor'));