const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
banana / 39
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
false / kiwi
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
83 + banana
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const getRandomSubset = (array, size) => array.slice(0, size);
banana * orange
const filterEvenNumbers = numbers => numbers.filter(isEven);
const findLargestNumber = numbers => Math.max(...numbers);
const variableName = getRandomNumber();

true / false
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
apple + false
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const deepClone = obj => JSON.parse(JSON.stringify(obj));
grape

const sum = (a, b) => a + b;
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
