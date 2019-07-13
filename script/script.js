'use strict';

let salary = document.querySelector('.salary-amount'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    incomeItems = document.querySelectorAll('.income-items'),
    incomeAdd = document.querySelector('.income_add'),
    additExpensesItem = document.querySelector('.additional_expenses-item'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent'),
    periodSelect = document.querySelector('.period-select'),
    targetAmount = document.querySelector('.target-amount'),
    periodAmount = document.querySelector('.period-amount');

let addMore = document.querySelectorAll('button'),
    addExpenses = addMore[1],
    addIncome = addMore[0],
    checkDeposit = document.querySelector('#deposit-check'),
    additIncomeItem = document.querySelectorAll('.additional_income-item'),
    allInputs = document.querySelectorAll('.data input[type=text]');



// pravoja storona resultat
let resultBudgetDay = document.querySelector('.budget_day-value'),
    resultBudgetMonth = document.querySelector('.budget_month-value'),
    resultExpensesMonth = document.querySelector('.expenses_month-value'),
    resultAccumMonth = document.querySelector('.accumulated_month-value'),
    resultAdditIncome = document.querySelector('.additional_income-value'),
    resultAdditExpenses = document.querySelector('.additional_expenses-value'),
    resultIncomePeriod = document.querySelector('.income_period-value'),
    resultTargetMonth = document.querySelector('.target_month-value');

// submit
let start = document.querySelector('#start'),
    cancel = document.querySelector('#cancel');

start.disabled = true;
salary.addEventListener('input', function () {
    console.log('salary: ', salary);
    start.disabled = false;
});

let appData = {
    budget: 0,
    income: {},
    addIncome: [],
    incomeMonth: 0,
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    budgetMonth: 0,
    budgetDay: 0,
    expensesMonth: 0,
    start: function () {



        appData.budget = salary.value;

        appData.getExpenses();
        appData.getIncome();
        appData.getExpensesMonth();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getBudget();

        appData.showResult();
        allInputs.forEach(function (item) {
            item.disabled = true;
        });
        cancel.style.display = 'block';
        start.style.display = 'none';
    },
    getAddIncome: function () {
        additIncomeItem.forEach(function (item) {
            let itemValue = item.value.trim();
            if (itemValue !== '') {
                appData.addIncome.push(itemValue);
            }
        });
    },
    getAddExpenses: function () {
        let addExpenses = additExpensesItem.value.split(',');
        addExpenses.forEach(function (item) {
            item = item.trim();
            if (item !== '') {
                appData.addExpenses.push(item);
            }
        });
    },
    showResult: function () {
        resultBudgetMonth.value = appData.budgetMonth;
        resultBudgetDay.value = Math.ceil(appData.budgetDay);
        resultExpensesMonth.value = appData.expensesMonth;
        resultAdditExpenses.value = appData.addExpenses.join(', ');
        resultAdditIncome.value = appData.addIncome.join(', ');
        resultTargetMonth.value = appData.getTargetMonth();
        resultIncomePeriod.value = appData.calcPeriod();


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
    getIncome: function () {

        incomeItems.forEach(function (item) {


            let incomeTitle = item.querySelector('.income-title').value,
                incomeAmount = item.querySelector('.income-amount').value;

            if (incomeTitle !== '' && incomeAmount !== '') {
                appData.income[incomeTitle] = incomeAmount;
            }
            for (let key in appData.income) {
                appData.incomeMonth += +appData.income[key];
            }
        });
    },
    addIncomeBlock: function () {
        let cloneIncomeItems = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItems, incomeAdd);

        incomeItems = document.querySelectorAll('.income-items');

        if (incomeItems.length === 3) {
            incomeAdd.style.display = 'none';
        }
    },
    getExpenses: function () {

        expensesItems.forEach(function (item) {


            let expensesTitle = item.querySelector('.expenses-title').value,
                expensesAmount = item.querySelector('.expenses-amount').value;

            if (expensesAmount !== '' && expensesTitle !== '') {
                appData.expenses[expensesTitle] = expensesAmount;
            }


        });
    },
    getExpensesMonth: function () {
        let sum = 0;
        for (let key in appData.expenses) {

            sum += +appData.expenses[key];
        }
        appData.expensesMonth = sum;
    },
    getBudget: function () {
        appData.budgetMonth = +salary.value + appData.incomeMonth - appData.expensesMonth;
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
        return Math.ceil(targetAmount.value / appData.budgetMonth);


        // appData.period = targetMonth;


        // if (targetMonth < 0) {
        //     console.log('Цель не будет достигнута gut');
        // } else {
        //     console.log('Цель будет достигнута');
        // }
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
    calcPeriod: function () {
        return appData.budgetMonth * periodSelect.value;
    }
};


start.addEventListener('click', appData.start);
addExpenses.addEventListener('click', appData.addExpensesBlock);
incomeAdd.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('change', function (event) {
    console.log('event: ', event.type);
    periodAmount.innerHTML = periodSelect.value;
    resultIncomePeriod.value = appData.calcPeriod();

});



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