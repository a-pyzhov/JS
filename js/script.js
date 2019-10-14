var money = prompt("Ваш бюджет на месяц?", ""); 
var time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

var answer_to_the_first_question_1 = prompt("Введите обязательную статью расходов в этом месяце", "");
var answer_to_the_second_question_1 = prompt("Во сколько обойдется?", "");
appData.expenses[answer_to_the_first_question_1] = answer_to_the_second_question_1;
var answer_to_the_first_question_2 = prompt("Введите обязательную статью расходов в этом месяце", "");
var answer_to_the_second_question_2 = prompt("Во сколько обойдется?", "");
appData.expenses[answer_to_the_first_question_2] = answer_to_the_second_question_2;

alert(appData.budget / 30);