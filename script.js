let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let conPasswordInput = document.getElementById("con-password");
let messageInput = document.getElementById("message");
let form = document.getElementById("form");

let task = [];
console.log(form);
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(112);
    add();
})

function add(){
    if(nameInput.value===""||emailInput.value===""||passwordInput===""||conPasswordInput.value===""){
       messageInput.innerText = "Error : All the fields are mandatory";
       messageInput.style.color = "red";
       messageInput.style.fontSize="10px"
    }
    else{
        let password = passwordInput.value
        let conpassword = conPasswordInput.value;
        // comparing password
        function check(){
           if(password.length!=conpassword.length)
             return false;
           else{
            for(let i=0;i<password.length;i++){
                if(password.charAt(i)!=conpassword.charAt(i))
                  return false;
              }
              return true;
           }  
        }
        // asks this calling is correct or not and then message part
        if(!check()){
            messageInput.innerText = "Error : Passward mismatched";
            messageInput.style.color = "red";
            messageInput.style.fontSize="10px"
        }
        else{
        task.push({
            Name:nameInput.value,
            Email:emailInput.value,
            Password:password,
            conPassword:conpassword,
            token:accessToken()
        })
        console.log(task);
        localStorage.setItem('task',JSON.stringify(task))
        messageInput.innerText="Successfully Signes Up!";
        messageInput.style.color = "green";
        messageInput.style.fontSize="10px"
        // location.replace("http://127.0.0.1:5500/profile.html")
        setTimeout(()=>{
            window.location.href="./profile.html"
        },1000)

        function accessToken(){
            const randomByte = new Uint8Array(16);
            window.crypto.getRandomValues(randomByte);
            const generatedToken = btoa(String.fromCharCode.apply(null,randomByte));
            return generatedToken;
        }

        Show()
        }
    }   
}

function show(){
    task.map((task,idx)=>{
        let fullName = document.getElementById("name1");
        let email1 = document.getElementById("email1");
        let password1 = document.getElementById("password1");
        
        fullName.innerText = `Full Name : ${task.Name}`
        email1.innerText = `Email : ${task.Email}`;
        password1.innerText = `Password : ${task.Password}`


    })
}