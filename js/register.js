let user = document.getElementById("username")
let email = document.getElementById("email")
let password = document.getElementById("password")
let submit_btn =document.getElementById("sign_up")


submit_btn.addEventListener("click",function submit_click(e){

//    // the input of type submit make a refresh to the page immediatly at a click so we need to prevent the refresh
    e.preventDefault()

    if(password.value==="" | email.value ==="" | user.value ===""){
        alert("please enter all required informations")
    }
   else{
    let user_data = user.value
    let email_data = email.value 
    let password_data = password.value 


    // store data in local storige
    localStorage.setItem("user_name",user.value)
    localStorage.setItem("user_email",email.value )
    localStorage.setItem("user_password",password.value)

setTimeout(()=>{
    location = "../login.html"
},1500)

}
})

