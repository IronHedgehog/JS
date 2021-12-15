// function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line
//     const x = message.split(" ");
//     const y = pricePerWord * x.length;
// console.log(y);


//     // Change code above this line
//  };
//  calculateEngravingPrice("JavaScript is in my blood", 10)

// for(i = 0; i <= 10; i++ ){
//     console.log(i)
// }

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);
////ДОЕБАТСЯ ДО ПРЕПОДА
// function calculateTotalPrice(order) {
//     let total = 0;
//   for(let i = 0; i < order.length; i++){
//        total += i
//   }
//   return total;
//   };

// calculateTotalPrice([12, 85, 37, 4])                    // Доебатся до препода!!!!!!!!!!!!!!!!!!!


// const arrName = ["Bill", "Jhony", "Ivan", 6];

// console.log(arrName[0]); // bill
// console.log(arrName[1]); // jhony 
// console.log(arrName[2]); // ivan
// console.log(arrName[3]); // 6
// console.log(arrName.length); // 4
// console.log(arrName.length-1); // 3 index
// console.log(arrName[arrName.length-1]); // 6 item

/*-------------------------*/

// for (let i = 0; i < arrName.length; i++) {
//     console.log(arrName[i]);
// }

// const arrNum = [1,2,3,4,5];
// let total = 0;

// for (const item of arrNum) {
//     total += item;
// }

// console.log(total);

/*-------------------*/

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

//for (let i = 0; i < numbers.length; i += 1) {

// let result;
// for (const item of numbers) {
//   if (item >= threshold) 
//     console.log(`Число больше чем ${threshold}: ${item}`); 
// }


/*-------------------*/

// const arr = ['test', 'test1'];
// const arr1 = arr;

// console.log(arr); // ['test', 'test1']

// arr[0] = 1; // изменение оригинала
// arr1[1] = 10; // изменение оригинала по копии ссылки

// console.log(arr1); // вывод по скопированеной ссылки

// arr[0] = 20; // изменение оригинала
// const arr2 = []; // создание нового массива
// for(const item of arr) { // перебор оригинального массива
//     arr2.push(item); // добавляем в конец новые элементы массива
// }
// arr[1] = 'test'; // изменение оригинала
// console.log(arr2); // вывод скопированного массива


/*------------------*/

// const arr = [1, 2, 3, 4, 5, 'test', 6, 7, 8, 9, '11', [0,1,]];
// const str = "Если индекс отрицательный, begin указывает смещение от конца последовательности. Вызов slice(-2) извлечёт два последних элемента последовательности.";

// const arr1 = arr.slice(0, -1);

// console.log(arr1);

// console.log(arr.join(" | "));
// const arrStr = str.split(" ");

// arrStr.push('1111');
// console.log(arrStr);

// const a = [1,2,3];
// const b = [1,2,3];

// if (`${a}` === `${b}`) {
//     console.log('OK');
// }

// console.log(arr.indexOf('test'));
// console.log(arr.includes(11));

// console.log(arr);

// for (let i = 0; i < 5; i++) {
//     arr.push(`TEST_${i}`);
// }

// console.log(arr.pop());

// arr.splice(arr.indexOf(5), 0, 'test15', 'test17', 'test16');

// console.log(arr);


// const arr1 = ['Bill', 'Mango', 1];
// const arr2 = ['Ivan', 'Anton'];
// const arr3 = arr1.concat(arr, [0, 0, 0], arr2);

// console.log(arr3);

/*---------------------*/

// const arr = [
//     [1, 2, 3, 4],
//     [2, 5, 4, 6],
//     [1, 5, 2, 4],
//     [1, 9, 8, 4],
//     'test'
// ];

//console.log(arr[1][2][0]);

// for (const item of arr) {
//     if (typeof item === 'object') {
//         // if (Array.isArray(item)) {
//         for (const item1 of item) {
//             console.log(item1);
//         }
//     } else {
//         console.log(item);
//     }
// }

// console.log(arr);



// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     // Change code below this l

//   for(let i = min; i <= max; i++){
//           numbers.push(i)

//       }
// //   } 

//     // Change code above this line
//     // return numbers;
//     console.log(numbers)
//   };

//   createArrayOfNumbers(4, 10);


// function getCommonElements(array1, array2) {
//     // Change code below this line
//   let result = [];
// for(let item of array1)
//     if(array2.includes(item)){
//         result.push(item)
//     }

//    // Change code above this line
//   }
//   getCommonElements([1, 2, 3], [2, 4])

// const d = 12 % 7;
// console.log(d)

// function getEvenNumbers(start, end) {
//     // Change code below this line
//  let result = []
//  for (let i = start; i < end; i++){
//    if(i % 2 === 0){
//     result.push(i)
//     console.log(result)
//    }
//  }
//      // Change code above this line
//    }

//    getEvenNumbers(2, 5)
//    getEvenNumbers(3, 11)
//    getEvenNumbers(6, 12)
//    getEvenNumbers(8, 8)
//    getEvenNumbers(7, 7)

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     console.log(i)
//     break;

//   }

// }
// function includes(array, value) {
//     // Change code below this line
//       for (let item of array){
//         if( item === value){
//         console.log(true);
//       }
    // Change code above this line
//   }
// }

// function findLongestWord(string) {
//   const stringSplit = string.split(' ');
//   console.log(stringSplit)
//   let longestWord = "";
//     for (const word of stringSplit) {
//       if (word.length > longestWord.length) {
//       longestWord = word;
//   }
//   }
//     return longestWord; 
//   }
//   findLongestWord("The quick brown fox jumped over the lazy dog")

  // word = i
  function findLongestWord(string){
  const stringSplit = string.split(' ');
  let longestWord = "";
 for(let item of stringSplit){
   if(item.length > longestWord.length){
      longestWord = item
   }
   console.log(item)
 }
}
  findLongestWord("The quick brown fox jumped over the lazy dog")





























