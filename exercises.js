// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(a, b){
    if (a > b){
      return a;
    } else {
      return b;
    }
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a, b, c){
    if (a > b && a > c){
      return a;
    } else if (b > a && b > c) {
      return b;
    } else (c > a && c > b)
      return c;
};

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(phrase){
    if (x === "a" || x === "e" || x === "i" || x === "o" || x === "u" || x === "y"){
      return true;
    } else {
      return false;
    }
};

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between.
//For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
var newString = " ";
for (var i = 0; i < phrase.length; i++){
  if(!isVowel(phrase[i]) && phrase[i] !==  " "){
    newString += phrase[i] + "o" + phrase[i];
  } else {
    newString += phrase[i];
  }
} return newString;
};


// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers.
//For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

// function sum(array) {
//     var sum = 0;
//     for (var i = 0; i < array.length; i++) {
//         sum = sum + array[i];
//     }
//     return sum;
// }
function sum(array){
  return array.reduce(function(total, n) {
    return total + n
  });
};
console.log(sum([1, 2, 3,4]));

// function multiply(array) {
//     var sum = 1;
//     for (var i = 0; i < array.length; i++) {
//         sum = sum * array[i];
//     }
//     return sum;
// }

function multiply(array){
  return array.reduce(function(total, n) {
    return total * n
  });
};

console.log(multiply([1, 2, 3,4]));

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(phrase){
  var newString = "";
  for (var i = phrase.length - 1; i >= 0; i--){
    newString += phrase[i];
  }
  return newString;
};


// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
  var length = 0;
  var result;
  for (var i = 0; i < words.length; i++){
    if (words[i].length > length){
    length = words[i].length;
    result = words[i];
  }
}
  return result;
};
console.log(findLongestWord(["cat", "dog", "mouse"]));

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    return words.filter(function(words){
      return words.length > i;
    });
};
console.log(filterLongWords(["avkndlv", "anl", "vajindvladnvl"], 5))


// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it.
//Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(text){
  var obj = {};
  for (var i = 0; i < text.length; i++){
  obj[text[i]] = ++obj[text[i]]||1;
}
return obj;
};
