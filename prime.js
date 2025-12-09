var a=4;
prime=0
for(let i=2;i<a;i++)
{
    if(a%i==0)
    {
        console.log("Not Prime");
        prime=1;
        break;
    } 
}
if(prime==0)
{
console.log("Prime");
}

var p=424;
var b=p;
rev=1;
while(p!=0)
{
    var rem=p%10;
    rev=rev*10+rem;
    p/=10;
}

if(b==rev)
{
    console.log("Palindrome");
}
else
{
    console.log("Not Palindrome");
}

