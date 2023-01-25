import footer from "./footer.js";
document.getElementById("footer").innerHTML = footer();

let allstock = document.querySelector("#stocked");

async function stockpage() {
  let api = "https://long-goat-raincoat.cyclic.app/products/";
  let res = await fetch(api);
  let data = await res.json();
  append(data);
}
stockpage();

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
    div5.innerText = "Delete from Stocks";
    div5.addEventListener("click", () => {
      console.log("finally");
      alert(`${el.name} will be removed from list`);
      deletefromstock(id);
    });

    div.append(div1, div2, div3, div4, div5);
    allstock.append(div);
  });
};
async function deletefromstock(id) {
  await fetch(`https://long-goat-raincoat.cyclic.app/products/delete/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("admintoken"),
    },
  });
  document.location.reload();
}

let addbutton = document.querySelector("#addbtn");
addbutton.addEventListener("click", addtostock);

async function addtostock() {
  console.log("adding stocks");
  let image = document.getElementById("image").value;
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;

  let obj = {
    image: image,
    name: name,
    price: price,
  };
  console.log(obj);

  let api = "https://long-goat-raincoat.cyclic.app/products/add";
  let data = await fetch(api, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("admintoken"),
    },
  });
  let res = await data.json();
  console.log(res);
  console.log("hi");
  alert("Product is added to the stock!!");
  document.location.reload();
}
