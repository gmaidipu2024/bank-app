document.getElementById("cashOut").addEventListener("click", function(){
    
    const accountNumber = document.getElementById("Account").value;

    const pin = document.getElementById ("myPin").value;
    const changePinValue= parseInt(pin);

    const cashAmount= document.getElementById ("cash-Amount").value;
    const ChangeCashAmount= parseInt(cashAmount);

    const mainBalance= document.getElementById("mail-blance").innerText
        const valueChange = parseInt(mainBalance);
   
    if (accountNumber.length === 11) {

        if (changePinValue === 1234) {

            const sum = valueChange-ChangeCashAmount
            document.getElementById("mail-blance").innerText = sum;
            
        } else{
            alert("Pin Number Vull")
        }
        
    }else{
        alert(" Account Number thi nai")
    }
    
})
