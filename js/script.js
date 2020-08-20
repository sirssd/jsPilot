let money = +prompt('Каков бюджет на месяц?');
let date = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    money: money, 
    date: date,
    expenses: {},
    optionalExpenses: "",
    income: '',
    savings: false
};

let question1 = prompt('Введите обязательную статью расходов в этом месяце');
let question2 = prompt('Во сколько обойдется?');

appData.expenses[question1] = question2;

alert('Бюджет на 1 день = ' + money/30);

console.log(appData.money);
console.log(appData.expenses);