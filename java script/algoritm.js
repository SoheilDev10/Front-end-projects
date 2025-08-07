function SCORE(score1,score2)
{
    let result=score1+score2*5;
    if(result>=12)
    {
        console.log(result);
        console.log("true");
    }
    else
    {
        console.log(result);
        console.log("false");
    }
}
const score1=3;
const score2=2;
//SCORE(score1,score2);

function STUDENT(st1,st2,st3,st4,st5)
{
    let first=0;
    let second=0;
    if(st1%2==0)
    {
        first++;
    }
    else
    {
        second++;
    }
    if(st2%2==0)
    {
        first++;
    }
    else{
        second++;
    }
    if(st3%2==0)
    {
        first++;
    }
    else{
        second++;
    }
    if(st4%2==0)
    {
        first++;
    }
    else{
        second++;
    }
    if(st5%2==0)
    {
        first++;
    }
    else{
        second++;
    }
    console.log("student at first group:"+first);
    console.log("student at second group:"+second);
}
//let st1=3;
//let st2=6;
//let st3=10;
//let st4=5;
//let st5=12;
//STUDENT(st1,st2,st3,st4,st5);

function STUDENT2(students)
{
    let first=0;
    let second=0;
    for (const value of students)
     {
        if(value%2==0)
        {
            first++;
        }
        else
        {
            second++;
        }
    }
    console.log("students at first group:"+first);
    console.log("students at second group:"+second);
}
let st1=3,st2=5,st3=6,st4=10,st5=12;
const students=[st1,st2,st3,st4,st5];
//STUDENT2(students);

function GUESS(trise)
{
    let randomnumber=Math.floor(Math.random()*20)+1;
    let guess=null;
    for (const value of tries)
         {
            guess++;
            if(value==randomnumber)
            {
                console.log("your guess is true,the number was "+randomnumber);
                return;
            }
            else if(guess==5)
            {
                console.log("you are lose,the number was "+randomnumber);
            }
         }
}
let num1=5,num2=2,num3=10,num4=20,num5=15;
const tries=[num1,num2,num3,num4,num5];
GUESS(tries);


