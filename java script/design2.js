function Design()
{
    const div=document.querySelector("#box");
    const inputs=document.querySelectorAll("input");
    inputs.forEach(input =>{
        input.addEventListener('change',Change);
        function Change()
        {

             if(input.classList.contains("input"))
            {
                div.style.backgroundColor=input.value;
            }
            else if(input.classList.contains("input2"))
            {
                div.style.borderRadius=input.value;
            }
            else if(input.classList.contains("inpu3"))
            {
                div.style.border=input.value;
            }
            else if(input.classList.contains("input4"))
            {
                div.style.width=input.value;
            }
            else if(input.classList.contains("input5"))
            {
                div.style.height=input.value;
            }
        }

    })
}
Design();