import navbar from "./navbar.js";
import footer from "./footer.js";

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();
//============================code from here=================
let allphone = document.querySelector("#alliphone");

async function homepage() {
  let api = "http://localhost:1050/homepage/gethomepage";
  let res = await fetch(api);
  let data = await res.json();
  // console.log(data);
  append(data);
}
homepage();

let append = (data) => {
  data.forEach((el) => {
    let id = el._id;
    let div = document.createElement("div");
    div.setAttribute("class", "sub-card");

    let div1 = document.createElement("div");
    div1.setAttribute("class", "image");

    let img = document.createElement("img");
    img.src = el.image;
    div1.append(img);

    let div2 = document.createElement("div");
    div2.setAttribute("id", "name");

    let div3 = document.createElement("div");
    div3.setAttribute("class", "title");

    let h1 = document.createElement("h1");
    h1.innerText = el.name;
    div3.append(h1);
    div2.append(div3);

    let div4 = document.createElement("div");
    div4.setAttribute("class", "mrp_price");

    let h2 = document.createElement("h2");
    h2.innerText = `Rs. ${+el.price}.00/-`;

    div4.append(h2);

    let div5 = document.createElement("div");
    div5.setAttribute("class", "button");
    div5.innerText = "Add To Bag";
    div5.addEventListener("click", () => {
      console.log("finally");
      addToCart(id);
    });

    div.append(div1, div2, div3, div4, div5);
    allphone.append(div);
  });
};
async function addToCart(id) {
  await fetch(`http://localhost:1050/cart/add/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("usertoken"),
    },
  });
  alert("Product is added to the cart!!");
}
