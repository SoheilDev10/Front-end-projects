function CreatImg()
{
    const link=document.createElement("a");
    link.href="/html/home.html";
    link.target="_blank";
    const image=document.createElement("img");
    image.alt="image1";
    image.src="/picture/Logo-min.png";
    link.appendChild(image);
    document.getElementById("div1").appendChild(link);
}

CreatImg();

function CreatButton()
{
    const button=document.createElement("button");
    const text=document.createTextNode("click on me");
    button.appendChild(text);
    button.className="button1";
    document.getElementById("btn").appendChild(button);
}

CreatButton();

const att1=document.querySelector(".button1").hasAttribute("class");
console.log(att1);
//const BgColor=document.querySelector(".button1");
function CreatImg2(href,target,alt,src)
{
    const link=document.createElement("a");
    link.href=href;
    link.target=target;
    const image=document.createElement("img");
    image.alt=alt;
    image.src=src;
    link.appendChild(image);
    document.getElementById("div1").appendChild(link);
}
let href,target,alt,src;
href="/html/hone.html";
target="_blank";
alt="laptop";
src="/picture/laptop.png";
//CreatImg2("/html/home.html","_blank","laptop","/picture/laptop.png");
CreatImg2(href,target,alt,src);