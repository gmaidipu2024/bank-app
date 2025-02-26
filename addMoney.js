document.getElementById("cashOut-box").style.display= 'none';

document.getElementById("admoneybtn").addEventListener("click",function(){
    document.getElementById("cashOut-box").style.display= 'none';
    document.getElementById("addMoney-box").style.display= 'block';
})


document.getElementById("cashOutbtn").addEventListener("click",function(){
    document.getElementById("cashOut-box").style.display= 'block';
    document.getElementById("addMoney-box").style.display= 'none';
})


document.getElementById("AddMoney").addEventListener("click", function(){
    
    const amount = document.getElementById("amount").value;

    const convertAmount =  parseInt(amount);

    const pin = document.getElementById("myPin").value;
    const changePin = parseInt(pin);

    const mainBalance = document.getElementById("mail-blance").innerText;
    const changeNumber = parseInt(mainBalance);
   
    
   if(changePin=== 1234){
         const sum = convertAmount + changeNumber;
         document.getElementById("mail-blance").innerText = sum;
            
        }else{
            alert("pin Thik nai")
        }
})