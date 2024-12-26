            /*Рисуем котиков*/
let drawCats = function (howManyTimes) {
  for (let i = 0; i < howManyTimes; i++) {
    console.log(i + " =^.^=");
  }
};
drawCats(10);//Вместо 10 здесь можно ставить любое число

            /*Типы данных*/
//Числа 10;
//Строки "Hello world!";
//Булевые true; false;

//99 * 123; // 12177
//"Вот длинная строка".slice(0, 3); //"Вот"
//true && false; //false

           /*Переменные*/
let Mikhael;
let age = 41;
age = 42;
console.log(age);

let numberOfSiblings = 1 + 3;
let numberOfCandis = 8;
console.log(numberOfCandis / numberOfSiblings);// 2


    /*Создание новых переменных на основе вычислений*/
let secondsInAMinute = 60;
let minutesInAnHour = 60;
let secondsInAnHour = secondsInAMinute * minutesInAnHour;
console.log(secondsInAnHour);// 3600 секунд в часе

let hoursInADay = 24;
let secondsInADay = secondsInAnHour * hoursInADay;
console.log(secondsInADay);//86400 секунд в сутках

let daysInAYear = 365;
let secondsInAYear = secondsInADay * daysInAYear;
console.log(secondsInAYear);//31536000 секунд в году

console.log(age * secondsInAYear);// 1324512000 секунд в моем возрасте(42)

/*Инкремент и декремент: увеличением на 1 - инкремент"++", уменьшением на 1 - декремент"--"*/
let hightFives = 0;
console.log(++hightFives);//1
console.log(++hightFives);//2
console.log(--hightFives);//1
//если инкремент поставить после переменной - js вернет первоначальное значение
hightFives = 0;
hightFives++;// 0
hightFives++;//1
hightFives++;//2

            /*+=(плюс-равно)и -=(минус-равно)*/ 
let x = 10;
x = x + 5;
console.log(x);//15
//в js есть более простой способ записи
let score = 10;
console.log(score += 7);// 17
console.log(score -= 3);// 14

let ballons = 100;
console.log(ballons *= 2);//200
console.log(ballons /= 2)//100

            /*Строки*/

let myAwesomeString = "Что-то ОЧЕНЬ крутое!!!";
console.log(myAwesomeString);// "Что-то ОЧЕНЬ крутое!!!"

//можно присвоить строковое значение переменной, где раньше хранилось число
let myThing = 5;
console.log(myThing);//5
myThing = "Здесь 5 уже нет!";
console.log(myThing);//"Здесь 5 уже нет!"
//Теперь сложим число с числом в кавычках
let number = 9;
let string = "9";
console.log(number + number);//18
console.log(string + string);//99
//В первом примере js сложил 9+9=18, во втором он просто склеил 2 строки "9" + "9" = "99"

            /*Обьединение строк */
//Если с числами оператор такой как + складывает и суммирует числа, то строки он обьединяет
let greeting = "Hi, ";//здесь мы ставим запятую и добавляем пробел, чтобы в консоль выводить сообщение с запятой и пробелом
let myName = "Mikhael";
console.log(greeting +  myName);// "Hi, Mikhael"
// Как узнать длинну строки
console.log("Hi, Mikhael".length);//11(суммируются даже знаки припинания и пробелы)
//Можно добавлять слово length к концу как самой строки, так и переменной, содержащей строку
let java = "Java";
console.log(java.length);// 4
let script = "Script";
console.log(script.length);//6
let javaScript = java + script;
console.log(javaScript.length);//10
            /*Получение отдельного символа строки*/
let name = "Mik";
console.log(name[0]);//"M"
console.log(name[1]);//"i"
console.log(name[2]);//"k"

let codeWord1 = "Обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";
console.log(codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1]);//"беги!"
//(второй символ строки мы получаем с помощью 1, т.к. в js начинается с 0)
            /*Получение среза строки*/ 
//для среза - используется slice
let longString = "Эта длинная строка такая длинная";
console.log(longString.slice(4, 18));// длинная строка - наша фраза начинается с 4(д) символа и заканчивается 18(пробел между строка и такая)
//Э(0)т(1)а(2) (3)д(4)л(5)и(6)н(7)н(8)а(9)я(10) (11)с(12)т(13)р(14)о(15)к(16)а(17) (18).............. - 3 и 11 и 18 - в этих местах пробелы
//По сути мы попросили программу вырезать из этой строки начиная с символа 4 и продолжать до позиции 18(оставить)
// Если мы укажем одно число - то программа обрежет фразу начиная с указанного числа и до конца
let longStrinng = "Эта длинная строка такая длинная";
console.log(longStrinng.slice(4));//"длинная строка такая длинная"

            /*Перевод строки в заглавный или строчный  регистр*/
