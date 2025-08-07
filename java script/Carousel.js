const divScroll=document.querySelector(".carousel");
let autoPlay;
function ScrollByArrow()
{
    const RightArrow=document.querySelector(".right");
    const LeftArrow=document.querySelector(".left");
    RightArrow.addEventListener('click',()=>{
        divScroll.scrollBy({left:300,behavior:'smooth'});
    })
    LeftArrow.addEventListener('click',()=>{
        divScroll.scrollBy({left:-300,behavior:'smooth'});
    })
}
ScrollByArrow();
function AutoScroll()
{
    autoPlay=setInterval(() => {
        if(divScroll.scrollLeft+divScroll.clientWidth>=divScroll.scrollWidth)
            divScroll.scrollTo({left:0,behavior:'smooth'});
        else
            divScroll.scrollBy({left:-300,behavior:'smooth'});
    }, 7000);
}
AutoScroll();
const allCart=document.querySelectorAll(".product-card");
function StopScroll()
{
    allCart.forEach(cart =>{
        cart.addEventListener('mouseover',()=>{
            clearInterval(autoPlay);
        })
        cart.addEventListener('mouseout',()=>{
            autoPlay=setInterval(() => {
                if(divScroll.scrollLeft+divScroll.clientWidth>=divScroll.scrollWidth)
                    divScroll.scrollTo({left:0,behavior:'smooth'});
                else
                    divScroll.scrollBy({left:-300,behavior:'smooth'});
            }, 7000);
        })
    })
}
StopScroll();