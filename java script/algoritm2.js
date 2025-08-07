function MAXNUMBER(numbers)
{
    let max=null;
    for (const value of numbers)
     {
        if(value>max)
        {
            max=value;
        }
        
    }
    return max;
}
let num1=15,num2=8,num3=20,num4=32;
const numbers=[num1,num2,num3,num4];
const show=MAXNUMBER(numbers);
//console.log("the biggest number is "+show);

function STUDENT()
{
const student={
    firstname:"Ali",
    lastname:"Amiri",
    age:17
}
for (const item in student) 
    {
        console.log(item+":"+student[item]);
    }
}
//STUDENT();

function Simple(number1,number2)
{
    let result=Math.floor(number1/number2);
    if(result%2==0)
    {
        let show="your number is zog:";
        console.log(show+result);
    }
    else
    {
        let show="your number is fard:";
        console.log(show+result);
    }
}
let number1=47,number2=3;
//Simple(number1,number2);

function CALCULATOR(item1,item2,amalgar)
{
         let result;
        if(amalgar=="+")
        {
            result=Math.floor(item1+item2);
        }
        else if(amalgar=="-")
        {
            result=Math.floor(item1-item2);
        }
        else if(amalgar=="*")
        {
            result=Math.floor(item1*item2)
        }
        else if(amalgar=="/")
        {
            result=Math.floor(item1/item2);
        }
        else if(amalgar=="%")
        {
            result=Math.floor(item1%item2);
        }
    return "your number is "+result;
}
let amalgar="*";
let item1=Math.random()*100+1;
let item2=Math.random()*100+1;
const showfunction=CALCULATOR(item1,item2,amalgar);
console.log(showfunction);






