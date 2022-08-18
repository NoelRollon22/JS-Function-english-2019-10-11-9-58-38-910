function alphabetSort(message){
  // wirte your code here
  var char = message.split("");
  arr = char.sort((a, b) => a.localeCompare(b));
  arr = arr.join('');
  return arr;
}
console.log(alphabetSort('hello'));