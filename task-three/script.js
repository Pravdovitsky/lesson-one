const a = +prompt('Введите число a');
const b = +prompt('Введите число b');

if (isNaN(a) || isNaN(b)) {
    alert('Вы указали неверное значение!');
} else {
    alert((a > b) ? `Разность чисел: ${a - b}` : `Сумма чисел: ${a + b}`);
}

