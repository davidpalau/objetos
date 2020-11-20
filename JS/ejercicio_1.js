let y = prompt('Introduce el valor de Y');
let x = prompt('Introduce el valor de X');

function PuntosCardinales(y, x) {
  this.eje_y = isNaN(y) ? 0 : y;
  this.eje_x = isNaN(x) ? 0 : x;

  let cambiar = (y, x) => {
    this.eje_y = y;
    this.eje_x = x;
  };

  let copiaPunto = () => new PuntosCardinales(this.eje_y, this.eje_x);

  let Sumar = (y, x) => {
    this.eje_y = this.eje_y + y;
    this.eje_x = this.eje_x + x;
  };
}
