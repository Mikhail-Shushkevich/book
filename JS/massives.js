                /**Массивы */
//Предположим вам интересно какие виды динозавров есть
let myTopThreeDinosaurs = ["Тиранозавр", "Велоцираптор", "Стегозавр"];
//Теперь вместо того чтобы показывать три строки, можно воспользоваться массивом
//Так для чего нужен массив - представьте что вам дали список продуктов, которые надо купить и каждый продукт на отдельном листе
//Массив нужен для того, чтобы список продуктов был на одном листе
let dinosaurs = ["Тиранозавр", "Велоцираптор", "Стегозавр", "Трицератос", "Брахиозавр", "Птеранодон", "Апатозавр", "Диплодок", "Компсогнат"];
//Можно для удобства записывать массив по другому
let dinosavrs = [
    "Тиранозавр", 
    "Велоцираптор", 
    "Стегозавр", 
    "Трицератос",
    "Брахиозавр",
     "Птеранодон", 
     "Апатозавр",
      "Диплодок", 
      "Компсогнат"
    ];

                /**Доступ к элементам массива */
    //Чтобы получить доступ к элементам массива - надо использовать квадратные скобки и индекс
    console.log(dinosavrs [0]);//"Тиранозавр"
    console.log(dinosavrs[3]);//"Трицератос"

            /**Создание и изменение элементов */
//Чтобы заменить элемент в массиве, можно 
dinosavrs[0] = "Тираннозавр рекс";
console.log(dinosavrs [0]);//"Тираннозавр рекс"
//С помощью индексов также можно добавлять в массив элементы - присваиваем свободный индекс и добавляем в массив
dinosavrs[9] = "Птеродактель";
console.log(dinosavrs);//"Тираннозавр рекс", "Велоцираптор", "Стегозавр", "Трицератос", "Брахиозавр", "Птеранодон",
//  "Апатозавр", "Диплодок", "Компсогнат", "Птеродактель"

            /**Разные типы данных в одном массиве */
let dinosaursAndNumbers = [3, "Тиранозавр", ["Велоцираптор", "Стегозавр", 85], 10];
console.log(dinosaursAndNumbers);//3, "Тиранозавр", "Велоцираптор", "Стегозавр", 85, 10
console.log(dinosaursAndNumbers[2]);//[ 'Велоцираптор', 'Стегозавр', 85 ]
console.log(dinosaursAndNumbers[2][0]);//Велоцираптор
//Если в первом варианте, когда указываете индекс 2 - консоль показывает вложеный массив, 
// то во втором варианте - консоль выдаст только первый элемент массива

                /**Работа с массивами */
//Длинна массива
let maniacs = ["яко", "вако", "дот"];
//чтобы узнать длинну массива, воспользуемся length
console.log(maniacs.length);//3
//Давайте попросим вернуть элемент из нашего массива
console.log(maniacs[maniacs.length - 1]);//дот
//Js нашел свойство maniacs.length со значением 3, вычел 1, получив 2 и наконец вернул элемент с индексом 2

            /**Добавление элементов в массив */
//Чтобы добавить элемент в массив - воспользуемся push
let animals = ["кот", "пес"];
animals.push("лама");
console.log(animals);//[ 'кот', 'пес', 'лама' ]
//Чтобы добавить элемент в начало массива - воспользуемся unshift
animals.unshift("Белый медведь");
console.log(animals);//[ 'Белый медведь', 'кот', 'пес', 'лама' ]
//Чтобы удалить элемент с массива - воспользуемся pop
let lastAnimals = animals.pop();
console.log(animals);//[ 'Белый медведь', 'кот', 'пес' ]
//.pop() не только удаляет последний элемент, но и сохраняет его в другой присвоенной переменной
console.log(lastAnimals);//лама
animals.pop();
console.log(animals);//[ 'Белый медведь', 'кот' ]
//Чтобы удалить с начала массива элемент - воспользуемся .shift()
animals.shift();
console.log(animals);//[ 'кот' ]

//Обьединение массивов с помощью .concat()
let furryAnnimals = ["Альпака", "Лемур", "Йети"];
let scalyAnimals = ["Удав", "Годзилла", "Горилла"];
let furryAndScalyAnimals = furryAnnimals.concat(scalyAnimals);
console.log(furryAndScalyAnimals);//[ 'Альпака', 'Лемур', 'Йети', 'Удав', 'Годзилла', 'Горилла' ]
//Обьединение нескольких массивов  - тот же принцип, просто перечислять массивы через запятую
let featheredAnimals = ["Ара","Додо"];
let allAnimals = furryAnnimals.concat(scalyAnimals, featheredAnimals);
console.log(allAnimals);//['Альпака',  'Лемур', 'Йети', 'Удав', 'Годзилла', 'Горилла', 'Ара', 'Додо']

