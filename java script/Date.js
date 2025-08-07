const Second=document.querySelector(".second");
const Minute=document.querySelector(".minute");
const Hours=document.querySelector(".hours");
const Day=document.querySelector(".day");
const targetDay=new Date("August 9 2025 00:00:00").getTime();
function TIMER()
{
    const currentDay=new Date().getTime();
    const distance=targetDay-currentDay;
    const day=Math.floor(distance/(1000*60*60*24));
    const hours=Math.floor(distance/(1000*60*60)%24);
    const minute=Math.floor(distance/(1000*60)%60);
    const second=Math.floor((distance/1000)%60);
    Day.innerHTML=format(day);
    Hours.innerHTML=format(hours);
    Minute.innerHTML=format(minute);
    Second.innerHTML=format(second);
    function format(number)
    {
        return number<10?"0"+number:number;
    }
    if(distance<0)
    {
    Day.innerHTML="00";
    Hours.innerHTML="00";
    Minute.innerHTML="00";
    Second.innerHTML="00";
    }
}
setInterval(TIMER,1000);