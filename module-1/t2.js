// Написати програму де компютер загадає число від 1 до 10 і запропонує користувачу вгадати його
// Користувач вводить свій варіант і отримує результат(Виграв чи ні) Вивести результат в форматі
// "Вітаю ви вгадали число (тут варіант компютера)"
// або "Ви програли, компютер загадав (тут варіант компютера)"

let computerNumber = Math.round(Math.random() * (10 - 1) + 1);
console.log(computerNumber);
// function getNum(yourValue) {
// console.log('ваше число:', yourValue);
// if (computerNumber === yourValue) {
//     return console.log(`Вітаю ви вгадали число ${computerNumber}`);
// }

// return console.log(`Ви програли, компютер загадав ${computerNumber}`);


// };
const getNum = (yourValue) => {
    console.log('ваше число:', yourValue);
    return computerNumber === yourValue ? `Вітаю ви вгадали число ${computerNumber}` : `Ви програли, компютер загадав ${computerNumber}`;
};

console.log(getNum(4));
console.log(getNum(6));