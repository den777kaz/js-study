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
    depositBank = document.querySelector('.deposit-bank'),
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



const AppData = function (){

    this.budget = 0;
    this.income = {};
    this.addIncome = [];
    this.incomeMonth = 0;
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
    this.budgetMonth = 0;
    this.budgetDay = 0;
    this.expensesMonth = 0;
};
let appData = new AppData();

    AppData.prototype.start = function () {
        

        this.budget = salary.value;

        this.getExpenses();
        this.getIncome();
        this.getExpensesMonth();
        this.getAddExpenses();
        this.getAddIncome();
        this.getInfoDeposit();
        this.getBudget();

        this.showResult();

        allInputs = document.querySelectorAll('.data input[type=text]');
        allInputs.forEach(function (item) {
            item.disabled = true;
        });
        
        cancel.style.display = 'block';
        start.style.display = 'none';

      
    };
    AppData.prototype.reset = function(){
        
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

            if(elem.length == 3){
                delIncome[0].removeChild(elem[2]);
                delIncome[0].removeChild(elem[1]);
            }else if(elem.length == 2){
                delIncome[0].removeChild(elem[1]);
            }
        
        let delExpenses = document.querySelectorAll('.expenses'),
            elem2 = document.querySelectorAll('.expenses-items');
            if(elem2.length == 3){
                delExpenses[0].removeChild(elem2[1]);
                delExpenses[0].removeChild(elem2[2]);
            }else if(elem2.length == 2){
                delExpenses[0].removeChild(elem2[1]);
            }

    };
    AppData.prototype.getAddIncome = function () {
        
        additIncomeItem.forEach((item) => {
            
            let itemValue = item.value.trim();
            if (itemValue !== '') {
                this.addIncome.push(itemValue);
                
            }
        });
    };
    AppData.prototype.getAddExpenses = function () {
        // const self = this;
        let addExpenses = additExpensesItem.value.split(',');
        addExpenses.forEach((item) => {
            // console.log('self: ', self);
            item = item.trim();
            if (item !== '') {
                this.addExpenses.push(item);
                
            }
        });
    };
    AppData.prototype.showResult = function () {
        resultBudgetMonth.value = this.budgetMonth;
        resultBudgetDay.value = Math.ceil(this.budgetDay);
        resultExpensesMonth.value = this.expensesMonth;
        resultAdditExpenses.value = this.addExpenses.join(', ');
        resultAdditIncome.value = this.addIncome.join(', ');
        resultTargetMonth.value = this.getTargetMonth();
        resultIncomePeriod.value = this.calcPeriod();
        // console.log('shorResult', this);

    };
   AppData.prototype.addExpensesBlock = function () {
        

        //console.log(expensesItems.parentNode);
        let cloneExpensesItems = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItems, addExpenses);

        expensesItems = document.querySelectorAll('.expenses-items');

        if (expensesItems.length === 3) {
            addExpenses.style.display = 'none';
        }

    };
    AppData.prototype.getIncome = function () {
        // const self = this;
        incomeItems.forEach((item) => {
            // console.log(self);


            let incomeTitle = item.querySelector('.income-title').value,
                incomeAmount = item.querySelector('.income-amount').value;

            if (incomeTitle !== '' && incomeAmount !== '') {
                this.income[incomeTitle] = incomeAmount;
            }
            for (let key in this.income) {
                this.incomeMonth += +this.income[key];
            
            }
        });
    };
    AppData.prototype.addIncomeBlock = function () {
        let cloneIncomeItems = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItems, incomeAdd);

        incomeItems = document.querySelectorAll('.income-items');

        if (incomeItems.length === 3) {
            incomeAdd.style.display = 'none';
        }
    };
    AppData.prototype.getExpenses = function () {
        // const self = this;

        expensesItems.forEach((item) => {

            
            let expensesTitle = item.querySelector('.expenses-title').value,
                expensesAmount = item.querySelector('.expenses-amount').value;

            if (expensesAmount !== '' && expensesTitle !== '') {
                this.expenses[expensesTitle] = expensesAmount;
            }


        });
    };
    AppData.prototype.getExpensesMonth = function () {

        let sum = 0;
        for (let key in this.expenses) {

            sum += +this.expenses[key];
        }
        this.expensesMonth = sum;
    };
    AppData.prototype.getBudget = function () {
        
        this.budgetMonth = +this.budget + this.incomeMonth - this.expensesMonth + (this.moneyDeposit * this.percentDeposit) / 12;
        this.budgetDay = Math.floor(this.budgetMonth / 30);
    };
    AppData.prototype.getTargetMonth = function () {
       
        return Math.ceil(targetAmount.value / this.budgetMonth);

    };
    AppData.prototype.getInfoDeposit = function () {
        if (this.deposit) {
            this.percentDeposit = depositPercent.value;
            this.moneyDeposit = depositAmount.value;

        }
    };
    AppData.prototype.calcPeriod = function () {
       // console.log('period', this);
        return this.budgetMonth * periodSelect.value;
    };
    AppData.prototype.check = function(){
        if(checkDeposit.checked){

            depositAmount.style.display = 'inline-block';
            depositBank.style.display = 'inline-block';
            depositAmount.value = '';
            appData.deposit = true;
            depositBank.addEventListener('change', function(){
                let selectIndex = this.options[this.selectedIndex].value;
                if(selectIndex === 'other'){
                    depositPercent.style.display = 'inline-block';
                    depositPercent.value = '';
                }else {
                    depositPercent.style.display = 'none';
                    depositPercent.value = selectIndex;
                }
            
                console.log(selectIndex);
            });
          
            
        }else {

            depositAmount.style.display = 'none';
            // depositPercent.style.display = 'none';
            depositBank.style.display = 'none';
            appData.deposit = false;
        }
    };
    

start.addEventListener('click', appData.start.bind(appData));
cancel.addEventListener('click', appData.reset.bind(appData));
addExpenses.addEventListener('click', appData.addExpensesBlock);
incomeAdd.addEventListener('click', appData.addIncomeBlock);
checkDeposit.addEventListener('change', appData.check);

periodSelect.addEventListener('change', function () {
    
    // console.log('event: ', event.type);
    console.log('range2', this);
    periodAmount.innerHTML = periodSelect.value;
    resultIncomePeriod.value = appData.calcPeriod();

});



