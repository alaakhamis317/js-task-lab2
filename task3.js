let arr1 =[];
for (let i=0 ; i<5 ; i++){
arr[i]=+(prompt("enter number"));
}
console.log("you have entered the values:" +arr);
arr.sort(function(a, b){return a - b});
console.log("your values after being sorted ascending is:" +arr);
arr.sort(function(a, b){return b - a});
console.log("your values after being sorted ascending is:" +arr);


