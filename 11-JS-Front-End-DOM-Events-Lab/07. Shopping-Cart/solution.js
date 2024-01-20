function solve() {
   let addProductButtons = document.querySelectorAll(".add-product");
   let textAreaElement = document.querySelector('textarea');
   let checkoutButtonElement = document.querySelector(".checkout");
   let sum = 0;
   let products = [];

   for (const addProductButton of addProductButtons) {
      addProductButton.addEventListener("click", (e) => {
         let currentProductElement = e.currentTarget.parentElement.parentElement;
         let productName = currentProductElement.querySelector(".product-title").textContent;
         let productPrice = Number(currentProductElement.querySelector(".product-line-price").textContent);

         sum += productPrice;
         products.push(productName);

         textAreaElement.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`
      });
   }


   checkoutButtonElement.addEventListener("click", (e) => {

      let uniqueProducts = products.reduce((a, x) => {
         if (!a.includes(x)) {
            a.push(x)
         }

         return a;

      }, []);
      textAreaElement.textContent += `You bought ${uniqueProducts.join(", ")} for ${sum.toFixed(2)}.`;


      for (const button of addProductButtons) {
         button.disabled = true;

      }
      checkoutButtonElement.disabled = true;

   });

}





// Друго решение без reduce
function solve() {
   let addProductButtons = document.querySelectorAll(".add-product");
   let textAreaElement = document.querySelector('textarea');
   let checkoutButtonElement = document.querySelector(".checkout");
   let sum = 0;
   let products = {};

   for (const addProductButton of addProductButtons) {
      addProductButton.addEventListener("click", (e) => {
         let currentProductElement = e.currentTarget.parentElement.parentElement;
         let productName = currentProductElement.querySelector(".product-title").textContent;
         let productPrice = Number(currentProductElement.querySelector(".product-line-price").textContent);

         sum += productPrice;
         products[productPrice] = productName;

         textAreaElement.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`
      });
   }

   console.log(products);

   checkoutButtonElement.addEventListener("click", (e) => {

      let uniqueProducts = [];

      Object.entries(products).forEach(function([key, value]) {
         uniqueProducts.push(value);
     });

      textAreaElement.textContent += `You bought ${uniqueProducts.join(", ")} for ${sum.toFixed(2)}.`;


      for (const button of addProductButtons) {
         button.disabled = true;

      }
      checkoutButtonElement.disabled = true;

   });
}