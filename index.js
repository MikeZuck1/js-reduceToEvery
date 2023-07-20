// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML;

// method reduce()
const useReduce0 = [1, 3, 2, 1, 2, 1];
const giveTheValues = useReduce0.reduce((accumulator, currentValue) => {
    console.log(`accumulator is : `, accumulator); 
    console.log(`current value is :`, currentValue);
    
    return accumulator + currentValue; 
}, 100) 
console.log(giveTheValues); // Expected output : 110 

// method some()
const animals1 = ['bears', 'cats', 'dogs', 'elephants', 'giraffes'];
console.log(animals1.some(animal => animal.length < 5)); // Expected output : true 

// method findIndex
const randomNums = [1, 123, 25, 90, 3543, 42]; 
const foundElement = randomNums.findIndex(num => num > 200);

console.log(foundElement); // Expected output : 4

// method every() 
const animals0 = ['bears', 'cats', 'dogs', 'elephants', 'giraffes'];
console.log(animals0.every(animal => animal.length < 5)); // Expected output : false 