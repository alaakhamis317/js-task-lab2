let str =("this is javascript string demo");
console.log(str.split  (" ")) ;
let arr= str.split  (" ");
arr.sort(function(a, b){return b.length - a.length}) ;
console.log(arr);
document.write(arr[0]);

