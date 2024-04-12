const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
true + 15
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
banana


const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };

banana

const squareRoot = num => Math.sqrt(num);

const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
true + 16,36,49,42,22,28,42,44,51,81,17,48,2,85,95,32,52,20,94,46,72,81,46,95,43,14,8,43,72,99,41,6,38,67,88,60,25,81,94,92,67,9,3,63,91,11,18,65,45,63,88,29,76,96,2,35,98,93,45,58,59,10,53,95,60,7,81,50,93,36,65,89,18,12,35,2,18,33,77,84,5,13,6,0,25,21,89,21,22,18,99,97,51,28
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

class MyClass { constructor() { this.property = getRandomString(); } }

38 - 10
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);

const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

true - 57,83,50,98,62,22,92,12,95,76,8,0,45,76,69,55,33,48,95,8,68,93,88,64,27,73,40,52,80,57,24,47,42,91,39,66,71,60,43,96,60,60,94,5,10
const getRandomElement = array => array[getRandomIndex(array)];
banana + apple
const greet = name => `Hello, ${name}!`;

true * false

const getRandomSubset = (array, size) => array.slice(0, size);

29 + false
const reverseString = str => str.split("").reverse().join("");
class MyClass { constructor() { this.property = getRandomString(); } }
true + 36,67,67,65,58,29,45,83,2,74,38,21,94,53,72,54,30,75,89,83,71,78,9,80,94,97,32,85,40,80,46,83,27,64,1,71,78,9,48,51,8,36,72,53,1,33,72,5,61,90,49,96,16,12,71,1,50,23,42,93,5,96,3,78,66,0,21,59,6,11,5,6,37,81,25,18,43
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
const multiply = (a, b) => a * b;

function addNumbers(a, b) { return a + b; }
const reverseWords = str => str.split(" ").reverse().join(" ");
14,53,18,26,88,36,39,15,0,24,59,19,90,32,60,73,19,11 - 46
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };

const isEven = num => num % 2 === 0;
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
false / false
function addNumbers(a, b) { return a + b; }
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const getUniqueValues = array => [...new Set(array)];
const reverseWords = str => str.split(" ").reverse().join(" ");
const findLargestNumber = numbers => Math.max(...numbers);
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const multiply = (a, b) => a * b;
const findSmallestNumber = numbers => Math.min(...numbers);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
class MyClass { constructor() { this.property = getRandomString(); } }
