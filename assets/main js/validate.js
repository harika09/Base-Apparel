function validate(){
    var form = document.getElementById("form");
    var email =document.getElementById("email").value;
    var text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email.match(pattern)){

        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Valid Email";
        text.style.color = "red";
       
        
    }
    else{
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Please provide a valid Email";
        text.style.color = "red";
        document.getElementById("email").style.borderColor = "red";
    }


    
}