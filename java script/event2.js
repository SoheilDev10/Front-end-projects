function DIV1()
{
const div=document.getElementById("mydiv");
div.onmouseover=function()
{
    div.style.backgroundColor="blue";
}
div.onmouseleave=function()
{
    div.style.backgroundColor="red";
}
}
DIV1();

const ELEMENT1=document.querySelector(".btn");
ELEMENT1.addEventListener('click',AddText);
function AddText()
{
    const input=document.querySelector(".txt").innerHTML;
    const li=document.createElement("li");
    li.appendChild(input);
    document.getElementById("list-ul").appendChild(li);
}

