function Profile()
{
    const image=document.getElementById("pic");
    const choose=document.getElementById("file");
    choose.addEventListener('change', ()=>{
        const file=choose.files[0];
        if(fiel){
        const imageurl=URL.createObjectURL(file)
        image.removeAttribute("src");
        image.setAttribute("src",imageurl); 
        }
        
    })

}
Profile();

function Test(a,b,c)
{
    if(c==true)
    {
        return a+b;
    }
    else
    {
        return a-b;
    }
}
let m=2>2;
const get=Test(5,12,m);
console.log(get);
