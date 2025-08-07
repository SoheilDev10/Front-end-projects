function LIST()
{
const createlist=document.querySelector(".add-text");
createlist.addEventListener('click',AddList);
function AddList()
{
    const input=document.querySelector(".text").value;
        if(input=="")
    {
        window.alert("please write something");
        return;
    }
    const list=document.createElement("li");
    list.className="items";
    const items=document.createTextNode(input);
    list.appendChild(items);
    document.querySelector(".mylist").appendChild(list);
}
}
LIST();

function COLOR()
{
    const getbtn=document.querySelector(".btn-color");
    getbtn.addEventListener('click',Change);
    function Change()
    {
        const inputcolor=document.querySelector(".change").value;
        if(inputcolor=="")
        {
            window.alert("please enter a color code");
        }
        else
        {
            getbtn.style.backgroundColor=inputcolor;
        }
    }
}
COLOR();

