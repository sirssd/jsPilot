let money = +prompt('Каков бюджет на месяц?');
// let date = prompt('Введите дату в формате YYYY-MM-DD');
let date = new Date().toString();

let appData = {
    budget: money,
    timeData: date,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


for (let i = 0; i < 2; i++) {
    let question1 = prompt('Введите обязательную статью расходов в этом месяце');
    let question2 = prompt('Во сколько обойдется?');

    if ((typeof question1) === 'string' && (typeof question1) != null && (typeof question2) != null &&
        question1 != '' && question2 != '' && question1.length < 50) {
        console.log('Успех');
        appData.expenses[question1] = question2;
    } else {
        i--;
    }
}

function detectDayBudget() {
    return appData.moneyPerDay = appData.budget / 30;
}


detectDayBudget();

alert('Ежедневный бюджет = ' + appData.moneyPerDay);

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('Минимальный уровень достатка.');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка.');
    } else if (appData.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка.');
    } else {
        console.log('Произошла Ошибка!');
    }
}

function chooseOptExpenses () {
    for(let i = 0; i < 3; i++) {
        let question = prompt('Статья необязательных расходов?');
        appData.optionalExpenses[i + 1] = question;
    }
}


detectLevel();
chooseOptExpenses();

console.log(appData.optionalExpenses);
console.log(appData.budget);
console.log(appData.expenses);
console.log(appData);