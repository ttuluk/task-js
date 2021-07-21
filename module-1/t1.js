// Завдання: Написати програму яка буде перевіряти чи рік народження користувача був високосним

// Наприклад: 2000, 2004, 2016 - високосні 1998, 2002, 1900 2100 - не високосні

function yearV(yearUser) {
    if ((yearUser % 4 !== 0) || (yearUser % 100 === 0 && yearUser % 400 !== 0)) {
        console.log(`${yearUser} - НЕ высокосный год`);
    }
    else {
        return console.log(`${yearUser} -   высокосный год`);
    }
}
yearV(1996);
yearV(1985);
yearV(1998);
yearV(1900);
yearV(2100);
yearV(2000);
yearV(2004);
yearV(2016);