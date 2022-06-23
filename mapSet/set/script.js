const myArray =  [44, 44, 78, 6, 90, 20, 90];

function valoresUnicos(arr){
    
    const mySet = new Set(arr)

    return [...mySet];
}
 console.log(valoresUnicos(myArray))