function Login()
{
    const username=document.querySelector(".user");
    const password=document.querySelector(".password");
    const login=document.querySelector(".log");
    login.addEventListener('click',()=>{

        if(username.value==="" || password.value==="")
        {
            window.alert("please enter your user name and password");
        }
        else if(username.value.trim()==="soheil1234" && password.value.trim()==="torkan7")
        {
            window.location.href="html/home.html";
        }
  
        else
        {
            window.alert("Your username or email is wrong");
        }
    })

}
Login();