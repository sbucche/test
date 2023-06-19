var str="Hello, how are you today"
var s="";

for(var i=0;i<str.length;i++)
{
    if(str[i]!=" ")
    {
        s=s+str[i];  
    }
}
console.log(s);  ///Hello,howareyoutoday
