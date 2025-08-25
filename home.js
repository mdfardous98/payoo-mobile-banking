const validPin = 1234;

const couponCode = 1234;

//fardous

//  ------------------------------add money -features ---------------------------------------//
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const bank = document.getElementById("select-bank").value;

    const accountNumber = document.getElementById("add-account-number").value;

    const amount = parseInt(document.getElementById("add-amount").value);

    const pin = parseInt(document.getElementById("add-pin").value);

    // console.log(bank,accountNumber,amount,pin);
    console.log(amount);

    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    console.log(availableBalance);

    if (accountNumber.length < 11) {
      alert("please provide correct account number");
      return;
    }

    if (pin !== validPin) {
      alert("please provide correct pin number");
      return;
    }

    const totalBalance = amount + availableBalance;

    document.getElementById("available-balance").innerText = totalBalance;
  });

//---------------------------------------------------------//

//-------------------------------------cash out----------------------------//

document
  .getElementById("withdraw-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const agentNumber = document.getElementById("add-agent-number").value;

    const amountWithdraw = parseInt(
      document.getElementById("cashout-amount").value
    );

    const agentPin = parseInt(document.getElementById("add-agent-pin").value);

    const availableNewBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    if (agentNumber.length < 11) {
      alert("please provide correct agent number");
      return;
    }

    if (agentPin !== validPin) {
      alert("please provide correct pin number");
      return;
    }

    const totalNewalance = availableNewBalance - amountWithdraw;

    console.log(totalNewalance);

    document.getElementById("available-balance").innerText = totalNewalance;
  });

//--------------------------transfer money features-------------------------------------------//

document.getElementById("send-now-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const transferAccountNumber = document.getElementById(
    "transfer-account-number"
  ).value;

  const transferAmount = parseInt(
    document.getElementById("transfer-amount").value
  );

  const transferUserPin = parseInt(
    document.getElementById("transfer-account-pin").value
  );

  const availableTransferBalance = parseInt(
    document.getElementById("available-balance").innerText
  );

  if (transferAccountNumber.length < 11) {
    alert("please provide correct user number");
    return;
  }

  if (transferUserPin !== validPin) {
    alert("please provide correct pin number");
    return;
  }

  const transferTotalBalance = availableTransferBalance - transferAmount;
  console.log(transferTotalBalance);

  document.getElementById("available-balance").innerText = transferTotalBalance;
});

//-------------bonus features -----------------------------

document
  .getElementById("get-bonus-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const coupon = parseInt(document.getElementById("bonus-coupon").value);

    const availableBonusBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    if (coupon === couponCode) {
      // finalBalance = availableBonusBalance + 15000;
      getBonusBalance = 1000 + availableBonusBalance;
      console.log(getBonusBalance);
    }
    if (coupon != couponCode) {
      alert("no bonus");
    }

    // const getBonusBalance = couponCode + availableBonusBalance;
    // console.log(getBonusBalance);

    document.getElementById("available-balance").innerText = getBonusBalance;
  });

//----------------pay bill features--------------------------------------------//

document.getElementById("pay-now-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const payBank = document.getElementById("pay-bank").value;

  const billerAccountNumber = document.getElementById(
    "biller-account-number"
  ).value;

  const payAmount = parseInt(document.getElementById("pay-amount").value);

  const billerPin = parseInt(document.getElementById("biller-pin").value);

  // console.log(bank,accountNumber,amount,pin);
  // console.log(amount);

  const billerAvailableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );

  // console.log(billerAvailableBalance);

  if (billerAccountNumber.length < 11) {
    alert("please provide correct account number");
    return;
  }

  if (billerPin !== validPin) {
    alert("please provide correct pin number");
    return;
  }

  const billerTotalBalance = billerAvailableBalance - payAmount;
  console.log(billerTotalBalance);

  document.getElementById("available-balance").innerText = billerTotalBalance;
});

//-------------toggling features-------------------------------------//

document.getElementById("add-button").addEventListener("click", function (e) {
  document.getElementById("cash-out-parent").style.display = "none";
  document.getElementById("transfer-parent").style.display = "none";
  document.getElementById("add-money-parent").style.display = "block";
});

document
  .getElementById("cashout-button")
  .addEventListener("click", function (e) {
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("transfer-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "block";
  });

document
  .getElementById("transfer-button")
  .addEventListener("click", function (e) {
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "none";
    document.getElementById("transfer-parent").style.display = "block";
  });

document.getElementById("bonus-button").addEventListener("click", function (e) {
  document.getElementById("add-money-parent").style.display = "none";
  document.getElementById("cash-out-parent").style.display = "none";
  document.getElementById("transfer-parent").style.display = "none";
  document.getElementById("bonus-parent").style.display = "block";
});

document.getElementById("bill-button").addEventListener("click", function (e) {
  document.getElementById("add-money-parent").style.display = "none";
  document.getElementById("cash-out-parent").style.display = "none";
  document.getElementById("transfer-parent").style.display = "none";
  document.getElementById("bonus-parent").style.display = "none";
  document.getElementById("bill-parent").style.display = "block";
});
