document.querySelector("#sub").addEventListener("click", function () {
  var text = document.querySelector("#text").value;
  var card = document.querySelector("#card").value;
  var cvv = document.querySelector("#cvv").value;
  if (
    text.length==0||
    card.length == 0 ||
    cvv.length == 0 
    
  ) {
    alert("Please Enter Required Fields....!");
  } else {
    if (
      card.length == 12 &&
      cvv.length == 3 &&
      text.length!=0
    ) {
      alert("Payment Successful..!");
      window.location.href = "successful.html";
    } else {
      alert("Invalid Card Details");
    }
    document.querySelector("#card").value = "";
    document.querySelector("#cvv").value = "";
  }
});

var totalprice =JSON.parse (localStorage.getItem("totalprice"))
console.log(totalprice)
document.querySelector("#amount").textContent="TOTAL"+ " " +"AMOUNT" + ":" + totalprice

