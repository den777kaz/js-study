'use strict';

let money;
let start = function () {
    do {
        money = +prompt('Ваш месячный доход?', 6470);
        money++;
    }
    while (isNaN(money) || money == '' || money == null);
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
            let question1 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
            let question2;
            question2 = +prompt('Во сколько это обойдется?');

            appData.expenses[question1] = question2;
        }
    },
    getExpensesMonth: function () {
        let sum = 0;
        for (let key in appData.expenses) {

            sum += appData.expenses[key];
        }
        console.log('expensesMoth=', sum);
        appData.expensesMonth = sum;
    },
    getBudget: function () {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
    getStatusIncome: function () {
        if (appData.budgetDay > 800) {
            console.log('Высокий уровень дохода');
        } else if (appData.budgetDay > 300 && appData.budgetDay < 800) {
            console.log('Средний уровень дохода');
        } else if (appData.budgetDay > 0 && appData.budgetDay < 300) {
            console.log('Низкий уровень дохода');
        } else {
            console.log('Что то пошло не так');
        }
    },
    getTargetMonth: function () {
        let targetMonth = Math.floor(appData.mission / appData.budgetMonth);
        appData.period = targetMonth;
        console.log('period ' + targetMonth + ' Month');

        if (targetMonth < 0) {
            console.log('Цель не будет достигнута gut');
        } else {
            console.log('Цель будет достигнута');
        }
    }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getStatusIncome();
appData.getTargetMonth();
console.log(appData);