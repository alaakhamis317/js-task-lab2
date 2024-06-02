let name;
do{
    Reg = /^[A-Za-z]+$/
    name=prompt("Enter your name");
}
while(!name.match(Reg))
console.log(name);
let phone;
do{
    Reg = /^[0-9]{8}$/
    phone=prompt("Enter your phone");
}
while(!phone.match(Reg))
console.log(phone);
let mobail;
do{
    Reg = /^(01)(0|1|2)[\d]{8}$/
    mobail=prompt("Enter your mobail");
}
while(!mobail.match(Reg))
console.log(mobail);
let email;
do{
    Reg = /^[a-zA-Z0-9]+(@)[a-zA-z0-9]+(.com)$/
    email=prompt("Enter your email");
}
while(!email.match(Reg))
console.log(email);
document.write("welcome dear guest:" +name ); 
document.write("your phone number is: " +phone);
document.write("your mobail number is: " +mobail);
document.write("your email address is: " +email);


