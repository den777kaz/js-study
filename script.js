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

let start = function (){
    money =+prompt('Ваш месячный доход?', 6470);
    console.log('vor ' + money);

    while (isNaN(money) || money == '' || money == null){
        money = +prompt('Ваш месячный доход?', 6470);
        console.log('cikl' + money);
    }
   
};
start();
money = +prompt('Ваш месячный доход?', 6470);
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Auto, Phone, Games');
deposit = confirm('Есть ли у вас депозит в банке?');

// console.log('addExpenses: ', addExpenses.split(', '));
// console.log(money + ' ' + deposit + ' ' + income);

let question1; 
let question2; 


let expensesMonth = function (){
    let sum = 0; 

    for(let i = 0; i < 2; i++){

        if (i === 0){
            question1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'house, phone , taxi');     
        } else if (i ===1){
            question2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'auto, food');
        }

        sum += +prompt('Во сколько это обойдется?', 1895);

        return sum;
        
        
    }
};

let expensesAmount = expensesMonth();

budgetMonth = Number(money) - expensesAmount;
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


// function getExpensesMonth() {

//     return expensesMonth;
// }
// getExpensesMonth();

function getAccumulatedMonth() {
    let accumulatedMonth = money - expensesAmount;
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