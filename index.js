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
    income: [],
    savings: true,
    chooseExpenses: function() {
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
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget/30).toFixed();
        alert("Ваш бюджет на 1 день " + appData.budget/30 + " рублей");
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings: function(){
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
            
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i < 4; i++) {
            let optExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = optExpenses;
            console.log(appData.optionalExpenses);
        }    
    },
    chooseIncome: function() {
        let items = prompt("Что принесет дополнительный доход? (Перечислисть через запятую)", '');

        if ( (typeof(items)) != 'string' || (typeof(items)) == null || items == '') {
                console.log('Введены неправильные данные');
            } else {
                appData.income = items.split(', ');
                appData.income.push(prompt("Может что-то еще?"));
                appData.income.sort();
            }
        
        appData.income.forEach(function(itemmassive, i) {
            console.log("Способы доп. заработка: " + (i+1) + ': ' + itemmassive);
        });
    }
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + ': ' + appData[key]);
}

console.log(money);
console.log(time);
console.log(appData);

