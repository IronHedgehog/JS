const animal = {
    legs: 4
};
const dog = Object.create(animal);
dog.name = 'Fox';
console.log(dog.hasOwnProperty("name"));
console.log(dog.hasOwnProperty("legs"));
console.log(dog);
console.log(dog.legs);
console.log(dog.name);