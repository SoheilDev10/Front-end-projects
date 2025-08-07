const week=[" ","saturday","sunday","monday","tuesday","wednesday","thursday","friday"];
function Date1(day)
{
    switch(day)
    {
        case 1:
        console.log(week[1]);
        break;
        case 2:
        console.log(week[2]);
        break;
        case 3:
        console.log(week[3]);
        break;
        case 4:
        console.log(week[4]);
        break;
        case 5:
        console.log(week[5]);
        break;
        case 6:
        console.log(week[6]);
        break;
        case 7:
        console.log(week[7]);
    }
}
let day=5;
Date1(day);

function Score(number)
{
    if(number>=10)
    {
        console.log("true");
    }
    else
    {
        console.log("false");
        
    }
}
let num=12;
Score(num);

const numbers=[30,21,45,13,15,58];
function Numbers()
{
    let zog=0;
    let fard=0;
    for (const item of numbers)
    {
        if(item%2==0)
        {
            zog++;
        }
        else
        {
            fard++;
            
        }
    }
        console.log("zog number:"+zog);
        console.log("fard number:"+fard);
}
//Numbers();
function Number2(number)
{
    if(number%2==0)
    {
        console.log("it is zog:"+number);
    }
    else
    {
        console.log("it is fard:"+number);
        
    }
}
let number=63;
Number2(number);
