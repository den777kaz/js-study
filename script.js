'use strict';
let money;
let start = function () {

    do {
        money = +prompt('Ваш месячный доход?', 6470);
        money++;
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

let appData = {
    budget: money,
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 45000,
    period: 0,
    budgetMonth: 0,
    budgetDay: 0,
    expensesMonth: 0,
    asking: function () {
        appData.addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Auto, Phone, Games');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
    for (let i = 0; i < 2; i++) {
        let question1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'house, phone , taxi');
        let question2;
        question2 = +prompt('Во сколько это обойдется?', 1895);

        appData.expenses[question1] = question2;   

    }        
    
    },
    getExpensesMonth: function () {
       
            let sum = 0;
            for (let key in appData.expenses){
              
                sum += appData.expenses[key];
            }
            console.log('summa ', sum);
            appData.expensesMonth = sum;
        },
        getBudget: function(){
            appData.budgetMonth = money - appData.expensesMonth;
            appData.budgetDay = appData.budgetMonth / 30;
        } 
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
console.log(appData);

appData.period = appData.mission / appData.budgetMonth;


function getStatusIncome() {
    if (appData.budgetDay > 800) {
        return ('Высокий уровень дохода');
    } else if (appData.budgetDay > 300 && appData.budgetDay < 800) {
        return ('Средний уровень дохода');
    } else if (appData.budgetDay > 0 && appData.budgetDay < 300) {
        return ('Низкий уровень дохода');
    } else {
        return ('Что то пошло не так');
    }
}

function getTargetMonth() {
    let targetMonth = Math.floor(appData.mission / appData.budgetMonth);
   // console.log('period ' + targetMonth + ' Month');

    if (targetMonth < 0) {
        console.log('Цель не будет достигнута gut');
    } else {
        console.log('Цель будет достигнута');
    }

}
getTargetMonth();

// let showTypeof = function (item) {
//     console.log(item, typeof item);
// };
// showTypeof(money);
// showTypeof(appData.income);
// showTypeof(appData.deposit);

// console.log(appData.period);