'use strict';

let salary = document.querySelector('.salary-amount');
let incomeTitle = document.querySelector('.income-title');
let incomeAmount = document.querySelector('.income-amount');
let expensesTitle = document.querySelector('.expenses-title');
let expensesAmount = document.querySelector('.expenses-amount');
let additExpensesItem = document.querySelectorAll('.additional_expenses-item');
let depositAmount = document.querySelector('.deposit-amount');
let depositPercent = document.querySelector('.deposit-percent');
let rangePeriod = document.querySelector('.period-select');
let periodAmount = document.querySelector('.period-amount');


let addMore = document.querySelectorAll('button');
let addExpenses = addMore[1];
let addIncome = addMore[0];
let checkDeposit = document.querySelector('#deposit-check');
let additIncomeItem = document.querySelectorAll('.additional_income-item');



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





