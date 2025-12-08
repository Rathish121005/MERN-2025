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
