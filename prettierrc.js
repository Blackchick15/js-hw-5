// Задача №1

// if else, prompt

// Написати програму де ми питаємо у користувача

// номер місяця і показуємо до якого часу року він належить

// Якщо користувач ввів 2 - показуєм слово Зима

// Якщо 3 -Весна і т.д.

// let number = prompt('номер місяця ');
// if(number === '2'){
//     console.log('Зима')
// }else if(number === '3'){
//     console.log('Весна')
// }
// else if(number === '4'){
//     console.log('Літо')
// }else if(number === '5'){
//     console.log('Осень')
// }

// ............

// Задача №2

 

// Написати програму яка перевіряє логін і пароль користувача

//  і виводить привітання - якщо все добре

//  і якщо ні помилку - невінний логін

 

// const login = prompt('Ведіть логін') ;

// const password  = prompt('Ведіть пароль') ;

//  if(login === 'user@gmail.com'){
//     console.log('привітання')
//  }else{
//     console.log('невінний логін')
//  };
//  if(password  === '12345'){
//     console.log('привітання')
//  }else{
//     console.log('невінний логін')
//  }
    
 

// ............

// Задача №3

// /* на for
//  * Напиши скрипт який підрахує суму всіх парних чисел,
//  * які входят в діапазон чисел в змінних від min до max.
//  * Наприклад, якщо min=0 і max=5, то діапазон 0-5,
//  * зроби перевірку
//  * виведи парні числа
//  * і порахуй їх суму, змінна total
//  * виведи консоль
//  */

// const min = 0;
// const max = 5;
// let total = 0;

// for(let i =min; i <=max; i +=1){
//     if(i % 2 === 0){
//      console.log("total",);
//      total +=i;
//     }
// }
   

// console.log("Сума чисел", total);


// for(let i =min; i <=max; i +=1){
//     if(i % 2 !== 0){
//      console.log("Не парне число", i);
//      continue 
//     }
//     console.log("Парні числа",i);
//     total += i ;
// }
   

// console.log("Сума чисел", total);
//..............................

// Задача №4

// Порахувати загальну суму в корзині
// const carts = [54, 28, 105, 70, 92, 17, 120];
// let total = 0; 

// for( let i = 0; i <cart.length ; i += 1 ){
//     console.log(cart[i])
//     total += cart[i] 

// }
// for (const cart of carts) {
//     total += cart;
    
// }
// console.log('Сума в кошику',total)
// ...........................

// Задача №5

// Напиши скрипт який підраховує суму усіх парних чисел в масиві
const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let total = 0;

// for(let i = 0; i < numbers.length; i += 1 ){
//     console.log(numbers[i])
//     if( numbers[i] % 2 === 0){
//         console.log('Це є парні числа')
//         total += numbers[i]
//     }
// }
// console.log(total)
for (const number of numbers) {
    if(number % 2 === 0){
        console.log('Це є парні числа');
        total +=number;
    }
}
console.log(total);
// ....................