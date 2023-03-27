import { addProduct, calcStock, products } from "./product.service";

addProduct({
  title: 'Producto 1',
  createdAt: new Date(1993,1,1),
  stock: 10,
  size: 'L'
})

addProduct({
  title: 'Producto 2',
  createdAt: new Date(1993,1,1),
  stock: 15,
  size: 'L'
})

addProduct({
  title: 'Producto 3',
  createdAt: new Date(1993,1,1),
  stock: 20,
  size: 'L'
})
const total = calcStock()
console.log(products)
console.log(total)
