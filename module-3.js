// // const human = {
// //     name: "Bill",
// //     age: 25,
// //     phone: ['+380504457896', '+380734578963'],
// //     getCity: function () {
// //         return human.location.city;
// //     },
// //     getFirstPhone: function() {
// //         return human.phone[0];
// //     },
// //     location: {
// //         country: "Jamaica",
// //         city: "Ocho Rios",
// //     }
// // };
// ​
// // console.log(human.getCity());
// // console.log(human.getFirstPhone());
// // console.log(human.location.country);
// // console.log(human.phone[1]);
// ​
// // let key = "age";
// ​
// // console.log(human.name);
// // console.log(human[key]);
// ​
// /*---------------*/
// ​
// ​
// const name = "Bill";
// const age = 25;
// const key = "test";
// ​
// const user = { name, age };
// const user1 = { name, age };
// const user2 = {
//     name, age,
//     [key]: age
// }
// console.log(user);
// console.log(user1);
// console.log(user1 === user);
// console.log(user2);
// ​
// ​
// /*------------*/
// ​
// // const bookShelf = {
// //     books: ["The Last Kingdom"],
// //     getBooks() {
// //         return this.books;
// //     },
// //     addBook(bookName) {
// //         this.books.push(bookName);
// //     },
// //     removeBook(bookName) {
// //         const bookIndex = this.books.indexOf(bookName);
// //         this.books.splice(bookIndex, 1);
// //     },
// // };
// ​
// // const obj = { 
// //     name: "devOPS",
// //     description: "dfjhvbdlfvdf kidlfvds blkff",
// //  };
// ​
// // bookShelf.magazine = obj;
// ​
// // console.log(bookShelf);
// ​
// // console.log(bookShelf.getBooks());
// // bookShelf.addBook("The Mist");
// // bookShelf.addBook("Dream Guardian");
// // console.log(bookShelf.getBooks());
// // bookShelf.removeBook("The Mist");
// // console.log(bookShelf.getBooks());
// ​
// ​
// /*---------------*/
// ​
// // const book = {
// //     title: "The Last Kingdom",
// //     author: "Bernard Cornwell",
// //     genres: ["historical prose", "adventure"],
// //     rating: 8.38,
// //   };
// ​
// // for(const key in book) {
// //     console.log(book[key]);
// // }
// ​
// // console.log("---------------");
// // const arr = ["Bill", "Jhony", "Tom"];
// ​
// // for (const item of arr) {
// //     console.log(item);
// // }
// ​
// /*------------*/
// ​
// // const animal = {
// //     legs: 4
// // };
// // ​
// // const dog = Object.create(animal);
// // ​
// // dog.name = 'Fox';
// // ​
// // console.log(dog.hasOwnProperty("name"));
// // console.log(dog.hasOwnProperty("legs"));
// ​
// // console.log(dog);
// // console.log(dog.legs);
// // console.log(dog.name);
// ​
// // const book = {
// //     author: "Bernard Cornwell",
// //     genres: ["historical prose", "adventure"],
// //     rating: 8.38,
// //     title: "The Last Kingdom",
// // };
// ​
// // for (const key in book) {
// //     if (book.hasOwnProperty(key))
// //         console.log(book[key]);
// // }
// ​
// // for (const key of Object.keys(book)) {
// //     console.log(key);
// // }
// ​
// // console.log('-----------');
// ​
// // for (const value of Object.values(book)) {
// //     console.log(value);
// // }
// ​
// // console.log('------------');
// ​
// // for (const entri of Object.entries(book)) {
// //     console.log(entri[0], '=' , entri[1]);
// // }
// ​
// /*--------------*/
// // ​
// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//         name:"ttt"
//     },
//     {
//         title: "На берегу спокойных вод",
//         author: "Роберт Шекли",
//         rating: 8.51,
//     },
//     {
//         title: "Сон смешного человека",
//         author: "Федор Достоевский",
//         rating: 7.75,
//     },
// ];
// ​
// delete books[0].name;
// ​
// for (const item of books) {
//     if (item.hasOwnProperty("title"))
//         console.log(`Книга ${item.title} по авторству ${item.author}`);
// }
// ​
// console.log('---------------');
// for (const item of books) {
//     if (item.rating >= 8)
//         console.log(`Книга ${item.title} по авторству ${item.author}`);
// }
// ​
// const addBook = function (title, author, rating) {
//     books.push({ title, author, rating });
// }
// ​
// const removeBook = function (title) {
//     for (let book of books) {
//         if (book.title === title) {
//             books.splice(books.indexOf(book), 1);
//             break;
//         }
//     }
// }
// ​
// addBook("Война и мир", "Лев Толстой", 7.5);
// ​
// console.log(books);
// ​
// removeBook("На берегу спокойных вод");



