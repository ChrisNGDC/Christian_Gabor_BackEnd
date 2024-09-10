// 1)Crear una función que reciba dos parámetros y retorne un valor.
function sum(number, addend) {
    return number + addend
}
function subt(number, subtrahend) {
    return number - subtrahend
}
// 2) Crear una función que se llame calcularAreaCuadrado que reciba un parámetro que sea el lado del cuadrado, calcule el área y la retorne. 
function calcularAreaCuadrado(sideLenght) {
    return sideLenght * sideLenght
}
// 3) Crear una función por declaración, puede hacer lo que quieras.
function mult(multiplicand, multiplier) {
    return multiplicand * multiplier
}
// 4) Crear una función lambda por expresión que se llame autosuma, recibe un parámetro que es un array de números y retorna la suma del total de los números (utilizar foreach para recorrer el array) 
const autosuma = function (arrayNums) {
    let suma = 0
    arrayNums.array.forEach(num => {
        suma += num
    })
    return suma
}
// 5) Crear una función flecha (arrow function) que reciba un nombre, el año de nacimiento, y retorne un string que diga: “Hola -nombre- este año tenes o cumplis -numero- años” 
const info = (nombre, anioNacimiento) => `Hola ${nombre}, este año tenes o cumplis ${2024 - anioNacimiento} años`
// 6) crear una función lambda que se llame inscribirAlumno, que reciba un array de alumnos y un nombre, que agregue al alumno en la ultima posición del array.
const inscribirAlumno = function (arrayAlumnos, nombre) {
    arrayAlumnos.push(nombre)
}
// 7) Crear una función que se llame buscador, que reciba un array con nombres de alumnos y un nobre a buscar, y diga si encuentra el nombre en la lista.
function buscador(arrayAlumnos, nombre) {
    return arrayAlumnos.contains(nombre)
}