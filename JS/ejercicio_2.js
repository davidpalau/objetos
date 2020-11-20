Array.prototyp.media = function () {
  let numeros;

  Array.forEach((clave, valor) => {
    numeros += valor;
  });

  let media;
  return media / Array.length;
};
