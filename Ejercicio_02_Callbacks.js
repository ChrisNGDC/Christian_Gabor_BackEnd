// 1) Definir una función que se llame Calculadora, que reciba un array de números, y una callback.
//     A) Pasarle por argumento una función arrow que realice la suma de los elemtos del array.
//     B) Pasarle por argumento una función arrow que realice la resta de los elementos del array.
//     C) Pasarle por argumento una función arrow que realice la multiplicación de los elementos.
function Calculadora(arrayNums, callback) {
    return callback(arrayNums);
}
let arrayNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(Calculadora(arrayNums, (arrayNums) => arrayNums.reduce((accumulator, currentNum) => accumulator + currentNum, 0)))
console.log(Calculadora(arrayNums, (arrayNums) => arrayNums.reduce((accumulator, currentNum) => accumulator - currentNum, arrayNums[0] * 2)))
console.log(Calculadora(arrayNums, (arrayNums) => arrayNums.reduce((accumulator, currentNum) => accumulator * currentNum, 1)))
// 2) Definir una función llamada agregarSiEstaEntreCeroYDiez, que reciba un numero, y un array, la función debe validar si el número es mayor o igual a cero y menor o igual a 10, en caso favorable, debe agregarlo en la primera posición del array, caso contrario debe arrojar un error informando que el número es mayor o menor a lo establecido.Debe retornar el array con el resultado.
function agregarSiEstaEntreCeroYDiez(number, arrayNums) {
    if (number < 0 || number > 10) {
        console.error("El numero es mayor o menor a lo establecido.")
    } else {
        arrayNums.unshift(number)
    }
    return arrayNums
}
// 3) Definir una función similar a la del punto 2, pero que en vez de un número reciba un array con números y valide si cada uno de los elementos cumple con la condición de estar entre cero y diez, debe retornar un array con los números que cumplan la función.
function validarSiEstaEntreCeroYDiez(arrayNums) {
    let arrayValidNums = []
    arrayNums.forEach(num => {
        if (number >= 0 && number <= 10) {
            arrayValidNums.push(num)
        }
    })
    return arrayValidNums
}
// 4) Momento de creatividad! – Definir una función que reciba tres parámetros, algo, y dos callbacks, que internamente las ejecute y realice algún procedimiento.
function filtroEspecial(arrayNums) {
    if (arrayNums.every((item) => item < 0 ) || arrayNums.every((item) => item > 0 )) {
        return arrayNums
    }
    return
}
function promedioConSigno(arrayNums) {
    let suma = arrayNums.reduce((accumulator, currentNum) => accumulator + currentNum, 0)
    return suma / arrayNums.length
}
function promedioConFiltro(arrayNums, callback1, callback2) {
    if (response = callback1(arrayNums)) {
        console.log(callback2(response))
    } else {
        console.log("Array no homogeneo en referencia al signo.")
    }
}
promedioConFiltro([1,2,3,4,5,6,7,8,9], filtroEspecial, promedioConSigno)
promedioConFiltro([-1,-2,-3,-4,-5,-6,-7,-8,-9], filtroEspecial, promedioConSigno)
promedioConFiltro([1,2,3,4,5,-6,-7,-8,-9], filtroEspecial, promedioConSigno)
// 5) Realizar una función que se llame validarIngreso, que reciba una edad, y una callback.Esta función debe validar por medio de un operador ternario si puede intregar o no(la condición es que sea mayor a 18 años).El resultado del operador ternario de debe pasar como argumento a la ejecución de la callback. (Podes elegir que hacer con la función callback que le vas a pasar por agumento a la función validarIngreso)
// No termino de entender la consigna del punto 5 :C
function validarIngreso(edad, callback) {
    callback(edad > 18 ? true : false)
}