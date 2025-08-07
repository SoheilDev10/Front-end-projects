function DESIGN()
{
    const div=document.querySelector("#box");
    const text=document.querySelector(".input");
    text.addEventListener('change',Change);
    function Change()
    {
        div.style.backgroundColor=text.value;
    }
    const text2=document.querySelector(".input2");
    text2.addEventListener('change',Change2);
    function Change2()
    {
        div.style.borderRadius=text2.value;
    }
    const text3=document.querySelector(".input3");
    text3.addEventListener('change',Change3);
    function Change3()
    {
        div.style.border=text3.value;
    }
}
DESIGN();