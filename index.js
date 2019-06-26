'use strict';

let money = +prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    dataTime: time,
    expenses: {},
    optionalExpenses: "empty",
    income: "empty",
    savings: false
};

for (let i = 0; i < 2; i++) {
    let requiredExpense = prompt("Введите обязательную статью расходов в этом месяце");
    let amountExpense = prompt("Во сколько обойдется?");   

    if ( (typeof(requiredExpense)) === 'string' && (typeof(requiredExpense)) !=null && (typeof(amountExpense)) !=null 
        && requiredExpense !='' && amountExpense !='' && requiredExpense.length <50) {
        console.log('done');
        appData.expenses[requiredExpense] = amountExpense;
    } else {
        console.log ("bad result");
        i--;
    }
    
};

//Цикл While
// let i = 0;
// while (i < 2) {
//     let requiredExpense = prompt("Введите обязательную статью расходов в этом месяце");
//     let amountExpense = prompt("Во сколько обойдется?");   

//     if ( (typeof(requiredExpense)) === 'string' && (typeof(requiredExpense)) !=null && (typeof(amountExpense)) !=null 
//         && requiredExpense !='' && amountExpense !='' && requiredExpense.length <50) {
//         console.log('done');
//         appData.expenses[requiredExpense] = amountExpense;
//     } else {
//         console.log ("bad result");
//         i--;
//     }
//     i++;
// };

//Цикл Do ... While
// let i = 0;
// do {
//     let requiredExpense = prompt("Введите обязательную статью расходов в этом месяце");
//     let amountExpense = prompt("Во сколько обойдется?");   

//     if ( (typeof(requiredExpense)) === 'string' && (typeof(requiredExpense)) !=null && (typeof(amountExpense)) !=null 
//         && requiredExpense !='' && amountExpense !='' && requiredExpense.length <50) {
//         console.log('done');
//         appData.expenses[requiredExpense] = amountExpense;
//     } else {
//         console.log ("bad result");
//         i--;
//     }
//     i++;
// }
// while (i < 2);


appData.moneyPerDay = appData.budget / 30;

alert("Ваш бюджет на 1 день " + appData.budget / 30 + " рублей");

if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка');
}

console.log(money);
console.log(time);
console.log(appData);

