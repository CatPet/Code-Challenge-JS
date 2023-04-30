const productsFilter = (products) => {
  let filteredProducts = [];
  products.map(product => {
    const elements = products.filter(product1 => product1.InventoryID.value == product.InventoryID.value);
    const max = elements.reduce((value, element) => Math.max(value, element.THC.value), product.THC.value);
    const min = elements.reduce((value, element) => Math.min(value, element.THC.value), product.THC.value);
    if (!filteredProducts.find(element => element.InventoryID.value == product.InventoryID.value))
      filteredProducts.push({ ...product, min, max });
  });
  return filteredProducts;
}

const productList = [
  {
    InventoryID: { value: 'BRD10STS0001' },
    THC: { value: 72.46 },
  },
  {
    InventoryID: { value: 'BRD10SCS0001' },
    THC: { value: 4.07 },
  },
  {
    InventoryID: { value: 'BRD10SCS0001' },
    THC: { value: 4.2 },
  },
  {
    InventoryID: { value: 'BRD10SCS0001' },
    THC: { value: 4.12 },
  }
];

const result = productsFilter(productList);
console.log(result);