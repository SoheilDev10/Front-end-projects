function Question()
{
    const btn1=document.querySelector(".yes");
    const btn2=document.querySelector(".no");
    btn1.addEventListener('click',()=>{
    window.alert("yes I knew");
    })
    let count=0;
    btn2.addEventListener('click',()=>{
        count++;
        if(count<=3)
        {
            window.alert("No I am not sure");
        }
        else
        {
            window.alert("I know you are gay,do not try again!");
        }
    })
}
Question();