
function CLASS()
{
    const students=["Ali","Amir","Mohammad","Ali","Soheil","Amir","Ali"];
    let ali=0,amir=0,mohammad=0,soheil=0;
    for (const value of students)
    {
        if(value=="Ali")
        {
            ali++;
        }
        else if(value=="Amir")
        {
            amir++;
        }
        else if(value=="Soheil")
        {
            soheil++;
        }
        else if(value=="Mohammad")
        {
            mohammad++;
        }   
    }
    let dialog=ali+" Ali is/are in the class";
    let dialog2=amir+" Amir is/are in the class";
    let dialog3=soheil+" Soheil is/are in the class";
    let dialog4=mohammad+" Mohammad is/are in the class";
    console.log(dialog);
    console.log(dialog2);
    console.log(dialog3);
    console.log(dialog4);
}
CLASS();
