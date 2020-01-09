let a = +prompt('Введите число a');
let b = +prompt('Введите число b');

isNaN(a) || isNaN(b) ? alert('Вы указали неверное значение!') : (a > b) ? alert(`Разность чисел: ${a - b}`) : alert(`Сумма чисел: ${a + b}`);
