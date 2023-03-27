(()=>{
  type Sizes = 's' | 'm' | 'l' | 'xl' | 'xxl';

  function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes,
  ) {
    return {
      title,
      createdAt,
      stock,
      size,
    }
  }
  const product = createProductToJson('Camisa', new Date(), 10, 'xl');
  const product1 = createProductToJson('Pantalon', new Date(), 10, 'xl');
  const product2 = createProductToJson('Chaqueta', new Date(), 10, 'l');
})()
