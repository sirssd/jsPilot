let money, date;

function start() {

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Каков бюджет на месяц?');
    }

    date = prompt('Введите дату в формате YYYY-MM-DD');

}

start();

let appData = {
    budget: money,
    timeData: date,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
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
    },
    detectDayBudget: function () {
        appData.moneyPerDay = +(appData.budget / 30).toFixed();
        alert('Ежедневный бюджет = ' + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка.');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка.');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка.');
        } else {
            console.log('Произошла Ошибка!');
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?'),
                percent = +prompt('Под какой процент?');

            appData.monthIncome = save / 100 / 12 * percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
        let question = prompt('Статья необязательных расходов?');
        appData.optionalExpenses[i + 1] = question;
    }
    },
    chooseIncome: function() {
        let items = prompt('Что принесёт дополнительный доход! (Перечислите через запятую!)', '');

        if(items == null || items == "") appData.chooseIncome();

        appData.income = items.split(',');

        function checkStrIsNull(arr) {
           for(let item of arr) {
            if (item.length == 0 || isFinite(item)) return true; 
           }
           return false;
        }

        if(checkStrIsNull(appData.income)) appData.chooseIncome();
        appData.income.push(prompt('Может что-то ещё?'));
        appData.income.sort();

        appData.income.forEach((item, i) => {
            alert(`${i+1}. ${item}`);
        });
    }
};

appData.chooseIncome();

console.log("Наша программа включает в себя данные: ");

for(let key in appData) {
    console.log(`${key}`);
}