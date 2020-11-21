Array.prototype.media = function() {
    // Calcula la media de los valores del array
    let totalArray = this.reduce((a, b) => (a + b));
    return totalArray / this.length;
}

const prueba = new Array(5);

for (let i = 0; i < 5; i++) {
    prueba[i] = 4 + i;
}
document.write("La media es " + prueba.media());
console.log(prueba);
console.log("La media es " + prueba.media());