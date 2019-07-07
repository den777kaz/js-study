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
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 45000,
    period: 0,
    budgetMonth: 0,
    budgetDay: 0,
    expensesMonth: 0,
    asking: function () {

        if (confirm('Если у вас дополнительный источник заработка?')) {
            let itemIncome;

            itemIncome = prompt('Какой у вас дополнительный заработок?', 'taxi');
            while (itemIncome === null || itemIncome.length == '') {
                itemIncome = prompt('Какой у вас дополнительный заработок?', 'taxi');
            }




            let cashIncome = +prompt('Сколько в месяц вы на этом зарабатываете?', 1280);
            while (isNaN(cashIncome) || cashIncome === '' || cashIncome == null) {
                cashIncome = +prompt('Сколько в месяц вы на этом зарабатываете?');
            }

            appData.income[itemIncome] = cashIncome;
        }


        appData.addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'auto, phone, games');

        while (appData.addExpenses.length == '' || appData.addExpenses == null) {
            appData.addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'auto, phone, games');
        }

        appData.deposit = confirm('Есть ли у вас депозит в банке?');

        for (let i = 0; i < 2; i++) {
            let question1;

            question1 = prompt('Какие обязательные ежемесячные расходы у вас есть?');

            while (question1.length == 0 || question1 === null) {
                question1 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
            }

            let question2 = +prompt('Во сколько это обойдется?');

            while (isNaN(question2) || question2 === '' || question2 == null) {
                question2 = +prompt('Во сколько это обойдется?');
            }


            appData.expenses[question1] = question2;

        }
    },
    getExpensesMonth: function () {
        let sum = 0;
        for (let key in appData.expenses) {

            sum += appData.expenses[key];
        }
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
    },
    getInfoDeposit: function () {
        if (appData.deposit) {
            appData.percentDeposit = prompt('Какой годовой процент?');
            while (isNaN(appData.percentDeposit) || appData.percentDeposit === '' || appData.percentDeposit == null) {
                appData.percentDeposit = +prompt('Какой годовой процент?');
            }
            appData.moneyDeposit = prompt('Какая сумма заложена?');
            while (isNaN(appData.moneyDeposit) || appData.moneyDeposit === '' || appData.moneyDeposit == null) {
                appData.moneyDeposit = prompt('Какая сумма заложена?');
            }

        }
    },
    calcSaveMoney: function () {
        return appData.budgetMonth * appData.period;
    }
};

appData.asking();
appData.getInfoDeposit();
appData.getExpensesMonth();
appData.getBudget();
appData.getStatusIncome();
appData.getTargetMonth();

console.log('appData.expenses: ', appData.expenses);
console.log('income: ', appData.income);

let stringArr = [];
// charAt - viberaet 0 index (1 simvol) v stroke + substring - so 1 index(2 simvol) vse budet melkimi bukvami
for (let key in appData.income) {
    console.log(key + ' ' + appData.income[key]);
    key = key.charAt(0).toUpperCase() + key.substring(1).toLocaleLowerCase();
    stringArr.push(key);
}
for (let key in appData.expenses) {
    console.log(key + ' ' + appData.expenses[key]);
    key = key.charAt(0).toUpperCase() + key.substring(1).toLocaleLowerCase();
    stringArr.push(key);
}

console.log(stringArr);
// pere4eslenie 4erez zapetuju!
console.log('Возможные доходы и расходы: ', stringArr.join(', '));