// // const apartment = {
// //     imgUrl: "https://via.placeholder.com/640x480",
// //     descr: "Spacious apartment in the city center",
// //     rating: 4,
// //     price: 2153,
// //     tags: ["premium", "promoted", "top"],
// //     owner: {
// //       name: "Henry",
// //       phone: "982-126-1588",
// //       email: "henry.carter@aptmail.com",
// //     },
// //   };
// //   
// //   // Change code below this line
// //   const ownerName = apartment.owner.name;
// //   const ownerPhone = apartment.owner.phone;
// //   const ownerEmail = apartment.owner.email;
// //   const numberOfTags = apartment.tags.length - 1;
// //   const firstTag = apartment.tags[0];
// //   const lastTag = apartment.tags[2];
// //   console.log(numberOfTags);
// //   console.log(apartment.owner)
//   // Change code above this line
//   //=====================================//
// //   const apartment = {
// //     imgUrl: "https://via.placeholder.com/640x480",
// //     descr: "Spacious apartment in the city center",
// //     rating: 4,
// //     price: 2153,
// //     tags: ["premium", "promoted", "top"],
// //   };
// //   
// //   // Change code below this line
// //   const aptRating = apartment["rating"];
// //   const aptDescr = apartment["descr"];
// //   const aptPrice = apartment["price"];
// //   const aptTags = apartment["tags"];
// //   console.log(aptRating)
// //===============================//

// // const apartment = {
// //     imgUrl: "https://via.placeholder.com/640x480",
// //     descr: "Spacious apartment in the city center",
// //     rating: 4,
// //     price: 2153,
// //     tags: ["premium", "promoted", "top"],
// //     owner: {
// //       name: "Henry",
// //       phone: "982-126-1588",
// //       email: "henry.carter@aptmail.com",
// //     },
// //   };
// //   apartment.price = 5000;
// //   apartment.rating = 4.7;
// //   apartment.owner.name = "Henry Sibola";
// //   apartment.tags.push("trusted")
// //   console.log(apartment.tags)

// //================================//


// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4.7,
//     price: 5000,
//     tags: ["premium", "promoted", "top", "trusted"],
//     owner: {
//       name: "Henry Sibola",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
//   apartment.area = 60;
//   apartment.rooms = 3;
//   apartment.location ={};
//   apartment.location.country = "Jamaica";
//   apartment.location.city = "Kingston";
//   console.log(apartment);
//==================================//

// const emailInputName = "henry.carter@aptmail.com";
// const passwordInputName = "jqueryismyjam";

// const credentials = {
//   email: emailInputName,
//   password: passwordInputName,
// };
// console.log(credentials)

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//    Change code below this line
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",


//    Change code above this line
// };

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const keys = [];
//   const values = [];
//   for(const key in apartment){
//     keys.push(key)
//     values.push(apartment[key])
//   }
//=================================================//

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
// if (apartment.hasOwnProperty(key)){
//   keys.push(key);
//   values.push(apartment[key]);
// }
// }
// ===========================//

// function countProps(object) {
//     let propCount = 0;
//     // Change code below this line
//         const keys = object.keys(object);
//         console.log(keys)
//         propCount = keys.length;

//     // Change code above this line
//     return propCount;
//   }
//   countProps({ name: "Mango", age: 2 })
// ================================================///


// function countTotalSalary(salaries) {
//     let totalSalary = 0;

//       for (let key of Object.keys(salaries)){
//         console.log(salaries[key])
//         totalSalary += salaries[key]  
//         console.log(totalSalary)
//       }

//     return totalSalary;
//   }

//   countTotalSalary({ mango: 100, poly: 150, alfred: 80 })
// ============================================ //

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];

