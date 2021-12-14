//random odd numbers generator in range of m and n (m can be bigger than n and vice versa)

let m, n;

m = -1;
n = 10;

let range = Math.abs(m - n);
let rangeNumber = Math.round((Math.random() * range - 1));
let minRange = Math.min(m, n);
let randomNumber = minRange + rangeNumber;
let oddRandomNumber = randomNumber + Math.abs(randomNumber%2 - 1);

console.log(oddRandomNumber)

//calculation of fractional parts of numbers a and b with precision k and its comparison

let a, b, k;

a = 13.890123;
b = 2.891564;
k = 3;

let aDecimal = a - Math.trunc(a);
let bDecimal = b - Math.trunc(b);

let aCompare = Math.floor(aDecimal * Math.pow(10, k));
let bCompare = Math.floor(bDecimal * Math.pow(10, k));

console.log(aCompare, bCompare);

console.log (aCompare > bCompare);
console.log (aCompare < bCompare);
console.log (aCompare === bCompare);
console.log (aCompare !== bCompare);

//check password if there are more than 4 digits and one of two signs either "-" or "_"

let password;

password = '_zxd';

if (password.length >= 4 && (password.includes('-') || password.includes('_'))) {
  console.log('Пароль надёжный')
} else {
  console.log('Пароль недостаточно надёжный')
}

//transform enterred values of first and last name to the common format (Xxxx Xxxxxx) and check if there was any transformation or not

let firstName, lastName;

firstName = 'иван';
lastName = 'иВАнОв';

let normalizedFirstName = firstName.toLowerCase();
let normalizedLastName = lastName.toLowerCase();

let correctFirstName = normalizedFirstName.substr(0,1).toUpperCase() + normalizedFirstName.substr(1);
let correctLastName = normalizedLastName.substr(0,1).toUpperCase() + normalizedLastName.substr(1);

firstName === correctFirstName && lastName === correctLastName ?
  console.log('Имя осталось без изменений:\n' + firstName + ' ' + lastName) :
  console.log('Имя было преобразовано:\n' + correctFirstName + ' ' + correctLastName);

//array generator of numbers in range of x and y (x can be bigger than y and vice versa) with "count" length
let array = [];
let x = 5;
let y = -5;
let count = 50;

for (let i = 0; i < count; ++i) {
  array.push(Math.min(x,y) + Math.round(Math.random() * (Math.max(x,y) - Math.min(x,y))));
}

console.log(array);

//array iterations

let dayNumbers = [];
let weekDays = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let weekDay = 'вторник';
let weekDayIndex = weekDays.indexOf(weekDay);

for (j = 1; j < 32; j++) {
  dayNumbers.push(j);
}

for (let dayNumber of dayNumbers) {
  let j = (weekDayIndex + dayNumber - 1) % 7;
  console.log(`${dayNumber} января, ${weekDays[j]}`);
}

//a panzer passes through the "way" of an array where "false" means "no mine" and "true" = "mine". the panzer has 2 lives, so panzer will destroy when encounters the second mine

let roadMines  = [false, false, false, true, false, false, false];
let damaged = false;

for (let l = 0; l < (roadMines.length - 1); ++l) {
  console.log(`Танк переместился на позицию ${l+1}`);
  if (roadMines[l]) {
    if (damaged) {
      console.log('Танк уничтожен');
      break;
    } else {
      damaged = true;
      console.log('Танк поврежден');
    }
  }
}

//black list filter 

let list = [];
let forbiddenList = [];

function filter(list, forbiddenList) {
  let filteredList = list.filter(item => !forbiddenList.includes(item));
  return filteredList;
}

//successively applied discount

function calculate (cartAmount, goodsQuantity, promo = null) {
  let totalAmount = cartAmount;

  if (promo === 'ДАРИМ300') {
    if (cartAmount < 300) {
      totalAmount = 0;
    } else {
      totalAmount -= 300;
      if (goodsQuantity >= 10) {
        totalAmount *= 0.95;
      };
      if (totalAmount > 50000) {
        totalAmount = 50000 + (totalAmount - 50000) * 0.8;
      }
    }
    return totalAmount;
  } else if (goodsQuantity >= 10) {
    totalAmount *= 0.95;
    if (totalAmount > 50000) {
      totalAmount = 50000 + (totalAmount - 50000) * 0.8;
    };
    if (promo === 'СКИДКА15' && totalAmount >= 20000) {
      totalAmount *= 0.85;
    };
    return totalAmount;
  } else if (totalAmount > 50000) {
    totalAmount = 50000 + (totalAmount - 50000) * 0.8;
      if (promo === 'СКИДКА15') {
        totalAmount *= 0.85;
      }
    return totalAmount;
  } else if (promo === 'СКИДКА15' && totalAmount >= 20000) {
    totalAmount *= 0.85;
    return totalAmount;
  } else {
    return totalAmount;
  }
}

//object array filter

function objArrFilter(objects, key, value) {
  let result = [];

  for (let i = 0; i < objects.length; i++) {
    let object = objects[i];

    if (object[key] === value) result.push(object);
  }
  return result;
}



