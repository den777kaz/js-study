'use strict';

let salary = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    incomeAmount = document.querySelector('.income-amount'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    additExpensesItem = document.querySelectorAll('.additional_expenses-item'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent'),
    rangePeriod = document.querySelector('.period-select'),
    periodAmount = document.querySelector('.period-amount');

let addMore = document.querySelectorAll('button'),
    addExpenses = addMore[1],
    addIncome = addMore[0],
    checkDeposit = document.querySelector('#deposit-check'),
    additIncomeItem = document.querySelectorAll('.additional_income-item');



// pravoja storona resultat
let resultBudgetDay = document.querySelector('.result-total budget_day-value'),
    resultBudgetMonth = document.querySelector('.result-total budget_month-value'),
    resultExpensesMonth = document.querySelector('.result-total expenses_month-value'),
    resultAccumMonth = document.querySelector('.result-total accumulated_month-value'),
    resultAdditIncome = document.querySelector('.result-total additional_income-value'),
    resultAdditExpenses = document.querySelector('.result-total additional_expenses-value'),
    resultIncomePeriod = document.querySelector('.result-total income_period-value'),
    resultTargetMonth = document.querySelector('.result-total target_month-value');

// submit
let toCalculate = document.querySelector('#start');






let appData = {
    budget: 0,
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
    start: function () {
        if (salary.value === '') {
            alert('Error, field must be filled!');
        }
        appData.budget = salary.value;
        console.log('salary.value: ', salary.value);
    
       // appData.getInfoDeposit();
        appData.getExpenses();
        appData.getExpensesMonth();
        appData.getBudget();
        //appData.getStatusIncome();
        //appData.getTargetMonth();
        
    },
    addExpensesBlock: function () {

        //console.log(expensesItems.parentNode);
        let cloneExpensesItems = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItems, addExpenses);

        expensesItems = document.querySelectorAll('.expenses-items');

        if (expensesItems.length === 3) {
            addExpenses.style.display = 'none';
        }

    },
    getExpenses: function () {

        expensesItems.forEach(function (item) {
            // console.log('item: ', item);

            let expensesTitle = document.querySelector('.expenses-title').value,
                expensesAmount = document.querySelector('.expenses-amount').value;

            if(expensesAmount !== '' && expensesTitle !== ''){
                appData.expenses[expensesTitle] = expensesAmount;
            }
            

        });
        console.log(appData);
    },
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


toCalculate.addEventListener('click', appData.start);
addExpenses.addEventListener('click', appData.addExpensesBlock);


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

// console.log(stringArr);
// // pere4eslenie 4erez zapetuju!
// console.log('Возможные доходы и расходы: ', stringArr.join(', '));