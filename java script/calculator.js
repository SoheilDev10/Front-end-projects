function CALCULATOR()
{
    const input=document.getElementById("texts");
    const buttons=document.querySelectorAll("button");
    buttons.forEach(buttons => {
       
        buttons.addEventListener('click',CLICK);
        function CLICK()
        {
             const value=buttons.textContent;
            if(value=="C")
            {
                input.value="";
            }
            else if(value=="D")
            {
                input.value=input.value.slice(0,-1);
            }
            else if(value==="=")
            {
                try{
                    input.value=eval(input.value);
                }catch{
                    window.alert("ERROR,Please Try Agaie");
                }
            }
            else{
                input.value +=value;
            }
        }
        buttons.addEventListener('mousedown',ChangeColor);
        function ChangeColor()
        {
            buttons.style.backgroundColor="#D98324";
            buttons.style.padding="1.5rem";
            buttons.style.paddingRight="2rem";
            buttons.style.paddingLeft="2rem";
        }
        buttons.addEventListener('mouseup',ChangeColor2);
        function ChangeColor2()
        {
            buttons.style.backgroundColor="#352F44";
            buttons.style.padding="2rem";
            buttons.style.paddingRight="2.5rem";
            buttons.style.paddingLeft="2.5rem";
        }

    })
}
CALCULATOR();