//   const hexColors = [];
//   const rgbColors = [];

//   for(let color of colors){
//  hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
//     console.log(hexColors);
//     console.log(rgbColors);
//   }
// =============================//
// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
// function getProductPrice(productName) {
// for(let product of products){
// if(productName === product.name){
//    console.log(product.name)
//   productName = product.price
//    console.log(productName)
// }
// }
// console.log(null)
// }
//   getProductPrice("Radar")
//   getProductPrice("Grip")
//   getProductPrice("Scanner")
//   getProductPrice("Droid")
//   getProductPrice("Engine")
// ========================================================= //

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const a = []
//   for(let product of products){
//     if(product[propName]){
//       a.push(product[propName])
//       }
//     }
//     return a
//   }

// getAllPropValues("name")
// getAllPropValues("quantity")
// getAllPropValues("price")
// getAllPropValues("category")

// =====================================//

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//     let total = 0;
//     // Пиши код ниже этой строки
//      for (let product of products){
//         if(productName === product.name){
//           console.log(productName)
//           total = product.price * product.quantity;
//           console.log(total)
//            return total;
//         };
//     };
//      console.log("ЄЄЄє")
//    return 0;

//      Пиши код выше этой стро
// }
// 
// calculateTotalPrice("Radar")
// calculateTotalPrice("Blaster") 


