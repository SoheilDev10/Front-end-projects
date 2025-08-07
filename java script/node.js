var menuitems=["Home","Store","About us","Contact us"];

function CreatElm()

{
    for (const value of menuitems)  {
        
    
        var elements=document.createElement("li");
        var text=document.createTextNode(value);
        elements.appendChild(text);
        document.getElementById("menu").appendChild(elements);
        }
}

CreatElm();