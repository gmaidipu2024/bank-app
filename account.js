
document.getElementById("loginButton").addEventListener("click", function(event){

    event.preventDefault();

    const accountNumber = document.getElementById("Account").value;
    

    const pin = document.getElementById("myPin").value;
    const changePin = parseInt(pin)
    
    if (accountNumber.length === 11){

        if(changePin=== 1234){
            window.location.href ="./main.html"
            
        }else{
            alert("Enter Your Pin : 1234")
        }
        
    }else{
        alert("entar must be 11 degit Number")
    }
    
    
    
})