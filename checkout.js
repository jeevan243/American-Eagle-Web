var cart = JSON.parse(localStorage.getItem("cart_Items"));
displaytable(cart);

document.querySelector("#del").addEventListener("click", function () {
  var text = document.querySelector("#door").value;
  var street = document.querySelector("#street").value;
  var town = document.querySelector("#town").value;
  var dis = document.querySelector("#dis").value;
  var state = document.querySelector("#state").value;
  var pin = document.querySelector("#pin").value;
  var phone = document.querySelector("#phone").value;
  if (
    text.length == 0 ||
    street.length == 0 ||
    town.length == 0 ||
    dis.length == 0 ||
    state.length == 0 ||
    pin.length == 0 ||
    phone.length == 0
  ) {
    alert("Please Fill the Shipping Details....");
  } else {
    alert("click on Proceed To Payment");
    document.querySelector("#pay").addEventListener("click", function () {
      window.location.href = "paymentform.html";
    });
  }
});

function displaytable(cart) {
  document.querySelector("#cart").textContent = "";
  cart.map(function (elem, index) {
    var div = document.createElement("div");
    div.setAttribute("class", "row");
    var image_div = document.createElement("div");
    var image = document.createElement("img");
    image.setAttribute("src", elem.image);
    image_div.append(image);
    var pro_detail = document.createElement("div");
    var name = document.createElement("h3");
    name.textContent = elem.name;
    var price = document.createElement("p");
    price.textContent = "₹" + " " + elem.price;
    var category = document.createElement("p");
    category.textContent = elem.category;
    var remove = document.createElement("button");
    remove.textContent = "Remove";
    remove.addEventListener("click", function () {
      deletetask(index);
    });
    pro_detail.append(name, price, category, remove);
    div.append(image_div, pro_detail);
    document.querySelector("#cart").append(div);
  });
  function deletetask(index) {
    cart.splice(index, 1);
      localStorage.setItem("cart_Items", JSON.stringify(cart));
    displaytable(cart);
    }
}
var pr = 0;
  var count = 0;
for (var i = 0; i < cart.length; i++) {
    pr += +cart[i].price;
    count++;
  }
  document.querySelector("#price").textContent =
    "Total Price - " + " " + pr + " " + "Rs";
document.querySelector("#quantity").textContent = "Your Cart" + " " + count + " " + "Item(s)";

document.querySelector("#Tprice").textContent= pr +" "+ "Rs"
        
// var tprice = []
// tprice.push(pr)

localStorage.setItem("totalprice",JSON.stringify(pr) )