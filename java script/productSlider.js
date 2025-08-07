const ProductsSlider=[{image:"/picture/product1.webp",title:"لپ تاپ شماره یک",price:"120,000,000تومان"},
{image:"/picture/product2.webp",title:"لپ تاپ شماره دو",price:"75,000,000تومان"},
{image:"/picture/product3.webp",title:"لپ تاپ شماره سه",price:"70,000,000تومان"}];
let index=0;
const imagePr=document.querySelector(".laptop");
const titlePr=document.querySelector(".title-product");
const pricePr=document.querySelector(".price");
function uppdateProductsSlider()
{
    const {image,title,price}=ProductsSlider[index];
    imagePr.src=image;
    titlePr.innerHTML=title;
    pricePr.innerHTML=price;
    const divProduct=document.querySelector(".product");
    divProduct.classList.remove("Slide");
    void divProduct.offsetWidth;
    divProduct.classList.add("Slide");
}
let intervalId=setInterval(()=>{
    index++;
    if(index===ProductsSlider.length)
        index=0;
    uppdateProductsSlider();
},5000);
function StopSlider()
{
    const divProduct=document.querySelector(".product");
    divProduct.addEventListener('mouseover',()=>{
        clearInterval(intervalId);
    })
    divProduct.addEventListener('mouseout',()=>{
        intervalId=setInterval(()=>{
            index++;
            if(index===ProductsSlider.length)
                index=0;
            uppdateProductsSlider();
        },5000);
    })
}
StopSlider();
function ChangeSlider()
{
    const btnBefore=document.querySelector(".before");
    btnBefore.addEventListener('click',()=>{
        index--;
        if(index<0)
            index=ProductsSlider.length-1;
        uppdateProductsSlider();
    })
    const btnNext=document.querySelector(".next");
    btnNext.addEventListener('click',()=>{
        index++;
        if(index===ProductsSlider.length)
             index=0;
        uppdateProductsSlider();
    })
}
ChangeSlider();