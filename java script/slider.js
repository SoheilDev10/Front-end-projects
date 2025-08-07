const slider =[{profile:"/picture/pic1.jpg",text:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Deleniti, sunt. At sunt quo corporis est ut iure debitis incidunt cupiditate!`,
        name:"Angela"},{profile:"/picture/pic2.jpg",text:`phone provided me with the best phone I've ever owned. The sleek design and advanced features make it 
            stand out from the competition. I couldn't be happier with my purchase!`,
        name:"Sara"},{profile:"/picture/pic3.jpg",text:`phone has revolutionized the way I stay connected with loved ones. Their cutting-edge technology and sleek 
            design set them apart from the competition. I couldn't imagine life without my phone!`,
        name:"Michel"}];
let index=0;
const profileEl=document.querySelector(".profile");
const nameEl=document.querySelector(".name");
const textEl=document.querySelector(".text");
function updateSlider()
{
    const {profile,text,name}=slider[index];
    profileEl.src=profile;
    nameEl.innerHTML=name;
    textEl.innerHTML=text;
    index++;
    if(index===slider.length)
        index=0;
}
let SliderId=setInterval(updateSlider,4000);
updateSlider();
function StopSlider()
{
    const SliderContainer=document.querySelector(".container");
    SliderContainer.addEventListener('mouseover',()=>{
        clearInterval(SliderId);
    })
    SliderContainer.addEventListener('mouseout',()=>{
        SliderId=setInterval(updateSlider,4000)
    })
}
StopSlider();
