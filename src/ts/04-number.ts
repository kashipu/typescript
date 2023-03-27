(()=>{
  // Tipos inferidos
  let productPrice = 100;
  productPrice = 5;
  console.log(productPrice)
  // Tipos explicitos
  let costumerAge: number = 28;
  costumerAge = 16;
  // Declarar variables, si solo se declara hay que poner el tipo de dato explicito
  let productInStock: number
  productInStock = 11
  console.log(productInStock)

  if(productInStock > 10) {
    console.log("esta completo")
  }

})();

