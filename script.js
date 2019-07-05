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

    do {
        money =+prompt('Ваш месячный доход?', 6470);
        money ++;
    }
    while (isNaN(money) || money == '' || money == null);

    // money =+prompt('Ваш месячный доход?', 6470);
    // console.log('vor ' + money);

    // while (isNaN(money) || money == '' || money == null){
    //     money = +prompt('Ваш месячный доход?', 6470);
    //     console.log('cikl' + money);
    // }
   
};
start();

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Auto, Phone, Games');
deposit = confirm('Есть ли у вас депозит в банке?');

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

        do {
            sum = +prompt('Во сколько это обойдется?', 1895);
            sum ++;

        }
        while (isNaN(sum) || sum == '' || sum == null);

          
    }
    return sum;
};

let expensesAmount = expensesMonth();

budgetMonth = Number(money) - expensesAmount;
period = mission / budgetMonth;
budgetDay = budgetMonth / 30;



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


function getAccumulatedMonth() {
    let accumulatedMonth = money - expensesAmount;
    return accumulatedMonth;
}
getAccumulatedMonth();


function getTargetMonth() {
    let targetMonth = Math.floor(mission / budgetMonth);
    console.log('period ' + targetMonth + ' Month');

    if (targetMonth < 0) {
        console.log('Цель не будет достигнута gut');
    } else {
        console.log('Цель будет достигнута');
    } 
    
}
getTargetMonth();










let showTypeof = function (item) {
    console.log(item, typeof item);
};
showTypeof(money);
showTypeof(income);
showTypeof(deposit);