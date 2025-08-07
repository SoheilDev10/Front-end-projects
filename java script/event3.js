function ShowDate()
{
const btn=document.querySelector(".mybtn");
btn.addEventListener('click',DAY);
function DAY()
{
    const p=document.querySelector(".testi").innerHTML=Date();
}
}
ShowDate();

function Page()
{
    const getbtn=document.querySelector(".next-page");
    getbtn.addEventListener('click',Next);
    getbtn.setAttribute("target","_blank");
    function Next()
    {
        window.location.href="cafe.html";
    }
}
Page();
function HasAtt()
{
const Att1=document.querySelector(".next-page").hasAttribute("target");
console.log(Att1);
}
HasAtt();
function Hover1()
{
    const getmybtn=document.querySelector(".next-page");
    getmybtn.addEventListener('mouseover',ChangeColor);
    function ChangeColor()
    {
        getmybtn.style.backgroundColor="red";
        console.log("mouseover");
        
    }
    getmybtn.addEventListener('mouseout',ChangeColor2);
    function ChangeColor2()
    {
        getmybtn.style.backgroundColor="blue";
        window.alert("please click on button");
        console.log("mouseout");
        
    }
}
Hover1();

