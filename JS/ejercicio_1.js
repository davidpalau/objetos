function PuntosCardinales(y, x) { //Prototipo un objeto punto.
    this.eje_y = isNaN(y) ? 0 : y;
    this.eje_x = isNaN(x) ? 0 : x;
}

PuntosCardinales.prototype.cambiar = function(y, x) {
    this.eje_y = y;
    this.eje_x = x;
};
PuntosCardinales.prototype.sumar = function(x, y) {
    this.eje_y = this.eje_y + y;
    this.eje_x = this.eje_x + x;
}

PuntosCardinale
let nuevoPunto = new PuntosCardinales(5, 3);

document.write("<h1>Ejercicio 1 de objetos</h1>");
document.write("<p> Este punto tiene las cordedas:(<strong> Y = " + nuevoPunto.eje_y + ", X = " + nuevoPunto.eje_x + "</strong>)</p>");
nuevoPunto.cambiar(7, 9);

document.write("<p> Este puntotiene nuevas cordendas son:(<strong> Y = " + nuevoPunto.eje_y + ", X = " + nuevoPunto.eje_x + "</strong>)</p>");