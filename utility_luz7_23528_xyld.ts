const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
class MyClass { constructor() { this.property = getRandomString(); } }
78 * 27
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

let array = getRandomArray(); array.forEach(item => console.log(item));

true + 67,75,71,92,73,23,37,9,31,52,90,97,92,26,80,54,56,40,46,78,35,23,23,78,66,97,48,49,38,38,94,63,58,32,9
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
51,52,5,51,59,23,0,69,9,23,42,14,44,9,12,90 + 71,98,39,52
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
false + true
const squareRoot = num => Math.sqrt(num);
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");

const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
grape - false
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
apple / 13
const formatDate = date => new Date(date).toLocaleDateString();
81,34,32,85,82,9,44,90,40,19,30,95,70,51,40,40,58,27,11,74,66,68,39,9,51,95,39,35,28,43,23,96,36,79,28,13,30,47,41,59,74,40,92,51,23,35,59,4,28,13,33,3,92,51,59,60,30,79,11,15,21,22,99,38,59,47,30,55,80,1,66,83,30,54,68,14,50,67,98,77,21,25,96,33,89,10,30,4,64,87,68,21 * true
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
14,9,72,58,91,9,41,96,11,58,71,51,56,60,20,43,20,21,13,61,92,95,72,60,2,38,13,72,47,25,42,18,56,0,95,60,16,69,96,30,80,75,63,9,2,55,48,6,91,92,90,86,85,87,33,14,61,12,77,89,39,14,45,93,56,5,45,72,95,46,23,12,34,65 / orange

const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const getRandomElement = array => array[getRandomIndex(array)];
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
