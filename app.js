//1. Display numbers from 1 to 10
for (let i=1; i<=10; i++) {
  console.log(i);
}

//2. Print the odd numbers less than 100
for (let j=1; j<100; j+=2) {
  console.log(j);
}

//3. Print the multiplication table with 7
let x=0;
do {
  console.log(`7 * ${x} = ${x*7}`);
  x++;
} while (x<=10);

//4. Print all the multiplication tables with numbers from 1 to 10
for (let num=1; num<=10; num++) {
  for (let y=0; y<=10; y++){
    console.log(`${num} * ${y} = ${y*num}`);
  }
}

//5. Calculate the sum of numbers from 1 to 10
let n=1;
let sum=0;
while ( n<=10 ) {
  sum=sum+n;
  n++;
}
console.log(`The sum of numbers from 1 to 10 is ${sum}.`);

//6. Calculate 10!(Factorial)
let f=10;
let fact= f;
while (f>1) {
  f--;
  fact *= f;
}
console.log(`10!= ${fact}`);

//7. Calculate the sum of odd numbers greater than 10 and less than 30
let odd=0;
for (let a=11; a<=30; a+=2) {
  odd=odd+a;
}
console.log(`The sum of odd number greater than 10 and less than 30 is ${odd}`);

//8. Calculate the sum of numbers in an array of numbers
let array=[1, 2, 3, 4];
let sumArray=array.reduce((a , b) => {
  return a+b;
}, 0);
console.log(`The sum of numbers in an array of numbers is ${sumArray}`);

//9. Calculate the average of the numbers in an array of numbers
let array1=[2, 4, 6, 8];
let sum1=array1.reduce((a , b) => {
  return a+b;
}, 0);
let averange=sum1/array1.length;
console.log(`The averange is ${averange}`);

//10.  Create a function that receives an array of numbers 
//and returns an array containing only the positive numbers
let array2=[1, -5, 7, 2, -9];
let positiveNum=array2.filter( num => {
  return num>=0;
});
console.log(`The positive numbers in an array are: [${positiveNum}]`);

//11. Find the maximum number in an array of numbers
let array3 = [1, 3, 2, 7, -9];
let max = array3.reduce((a, b) => {
  return Math.max(a, b);
});
console.log(`The maximum number is ${max}`);

//12.Create a function that will return a Boolean 
//specifying if a number is prime
const isPrime= num=> {
  let isPrime = true;
  if (num === 0 || num === 1) return false;
  if (num === 2) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
      //Math.sqrt returns the square root of a number
    if (isPrime) {
      if(num % i === 0) {
        isPrime = false;
      } else {
        isPrime = true;
      }
    }
  }
  return isPrime;
}
console.log(`Is the number prime: ${isPrime(5)}`);

//13. Calculate the sum of digits of a positive integer number
let int=2846;
let sumDigits=0;
while (int){
  sumDigits+= int % 10;
  int = Math.floor(int / 10);
}
console.log(`The sum of digits is ${sumDigits}`);

//14. Print the first 100 prime numbers 
for (let p = 1; p <= 100; p++) {
  
  let not_prime = false;
  
  if (p === 2) {
      console.log(p);
  }
  if (p === 1 || p % 2 === 0) {
    not_prime = true;
  }
  if (not_prime === false) {
    console.log(p);
  }
}

//15. Rotate an array to the left 1 position
let array5 = ['a', 'b', 'c', 'd'];
let rotateLeft= array5 => {
  let first = array5.shift();
  array5.push(first);
  return array5;
}
console.log(`[${array5}] rotate left by 1 position becomes [${rotateLeft(array5)}]`);

//16. Reverse an array
let array6= [1, 2, 3, 4];
let rev=array6.reverse();
console.log(`Array reversed becomes [${rev}]`);

//17. Create a function that will merge two arrays and 
//return the result as a new array
let arrayA= [1, 2, 4];
let arrayB= [6, 7, 9, 12];
let arrayMerged= arrayC => {
  arrayC=arrayA.concat(arrayB);
  return arrayC;
}
console.log(arrayMerged());

//18. Create a function that will receive two arrays of numbers as arguments 
//and return an array composed of all the numbers that are either in the 
//first array or second array but not in both
let aArray= [1, 2, 4];
let bArray= [6, 7, 9, 12];
let receiveArrays = (aArray, bArray) => {
  return aArray || bArray;
}
console.log(receiveArrays(bArray));

//19. Create a function that will receive an array of numbers as argument 
//and will return a new array with distinct elements
const distinct = (value, index, self) => {
  return self.indexOf(value) === index;
}
const array7=[2, 1, 9, 2, 8, 9, 9];
const distinctArray = array7.filter(distinct);
console.log(`New array with distinct elements is: [${distinctArray}]`);

//20. Create a function that will return the number of words in a text
const wordsNumber= words => { 
  return words.split(" ").length;
}
console.log(wordsNumber("I finished this exercise. Iuhoooo!"));
