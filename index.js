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
switch(1)
{
    case 1:
        console.log("1");
        break;
    case 2:
        console.log("2");
        break;
    default:
        console.log("default");
        break;
}
mark=90;
var result=mark>=90?"O":mark>=70?"A":mark>=50?"B":"Fail";
console.log(result);

function add()
{
    console.log(a+b);
}
add();
function add(a,b)
{
    console.log(a+b);
}
add(12,10);

var add=(a,b)=>console.log(a+b);
add(12, 10);
add();

var arr1=[12,10,5,20,11,14,8,99,21,1];
for(let i in arr1)
{
    console.log(arr1[i]);
}
arr1.forEach((i)=>console.log(i));

arr1.forEach((val,index)=>console.log(val,index));

class Person
{
    name;
    age;
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
    display()
    {
        console.log(this.name, this.age);
    }
}
var person1=new Person("ARRaj",20);
person1.display();


var a=12;
if(true)
{
    console.log(a);
}
console.log(a);

var z;
console.log(z);
var z=15;
console.log(z);


var obj={name:"ARRaj",
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
for(let i in obj)
{
    console.log(i,obj[i]);
}

var age =20;
var str=`Rathish age is ${age}`;
console.log(str);

var str =`Mani age is ${age-1}`;
console.log(str);

str=`Elango age is ${age-2}`;
console.log(str);


var arr=[12,10,5];
var arr2=arr.map((i)=>{
    return i*2;
});
console.log(arr);
console.log(arr2);

var even=arr.filter((i)=>i%2===0)
console.log(even);

var add=arr.reduce((sum,i)=>(sum+i),0);
console.log(add);

var evencount=arr.map((i,count=0)=>{
    i%2===0?count++:count;
    return count;
});
console.log(evencount);

var student=[
    {name:"ARRaj",
    marks:89},
    {name:"Elango",marks:100},
    {name:"Mani",marks:99},
]

var studentMarks=student.filter((i)=>{return i.marks>90;});

console.log(studentMarks);



var totalmarks=student.reduce((sum,i)=>(sum+i.marks),0);
console.log(totalmarks);


