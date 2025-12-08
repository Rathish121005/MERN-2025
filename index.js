var a;//global scope
a=10;
var a=20;//redeclared
let b;//block scope
const c=12;//constant value
b=10;
b=11;

//Data Types in JS
var h=20;//number
var d="ARRaj";//string
var e=true;//boolean
var f=null;//null
var g=undefined;//undefined


var object={
    name:"ARRaj",
    age:20,
    phone:9042915939,
    email:"aarockyarathishraj2005@gmail.com",
    address:{
        houseno:"1/284A",
        street:"Middle Street",
        city:"Silaiman",
        district:"Madurai",
        pincode:625201,
    }
}
console.log(object);

for(let i=0;i<=10;i++)
{
    console.log(i);
}
let i=0;
while(i<=10)
{
    console.log(i);
    i++;
}



