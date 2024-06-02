let rad;
rad=prompt("What is your circles raduis ?");
console.log(rad);
const pi = Math.PI;
const areaOfCircle = (radius, pi) => {
   return pi * radius * radius;
};
console.log("The area of the circle is: " + areaOfCircle(rad, pi));
let sqa;
sqa=prompt("What is the value you want to calculate its square root?");
console.log(sqa);
let result = Math.sqrt(sqa);
console.log( "The number you want to calculate its square root is: " +result);
let cos;
cos=prompt("Enter an angle:");
console.log(cos);
let anglecos = Math.cos(cos*pi/180);
console.log( "The cos of an angle is: " +anglecos);



