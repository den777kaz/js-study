'use strict';

let salary = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    incomeAmount = document.querySelector('.income-amount'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesAmount = document.querySelector('.expenses-amount'),
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





