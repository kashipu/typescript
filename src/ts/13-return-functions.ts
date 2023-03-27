(()=>{
  const calcTotal = (prices:number[]) => {
    let total = 0;
    prices.forEach(price => {
      total += price;
    });
    return total;
  }

  const printTotal = (prices:number[]):void => {
    const total = calcTotal(prices);
    console.log(`El total es: ${total}`);
  };

  const rta = calcTotal([10, 20, 30, 40, 50]);
  console.log(rta);
})()
