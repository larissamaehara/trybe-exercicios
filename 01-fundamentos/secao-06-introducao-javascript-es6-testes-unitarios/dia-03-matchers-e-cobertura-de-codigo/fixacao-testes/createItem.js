const createItem = (name, unit, price, quantity) => {
  if (typeof name !== 'string') {
    throw new Error('O nome do item deve ser uma string')
  }
  if (price <= 0) {
    throw new Error('O preço do item deve ser maior que zero')
  }
  if (quantity === undefined) {
    quantity = 0
  }
  return {
    name,
    quantity,
    unit,
    price
  }
}
module.exports = createItem
