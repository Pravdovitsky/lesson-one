let result = prompt(`Желаете ли вы продолжить`, ' Нажмите Ок - для продолжения, Отмена - для выхода');

result === null ? console.log("Пользователь отменил выполнение программы") : alert('Программа выполнена');
