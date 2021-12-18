document.querySelector("#form").addEventListener("submit", addItems);
ProductData = JSON.parse(localStorage.getItem("shoppingItems")) || [];
function addItems(event) {
  event.preventDefault();

  var name = document.querySelector("#name").value;
  var price = document.querySelector("#price").value;
  var image = document.querySelector("#image").value;
  var gender = document.querySelector("#gender").value;
  var category = document.querySelector("#category").value;

  var ProductObj = {
    image: image,
    name: name,
    price: price,
    gender: gender,
    category: category,
  };

  if (
    name == "" &&
    image == "" &&
    price == "" &&
    gender == "" &&
    category == ""
  ) {
    alert("Please Enter All The Product Data !");
  } else if (name == "") {
    alert("Please Enter The Name Of The Product !");
  } else if (price == "") {
    alert("Please Enter The Price Of The Product !");
  } else if (image == "") {
    alert("Please Enter The Link Of The Product Image !");
  } else if (gender == "") {
    alert("Please Select The Gender !");
  } else if (category == "") {
    alert("Please Select The Category !");
  } else {
    ProductData.push(ProductObj);
    localStorage.setItem("shoppingItems", JSON.stringify(ProductData));
    alert("Product Added Successfully !");
  }
}
document.querySelector("#prod").addEventListener("click", function () {
  let x = confirm("Do you want to go the product page?");
  if (x == true) {
    window.location.href = "Product.html";
  }
});
document.querySelector("button").addEventListener("click", function () {
  window.location.href = "landingPage.html";
});
