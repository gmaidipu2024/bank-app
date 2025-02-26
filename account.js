
document.getElementById("loginButton").addEventListener("click", function(event){

    event.preventDefault();

    const accountNumber = document.getElementById("Account").value;
    

    const pin = document.getElementById("myPin").value;
    const changePin = parseInt(pin)
    
    if (accountNumber.length === 11){

        if(changePin=== 1234){
            window.location.href ="./main.html"
            
        }else{
            alert("pin Thik nai")
        }
        
    }else{
        alert("entar valid number")
    }
    
    
    
})