//Если надо вывести какой-нибудь текст заглавными буквами - можно использовать toUpperCase()
console.log("Эй, как дела?".toUpperCase());//"ЭЙ, КАК ДЕЛА?"
// Можно произвести операцию и в обратную сторону toLowerCase()
console.log("ЭЙ, КАК ДЕЛА?".toLowerCase());//"эй, как дела?"
//Но ведь предложение начинается с заглавной буквы - как сделать первый символ заглавным? 
 let sillyString = "эЙ, кАк дЕлА?";
 let lowerString = sillyString.toLowerCase();// все символы делаем строчными
 let firstCharacter = lowerString[0];//получаем первый символ "э"
 let firstCharacterUpper = firstCharacter.toUpperCase();//делаем первый символ заглавным "Э"
 let restOfString = lowerString.slice(1);//мы получсаем в новую переменную все символы, начиная со второго
 console.log(firstCharacterUpper + restOfString);//"Эй, как дела?"
//Так как значения и переменные взаимозаменяемые - можно начиная со 2-ой по 6-ю строки обьединить
let sillyStrings = "эЙ, кАк дЕлА?";
console.log(sillyStrings[0].toUpperCase() + sillyStrings.slice(1).toLowerCase());//"Эй, как дела?"

            /**Булевые значения */
let javaScriptIsCool = true;
console.log(javaScriptIsCool);//true

let pytonIsCool = false;
console.log(pytonIsCool);//false

            /**Логичесике операции */
//Три основных будевых оператора: && || !
//&& (И)- используют чтобы узнать равны ли они оба true
//Задачка - перед тем как идти в школу, мы должны проверить приняли ли мы душ и взяли ли мы рюкзак
let hadShower = true;//приняли душ?
let hasBackpack = false;//взяли рюкзак?
console.log(hadShower && hasBackpack);//false
//Если хотябы одно условие ложное - консоль выведет false

let hadBreckfast = true;
let takeApple = true;
console.log(hadBreckfast && takeApple);//true

// || (ИЛИ)
let hasMilk = true;//я выпил молоко?
let hasBread = false;//я сьел хлеб?
console.log(hasMilk || hasBread);//true
// даст true, если хотябы одно из условий true, если оба условия ложь - консоль выдаст false

// !(НЕ)
let isWeekend = true;//Сейчас выходной? = да
let neddToShowerToday = !isWeekend;//сегодня надо принять душ? = нет
console.log(neddToShowerToday);//false

console.log(neddToShowerToday);//false
console.log(!neddToShowerToday);//true

            /**Совмещение логических операторов */
//Предположим нам надо идти в школу если сегодня не выходной и мы приняли душ и у нас есть яблоко или апельсин
let isWeekends = false;//сегодня не выходной
let hadShowers = true;//я принял душ
let hasApple = false;//у меня не яблоко
let hasOrange = true;//у меня апельсин
let shouldGoToSchool = !isWeekends && hadShowers && (hasApple || hasOrange);//выражение взяло в скобки, потому что нам важно в первую очередь
// проверить данное выражение. Дело в том, что приоритет у ||меньше чем у &&(всеравно что у умножения и сложения)
console.log(shouldGoToSchool);// true && true && (false || true) = true

            /**Сравнение чисел с помощью булевых значений */
//Представим что у нас парк развлечений и нам надо проверить посетителей на предмет роста - если рост меньше 150 см - посетитель вывалиться
//из кабинки - поэтому посетитель должен сообщить свой рост
// >
let height = 155;
let heightRestriction = 150;
console.log(height > heightRestriction);//true
// Но если рост будет равен 150 - консоль выведет false
height = 150;
console.log(height > heightRestriction);// false
//Для того чтобы это исправить - необходимо в условии ставить >= (Больше либо равно)
console.log(height >= heightRestriction);//true

// < пригодиться, если атракцион только для детей
console.log(height < heightRestriction);//false
//так же как и >=, можно использовать <=
console.log(height <= heightRestriction);//true

// === (знак равенства) не путайте =(присваивать значение) и ===(спрашивать равны ли значения)
// представьте что вы своим друзьям загадали число 5 и облегчили задание сообщив, что загаданное число от 1 до 9
let mySecretNumber = 5;//я загадал 5
let chicoGuess = 3;//1-ый друг думает что 3
console.log(mySecretNumber === chicoGuess);//false
let harpoGuess = 7;//2-ой друг думает что 7
console.log(mySecretNumber === harpoGuess);//false
let grouchoGuess = 5;//3-ий друг думает что 5
console.log(mySecretNumber === grouchoGuess);//true
//сравнивая два числа с помощью === мы можем получить true только если оба числа совпадают

// == (двойной знак равенства) - практически равно
let stringNumber = "5";
let actualNumber = 5;
console.log(stringNumber == actualNumber);//true
// этот знак равенства будет давать true если число и строка выглядят похоже, в отличии от === (строгого равенства)
//Лучше пользоваться строгим равепнством ===

let kinoAge = 12;//на просмотр фильмов допускаются дети с возрастом 12
let accompanied = true;//с сопровождением взрослых
let kidAge = 11;//возраст ребенка
console.log(kidAge >= 12 && accompanied === true);//false
kidAge = 12;//возраст ребенка
accompanied = false;//без сопровождения взрослых
console.log(kidAge >= 12 || accompanied === true);//true

//undefined и null
//оба значения обозначают пусто, но смысл отличается
let userName;
console.log(userName);//undefined
//значение null используется, чтобы явно показать что тут пусто
let userNames = null;
console.log(userNames);//null





   



















