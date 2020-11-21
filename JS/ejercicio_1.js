function PuntosCardinales(y, x) { //Prototipo un objeto punto.
    this.eje_y = isNaN(y) ? 0 : y;
    this.eje_x = isNaN(x) ? 0 : x;

    this.copia = function() {
        return new PuntosCardinales(this.eje_y, this.eje_x);
    }
}

PuntosCardinales.prototype.cambiar = function(y, x) {
    this.eje_y = y;
    this.eje_x = x;
};
PuntosCardinales.prototype.sumar = function(x, y) {
    this.eje_y = this.eje_y + y;
    this.eje_x = this.eje_x + x;
}


document.write("<h1>Ejercicio 1 de objetos</h1>");
document.write("<p>¿Que ocurre cuando introduco numeros en eje X y eje Y?");
const pruebaPunto = new PuntosCardinales(3, 1);
document.write("<p> Este punto tiene las cordedas:(<strong> Y = " + pruebaPunto.eje_y + ", X = " + pruebaPunto.eje_x + "</strong>)</p>");
console.log(pruebaPunto);
document.write("<p>¿Que ocurre al introducir una letra en el contrutor en el eje Y?</p>");
const pruebaLetraEnY = new PuntosCardinales("Y", 1);
document.write("<p> Este punto tiene las cordedas:(<strong> Y = " + pruebaLetraEnY.eje_y + ", X = " + pruebaLetraEnY.eje_x + "</strong>)</p>");

console.log(pruebaLetraEnY);

document.write("<p>¿Que ocurre al introducir una letra en el contrutor en el eje X?</p>");
const pruebaLetraEnX = new PuntosCardinales(1, "X");
document.write("<p> Este punto tiene las cordedas:(<strong> Y = " + pruebaLetraEnX.eje_y + ", X = " + pruebaLetraEnX.eje_x + "</strong>)</p>");
console.log(pruebaLetraEnX);

document.write("<p>¿Que ocurre al introducir una letra en el contrutor en el eje Y y el eje X.?</p>");
const pruebaLetraEnYX = new PuntosCardinales("Y", "X");
document.write("<p> Este punto tiene las cordedas:(<strong> Y = " + pruebaLetraEnYX.eje_y + ", X = " + pruebaLetraEnYX.eje_x + "</strong>)</p>");
console.log(pruebaLetraEnYX);
document.write("<p>¿Que ocurre al utilizar metodo cambiar?");
pruebaPunto.cambiar(4, 6);
document.write("<p> Este punto tiene las cordedas:(<strong> Y = " + pruebaPunto.eje_y + ", X = " + pruebaPunto.eje_x + "</strong>)</p>");
console.log("Utilizo metodo cambiar:");
console.log(pruebaPunto);
document.write("<p>¿Que ocurre al utilizar metodo sumar.");
pruebaPunto.sumar(2, 2);
console.log("Utilizo metodo sumar:");
console.log(pruebaPunto);
document.write("<p> Este punto tiene las cordedas:(<strong> Y = " + pruebaPunto.eje_y + ", X = " + pruebaPunto.eje_x + "</strong>)</p>");
document.write("<p>¿Que ocurre al utilizar metodo copia.");
const copiaPunto = pruebaPunto.copia();
console.log("Este es un clon o copia.");
console.log(copiaPunto)
document.write("<p> Este punto tiene las cordedas:(<strong> Y = " + copiaPunto.eje_y + ", X = " + copiaPunto.eje_x + "</strong>)</p>");