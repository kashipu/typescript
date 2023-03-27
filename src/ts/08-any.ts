// Permite dejar flexible el tipo de dato de una variable
(()=>{
  let myDynamicalVarAny: any = 10;
  myDynamicalVarAny = "Hello";
  myDynamicalVarAny = true;
  myDynamicalVarAny = [1,2,3,4,5,6,7,8,9,10];
  myDynamicalVarAny = {name: "Any", age: 10};
  myDynamicalVarAny = 2023;

  // Hacer un Cast

  // Manera 1
  myDynamicalVarAny = "Hello";
  const rta = (myDynamicalVarAny as string).toUpperCase();
  console.log(rta);

  // Manera 2
  myDynamicalVarAny = 2023;
  const rta2 = (<number>myDynamicalVarAny).toFixed(2);
  console.log(rta2);
})()


