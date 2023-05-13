// optional chaining (?.)

const person = {
  name: "Lesedi",
  age: 20,
  car: {
    name: 'ford', warranty: {
      year: 2024
    }
  }
}

const carName = person.car?.name;
const warrantyYear = person.car?.warranty?.year;

console.log(carName);
console.log(warrantyYear);