let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: +money,
    dataTime: time,
    expenses: {},
    optionalExpenses: "empty",
    income: "empty",
    savings: false
};

let requiredExpense1 = prompt("Введите обязательную статью расходов в этом месяце");
let amountExpense1 = prompt("Во сколько обойдется?");
let requiredExpense2 = prompt("Введите обязательную статью расходов в этом месяце");
let amountExpense2 = prompt("Во сколько обойдется?");

appData.expenses.requiredExpense1 = amountExpense1;
appData.expenses.requiredExpense2 = amountExpense2;

alert("Ваш бюджет на 1 день " + appData.budget / 30 + " рублей");

console.log(money);
console.log(time);
console.log(appData);

