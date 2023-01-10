// Ниже пробую switch  
  
let hundredsNumber = Math.floor(answerNumber / 100);

console.log('hundredsNumber - ' + hundredsNumber);

  let hundredsNumberText;
  
  
    switch (hundredsNumber) {
      case '9':
        hundredsNumberText = 'девятьсот';
        break;
      case '8':
        hundredsNumberText = 'восемьсот';
        break;
      case '7':
        hundredsNumberText = 'cемьсот';
        break;
      case '6':
        hundredsNumberText = 'шестьсот';
        break;
      case '5':
        hundredsNumberText = 'пятьсот';
        break;
      case '4':
        hundredsNumberText = 'четыреста';
        break;
      case '3':
        hundredsNumberText = 'триста';
        break;
      case '2':
        hundredsNumberText = 'двести';
        break;
      case '1':
        hundredsNumberText = 'сто';
        break;
        default:
          hundredsNumberText = '';
    }


  console.log('hundredsNumberText - ' + hundredsNumberText);