//Поиск индекса эллемента в массиве с помощью .indexOf()
let colors = ["red", "blue", "green"];
console.log(colors.indexOf("blue"));//1
//Превращаем массив в строку
let boringAnimals = ["Cat", "Dog", "Fish"];
console.log(boringAnimals.join());//Cat,Dog,Fish
//Можно так же вставлять разделитель вместо запятой
console.log(boringAnimals.join(" - "));//Cat - Dog - Fish
console.log(boringAnimals.join(" ; "));//Cat ; Dog ; Fish
console.log(boringAnimals.join(" & "));//Cat & Dog & Fish

          /**Практика */
//Поиск дороги домой
let landmarks = [];
landmarks.push("My house");
landmarks.push("road to the house");
landmarks.push("flashing light");
landmarks.push("fountain");
landmarks.push("fire station");
landmarks.push("house for cats");
landmarks.push("my ex school");
landmarks.push("house to girlfriend");
console.log(landmarks);
//Обратный путь
landmarks.pop();//"house to girlfriend"
landmarks.pop();//"my ex school"
landmarks.pop();//"house for cats"
landmarks.pop();//"fire station"
landmarks.pop();//"fountain"
landmarks.pop();//"flashing light"
landmarks.pop();//"road to the house"
landmarks.pop();//"My house"
console.log(landmarks);

//Случайный выбор
//Случайные числа можно генерировать с помощью метода Math.random()
console.log(Math.random());//0.9085574056294137
//Важно помнить, что этот метод никогда не вернет 1, только число меньше еденицы
//Если надо больше еденицы - просто умножте на 10
console.log(Math.random() * 10);//3.680584192796148
//Округление с помощью Math.floor()
console.log(Math.floor(3.680584192796148));//3
//Можно совмещать 2 способа
console.log(Math.floor(Math.random()));//0
//Jsвсегда округляет данным способом в меньшую сторону, поэтому необходимо умножать
console.log(Math.floor(Math.random() * 4));// Может выпасть от 0 до 3 включительно
//Используя случайное число как индекс - можно получить случайный элемент из массива
let randomWords = ["Fire", "Ball", "Water", "House"];
//  let randomIndex = Math.floor(Math.random() * 4);
//  console.log(randomWords[randomIndex]);// Water
//Можно код сделать короче, избавившись от переменной randomIndex
console.log(randomWords[Math.floor(Math.random() * 4)]);//House



// // Шар судьбы
// let phrases = [
//   "Звучит не плохо",
//   "Да, это определенно надо сделать",
//   "Не думаю, что это хорошая идея",
//   "Может не сегодня",
//   "Шар судьбы говорит НЕТ!"
// ];
// console.log(phrases[Math.floor(Math.random() * 5)]);

//Генератор случайных дразнилок
let randomBodyParts = ["глаз", "нос", "череп"];
let randomAdjectives = ["вонючая", "унылая", "дурацкая"];
let randomWordes = ["муха", "выдра", "дубина", "мартышка", "крыса"];
let randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
let randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
let randomWord = randomWordes[Math.floor(Math.random() * randomWordes.length)];
let randomInsult = "У тебя " + randomBodyPart + " словно " + randomAdjective + " " + randomWord + " !!! ";
console.log(randomInsult);
/*ДЗ*/
// Создать дразнилку, усложнив еще одним массивом и выводом двумя способами
//Создаем массивы
let face = ["глаз", "рот", "нос"];
let smell = ["тухлый", "вонючий", "дурацкий"];
//Добавил еще один массив
let bodyAnimal = ["голова", "глаз", "рот", "нос"];
let animal = ["свиньи", "тушканчика", "гипапатама"];
//Выбираем рандомно массивы
let randomFace = face[Math.floor(Math.random() * face.length)];
let randomSmell = smell[Math.floor(Math.random() * smell.length)] ;
let randomBodyAnimal = bodyAnimal[Math.floor(Math.random() * bodyAnimal.length)];
let randomAnimal = animal[Math.floor(Math.random() * animal.length)];
//Соединяем случайные массивы в предложение
//Первый способ
let randomOffer = ["У тебя " + randomFace, "еще более", randomSmell, "чем", randomBodyAnimal, "у", randomAnimal + "!!!"].join(" ");
//Второй способ
// let randomOffer = "У тебя " + randomFace + " еще более " + randomSmell + " чем " + randomBodyAnimal + " у " + randomAnimal + "!!!";
console.log(randomOffer);//У тебя глаз еще более дурацкий чем нос у тушканчика!!!

//Как с помощью метода join превратить массив в строку 3 больше чем 2 больше чем 1?
let number = [3, 2, 1];
let offer = [3, " больше чем ", 2, " больше чем ", 1].join(" ");
console.log(offer);


 



