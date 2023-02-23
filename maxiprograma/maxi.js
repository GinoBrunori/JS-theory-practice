// 5. Una casa de computación paga a sus empleados un sueldo fijo de ARS15000
// más una comisión del 5% sobre el total facturado por cada empleado. Hacer un
// programa para ingresar el total facturado por un empleado y que luego calcule
// y emita por pantalla el sueldo total a cobrar por el mismo.
function comision (s,c) {
    let r1 = c * s / 100;
    return r1 + s;
}
// function comision (t) {
//     let comi = t * 0.05;
//     let total = t + comi
//     return total;
// }
console.log(comision(15000, 5));

// 6. Hacer un programa para ingresar por teclado las tres notas de exámenes de un
// alumno y luego calcule y emita por pantalla el promedio final.
let notas = [6,7,8,9]
function promedio (not) {
    let acum = 0;
    let acum2 = 0;
    let cantNotas = not.length;
    for (let i = 0; i < not.length; i++) {
        acum += not[i];
        acum2 = acum / cantNotas;
    }
    return acum2;
}
console.log(promedio(notas));

// 7. Hacer un programa para ingresar por teclado los metros cuadrados totales de
// un predio y los metros cuadrados cubiertos; luego calcular y mostrar por
// pantalla el porcentaje de metros cuadrados cubiertos y el porcentaje de
// metros cuadrados descubiertos.
function metros (mT, mC) {
    let metrosCubiertos = mC * 100 / mT;
    let metrosDescubiertos = 100 - metrosCubiertos;
    let mensaje = `El porcentaje de m2 cubiertos es: %${metrosCubiertos} y el procentaje de metrosDescubiertos es: %${metrosDescubiertos}`
    return mensaje;
}
console.log(metros(300, 180));

// 10. Hacer un programa que permita ingresar por teclado dos números y que luego
// muestre por pantalla la suma, la resta, la multiplicación y la división de dichos
// números. Se deben mostrar cuatro resultados en pantalla. Los números deben
// ser solicitados una única vez.
function descuento (montoTotal, desc) {
    let descEnPesos = desc * montoTotal / 100;
    let totalAPagar = montoTotal - descEnPesos;
    return `El monto a a pagar es: $${totalAPagar}`;
}
console.log(descuento(300, 15));

// 9. Una universidad desea conocer los porcentajes de mujeres y hombres en las
// carreras de ciencias exactas. Se solicita un programa para cargar la cantidad de
// mujeres y la cantidad de hombres y que el mismo calcule y emita por pantalla
// los porcentajes correspondientes.
function porcentajeMyH (m,h) {
    let cantTotal = m + h;
    let porcM = m * 100 / cantTotal;
    let porcH = 100 - porcM;
    return `El porcentaje de mujeres es: %${porcM} y el de hombres es: %${porcH}`;
}
console.log(porcentajeMyH(228, 300))

// 10. Hacer un programa que permita ingresar por teclado dos números y que luego
// muestre por pantalla la suma, la resta, la multiplicación y la división de dichos
// números. Se deben mostrar cuatro resultados en pantalla. Los números deben
// ser solicitados una única vez.

function muchasOp (num1,num2) {
    let suma = num1 + num2;
    let resta = num1 - num2;
    let multi = num1 * num2;
    let div = num1 / num2;
    return (`El resultado de la suma es: ${suma} / El resultado de la resta es: ${resta} / El resultado de la multi es: ${multi} / El resultado de la div es: ${div}`)
}

console.log(muchasOp(10,5))

