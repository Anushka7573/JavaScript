// All items 10% off 

prices = [250,645,300,900,50];

sum = 0;
for (let i = 0; i < prices.length; i++) {
    sum += prices[i];
}   
removeDiscount = sum * 0.1;

console.log("Total price:", sum);
console.log("Price after discount:", removeDiscount);   