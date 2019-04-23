
/// 1. Написати функцію function(from, to) {}, яка рахує всі парні і непарні числа на заданому. Додати перевірку, коли функція запускається без аргументів, коли один аргумент, або більше двох виводити повідомлення про помилку.

function obchFromTo() {
  let parametr = document.getElementById('inputProm').value.split(",").map(Number);
  console.log(parametr);

  if (parametr.length !== 2 || parametr.length === 0) {
    console.log("введіть коректні проміжки (2 числа:...від...до...)");
    alert("введіть коректні проміжки, 2 числа через кому (...від...до...)");
    document.getElementById('nn3').innerHTML = 0;
    document.getElementById('pp3').innerHTML = 0;
  }
  else if (parametr[0] >= parametr[1]) {
    console.log("перше число більше за друге!! (:...від...до...)");
    alert("перше число має бути менше за друге (...від...до...)");
    document.getElementById('nn3').innerHTML = 0;
    document.getElementById('pp3').innerHTML = 0;
  }

  else {
    let aaa = parametr[0];
    let bbbb = parametr[1];
    console.log("будемо працювати з числами від ", aaa, "до ", bbbb);
    parnNeParn(aaa, bbbb);
  }
}

function parnNeParn(from, to) {
  let parn = 0;
  let neparn = 0;
  for (let i = from; i <= to; i++) {
    if ( i % 2 === 0) {
      parn++;
    }
    else {
      neparn++;
    }
  }

  document.getElementById('nn3').innerHTML = neparn;
  console.log('кількість непарних = ', neparn);

  document.getElementById('pp3').innerHTML = parn;
  console.log('кількість парних = ', parn);

}

/// 2. Написати функцію, яка отримує в якості аргументів числа, якщо чисел менше 10, повертає суму всіх чисел, якщо більше 10 повертає масив. Якщо запустити функцію без параметрів, видає помилку.  // використати псевдомасив arguments
function sumArg() {
  const list = document.getElementById('ki').value.split(",").map(Number);
  console.log(list);
  let kilkist = 0;
  kilkist = list.length;

  if (kilkist === 0) {
    alert('введіть числа!');
    console.log("введіть числа!!!");
    document.getElementById('sto10').innerHTML = 0;
  } else if (kilkist > 10) {
    console.log("Результат =", list);
    sum = list;
    document.getElementById('sto10').innerHTML = sum;
  } else {
    // console.log(kilkist);
    let sum = 0;
    const sumToTen = function () {
      // console.log(kilkist);
      console.log(list.length);

      //let argum = 0;
      //let arr = document.getElementById('ni').value.split(",").map(Number);
      for (let i = 0; i < list.length; i++) {
        console.log("сума на поточному кроці", list[i])
        sum += list[i];
      }
      document.getElementById('sto10').innerHTML = sum;
      console.log("сума всіх чисел = ", sum);

    }
    sumToTen(list);
    // return sum;
  }
}



///3. ОБЧИСЛЕННЯ ФАКТОРІАЛУ

function obchFactorial() {
  let f = document.getElementById('inpf').value;

  console.log(f);
  let mn = 1;

  /// СТЕК
  obchFactorialStek(f)
  function obchFactorialStek(f) {
    if (f > 1) {
      mn = mn * f;
      return obchFactorialStek(f - 1);
    } else if (f < 0) {
      console.log("введіть додатнє число");
      alert("Введіть будь ласка додатнє число!");
    }
    return;
  }
  /// СТЕК ///

  document.getElementById('r4').innerHTML = mn;
  console.log(mn);
}


/// 4. МЕТОД БУЛЬБАШКА Написати функцію, яка сортує масив чисел за допомогою методу “бульбашка” і повертає відсортований масив

function sortArray() {
  let a = document.getElementById('ni').value.split(",").map(Number);
  console.log(a);
  let arr = document.getElementById('ni').value.split(",").map(Number);
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length - j; i++) {
      if (arr[i] > arr[i + 1]) {
        let tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;

      }
    }
  }
  document.getElementById('rr3').innerHTML = arr;
  console.log(arr);
  return arr;
}

