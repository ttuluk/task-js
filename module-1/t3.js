// Написати програму яка буде знаходити суму, різницю,
//     добуток, частрку двох чисел Користувач вводить 2 числа потім вводить знак операції і
// отримує результат в форматі "Сума чисел a i b = результат"(такий шаблон для кожної відповіді)

function getResult(a, b, operationSign) {
    let total;
    if (operationSign === '+') {
        total = a + b;
        return `Сума чисел a i b = ${total}`;
    }
    else if (operationSign === '-') {
        total = a - b;
        return `Різниця чисел a i b = ${total}`;
    }
    else if (operationSign === '*') {
        total = a * b;
        return `Добуток чисел a i b = ${total}`;
    }
    else if (operationSign === '/') {
        total = a / b;
        return `Частка чисел a i b = ${total}`;
    }
};
const a = prompt('Please enter a number!');
const b = prompt('Please enter a number!');
const operationSign = prompt('Please enter a operationSign!');
console.log(getResult(a, b, operationSign));
