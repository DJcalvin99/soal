// nomer 1: hitung pattern 

function patternCount(string, word) {
   return string.split(word).length - 1;
}
console.log(patternCount("aku adalah aku yang terbaru", "aku"));

