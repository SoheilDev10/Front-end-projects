function numbers(num)
{
    let zog,fard;
    zog=0;
    fard=0;
    for(var nm=1;nm<=num;nm++)
    {
        if(nm%2==0)
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
let test=41;
numbers(test);