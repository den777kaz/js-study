let money = 1700;
let income = 'Taxi';
let addExpenses = 'Auto, Phone, Games';
let deposit = true;
let mission = 5000;
let period = 11;

console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));

console.log(income.length);

console.log(period + ' Months');
console.log(mission + '$');

console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(', '));

let budgetDay = money / 30;
console.log('one day budget = ' +  budgetDay + '$');
console.log('rest = ' + money % 30 + '$');




