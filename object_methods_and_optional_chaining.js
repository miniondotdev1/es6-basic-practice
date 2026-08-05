/*
  Problem 1: Most Expensive Product
  Given an object of product prices, use Object.keys() or Object.entries() + loop to
  find the most expensive product.

  Example: { pen: 20, book: 150, bag: 500 } -> "bag"
*/

const expensiveProduct = (product) => {
    let highest = 0;
    let expensiveProductName = '';
    const keys = Object.keys(product)
    
    for(let key of keys){
        if(highest < product[key]){
            highest = product[key]
            expensiveProductName = key
        }
    }

    return expensiveProductName
}

console.log(expensiveProduct({ pen: 20, book: 150, bag: 500 }));
