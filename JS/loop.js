//  // Условия и циклы
//   // Как встроить js в html(смотри в файле html)
//   //Проверяем подключение в браузере
//  let message = "Hello world!";
//  console.log(message);

//  // Условные конструкции
//    // 2 вида
//     //  - if () {};
//     //  - if () {}else {};
//   //if {} - используется, чтобы запускать код, если некое условие истинно(true)
//  let names = "Mikle";
//  console.log("Hello, " + names);//Hello, Mikle
//  //Проверяем условие - если длина имени больше 4 - вывести сообщение в консоль
//  if (names.length > 4) {
//     console.log("Your name is too much!");//Your name is too much!
//  };
//  //if () {} else {} - если необходимо проверить и true и false
// //  let userNames = "Mikhail";
// //  console.log("Hello, " + userNames); //Hello, Mikhail
// //  //Проверяет, если длинна имени больше 7(в нашем имени 7 букв)
// //  //  - то выводиться первое сообщение(true), если меньше - второе(false)
// //  if (userNames.length > 7) {
// //     console.log("Your name is too much!");
// //  } else {
// //     console.log("Glad to meet you!");//Glad to meet you!
// //  };

//  //Цепочка из конструкции if.....else
//  // Предположим вы пришли в ресторан и выбираете блюдо -
//  //  вы любите больще всего одно блюдо, если его нет - другое, если этого нет - следующее
//  //и в конце концов если и этих нет - вы закажете то, которое обязательно будет
// let pekingDuck = false;
// let mediumSteak = false;
// let riceChicken = false;
// //Достаточно в переменной поменять условие на true - сообщение будет другое
// if(pekingDuck) {
//     console.log("I want to order Pecking duck, please.");
// } else if (mediumSteak) {
//     console.log("I want to order a steak medium rare, please.");
// } else if (riceChicken) {
//     console.log("I wuld like to order a chicken with rice, please.");
// } else {
//     console.log("Okey, cook ve some grilled salmon, please.");//Okey, cook ve some grilled salmon, please.
// }

// // Домашнее задание
// //  Напишите программу с переменной myName
// //Если в этой переменной ваше имя - напечатайте "Hello me!"
// // Иначе - напечатайте "Hello stranger!"
// // Подсказка - используйте === для сравнения
// //Дополните программу, чтобы здоровалась с вашей девушкой(если в herName) ее имя
// // и с игрушкой(если в herToy) его имя. Если там что то иное - напечатайте "Hello stranger"
// // let myName = "Mikhail";
// // let herName = "Oksana";
// // let herToy = "Masik";
// // console.log("Hello me!");//Hello me!
// // // Если ни одно условие не будет true - сработает последний блок else,
// // //  если сработает одно из if или if...else - сработает тот блок и 
// // // проверки на другие условия не будут выполняться
// // if(myName === "Mikl") {
// //     console.log("Hello stranger!");
// // } else if(herName === "Oksan") {
// //     console.log("Hello Oksana!");
// // }else if (herToy === "Masik") {
// //     console.log("Hello Masik!");//Hello Masik!
// // } else {
// //     console.log("Hello stranger");
// // }

// //Циклы

//  //  Цикл While - самый простой из циклов, потому что он будет работать
//  //  до тех пор, пока условие не перестанет давать true - другими словами
//  // мы имеем ввиду - Продолжай делать это, пока условие дает true, но если 
//  // оно даст false - остановись. Цикл похож с if, но в отличии от if - while
//  // не будет прерываться, пока не переберет все true
//  //Считаем овец с помощью цикла while
//  // Мы создали переменную и присвоили значение 0
//  let sheepCounted = 0;
//  // Далее мы проверяем - правда ли, что овечек меньше 10
//  while(sheepCounted < 10) {
//     // Поскольку 0 меньше 10 - выполняется код sheepCounted(0) + sheep
//     console.log(sheepCounted + " sheep");
//     // Далее программа увеличивает значение на +1 до тех пор, пока овец станет меньше 10
//     sheepCounted++;
//  }
//  // После выполнения условий - программа выведет последнее сообщение
//  console.log("The end!");
//  // 0 sheep
//  // 1 sheep
//  // 2 sheep
//  // 3 sheep
//  // 4 sheep
//  // 5 sheep
//  // 6 sheep
//  // 7 sheep
//  // 8 sheep
//  // 9 sheep
//  // The end!

//  // Бесконечный цикл - важно понимать, что если условие никогда не даст false - 
//  // программа будет печатать сообщения бесконечно. Например если в предыдущем коде 
//  // не поставить sheepCounted ++ - всегда был бы 0 

