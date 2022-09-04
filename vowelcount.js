// hello

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// Jeremy Opriasa - coding practice - VOWEL COUNT
// Nested loops

function getCount(str){
  var vowelCount = 0;

  var arrVowel = ['a', 'e', 'i', 'o', 'u'];

  for(let i = 0; i < str.length; i++){
    for(let j = 0; j < arrVowel.length; j++){
      if(str[i] === arrVowel[j]){
        vowelCount = vowelCount + 1;
      }
    }
  }

  return vowelCount;
}

console.log(getCount('abrakadabrabruhlars'));