// ============================== //

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   const obj = {
//     completed,
//     category,
//     priority,
//   } 

//  const total = {...obj ,...data }
//  return total
//   // Change code above this line
// }

// makeTask({})
// makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }) 
// makeTask({ category: "Finance", text: "Take interest" })
// makeTask({ priority: "Low", text: "Choose shampoo" })
// makeTask({ text: "Buy bread" })
// ==============================//

// Change code below this line
// function add(...args) {
//   // console.log(args)
//   let total = 0;
//   for(let arg of args){
//     total += arg
//     console.log(total)
//   }
//   // Change code above this line
// }

// add(15, 27)

// const test = [1, 2, 3, 4, 5, 6];
// ​
// const test1 = [
//     { test: 1 },
//     { test: 2 },
//     { test: 3 },
//     { test: 4 }
// ]
// ​
// console.log(...test1);
// console.log(test1[0], test1[1], test1[2], test1[3]);
// ​
// ​
// console.log(Math.max(...test));
// console.log(Math.min(...test));
// ​
/*---------------*/
// ​
// ​
// const test = [1, 2, 3, 4, 5];
// const test1 = [6, 7, 8, 9, 10];
// ​
// const testCopy = [-8, ...test, 88, ...test1, 12, ...[77, 88, 99]];
// ​
// //testCopy[0] = 5;
// ​
// console.log(testCopy === test);
// console.log(test);
// console.log(testCopy);
// ​
// ​
/*----------------*/
// ​
// const user = {
//     name: "Bill",
//     age: 30
// };
// ​
// const user1 = {
//     age: 25
// }
// ​
// const userCopy = {
//     ...user,
//     age: 78,
//     ...user1,
//     name: "Tom",
//     phone: "+380xxxxxxx"
// };
// ​
// const userTest = {
//     name: user.name,
//     age: user.age,
//     age: user1.age
// }
// ​
// ​
// const obj = {};
// ​
// console.log(userTest);
// console.log(userCopy);
// ​
// const user = {
//     name: "Bill",
//     age: 25
// };
// ​
// const user1 = {...user};
// ​
// console.log(user === user1);
// console.log(user, user1);
// ​
/*---------------------------*/
// ​
// const sum = function (firstParam, secondParams, ...params) {
//     let total = 0;
//     console.log('f ->', firstParam);
//     console.log('s ->', secondParams);
//     console.log('p ->', params);
//     for (const item of params) {
//         total += item;
//     }
//     return total;
// }
// const arr = [1, 2, 3, 4];
// ​
// console.log(sum(1, 2, 3, 4));
// ​
/*--------------------*/
// ​
// const user = {
//     name: "Bill",
//     age: 25,
//     phone: ["+380504455896", "+380504488523"],
//     address: "Ломоносова 5"
// };
// ​
// const {
//     age: old = 99,
//     name,
//     phone,
//     address = "TEST TEST"
// } = user;
// ​
// phone[0] = "test";
// ​
// console.log(user);
// console.log(old, name, phone, address);
// ​
/*-----------------*/
// ​
// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };
// ​
// const {
//     name,
//     tag,
//     stats: { 
//         followers,
//         views: userViews,
//         likes: userLikes = 0
//     },
// } = user;
// ​
// console.log(name);
// console.log(tag);
// console.log(followers);
// console.log(userViews);
// console.log(userLikes);
// ​
/*------------------------*/
// ​
// const rgba = [155, 44, 78, 0.3];
// ​
// const [,, blue, alfa = 0.3] = rgba;
// const [red, green, blue, alfa = 0.3] = rgba;
// const [red, green, ...colors] = rgba;
// console.log(red, green, colors);
// console.log(`R:${red},G:${green},B:${blue},A:${alfa}`);
// ​
// const user = {
//     name: "Bill",
//     age: 25,
//     phone: ["+380504455896", "+380504488523"],
//     address: "Ломоносова 5"
// };
// ​
// for (const item of Object.entries(user)) {
//     console.log(item[0], item[1]);
// }
// ​
// for (const [key, value] of Object.entries(user)) {
//     console.log(key, value);
// }
// ​
/*-----------------------*/
// ​
// const user = {
//     name: "Bill",
//     age: 25,
//     phone: ["+380504455896", "+380504488523"],
//     address: "Ломоносова 5"
// };
// ​
// ​
// // const showUser1 = function ({...params}) {
// //     console.log(params);
// // }
// const showUser = function ({ phone: [,secondPhone], ...params }) {
//     console.log(secondPhone);
//     console.log(params);
// }
// ​
// // showUser1(user);
// showUser({
//     name: "Bill",
//     age: 25,
//     phone: ["+380504455896", "+380504488523"],
//     address: "Ломоносова 5"
// });
// ​
/*----------------------*/
// function addOverNum(controlNumder, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if(controlNumder < arg)
//     total += arg;
//   }
// console.log(total)
//   return total;
//   // Change code ab`ove this line
// }
// addOverNum(50, 15, 27)
// addOverNum(10, 12, 4, 11, 48, 10, 8) 
// ===================================//

// function findMatches( first, ...args) {
// // console.log(first)
// // console.log(args)
//   const matches = []; // Don't change this line
// for(let arg of first){
//   console.log(arg)
//   // console.log(args)
//   if(args.includes(arg)){
//     console.log(arg)
//     matches.push(arg)
//     }
//   }

// console.log(matches)
//   // Change code above this line
//   return matches;
// }

// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {

//   const bookIndex = this.books.indexOf(oldName);

//   console.log(oldName)

//   },
// };

// bookShelf.updateBook("Haze", "Dungeon chronicles")
// bookShelf.updateBook("The last kingdom", "Dune")

// ПИЗДЕЦ ===================================//
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for(const potion of this.potions)
//     if (potion.name.includes(newPotion.name)) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }
//     this.potions.push(newPotion);
//   },
// removePotion(potionName) {
//     let potionIndex = -1;
//     for (let potion of this.potions){
//     if(potion.name === potionName){
//       potionIndex = this.potions.indexOf(potion);
//     }
//   }
//     this.potions.splice(potionIndex, 1);

// },
//   updatePotionName(oldName, newName) {
//     for(let potion of this.potions){
//       if(potion.name === oldName){
//         potion.name = newName
//       }
//     }
//     return `Error! Potion ${oldName} is already in your inventory!`
//   },
//   // Change code above this line
// };
// ПИЗДЕЦ ===================================//
// Пиздец исходній ////////////////////////////////////
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     if (this.potions.includes(newPotion)) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };
// Пиздец исходній ////////////////////////////////////

// const pizzaPalace = {
//     pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//     order(pizzaName,onSuccess,onError) {
//       this.pizzas.forEach(function(item, index, arr){
//         if(item === pizzaName){
//           return onSuccess(pizzaName)
//         }
//       })
//         return onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
//     },
//   };
//   // Change code above this line
// //   автопроверка без фора не берет
//   // Callback for onSuccess
//   function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
//   }
//   
//   // Callback for onError
//   function onOrderError(error) {
//     return `Error! ${error}`;
//   }
//   
//   // Method calls with callbacks
//   pizzaPalace.order('Smoked', makePizza, onOrderError);
//   pizzaPalace.order('Four meats', makePizza, onOrderError);
//   pizzaPalace.order('Big Mike', makePizza, onOrderError);
//   pizzaPalace.order('Vienna', makePizza, onOrderError);
//   =================================================================//
// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Change code below this line
 
