function CreatElm()
{
    var elements=document.createElement("button");
    var inbutton=document.createTextNode("submit");
    elements.appendChild(inbutton);
    document.getElementById("container").appendChild(elements);
}

CreatElm();

const menuitems=["Home","Store","About Us","Contact Us"];

function Creatsth()
{
    for (const value of menuitems) 
    {
        var elm=document.createElement("li");
        var link=documen.createElement("a");
        var text=document.createTextNode(value);
        link.appendChild(text);
        elm.appendChild(link);
        document.getElementsByClassName("menu").appendChild(elm);
    }

}
Creatsth();