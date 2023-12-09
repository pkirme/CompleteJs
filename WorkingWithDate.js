let date = new Date();
console.log(date);
console.log(date.toString());
console.log(date.toISOString());
console.log(date.toUTCString());
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());
console.log(typeof(date)); // date in js is an object

let newDate = new  Date(2023,0,12); // month is always start from 0
console.log(newDate.toLocaleString());