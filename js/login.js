
let user = document.getElementById("username")
let password = document.getElementById("password")
let submit_btn =document.getElementById("sign_in")
// var Log = false    to make sure there has been a log procees 

submit_btn.addEventListener("click",function submit_click(e){
    e.preventDefault()
    if( user.value ==="" | password.value === ""){
        alert("please enter all required info")
    }
    else{
        let storige_user = localStorage.getItem("user_name")
        let storige_password = localStorage.getItem("user_password")
        if( storige_user && storige_user.trim() === user.value.trim() && storige_password && storige_password.trim() === password.value.trim()  )
        {
        //    window.Log = true
            setTimeout(()=>{
                location = "../index.html"
            },1500)
           
            
        } else{
            alert("password or username is wrong")
            console.log(storige_user + storige_user.trim() + user)   }
    }
})