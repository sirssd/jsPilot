let startBtn = document.querySelector('#start');

let budgetValue = document.querySelector('.budget-value');
let dayBudgetValue = document.querySelector('.daybudget-value');
let levelValue = document.querySelector('.level-value');
let expensesValue = document.querySelector('.expenses-value');
let optionalExpensesValue = document.querySelector('.optionalexpenses-value');
let incomeValue = document.querySelector('.income-value');
let monthSavingsValue = document.querySelector('.monthsavings-value');
let yearSavingsValue = document.querySelector('.yearsavings-value');

let expensesItem = document.querySelectorAll('.expenses-item');
let expensesItemBtn = document.querySelector('.expenses-item-btn');
let optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item');
let incomeItem = document.querySelector('.choose-income');
let optionalExpensesBtn = document.querySelector('.optionalexpenses-btn');
let countBudgetBtn = document.querySelector('.count-budget-btn');
let chooseIncome = document.querySelector('#optionalexpenses-item');
let savings = document.querySelector('#savings');
let choosePercent = document.querySelector('.choose-percent');
let chooseSum = document.querySelector('.choose-sum');
let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');

let money, date;


startBtn.addEventListener('click', function () {

    date = prompt('Введите дату в формате YYYY-MM-DD');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Каков бюджет на месяц?');
    }
    appData.budget = money;
    appData.timeData = date;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(date)).getFullYear();
    monthValue.value = new Date(Date.parse(date)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(date)).getDate();
});

expensesItemBtn.addEventListener('click', function () {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let question1 = expensesItem[i].value;
        let question2 = expensesItem[++i].value;

        if ((typeof question1) === 'string' && (typeof question1) != null && (typeof question2) != null &&
            question1 != '' && question2 != '' && question1.length < 50) {
            console.log('Успех выполнения expensesItem');
            appData.expenses[question1] = question2;
            sum += +question2;
        } else {
            i--;
        }
    }
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function () {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let question = optionalExpensesItem[i].value
        appData.optionalExpenses[i] = question;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBudgetBtn.addEventListener('click', function () {

    if (appData.budget != undefined) {

        appData.moneyPerDay = +(appData.budget / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = 'Минимальный уровень достатка.';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = 'Средний уровень достатка.';
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = 'Высокий уровень достатка.';
        } else {
            levelValue.textContent = 'Произошла Ошибка!';
        }
    } else {
        dayBudgetValue.textContent = 'Произошла ошибка!!!'
        dayBudgetValue.style.color = 'red';
    }
});

incomeItem.addEventListener('input', function () {
    let items = incomeItem.value;
    appData.income = items.split(',');
    incomeValue.textContent = appData.income;
});

savings.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

chooseSum.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +chooseSum.value;
        let percent = +choosePercent.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

choosePercent.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +chooseSum.value;
        let percent = +choosePercent.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: date,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};