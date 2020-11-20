//let y = prompt('Introduce el valor de Y');
//let x = prompt('Introduce el valor de X');
let nuevoPunto = new PuntosCardinales(5, 3);

console.log(nuevoPunto.mostrar());

function PuntosCardinales(y, x) {
  this.eje_y = isNaN(y) ? 0 : y;
  this.eje_x = isNaN(x) ? 0 : x;
return 'Cordenada Y =', this.eje_y, ' cordenada X=', eje_x;
  function mostrar() {
    
  }
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
