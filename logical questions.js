// find even numbers

function evenNum(arr){
    let newArr = [];
    for(let i =0 ; i<arr.length; i++){
        if(arr[i] % 2 === 0){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(evenNum([1,2,3,4,5,6,7,8,9,10])); 

// how many vowels present on it

function haveVowels(name){
    let count = 0;
    let vowels = 'aeiou';
    for(let i = 0; i<=name.length; i++){
        if(vowels.includes(name[i])){
            count++;
        }
    }
    return count;
}
 
console.log(haveVowels('suhail')) 


// write multiplication table

function table(num){
    let tab ="";
    for(let i = 1; i<=10; i++){
        tab += `${num} * ${i} = ${num * i}\n`;
    }
    return tab;
}
console.log(table(8));
console.log(table(9));
console.log(table(10));

// function to find pallindrome number

function pallindrome(str){
    let reversedStr = '';
    for(let i = str.length-1; i>=0; i--){
        reversedStr +=str[i];
    }
    if(reversedStr === str){
        return true;
    }else{
        return false;
    }
}
console.log(pallindrome('mam'))

// write a function to swap to numbers without third variable

let a = 5;
let b = 10;

a = a + b;
b = a - b;
a = a- b;

console.log("value of a is: " +a);
console.log("value of b is: " +b);


// write a function multiplication of 3 and 5 or fizz and fuzz

let fizz = (n) => {
    for(let i = 0; i<=n; i++){
        if(i % 3 ===0 && i % 5 ===0){
            console.log("fizzBuzz");
        }else if(i % 3 ===0){
            console.log("fizz");
        }else if(i % 5 ===0){
            console.log("Buzz");
        }else{
            console.log(i);
        }
    }
}
fizz(20); 


// longest word from the given string

function longestWord(text){
    let strSplit = text.split(" ");
    let longesttext = 0;
    for(let i = 1; i<=strSplit.length; i++){
        if(strSplit.length > longesttext ){
            longesttext = strSplit[i].length;
        }
    }
    return longesttext;
}

   
console.log(longestWord("hey suhailahmed this side")); 

// function to reverse the string

function reverseStr(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseStr("suhail")); 

// hight order array function reduce 

let number = [2,3,4,5,6,8];
let sum = number.reduce(function(a,b){
    return a + b;
});
console.log(sum); 

// high order array function filter

let numbers = [1,2,34,,2,1];
 let fil = numbers.filter((num) => num % 2 === 0);
 console.log(fil) 

 // high order array function map


 let arr = [1,2,3,4,56,8,10];
 let map = arr.map((items) => items % 2 ===0 );
   
 console.log(map); 

 // question about star patterns and more

for(let i = 5; i>=1; i--){
    for(let j = 1; j<=i; j++){
        document.write(j);
    }
    document.write("<br/>");
}
