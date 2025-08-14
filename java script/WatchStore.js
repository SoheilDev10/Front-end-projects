const divSearch=document.querySelector(".divsearch");
const searchBar=document.querySelector("#search");
function OpenSearchBar()
{
    divSearch.addEventListener('click',()=>{
        divSearch.style.boxShadow="0px 4px 15px rgba(0, 0, 0, 0.178)";
        searchBar.style.width="18rem";
        if(!divSearch.querySelector(".fi-rr-circle-xmark"))
        {
        const CloseIC=document.createElement("i");
        CloseIC.style.color="Black";
        CloseIC.style.width="1.2rem";
        CloseIC.style.position="relative";
        CloseIC.style.left="21rem";
        CloseIC.style.top="0.4rem";
        CloseIC.classList.add("fi","fi-rr-circle-xmark");
        divSearch.appendChild(CloseIC);
        CloseIC.addEventListener('click',(e)=>{
            e.stopPropagation();
            divSearch.style.boxShadow="none";
            searchBar.style.width="0rem";
            CloseIC.remove();
        })
        }})
}
OpenSearchBar();
const ProductSale=[{
id:1,name:"ساعت مچی عقربه ای کیو اند کیو مدل vs22j006y",price:1700000,newprice:1400000,image:"/watch/pro1.webp"},
{id:2,name:"ساعت مچی مردانه رولکس",price:3000000,newprice:2400000,image:"/watch/cto.webp"},
{id:3,name:"ساعت مچی دیجیتال",price:2500000,newprice:2150000,image:"/watch/pro2.webp"},
{id:4,name:"ساعت مچی مردانه استیل",price:3500000,newprice:3100000,image:"/watch/pro3.webp"},
{id:5,name:"ساعت مچی زنانه برنز",price:4000000,newprice:3500000,image:"/watch/pro8.webp"}];
const salePr=document.querySelector(".sale-pr");
function ShowSaleProducts()
{
    ProductSale.forEach(product =>{
        const Salediv=document.createElement("div");
        Salediv.classList.add("cart-box");
        let getOffer=Math.floor(((product.price-product.newprice)/product.price)*100);
        Salediv.innerHTML=`<span class="label-sale">${getOffer}%-</span>
        <img src="${product.image}" alt="${product.name}" class="image-pr">
        <h3 class="title-pr">${product.name}</h3>
        <div>
        <span class="price-pr"><del>${product.price}تومان</del></span>
        <span class="offer">${product.newprice}تومان</span>
        </div>
        <button type="button" class="add-to-cart">افزودن به<i class="fi fi-rr-shopping-bag bag"></button>`;
        salePr.appendChild(Salediv);
    })
}
ShowSaleProducts();
function ScrollByArrow()
{
    const RightArrow=document.querySelector(".right");
    const LeftArrow=document.querySelector(".left");
    RightArrow.addEventListener('click',()=>{
        salePr.scrollBy({left:320,behavior:'smooth'});
    })
    LeftArrow.addEventListener('click',()=>{
        salePr.scrollBy({left:-320,behavior:'smooth'});
    })
}
ScrollByArrow();
let autoScroll;
function AutoScroll()
{
    autoScroll=setInterval(()=>{
        if (salePr.scrollLeft + salePr.clientWidth >= salePr.scrollWidth)
            salePr.scrollTo({left:0,behavior:'smooth'});
        else
            salePr.scrollBy({left:-320,behavior:'smooth'});
    },7000);
}
AutoScroll();
const stopScroll=document.querySelectorAll(".cart-box");
function StopScroll()
{
    stopScroll.forEach(card=>{
    card.addEventListener('mouseover',()=>{
        clearInterval(autoScroll);
    })
    card.addEventListener('mouseout',()=>{
        autoScroll=setInterval(() => {
        if (salePr.scrollLeft + salePr.clientWidth >= salePr.scrollWidth)
            salePr.scrollTo({left:0,behavior:'smooth'});
        else
            salePr.scrollBy({left:-320,behavior:'smooth'});
        }, 7000);
    })
    })
}
StopScroll();
const NewProducts=[{id:6,name:"ساعت لوکس مشکی",price:5000000,image:"/watch/pro9.webp"},
    {id:7,name:" ساعت لوکس برنز",price:3000000,image:"/watch/pro11.webp"},
    {id:8,name:"ساعت مچی عقربه ای مدل 0702501",price:2500000,image:"/watch/pro14.webp"},
    {id:9,name:"ساعت مچی عقربه ای مدل RE 3894 -ME-ME",price:2800000,image:"/watch/pro15.webp"},
    {id:10,name:"ساعت دیجیتالی برند اکسپنسیو",price:4000000,image:"/watch/pro5.webp"},
    {id:11,name:"ساعت مچی عقربه ای کیو اند کیو مدل vs60j002y",price:2000000,image:"/watch/pro16.webp"},
    {id:18,name:"اپل واچ خاکستری",price:4500000,image:"/watch/pro12.png"}
];
function ShowNewProducts()
{
    const NewPr=document.querySelector(".new-pr-scroll");
    NewProducts.forEach(product => {
        const newBox=document.createElement("div");
        newBox.classList.add("cart-box","new-cart-box");
        newBox.innerHTML=`<img src=${product.image} class="image-pr">
        <h3 class="title-pr">${product.name}</h3>
        <span class="price-pr">${product.price}تومان</span>
        <button type="button" class="add-to-cart">افزودن به<i class="fi fi-rr-shopping-bag bag"></button>`
        NewPr.appendChild(newBox);
    });
}
ShowNewProducts();
const ScrollNewPr=document.querySelector(".new-pr-scroll");
function ScrollByArrow2()
{
    const RightArrow=document.querySelector(".right2");
    const LeftArrow=document.querySelector(".left2");
    RightArrow.addEventListener('click',()=>{
        ScrollNewPr.scrollBy({left:320,behavior:'smooth'});
    })
    LeftArrow.addEventListener('click',()=>{
        ScrollNewPr.scrollBy({left:-320,behavior:'smooth'});
    })
}
ScrollByArrow2();
let autoScroll2;
function AutoScroll2()
{
    autoScroll2=setInterval(() => {
        if(ScrollNewPr.scrollLeft+ScrollNewPr.clientWidth>=ScrollNewPr.scrollWidth)
            ScrollNewPr.scrollTo({left:0,behavior:'smooth'});
        else
            ScrollNewPr.scrollBy({left:-320,behavior:'smooth'});
    }, 7000);
}
AutoScroll2();
function StopScroll2()
{
    const stopScroll=document.querySelectorAll(".cart-box");
    stopScroll.forEach(card=>{
        card.addEventListener('mouseover',()=>{
            clearInterval(autoScroll2);
        })
        card.addEventListener('mouseout',()=>{
            autoScroll2=setInterval(() => {
            if(ScrollNewPr.scrollLeft+ScrollNewPr.clientWidth>=ScrollNewPr.scrollWidth)
               ScrollNewPr.scrollTo({left:0,behavior:'smooth'});
            else
                ScrollNewPr.scrollBy({left:-320,behavior:'smooth'});
            }, 7000);
        })
    })
}
StopScroll2();
const BestProduct=[{id:12,name:"ساعت مچی عقربه ای مدل بلون",price:2300000,image:"/watch/pro17.webp"},
    {id:13,name:"ساعت مچی عقربه ای مردانه",price:1800000,image:"/watch/pro18.webp"},
    {id:14,name:"ساعت مچی عقربه ای اسکمی مدل 9253GD",price:3200000,image:"/watch/pro19.webp"},
    {id:15,name:"ساعت مچی عقربه ای کیو اند کیو مدل VS50J017Y",price:3000000,image:"/watch/pro20.webp"},
    {id:16,name:"ساعت دیواری چوبی",price:1500000,image:"/watch/pro22.png"},
    {id:17,name:"ساعت مچی عقربه ای اسکمی مدل 9127",price:2600000,image:"/watch/pro21.webp"}
];
const BestPr=document.querySelector(".items-best");
function TheBestProducts()
{
    BestProduct.forEach(best=>{
        const divBest=document.createElement("div");
        divBest.classList.add("cart-box","best-cart");
        divBest.innerHTML=`<img src="${best.image}" class="image-pr">
        <h3 class="title-pr">${best.name}</h3>
        <span class="price-pr">${best.price}تومان</span>
        <button type="button" class="add-to-cart">افزودن به<i class="fi fi-rr-shopping-bag bag"></button>`
        BestPr.appendChild(divBest);
    });
}
TheBestProducts();
function ScrollByArrow3()
{
    const RightArrow=document.querySelector(".right3");
    const LeftArrow=document.querySelector(".left3");
    RightArrow.addEventListener('click',()=>{
        BestPr.scrollBy({left:320,behavior:'smooth'});
    })
    LeftArrow.addEventListener('click',()=>{
        BestPr.scrollBy({left:-320,behavior:'smooth'});
    })
}
ScrollByArrow3();
let autoplay2;
function AutoScroll3()
{
    autoplay2=setInterval(() => {
        if(BestPr.scrollLeft+BestPr.clientWidth>=BestPr.scrollWidth)
            BestPr.scrollTo({left:0,behavior:'smooth'});
        else
            BestPr.scrollBy({left:-320,behavior:'smooth'});
    }, 7000);
}
AutoScroll3();
const allBest=document.querySelectorAll(".cart-box");
function StopScroll3()
{
    allBest.forEach(best=>{
        best.addEventListener('mouseover',()=>{
            clearInterval(autoplay2);
        })
        best.addEventListener('mouseout',()=>{
            autoplay2=setInterval(() => {
        if(BestPr.scrollLeft+BestPr.clientWidth>=BestPr.scrollWidth)
            BestPr.scrollTo({left:0,behavior:'smooth'});
        else
            BestPr.scrollBy({left:-320,behavior:'smooth'});
    }, 7000);
        })
    })
}
StopScroll3();
const Second=document.querySelector(".second");
const Minute=document.querySelector(".minute");
const Hours=document.querySelector(".hours");
const Day=document.querySelector(".day");
const targetDay=new Date("August 22 2025 00:00:00").getTime();
function Timer()
{
    const currentDay=new Date().getTime();
    const distance=targetDay-currentDay;
    const day=Math.floor(distance/(1000*60*60*24));
    const hours=Math.floor(distance/(1000*60*60)%24);
    const minute=Math.floor(distance/(1000*60)%60);
    const second=Math.floor((distance/1000)%60);
    function format(number)
    {
        return number<10?"0"+number:number;
    }
    Day.innerHTML=format(day);
    Hours.innerHTML=format(hours);
    Minute.innerHTML=format(minute);
    Second.innerHTML=format(second);
    if(distance<0)
    {
        Day.innerHTML="0";
        Hours.innerHTML="0";
        Minute.innerHTML="0";
        Second.innerHTML="0";
    }
}
setInterval(Timer,1000);