//    orderedItems.forEach(item => totalPrice += item );
  
//     // for (let i = 0; i < orderedItems.length; i += 1) {
//     //   totalPrice += orderedItems[i];
//     // }
//   
//     // Change code above this line
//     return totalPrice;
//   }
// console.log(calculateTotalPrice([12, 85, 37, 4]))
//   calculateTotalPrice([12, 85, 37, 4])
// //////////////////////////////////////////////////////
// function filterArray(numbers, value) {
    // const filteredNumbers = [];
    // Change code below this line
//   
    // for (let i = 0; i < numbers.length; i += 1) {
    //   if (numbers[i] > value) {
    //     filteredNumbers.push(numbers[i]);
    //   }
    // }
//     numbers.forEach(function(item){
//         if(item >value){
//             filteredNumbers.push(item)
//         }
//     });
//     // Change code above this line
//     return filteredNumbers;
//   }
//   console.log(filterArray([1, 2, 3, 4, 5], 3))
//   filterArray([1, 2, 3, 4, 5], 3)
//  function changeEven  (numbers, value) {
//     // Change code below this line
//    const arr = [ ]
// numbers.forEach(item =>{
//     if(item % 2 === 0){
//         item += value
//         arr.push(item)
//     }else if (item % 1 === 0){
//     arr.push(item)
// }
//     })
    
//     console.log(arr)
//     return arr
//     // Change code above this line
//   }
// //   console.log(changeEven([1, 2, 3, 4, 5], 10))
//   changeEven([1, 2, 3, 4, 5], 10)

//   const arr = [1, 15, 'Bill', 'johny', 25];
// const filter = (array, callback) => {
//   const newArray = [];
//   array.forEach((item, index, array) => {
//     if (callback(item, index, array)) {
//       newArray.push(item);
//     }
//   });
//   return newArray;
// };
// console.log(filter(arr, item => typeof item === 'number'));
// console.log(filter(arr, item => typeof item === 'string'));
// console.log(filter(arr, (item, index) => index % 2 === 0));

// ======================================//
// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       genres: ["adventure", "history"],
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       genres: ["fiction", "mysticism"],
//     },
//     {
//       title: "Redder Than Blood",
//       author: "Tanith Lee",
//       genres: ["horror", "mysticism", "adventure"],
//     },
//   ];
//   // Change code below this line
//   const allGenres = books.flatMap(book => book.genres);
//   const uniqueGenres = allGenres.filter((allGenres, index, arr) => arr.indexOf(allGenres) === index );
//  console.log(allGenres)
  // console.log(uniqueGenres)
//   const getFriends = (users) => {
//    const allfriends =  users.flatmap(user => user.friends)
//    const uniqfriends = users.filter((friend, index, arr) => arr.indexOf(friend) === index)
// };
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//  return acc  + player.playtime / player.gamesPlayed
// }, 0);
// const a = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]
// Дополни функцию calculateTotalBalance(users)
//  так, чтобы она считала и возвращала сумму всех средств (свойство balance) которые хранят пользователи из массива users.
// const calculateTotalBalance = users => users.reduce((acc, user) => acc + user.balance ,0);
// 
// const getTotalFriendCount = users => users.reduce((acc, user) => acc + user.friend.length, 0);
// Онлайн бибилиотеке необходимо отображать книги сортированные по дате издания, 
// по её возрастанию или убыванию. Дополни код так, чтобы в переменной ascendingReleaseDates 
// получилась отсортированная по возрастанию копия массива releaseDates, 
// а в переменной descendingReleaseDates копия отсортированная по убыванию.
// 
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const ascendingReleaseDates = [...releaseDates].sort((number, number1)=> number - number1);
// const descendingReleaseDates = [...releaseDates].sort((number, number1)=> number1 - number);
// console.log(ascendingReleaseDates)
// console.log(descendingReleaseDates)