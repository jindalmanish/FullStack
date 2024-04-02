let sum = 0;
const numbers = [65, 44, 12, 4];
function addNumberToSum(item) 
    { 
        sum += item;
        console.log ("Sum of numbers for Item is" + item + ":",sum);
      };

numbers.forEach(addNumberToSum);
//console.log("Sum of numbers:", sum);