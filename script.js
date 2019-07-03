'use strict';

let period;
let budgetMonth;
let budgetDay;
let money;
let addExpenses;
let deposit;
const mission = 15000;
let income = 'Taxi';

console.log(mission);

money = +prompt('Ваш месячный доход?', 3470);
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Auto, Phone, Games');
deposit = confirm('Есть ли у вас депозит в банке?');

// console.log('addExpenses: ', addExpenses.split(', '));
// console.log(money + ' ' + deposit + ' ' + income);

let question1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'house, phone , taxi');
let question2 = prompt('Во сколько это обойдется?', 1895);
let question3 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'auto, food');
let question4 = prompt('Во сколько это обойдется?', 667);

budgetMonth = Number(money) - (Number(question2) + Number(question4));
//console.log('BudgetMonth: ', budgetMonth);

period = mission / budgetMonth;
//console.log('period: ', Math.ceil(period));

budgetDay = budgetMonth / 30;
//console.log('budgetDay: ', Math.floor(budgetDay));

function getStatusIncome() {
    if (budgetDay > 800) {
        return ('Высокий уровень дохода');
    } else if (budgetDay > 300 && budgetDay < 800) {
        return ('Средний уровень дохода');
    } else if (budgetDay > 0 && budgetDay < 300) {
        return ('Низкий уровень дохода');
    } else {
        return ('Что то пошло не так');
    }
}
console.log('getStatusIncome();: ', getStatusIncome());


function getExpensesMonth() {

    return Number(question2) + Number(question4);
}
getExpensesMonth();

function getAccumulatedMonth() {
    let accumulatedMonth = money - budgetMonth;
    return accumulatedMonth;
}
getAccumulatedMonth();


function getTargetMont() {

    // return mission / accumulatedMonth;

    console.log('period ' + Math.floor(mission / budgetMonth) + ' Month');

}
getTargetMont();







let showTypeof = function (item) {
    console.log(item, typeof item);
};
showTypeof(money);
showTypeof(income);
showTypeof(deposit);