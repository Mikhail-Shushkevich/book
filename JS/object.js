// Для хранения информации об обьекте - делается запись фигурными скобками(не квадратными как в массиве)

let cat = {
    "color": "Серый",
    "legs": 4,
    "name": "Барсик"
};
console.log(cat);//{ color: 'Серый', legs: 4, name: 'Барсик' }

//ключи можно создавать без ковычек, но и без пробелов
// let cat = {
//     color: "Серый",
//     legs: 4,
//     name: "Барсик"
// };

//Доступ к значению внутри обьекта можно получить с помощью квадратных скобок
console.log(cat["name"]);//Барсик
//Если ключи в обьекте записаны без ковычек - синтаксис будет другим
console.log(cat.name);

//Для того, чтобы узнать какие ключи есть у обьекта - используем синтаксис Object.keys();
let dog = {
    name: "Djek",
    age: 6,
    color: "white",
    legs: 4
};
let catt = {
    name: "Mika",
    age: 8,
    color: "orange",
    legs: 4
};
console.log(Object.keys(dog));//[ 'name', 'age', 'color', 'legs' ]
console.log(Object.keys(catt));//[ 'name', 'age', 'color', 'legs' ]

//Для того чтобы добавить элемент в обьект, используется запись
//Создаем пустой обьект
let objectCat = {};
//Добавляем элементы
objectCat["legs"] = 4;
objectCat["name"] = "Mika";
objectCat["age"] = 8;
objectCat["color"] = "orange";
console.log(objectCat);//{ legs: 4, name: 'Mika', age: 8, color: 'orange' }

//Чтобы добавить ключи без ковычек - используем точку
let objectDog = {};
objectDog.legs = 4;
objectDog.name = "Djek";
objectDog.age = 6;
objectDog.color = "white";
console.log(objectDog);//{ legs: 4, name: 'Djek', age: 6, color: 'white' }

//Массивы обьектов выглядит так
let dinosaurs = [
    {name: "Tiranosavr", period: "do n.e."},
    {name: "Pterodactel", period: "do n.e."},
    {name: "Platozavr", period: "do n.e."}
];
console.log(dinosaurs);//[
//    { name: 'Tiranosavr', period: 'do n.e.' },
//    { name: 'Pterodactel', period: 'do n.e.' },
//    { name: 'Platozavr', period: 'do n.e.' }
//  ]
//Получить информацию можно с помощью индекса
console.log(dinosaurs[0]);//{ name: 'Tiranosavr', period: 'do n.e.' }
//А если нужно узнать только название, достаточно указать ключь обьекта в еще одних квадратных скобках
console.log(dinosaurs[1]["name"]);//Pterodactel
//Другой вариант - воспользоваться точечной нотацией
console.log(dinosaurs[2].period);//do n.e.

//Массив друзей
//Сначала создадим обьекты, а затем поместим их в массив
let Oksana = {name: "Oksana", age: 37, luckyNumbers: [2, 3, 5, 7]};
let Mikhail = {name: "Mikhail", age: 42, luckyNumbers: [3, 7, 9, 13]};
let Denis = {name: "Denis", age: 42, luckyNumbers: [1, 4, 8, 12]};
//Теперь создадим массив друзей
let friends = [Oksana, Mikhail, Denis];
//Мы можем получить любой из обьектов по индексу в массиве
console.log(friends[1]);//{ name: 'Mikhail', age: 42, luckyNumbers: [ 3, 7, 9, 13 ] }
//Так же можно получить информацию поставив точку
console.log(friends[2].age, friends[0].luckyNumbers[2]);//42(информация о друге Денис) 5(информация о друге Оксана)

//Учет долгов
//Предположим что пустой обьект - это значит, что долгов нет
let owedMoney = {};
//Предположим я отдолжил у друга Дениса
 owedMoney["Denis"] = 5000;
//Еще отдолжил
 owedMoney["Oksana"] = 5000;
//Здесь мы введем без суммы
 owedMoney["Nadya"];
 //Часть денег Денису я вернул
 owedMoney["Denis"] -= 3000;
 //Давайте поссмотрим сколько я должен денег
 console.log(owedMoney);//{ Denis: 2000, Oksana: 5000 }

 //Хранение информации о фильмах

 let movies = {
    "Меч": {
        ganre: "Боевик",
        type: "Сериал",
        seasons: 2   
    },
    "Кухня": {
        ganre: "Комедия",
        type: "Сериал",
        seasons: 6
    },
    "Светофор": {
        ganre: "Комедия",
        type: "Сериал",
        seasons: 8
    },
    "12 обезьян": {
        ganre: "Боевик",
        type: "Сериал",
        seasons: 10 
    }
 };
 console.log(movies);//{
 //   'Меч': { ganre: 'Боевик', type: 'Сериал', seasons: 2 },
 //   'Кухня': { ganre: 'Комедия', type: 'Сериал', seasons: 6 },
 //   'Светофор': { ganre: 'Комедия', type: 'Сериал', seasons: 8 },
 //   '12 обезьян': { ganre: 'Боевик', type: 'Сериал', seasons: 10 }
 // }

 //Теперь можно узнать все что захочем о сериалах
 console.log(movies["12 обезьян"]);//{ ganre: 'Боевик', type: 'Сериал', seasons: 10 }
 //А можно присвоить каждому сериалу переменную
 let finding12Obezyan = movies["12 обезьян"];
 console.log(finding12Obezyan.ganre);//Боевик

 //Дальше можно добавлять сериалы в коллекцию
 let canibal = {
    ganre: "Ужасы",
        type: "Сериал",
        seasons: 5
 };
 movies["Ганибал"] = canibal;
 //Когда коллекция вырастет, для просмотра только рназвания сериалов - можно воспользоваться Object.keys()
 console.log(Object.keys(movies));//[ 'Меч', 'Кухня', 'Светофор', '12 обезьян', 'Ганибал' ]

                            /*ДЗ*/
//Подсчет очков
//Создайте обьект и назовите его scores Пусть ключами будут имена друзей, а значения набранные ими очки(0 или больше)
let scores = {
    Denis: 5,
    Oksana: 8,
    Nadya: 3
};
//Счет очков надо увеличить
scores["Denis"] += 2;
scores["Oksana"] += 4;
scores["Nadya"] += 3;

console.log(scores);//{ Denis: 7, Oksana: 12, Nadya: 6 }

//Вглубь обьектов и массивов
let myCrazyObject = {
    "name": "Нелепый обьект",
    "some array": [7, 9, {purpose: "путаница", number: 123 }, 3.3],
     "random animal": "Банановая акула"
};
//Как одной строкой js-кода извлечь из этого обьекта число 123?
console.log(myCrazyObject["some array"][2].number);//123



