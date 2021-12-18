
var data = [
    {
        image:
            "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15038490/2021/11/16/252775ba-79ae-4ff9-937e-7f8229b61c7b1637050251508TshirtsLevisMenJeansLevisMen1.jpg",
        role: "Men's Jeans",
    },
    {

        image:
            "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/11591b03-97f1-4907-b735-906984c4bcd61585905051096HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt1.jpg",
        role: "Men's Tops",
    },
    {

        image:
            "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10381447/2019/8/16/3aaf0f72-0cf4-40ef-a36c-c81e3186c3281565956541245-Campus-Sutra-Men-Sweatshirts-2091565956539708-1.jpg",
        role: "Men's Hoodies and Sweatshirts",
    },
    {

        image:
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/3/13/aa571c5a-3568-4b46-9084-193dcfd981c11615615939951-1.jpg",
        role: "Men's Underwear",
    },
    {
        image:
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13000352/2020/12/3/2fd3563c-b632-4520-8e35-daacb3cb9eca1606965670396-SASSAFRAS-Women-Jeans-6841606965667762-1.jpg",
        role: "Women's Jeans",
    },
    {

        image:
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13719116/2021/3/3/90d0980a-8b39-48bd-9bf9-a67beb14a9741614753528611-Athena-Fuchsia-Pink-top-with-power-shoulder-sleeve-detail-22-1.jpg",
        role: "Women's Tops",
    },
    {

        image:
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/5829329/2018/8/23/2c623a78-2090-4fd0-b432-97339f13380a1535028518976-Roadster-Women-Green-Solid-Hooded-Sweatshirt-934153502851752-1.jpg",
        role: "Women's Hoodies and Sweatshirts",
    },
    {

        image:
            "https://cdn.shopify.com/s/files/1/0399/6361/products/Commited-Af_-Matching-Hoodie-For-Men-And-Crop-Hoodie-For-Women.jpg?v=1571438945",
        role: "Winterwear",
    },
];

data.map(function (elem) {
    var div = document.createElement("div");
    var img = document.createElement("img");
    var p = document.createElement("p");

    img.setAttribute("src", elem.image);
    p.textContent = elem.role;

    div.append(img, p);
    document.querySelector("#productsGrid").append(div);
});


var data1 = [
    {
        image:
            "https://aeo.imgix.net/img/app/product/4/462719-3377214.jpg?auto=format",
        role: "AMERICAN EAGLE WOMEN BLACK NE(X)T LEVEL CURVY HIGH-WAISTED JEGGING",
        price: "₹ 1,800",

    },
    {

        image:
            "https://aeo.imgix.net/img/app/product/4/472640-5182046.jpg?auto=format",
        role: "AMERICAN EAGLE WOMEN BLUE NE(X)T LEVEL HIGH-WAISTED JEGGING CROP",
        price: "₹ 3,999" + "",

    },
    {

        image:
            "https://aeo.imgix.net/img/app/product/4/492991-4532514.jpg?auto=format",
        role: "AMERICAN EAGLE WOMEN RED PRINTED SHORT SLEEVE BUTTON UP SHIRT",
        price: "₹ 1,800",

    },

];

data1.map(function (elem) {
    var div = document.createElement("div");
    var img = document.createElement("img");
    var p = document.createElement("p");
    var price1 = document.createElement("p")

    img.setAttribute("src", elem.image);
    p.textContent = elem.role;
    price1.textContent = elem.price;

    div.append(img, p, price1);
    document.querySelector("#bestSellers").append(div);
});

document.querySelector(".button").addEventListener("click", myFunction);

function myFunction() {
    window.location.href = "product.html";
}


document.querySelector(".myAeO").addEventListener("click",function(){
    window.location.href="signup.html"
})