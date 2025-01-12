        // Отложенное выполнение кода и setTimeout

// setTimeout - необходим для запуска кода спустя определенное время(запуск по таймеру)
// Данная функция принимает 2 параметра: функцию, которую надо будет вызвать и само время ожидания.
// setTimeout (function, timeout);
let timeUp = function () {
    alert("Время вышло!");
}

setTimeout (timeUp, 3000);//через 3 секунды появляется диалоговое окно: Время вышло!
// Сначало мы создали переменную timeUp, которую применили в методе setTimeOut
// Обратите внимание - вызов setTimeout вернул число 1. Если вызвать еще раз этот метод -
//  он вернет другое число - так называемый ID таймера - полученный ID можно передать функции clearTimeout,
//  чтобы отменить этот конретный таймер.

        // Отмена действия таймера

// Представьте, что вы поставили будильник, чтобы напомнил вам о домашнем задании,
//  однако в итоге вы сделали его раньше и вы хотите отключить будильник.
//  Для отмены - используйте clearTimeout с ID таймера, полученного ранее от setTimeout в качестве аргумента.
let doHomeworkAlarm = function () {
    alert("Hey! Get started homework!");
}
let timeoutId = setTimeout(doHomeworkAlarm, 6000);
// Теперь достаточно передать его ID функции clearTimeout(timeoutId), чтобы отменить действие таймера:
clearTimeout(timeoutId);


        // Многократный запуск кода и setInterval

// Функция setInterval похожа на setTimeout, однако она вызывает переданную ей функцию повторно через определенные промежутки
//  (интервалы) времени. Скажем, если вы хотите с помощью js обновлять показания часов, используйте setInterval, 
// чтобы функция обновления вызывалась раз в секунду. setInterval принимает два аргумента: функцию и интервал времени в милисекундах.

// Например так можно раз в секунду выводить в консоль сообщение:
// Создаем новую переменную и присваиваем ей значение 1
let counter = 1;
// Создаем функцию, которая будет выполнять 2 задачи:
    // печатать сообщение о том, сколько секунд вы уже смотрите
    
let printMessage = function () {
    console.log("You see in console now " + counter + " sec");
    // функция увеличивает переменную counter
    counter ++;
}
// Вызываем setInterval, передав ей функцию printMessage и число 1000
let intervalId = setInterval(printMessage, 1000);
    // You see in console now 1 sec
    // You see in console now 2 sec
    // You see in console now 3 sec
// Используем setTimeout для очистки интервала через 3 секунды
setTimeout(function() {
    clearInterval(intervalId);
}, 4000);

// Попробуйте изменить код так, чтобы сообщение выводилось каждые 5 секунд:

let counters = 5;    
let printMessages = function () {
    console.log("You see in console now " + counters + " sec");    
    counters +=5;
}
let intervalIds = setInterval(printMessages, 5000);
    // You see in console now 5 sec
    // You see in console now 10 sec
    // You see in console now 15 sec

setTimeout(function() {
    clearInterval(intervalIds);
}, 16000);

// Анимация элементов с помощью setInterval
// Переходим в interactiv.html

        // Реакция на действия пользователя
    // Реакция на клик
// Когда пользователь кликает по элементу в браузере, возникает событие click.
//  С помощью jQuery ничего не стоит задать этому событию обработчик.
// Откроем interactiv.html - переименуем его в click.html - через вкладку fale - save as - сохраним и переделаем код

        // Координаты в браузере
    // В веб-браузере, как и в среде графическаого программирования, еулевая позиция х у координат находиться вверхнем левом углу.
    // Создайте mousemove.html