//  // Цикл for - упрощает создание циклов - сначала создается переменная, 
//  // а затем тело цикла выполняется снова и снова, пока условие дает true, 
//  // причем в конце каждого повтора значение переменной обновляется

//  //Посчитаем уток
//  let duckCounted;
//  for(let duckCounted = 0; duckCounted < 10; duckCounted++) {
//     console.log(duckCounted + " duck");
//  }
//  console.log("The end!");
//  //  0 duck
//  //  1 duck
//  //  2 duck
//  //  3 duck
//  //  4 duck
//  //  5 duck
//  //  6 duck
//  //  7 duck
//  //  8 duck
//  //  9 duck
//  //  The end!
//  //Цикл for - удобен когюа надо вывести что то определенное колличество раз.

// //Цикл for, массивы и строки
// // Очень часто цикл используют для перебора всех элементов массива или всех 
// // символов строки. Например вот цикл, который печатает названия всех животных, 
// // которые есть в зоопарке
// let animals = ["lion", "bear", "monkey", "elephant"];
// for (let i = 0; i < animals.length; i++) {
//     console.log("In this zoo there is " + animals[i] + ".");
// }
//  // In this zoo there is lion.
//  // In this zoo there is bear.
//  // In this zoo there is monkey.
//  // In this zoo there is elephant.
// //  Лайфхак - если вам надо заменить одно слово во всех строках - можно выделить 
// // сочетанием клавиш ctrl + d - удалить и написать новый вариант

// let named = "Mik";
// for (i = 0; i < named.length; i++) {
//     console.log("My name contains letter - " + named[i] + ".");
// }
// // My name contains letter - M.
// // My name contains letter - i.
// // My name contains letter - k.

// //Например для подсчета цифр - можно использовать вместо ++ умножение
// for (let x = 2; x < 20; x = x * 2) {
//     console.log(x);
// }
// // 2
// // 4
// // 8
// // 16

// // Домашнее задание
// // Напишите цикл for, который печатает степени тройки,
// //  не превышающие 1000(программа должна выводить 3б 9б 27 и т.д) 
// // Перепишите это задание, использовав while вместо for
// // (подсказка - установите начальное значение перед входом в цикл)

// for (let x = 3; x < 1000; x = x * 3) {
//     console.log(x);
// }
// // 3
// // 9
// // 27
// // 81
// // 243
// // 729

// let x = 3;
// while (x < 1000) {
//     console.log(x);
//     x = x * 3;
//  }
// // 3
// // 9
// // 27
// // 81
// // 243
// // 729

// // Что мы узнали:
// // Условные конструкции нужны, чтобы выполнять некие действия, 
// // если условие дает true. А с помощью циклов можно многократно выполнять фрагмент 
// // кода - до тех пор, пока условие дает true. 
// // Условными конструкциями можно пользоваться , чтобы запускать код
// //  в подходящие для этого моменты, а циклами - чтобы программа
// //  выполнялась так долго, как требуется. 

// // Упражнения
// //  Прекрасные животные
// // Напишите цикл for, который изменяет массив животных, делая их
// //  прекрасными. Например, если есть следующий массив:
// // let animals = ["cat", "dog", "fish", "pig"];
// // то ваш цикл должен сделать его таким:
// // ["cat - is a beatiful animal", "dog - is a beatiful animal", и т.д]
// let beatAnimals = ["cat", "dog", "fish", "pig"];

// for (let i = 0; i < beatAnimals.length; i++) {
//    beatAnimals[i] = beatAnimals[i] + " - is a beatiful animal";
// }
// console.log(beatAnimals);
// // [
// //     'cat - is a beatiful animal',
// //     'dog - is a beatiful animal',
// //     'fish - is a beatiful animal',
// //     'pig - is a beatiful animal'
// //   ]

// // Генератор случайных строк
// // Напишите генератор случайных строк. Для этого вам понадобится строка со всеми буквами алфавита

// // Строка со всеми буквами алфавита
// let alphabet = "абвгдежзийклмнопрстуфхцшщЪыьэюя";

// // Длина случайной строки
// const length = 6;

// // Переменная для хранения результата
// let randomString = "";

// // Генерация случайной строки
// let i = 0;
// while (i < length) {
//     // Генерация случайного индекса
//     const randomIndex = Math.floor(Math.random() * alphabet.length);
//     // Добавление случайной буквы в строку
//     randomString += alphabet[randomIndex];
//     i++;
// }

// // Вывод результата
// console.log(randomString);//йтругв

// // Переведите англоязычный текст на русскоязычный текст используя цикл for
// let input = "JavaScriptisacoollanguage";
// let output = "";
// for(let i = 0; i < input.length; i++) {
//     let char = input[i];
//     output += char.toLowerCase();
// }
// console.log(output);
