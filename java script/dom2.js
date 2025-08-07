//const Elements=document.querySelector(".search").setAttribute("id","myattribute");
//const RemElm=document.querySelector(".search").removeAttribute("placeholder");
const elm=document.getElementsByClassName("search");
//let setatt=document.querySelector(".search").setAttribute("type","submit");
//document.querySelector(".search").setAttribute("placeholder","هرچی میخوای جستجو کن...");
//document.querySelector(".search").removeAttribute("name");
document.querySelector(".search").setAttribute("id","myid");
let has=document.querySelector(".search").hasAttribute("id");
let show=document.querySelector("#myid").className;
console.log(has);
console.log("Name of Class:"+show);
console.log(elm);

function LINK()
{
    const getasus=document.querySelector(".asus");
    getasus.addEventListener('click',Next);
    function Next()
    {
        window.location.href="animation.html";
    }
    const gethp=querySelector(".hp");
    gethp.addEventListener('click',Next2);
    function Next2()
    {
        window.location.href="menu.html";
    }
    const getapple=document.querySelector(".apple");
    getapple.addEventListener('click',Next3);
    function Next3()
    {
        window.location.href="loading.html";
    }


}
LINK();




