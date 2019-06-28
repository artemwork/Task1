'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while( isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();


let appData = {
    budget: money,
    dataTime: time,
    expenses: {},
    optionalExpenses: {},
    income: "empty",
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let requiredExpense = prompt("Введите обязательную статью расходов в этом месяце");
        let amountExpense = prompt("Во сколько обойдется?");   
    
        if ( (typeof(requiredExpense)) === 'string' && (typeof(requiredExpense)) !=null && (typeof(amountExpense)) !=null 
            && requiredExpense !='' && amountExpense !='' && requiredExpense.length < 50) {
            console.log('done');
            appData.expenses[requiredExpense] = amountExpense;
        } else {
            console.log ("bad result");
            i--;
        }
        
    }
}
chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget/30).toFixed();
    alert("Ваш бюджет на 1 день " + appData.budget/30 + " рублей");
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка');
    } else {
        console.log('Произошла ошибка');
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
        
        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses() {

    for (let i = 1; i < 4; i++) {
        let optExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = optExpenses;
        console.log(appData.optionalExpenses);
    }    
}
chooseOptExpenses();

console.log(money);
console.log(time);
console.log(appData);

