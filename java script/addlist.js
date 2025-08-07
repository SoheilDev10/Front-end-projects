function LIST()
{
    const button=document.getElementById("btn");
    const ul=document.querySelector("#mylist");
    button.addEventListener('click',Add);
    function Add()
    {
       const input=document.querySelector("#text").value;
       const list=document.createElement("li");
       const section=document.createElement("div");
       const delet=document.createElement("span");
       const textlist=document.createTextNode(input);
       delet.innerHTML="Delet";
       delet.style.color="black";
       list.appendChild(textlist);
       section.appendChild(list);
       section.appendChild(delet);
       list.className="myli";
       section.className="section";
       delet.className="del";
       if(input==="")
       {
        window.alert("please write something");
        ul="";
       }
       document.querySelector("#mylist").appendChild(section);
       document.querySelector("#mylist").value="";
       document.querySelector("#mylist").focus();
       
       delet.addEventListener('mouseover',()=>{
        delet.style.color="red";
      })

      delet.addEventListener('mouseout',()=>{
        delet.style.color="black";
      })

       delet.addEventListener('click',()=>{
        ul.removeChild(section);
      })

    }
    const reset=document.getElementById("btnreset");
    reset.addEventListener('click',RESET);
    function RESET()
    {
        ul.innerHTML="";
    }
      
}
LIST();