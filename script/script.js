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
        

        this.budget = salary.value;

        this.getExpenses();
        this.getIncome();
        this.getExpensesMonth();
        this.getAddExpenses();
        this.getAddIncome();
        this.getBudget();

        this.showResult();

        allInputs = document.querySelectorAll('.data input[type=text]');
        allInputs.forEach(function (item) {
            item.disabled = true;
        });
        
        cancel.style.display = 'block';
        start.style.display = 'none';

      
    },
    reset: function(){
        
        let inputsText = document.querySelectorAll('input[type=text]');

        inputsText.forEach(function(item){
            item.value = '';   
        });

        allInputs.forEach(function (item) {
            item.disabled = false;
        });

        cancel.style.display = 'none';
        start.style.display = 'block';

        start.disabled = true;
        salary.addEventListener('input', function () { 
            start.disabled = false;
        });
        
        addExpenses.style.display = '';
        addIncome.style.display = '';

        periodSelect.value = 1;
        this.budgetMonth = 0;

       let delIncome = document.querySelectorAll('.income'),
            elem = document.querySelectorAll('.income-items');
            console.log('elem: ', elem);
            delIncome[0].removeChild(elem[1]);
            delIncome[0].removeChild(elem[2]);
        
        let delExpenses = document.querySelectorAll('.expenses'),
            elem2 = document.querySelectorAll('.expenses-items');
            delExpenses[0].removeChild(elem2[1]);
            delExpenses[0].removeChild(elem2[2]);

    },
    getAddIncome: function () {
        const self = this;
        additIncomeItem.forEach(function (item) {
            
            let itemValue = item.value.trim();
            if (itemValue !== '') {
                self.addIncome.push(itemValue);
                
            }
        });
    },
    getAddExpenses: function () {
        const self = this;
        let addExpenses = additExpensesItem.value.split(',');
        addExpenses.forEach(function (item) {
            // console.log('self: ', self);
            item = item.trim();
            if (item !== '') {
                self.addExpenses.push(item);
                
            }
        });
    },
    showResult: function () {
        resultBudgetMonth.value = this.budgetMonth;
        resultBudgetDay.value = Math.ceil(this.budgetDay);
        resultExpensesMonth.value = this.expensesMonth;
        resultAdditExpenses.value = this.addExpenses.join(', ');
        resultAdditIncome.value = this.addIncome.join(', ');
        resultTargetMonth.value = this.getTargetMonth();
        resultIncomePeriod.value = this.calcPeriod();
        // console.log('shorResult', this);

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
        const self = this;
        incomeItems.forEach(function (item) {
            // console.log(self);


            let incomeTitle = item.querySelector('.income-title').value,
                incomeAmount = item.querySelector('.income-amount').value;

            if (incomeTitle !== '' && incomeAmount !== '') {
                self.income[incomeTitle] = incomeAmount;
            }
            for (let key in self.income) {
                self.incomeMonth += +self.income[key];
            
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
        const self = this;

        expensesItems.forEach(function (item) {

            
            let expensesTitle = item.querySelector('.expenses-title').value,
                expensesAmount = item.querySelector('.expenses-amount').value;

            if (expensesAmount !== '' && expensesTitle !== '') {
                self.expenses[expensesTitle] = expensesAmount;
            }


        });
    },
    getExpensesMonth: function () {

        let sum = 0;
        for (let key in this.expenses) {

            sum += +this.expenses[key];
        }
        this.expensesMonth = sum;
    },
    getBudget: function () {
        
        this.budgetMonth = +salary.value + this.incomeMonth - this.expensesMonth;
        this.budgetDay = Math.floor(this.budgetMonth / 30);
    },
    getStatusIncome: function () {
        
        if (this.budgetDay > 800) {
            console.log('Высокий уровень дохода');
        } else if (this.budgetDay > 300 && this.budgetDay < 800) {
            console.log('Средний уровень дохода');
        } else if (this.budgetDay > 0 && this.budgetDay < 300) {
            console.log('Низкий уровень дохода');
        } else {
            console.log('Что то пошло не так');
        }
    },
    getTargetMonth: function () {
       
        return Math.ceil(targetAmount.value / this.budgetMonth);


        // appData.period = targetMonth;


        // if (targetMonth < 0) {
        //     console.log('Цель не будет достигнута gut');
        // } else {
        //     console.log('Цель будет достигнута');
        // }
    },
    getInfoDeposit: function () {
        if (this.deposit) {
            this.percentDeposit = prompt('Какой годовой процент?');
            while (isNaN(this.percentDeposit) || this.percentDeposit === '' || this.percentDeposit == null) {
                this.percentDeposit = +prompt('Какой годовой процент?');
            }
            this.moneyDeposit = prompt('Какая сумма заложена?');
            while (isNaN(this.moneyDeposit) || this.moneyDeposit === '' || this.moneyDeposit == null) {
                this.moneyDeposit = prompt('Какая сумма заложена?');
            }

        }
    },
    calcPeriod: function () {
       // console.log('period', this);
        return this.budgetMonth * periodSelect.value;
    }
};

start.addEventListener('click', appData.start.bind(appData));
cancel.addEventListener('click', appData.reset.bind(appData));
addExpenses.addEventListener('click', appData.addExpensesBlock);
incomeAdd.addEventListener('click', appData.addIncomeBlock);

periodSelect.addEventListener('change', function () {
    
    // console.log('event: ', event.type);
    console.log('range2', this);
    periodAmount.innerHTML = periodSelect.value;
    resultIncomePeriod.value = appData.calcPeriod();

});



// let stringArr = [];
// // charAt - viberaet 0 index (1 simvol) v stroke + substring - so 1 index(2 simvol) vse budet melkimi bukvami
// for (let key in appData.income) {
//     console.log(key + ' ' + appData.income[key]);
//     key = key.charAt(0).toUpperCase() + key.substring(1).toLocaleLowerCase();
//     stringArr.push(key);
// }
// for (let key in appData.expenses) {
//     console.log(key + ' ' + appData.expenses[key]);
//     key = key.charAt(0).toUpperCase() + key.substring(1).toLocaleLowerCase();
//     stringArr.push(key);
// }

// console.log(stringArr);
// // pere4eslenie 4erez zapetuju!
// console.log('Возможные доходы и расходы: ', stringArr.join(', '));