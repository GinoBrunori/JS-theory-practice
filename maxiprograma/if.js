function mostrarMayor (n1,n2) {
    if (n1 > n2) {
        return n1
    } else {
        return n2
    }
}

console.log(mostrarMayor(5,8));

// 1. Hacer un programa para ingresar un número y luego se emita por pantalla un
// cartel aclaratorio si “Es mayor a 10” o “No es mayor a 10”.

function mayorA10 (num) {
    if (num > 10) {
        return "Es mayor a 10"
    } else {
        return "No es mayor a 10"
    }
}
console.log(mayorA10(6))

// 2. Hacer un programa para ingresar dos números distintos y luego se muestre por
// pantalla el menor de ellos.

function numDistintos (num1,num2) {
    if (num1 > num2) {
        return num2
    } 
        return num1    
}
console.log(numDistintos(5,9));

// 3. Hacer un programa para ingresar dos números y que luego emita por pantalla
// el mayor de ellos o un cartel aclaratorio “Son iguales” en el caso de que así sea.
// Nota: los números pueden ser iguales.

function a (num1,num2) {
    if (num1 == num2) {
        return "Son iguales"
    } else if (num1 > num2) {
        return num1
    }   
      return num2;
    
}
console.log(a (6,7));

// 4. Hacer un programa para ingresar un número y luego se emita un cartel por
// pantalla “Positivo” si el número es mayor a cero, “Negativo” si el número es
// menor a cero o “Cero” si el número es igual a cero.

function posiONega  (num) {
    if (num == 0) {
        return "Cero"
    } else if (num > 0) {
        return "Positivo"
    } 
    return "Negativo" 
}
console.log(posiONega(-1));


// 5. Hacer un programa para ingresar un número y mostrar por pantalla un cartel
// aclaratorio si el mismo es PAR o IMPAR.
function esParOImpar (num) {
    if (num % 2 == 0) {
        return "ES PAR"
    }
    return "Es impar"
}
console.log(esParOImpar(8));

// Una casa de video juegos otorga un descuento dependiendo del importe de la
// compra realizada según los siguientes valores:
// • Si el importe es menor a ARS 1000, no hay descuento.
// • Si el importe es ARS 1000 o más pero menor a ARS 5000, aplica un
// descuento del 10%.
// • Si el importe es ARS 5000 o más, aplica un descuento del 18%.

function descuento (importe) {
    let descuentoMenor = 10;
    let descuentoMayor = 18;
    let importeTotal = 0; 
    if (importe >= 5000) {
        importeTotal = importe - (descuentoMayor * importe / 100);
        return `La compra es de: $${importe}, por lo tanto se le aplica un descuento del ${descuentoMayor}%. Importe final: $${importeTotal}`;
    } else if (importe >= 1000) {
        importeTotal = importe - (descuentoMenor * importe / 100);
        return `La compra es de: $${importe}, por lo tanto se le aplica un descuento del ${descuentoMenor}%. Importe final: $${importeTotal}`;
    }
        return "No hay descuento";
}
console.log(descuento(100000));

// 7. Hacer un programa para ingresar cuatro números distintos y luego mostrar por
// pantalla el mayor de ellos.

function cuatroNum (n1,n2,n3,n4) {
    if (n1 > n2 && n1 > n3 && n1 > n4) {
        return n1;
    } else if (n2 > n3 && n2 > n4) {
        return n2;
    } else if (n3 > n4) {
        return n3;
    } 
    return n4;
}
// console.log(cuatroNum(15,22,29,10));

// 8. Hacer un programa para ingresar cuatro números distintos y luego mostrar por
// pantalla el menor de ellos.
function cuatroNumMenor (n1,n2,n3,n4) {
    if (n1 < n2 && n1 < n3 && n1 < n4) {
        return n1;
    } else if (n2 < n3 && n2 < n4) {
        return n2;
    } else if (n3 < n4) {
        return n3;
    } 
    return n4;
}
// console.log(cuatroNumMenor(15,22,2,10));

// 9. Hacer un programa para ingresar cinco números distintos y luego mostrar por
// pantalla el mayor y el menor de ellos.
function cincoNumDistintos (n1,n2,n3,n4,n5) {
    if (n1 > n2 && n1 > n3 && n1 > n4) {
        return n1;
    } else if (n2 > n3 && n2 > n4) {
        return n2;
    } else if (n3 > n4) {
        return n3;
    } else {
    return n4;
    }
    if (n1 < n2 && n1 < n3 && n1 < n4) {
        return n1;
    } else if (n2 < n3 && n2 < n4) {
        return n2;
    } else if (n3 < n4) {
        return n3;
    } 
    return n4;

}

console.log(cincoNumDistintos(1,2,3,4,5))