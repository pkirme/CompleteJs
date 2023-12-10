//in js array is dynamic non premitive datatypes.
const arr=[1,2,3,4,5];
//interview que : array in js make shallow copy means make same reference of an array.
const arrSlice = arr.slice(1,3);
console.log(arr,arrSlice);
console.log(">>>>>>>");
const arrSplice =arr.splice(1,3);
console.log(arr,arrSplice);