(()=>{
  // Alias de tipos
  type userId = string|number;
  let userId: userId;

  function greeting(user: userId){
    console.log(`Hello ${user}`);
  }

  // Literal types
  type shirtSizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: shirtSizes;
  shirtSize = 'S';
  shirtSize = 'M';
})()
