document.getElementById("add-money-btn").
addEventListener("click",function(e){
    e.preventDefault();
    
    const bank = document.getElementById("select-bank").value

    const accountNumber = document.getElementById("add-account-number").value

    const amount = parseInt(document.getElementById("add-amount").value)

    const pin = document.getElementById("add-pin").value

    console.log(bank,accountNumber,amount,pin);

    const availableBalance = parseInt(document.getElementById("available-balance").innerText)

    console.log(availableBalance);

    const totalBalance = amount + availableBalance;

    document.getElementById("available-balance").innerText = totalBalance


})