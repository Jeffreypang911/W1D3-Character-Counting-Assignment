var args = process.argv.slice(2);
var word = args.join("");


function countLetters(word) {
var arr = {};
for (var i = 0; i < word.length; i++) {
    var key = word[i]
    if (key in arr) {
        arr[key] += 1;
      }
    else {
      arr[word[i]] = 1;

      }
  }
  console.log(arr);
}
  countLetters(word);





