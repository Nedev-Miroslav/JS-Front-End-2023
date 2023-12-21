function checkStoreProvision(currentStock, deliveredStock) {
    const products = [...currentStock, ...deliveredStock]; // Правим един нов по-голям масив от по-малки масива
  
    const stock = products.reduce((acc, curr, i) => { // Можем да подадем и трети параметър на reduce метода и това е индекс (i в случая държи на кой индекс е всеки един елемент)
      if (i % 2 === 0) {
        if (!acc.hasOwnProperty(curr)) {
          acc[curr] = Number(products[i + 1]);
        } else {
          acc[curr] += Number(products[i + 1]);
        }
      }
  
      return acc;
    }, {});
  
    Object.keys(stock).forEach((key) => {
      console.log(`${key} -> ${stock[key]}`);
    });
  }
  



// Друго решение на задачата
// function checkStoreProvision(input1, input2) {

//     const productObj = {}

//     for (let i = 0; i < input1.length; i += 2) {
//         let product = input1[i];
//         let count = Number(input1[i + 1]);

//         if (productObj.hasOwnProperty(product)) {
//             productObj[product] += count;
//         } else {
//             productObj[product] = count;
//         }
//     }

//     for (let i = 0; i < input2.length; i += 2) {
//         let product = input2[i];
//         let count = Number(input2[i + 1]);


//         if (productObj.hasOwnProperty(product)) {
//             productObj[product] += count;
//         } else {
//             productObj[product] = count;
//         }
//     }

//     for (const key in productObj) {
//         console.log(`${key} -> ${productObj[key]}`)
//     }
// }



checkStoreProvision(
    [
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);