const slider=[{urlPic:"/picture/dell.webp",alt:"Dell",class1:"slider1"}
    ,{urlPic:"/picture/janebi.webp",alt:"Janebi",class1:"slider2"}];
let index=0;
const imageEl=document.querySelector(".slider1");
function uppdateSlider()
{
    const {urlPic,alt,class1}=slider[index];
    imageEl.src=urlPic;
    imageEl.alt=alt;
    imageEl.className=class1;
}
let setIntervalId=setInterval(()=>{
     index++;
    if(index===slider.length)
        index=0;
    uppdateSlider();
},5000);
function ChangeSlider()
{
    const btnBefore=document.querySelector(".before")
    btnBefore.addEventListener('click',()=>{
        index--;
        if (index < 0) index = slider.length - 1;
            uppdateSlider();
    })
    const btnNext=document.querySelector(".next");
    btnNext.addEventListener('click',()=>{
        index++;
        if (index === slider.length) index = 0;
            uppdateSlider();
    console.log(btnBefore);
    
    })
}
ChangeSlider();
function StopSlider()
{
    imageEl.addEventListener('mouseover',()=>{
        clearInterval(setIntervalId);
    })
    imageEl.addEventListener('mouseout',()=>{
        setIntervalId=setInterval(uppdateSlider,5000);
    })
}
StopSlider();
function Link()
{
    const linkImg=document.querySelector(".slider1")
    linkImg.addEventListener('click',()=>{
        if(linkImg.className==="slider1")
            window.location.href="/html/header.html";
        else
            window.location.href="/html/home.html";
    })
}
Link();

