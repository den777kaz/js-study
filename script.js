'use strict';

let period;
let budgetMonth;
let budgetDay;
let money;
let addExpenses;
let deposit;
const mission = 15000;
let income = 'Taxi';



money = prompt ('Ваш месячный доход?', 3470);
addExpenses =prompt ('Перечислите возможные расходы за рассчитываемый период через запятую', 'Auto, Phone, Games');
deposit = confirm ('Есть ли у вас депозит в банке?');

console.log('addExpenses: ', addExpenses.split(', '));
console.log(money + ' ' + deposit + ' ' + income);

let question1 = prompt ('Какие обязательные ежемесячные расходы у вас есть?', 'house, phone , taxi');
let question2 = prompt ('Во сколько это обойдется?', 1895);
let question3 = prompt ('Какие обязательные ежемесячные расходы у вас есть?', 'auto, food');
let question4 = prompt ('Во сколько это обойдется?', 667);

budgetMonth = Number(money) - (Number(question2) + Number(question4));
console.log('BudgetMonth: ', budgetMonth);

period = mission / budgetMonth;
console.log('period: ', Math.ceil(period));

budgetDay = budgetMonth / 30;
console.log('budgetDay: ', Math.floor(budgetDay));

if (budgetDay > 800) {
    console.log('Высокий уровень дохода');
}else if (budgetDay > 300 && budgetDay < 800){
    console.log('Средний уровень дохода');
}else if (budgetDay > 0 && budgetDay < 300){ 
    console.log('Низкий уровень дохода');
}else {
    console.log('Что то пошло не так');
}


















