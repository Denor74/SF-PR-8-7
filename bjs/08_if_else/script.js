let minValue;
let maxValue;
adValue();



function adValue() {

  // НАЧАЛЬНОЕ ЗНАЧЕНИЕ
  // умерауция действий
  document.querySelector('.numberItem').classList.add('invisible');
  // Вы загадали ....
  document.querySelector('.answerFieldCss').classList.add('invisible');
  // Блок выбора значений больше-меньше
  document.querySelector('.groupMinMax').classList.add('invisible');
  // Вывод - Загадайте число между .....
  document.querySelector('.makeWishNumber').classList.add('invisible');

  // Кнопки общего кправления - нижние
  document.querySelector('.buttonFurther').classList.add('visible');
  document.querySelector('.buttonStart').classList.add('invisible');
  document.querySelector('.buttonReplay').classList.add('invisible');

  // Действия при клике по ИДЁМ ДАЛЕЕ
  document.querySelector('.buttonFurther').addEventListener('click', function () {
    // нумерация действий
    document.querySelector('.numberItem').classList.add('invisible');
    // Вы загадали ....
    document.querySelector('.answerFieldCss').classList.add('invisible');
    // Блок выбора значений больше-меньше
    document.querySelector('.groupMinMax').classList.add('invisible');
    // Введите числа от -999 до 999
    document.querySelector('.valueRange').classList.add('invisible');
    // Форма выбора чисел
    document.querySelector('.formValue').classList.add('invisible');


    // Кнопки общего кправления - нижние
    document.querySelector('.buttonFurther').classList.add('invisible');
    document.querySelector('.buttonStart').classList.remove('invisible');
    document.querySelector('.buttonReplay').classList.add('invisible');

    // Выводим запрос на минимальное число. parseInt интерпретирует систему исчисление и выводит целое число
    minValue = parseInt(document.querySelector('#valueInputMin').value);
    // minValue = parseInt(prompt("Минимальное знание числа для игры", "0"));

    // Выводим запрос на максимальное число
    maxValue = parseInt(document.querySelector('#valueInputMax').value);
    // maxValue = parseInt(prompt("Максимальное знание числа для игры", "100"));

    // Проверяем значения на NaN и min max значения

    minValue = (minValue < -999) ? minValue = -999 : (minValue > 999) ? minValue = -999 : minValue;
    maxValue = (maxValue > 999) ? maxValue = 999 : (maxValue < -999) ? maxValue = 999 : maxValue;
    // Проверяем являются ли minValue и maxValue числами, если нет, присваиваем им значения 0 и 100 соответсвенно
    if (Number.isNaN(minValue) || Number.isNaN(maxValue)) {
      minValue = 0;
      maxValue = 100;
    }
    document.querySelector('.makeWishNumber').classList.remove('invisible');
    makeWishNumber.innerText = `Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`;

  })




  // Вывод окна для загадывания числа
  // alert(
  //  `Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`
  //);

  // Кнопка НАЧИНАЕМ ИГРУ
  document.querySelector('.buttonStart').addEventListener('click', function () {


    // нумерация действий
    document.querySelector('.numberItem').classList.remove('invisible');
    // Вы загадали ....
    document.querySelector('.answerFieldCss').classList.remove('invisible');
    // Блок выбора значений больше-меньше
    document.querySelector('.groupMinMax').classList.remove('invisible');
    // Введите числа от -999 до 999
    document.querySelector('.valueRange').classList.add('invisible');
    // Форма выбора чисел
    document.querySelector('.formValue').classList.add('invisible');
    // Загадайте число
    document.querySelector('.makeWishNumber').classList.add('invisible');

    // Кнопки общего кправления - нижние
    document.querySelector('.buttonFurther').classList.add('invisible');
    document.querySelector('.buttonStart').classList.add('invisible');
    document.querySelector('.buttonReplay').classList.remove('invisible');

    // Ищем среднее значение и Math.floor Округляет аргумент до ближайшего меньшего целого
    let answerNumber = Math.floor((minValue + maxValue) / 2);

    // Количество вопросов - изначально 1
    let orderNumber = 1;
    // Игра продолжается
    let gameRun = true;
    // ??? получаем массив данных из span id orderNumberField  назначаем переменную для Номер вопроса .... ???
    const orderNumberField = document.getElementById("orderNumberField");
    // проверяем в консоли что выводит orderNumberField
    console.log(orderNumberField);
    // НАзначаем константу  - Вы загадали число .....
    const answerField = document.getElementById("answerField");

    // Сщздаем массивы для текстового представления чисел
    let natur = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
    let teens = ['', 'десять', 'одинадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
    let dozens = ['', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
    let hundreds = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];

    function numberText() {
      let number = Math.abs(answerNumber);
      let textNumber = '';

      if (number == 0) {
        textNumber = 'ноль';
        return textNumber;
      }
      if (number <= 9) {
        return natur[number];
      }
      if (number > 9 && number < 20) {
        return teens[Math.floor(number / 10 + number % 10)];
      }

      if (number >= 20 && number <= 99) {
        return dozens[(Math.floor(number / 10)) - 1] + " " + natur[Math.floor(number % 10)];
      }

      if (number >= 100 && number <= 999) {
        return hundreds[Math.floor(number / 100)] + " " + numberTextHundreds();
      }
    }

    function numberTextHundreds() {
      let naturTeensDozens = Math.abs(answerNumber) % 100;

      if (naturTeensDozens <= 9) {
        return natur[Math.floor(naturTeensDozens / 1)];
      }

      if (naturTeensDozens > 9 && naturTeensDozens < 20) {
        return teens[(Math.floor(naturTeensDozens / 10)) + (naturTeensDozens % 10)];
      }

      if (naturTeensDozens >= 20 && naturTeensDozens <= 99) {
        return dozens[(Math.floor(naturTeensDozens / 10)) - 1] + " " + natur[Math.floor(naturTeensDozens % 10)];
      }
    }


    // выводим в текст с id orderNumberField значение заданных вопросов (шагов)
    orderNumberField.innerText = orderNumber;

    // Назначаем переменную для фразы "Вы угадали ..."
    let answerFieldText = "";
    let answerFieldCorrect = "";
    // Выводим в значение текст в поле с answerField угаданное число (среднее значение между загаданными)
    // answerField.innerText = `${answerFieldText}Вы загадали число ${answerNumber }?`;

    // Рандомно определяем значение answerFieldText
    function randomAnswerFieldText() {
      const phraseRandom = Math.random();
      console.log('phraseRandom = ' + phraseRandom);
      if (phraseRandom <= 0.3) {
        answerFieldText = 'Вы загадали число';
      } else if ((phraseRandom) => 0.7) {
        answerFieldText = 'Да это легко! Вы загадали';
      } else {
        answerFieldText = 'Наверное, это число';
      }
      console.log('answerFieldText = ' + answerFieldText);
    }
    // В консоли проверяем работу функции
    randomAnswerFieldText();

    answerField.innerText = answerNumber >= 0 ? numberText().length < 20 && answerNumber >= 0 ? `${answerFieldText} ${numberText()}?` : `${answerFieldText} ${answerNumber}?` : numberText().length < 20 ? `${answerFieldText} минус ${numberText()}?` : `${answerFieldText} ${answerNumber}?`;

    // answerField.innerText = `${answerFieldText} ${answerNumber }?`;


    // здесь был скрипт кнопки ЗАНОВО


    // действие при клике на кнопку больше
    document.getElementById("btnOver").addEventListener("click", function () {
      if (gameRun) {
        if (minValue === maxValue) {
          const phraseRandom = Math.round(Math.random());
          console.log("phraseRandom - " + phraseRandom);
          const answerPhrase =
            phraseRandom === 1 ?
            `Вы загадали неправильное число!\n\u{1F914}` :
            `Я сдаюсь..\n\u{1F92F}`;

          answerField.innerText = answerPhrase;
          gameRun = false;
        } else {
          randomAnswerFieldText();
          minValue = answerNumber + 1;
          answerNumber = Math.floor((minValue + maxValue) / 2);
          orderNumber++;
          orderNumberField.innerText = orderNumber;
          answerField.innerText = answerNumber >= 0 ? numberText().length < 20 && answerNumber >= 0 ? `${answerFieldText} ${numberText()}?` : `${answerFieldText} ${answerNumber}?` : numberText().length < 20 ? `${answerFieldText} минус ${numberText()}?` : `${answerFieldText} ${answerNumber}?`;
        }
      }
    });

    // действие при клике на кнопку меньше
    document.getElementById("btnLess").addEventListener("click", function () {
      if (gameRun) {
        if (minValue === maxValue || minValue === answerNumber) {
          const phraseRandom = Math.round(Math.random());
          const answerPhrase =
            phraseRandom === 1 ?
            `Вы загадали неправильное число!\n\u{1F914}` :
            `Я сдаюсь..\n\u{1F92F}`;

          answerField.innerText = answerPhrase;
          gameRun = false;
        } else {
          randomAnswerFieldText();
          maxValue = answerNumber - 1;
          answerNumber = Math.floor((minValue + maxValue) / 2);
          orderNumber++;
          orderNumberField.innerText = orderNumber;
          answerField.innerText = answerNumber >= 0 ? numberText().length < 20 && answerNumber >= 0 ? `${answerFieldText} ${numberText()}?` : `${answerFieldText} ${answerNumber}?` : numberText().length < 20 ? `${answerFieldText} минус ${numberText()}?` : `${answerFieldText} ${answerNumber}?`;
          //answerField.innerText = `${answerFieldText} ${answerNumber}?`;
        }
      }
    });

    function randomAnswerFieldCorrect() {
      const phraseRandomCorrect = Math.random();
      console.log('phraseRandomCorrect = ' + phraseRandomCorrect);
      if (phraseRandomCorrect <= 0.3) {
        answerFieldCorrect = 'Я всегда угадываю\n\u{1F60E}';
      } else if ((phraseRandomCorrect) => 0.7) {
        answerFieldCorrect = 'Урраааа! Я угадал\n\u{1F61C}';
      } else {
        answerFieldCorrect = 'Я читаю твои мысли\n\u{1F61C}';
      }
      console.log('answerFieldCorrect = ' + answerFieldCorrect);
    }
    // В консоли проверяем работу функции
    randomAnswerFieldCorrect();

    // Клик по кнопке Верно - заканчиваем игру
    document.getElementById("btnEqual").addEventListener("click", function () {
      if (gameRun) {
        randomAnswerFieldCorrect();
        answerField.innerText = `${answerFieldCorrect}!`;
        gameRun = false;
      }
    });


  }) // Закрывающие НАЧИНАЕМ ИГРУ
} // Окончание adValue()

// При действии клика на кнопку "Заново" обнуляем значения загаданных чисел и вариантов ответа
document.getElementById("btnReplay").addEventListener("click", function () {
  // умерауция действий
  document.querySelector('.numberItem').classList.add('invisible');
  // Вы загадали ....
  document.querySelector('.answerFieldCss').classList.add('invisible');
  // Блок выбора значений больше-меньше
  document.querySelector('.groupMinMax').classList.add('invisible');
  // Вывод - Загадайте число между .....
  document.querySelector('.makeWishNumber').classList.add('invisible');
  // Введите числа от -999 до 999
  document.querySelector('.valueRange').classList.remove('invisible');
  // Форма выбора чисел
  document.querySelector('.formValue').classList.remove('invisible');
  document.querySelector('#valueInputMin').value = '';
  document.querySelector('#valueInputMax').value = '';

  // Кнопки общего кправления - нижние
  document.querySelector('.buttonFurther').classList.remove('invisible');
  document.querySelector('.buttonStart').classList.add('invisible');
  document.querySelector('.buttonReplay').classList.add('invisible');


  adValue();
  //minValue = 0;
  //maxValue = 100;
  //orderNumber = 0;
  //answerNumber = '';
  // window.location.reload();  обновляем страницу
});


const randomCheck = Math.round(Math.random());
console.log("randomCheck - " + randomCheck);

const randomNumberThree = Math.round(Math.random() * 3);
console.log('randomNumberThree - ' + randomNumberThree);