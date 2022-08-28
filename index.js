// 5.3
//№ 1
let message = prompt('Введите значение');
let n;
if (typeof +message == 'number') {
  n = (message % 2 == 0) ? "Четное" : "Нечетное";
}
else {
  n = "Упс, кажется, вы ошиблись";
}
console.log(n)

//№ 2
let x;
switch(typeof x){
  case 'string':
    console.log("x — строка");
    break;
  case 'number':
    console.log("x — число");
    break;
    case 'boolean':
      console.log("x — логическое");
      break;
    default:
      console.log("Тип x не определён");
      break;
}

//5.4
//№ 1
let str = "I like wine";
console.log(str.split("").reverse().join(""))

// № 2
let num = Math.random()*101;
console.log(num);

//5.6
// Задание 6
let arr = [22, 22];
let set = new Set(arr);
if (set.size > 1) {
  console.log(false)
}
else console.log(true)

//Задание 7
let arr2 = [22, 22, "333", 0, 11,1,2,3,4,5,true];
let bool = '';
let even = 0;
let notEvent = 0;
arr.forEach(element => {
  if (typeof element === 'number') {
    if (element === 0) bool = 'Элемент 0'
    else if (element %2 === 0) even += 1
    else notEvent += 1 
  }
})
console.log(`Количество четных элементов - ${even}
Количество нечетных элементов - ${notEvent}
${bool}`)

//5.7
// Задание 8
let mapNew = new Map([['Russia','Moscow'],['France','Paris'],['Slovakia','Bratislava'],['Denmark','Copenhagen']]);
for (let element of mapNew) {
  console.log(`Ключ - ${element[0]}, значение - ${element[1]}`);
}
