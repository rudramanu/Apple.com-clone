import navbar from "./navbar.js";
import footer from "./footer.js";

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();
//=====================now do main task============

let total = 0;
let totalMRP = 0;
let phone_in_cart = document.querySelector("#cart_items");
let append = (data) => {
  let discount = 0;
  discount = data.length * 9900;
  data.forEach((el) => {
    let id = el._id;
    let n = 1;
    let div = document.createElement("div");
    div.setAttribute("class", "items");

    let div1 = document.createElement("div");
    div1.setAttribute("class", "div_align");
    div1.setAttribute("id", "photo_div");

    let img = document.createElement("img");
    img.setAttribute("class", "phones");
    img.src = el.url;

    div1.append(img);

    let div2 = document.createElement("div");
    div2.setAttribute("class", "div_align");
    div2.setAttribute("id", "name_div");

    let name = document.createElement("h2");
    name.innerText = el.name;
    div2.append(name);

    let div3 = document.createElement("div");
    div3.setAttribute("class", "div_align");

    let MRP = document.createElement("h3");
    MRP.innerText = "MRP";

    let MRPprice = document.createElement("h3");
    MRPprice.innerText = `Rs. ${+el.price + 9900}.00/-`;
    totalMRP = totalMRP + (+el.price + 99);
    MRPprice.style.textDecoration = "line-through";

    div3.append(MRP, MRPprice);

    let div4 = document.createElement("div");
    div4.setAttribute("class", "div_align");

    let Sell_price = document.createElement("h3");
    Sell_price.innerText = "Sell Price";

    let price = document.createElement("h3");
    price.innerText = `Rs. ${+el.price}.00/-`;
    total = total + +el.price;

    div4.append(Sell_price, price);

    let div5 = document.createElement("div");
    div5.setAttribute("class", "div_align");

    let div5l = document.createElement("div");
    div5l.setAttribute("class", "remove");

    let remove = document.createElement("img");
    remove.src = "https://img.1mg.com/images/delete_icon.svg";
    remove.style.cursor = "pointer";
    div5l.append(remove);
    remove.addEventListener("click", () => {
      alert(`${el.name} will be removed from list`);
      del_cart_Data(id);
    });

    let div5r = document.createElement("div");
    div5r.setAttribute("class", "add");

    let div5r1 = document.createElement("div");
    let minus = document.createElement("img");
    minus.src =
      "https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/512/external-glyph-shapes-tanah-basah-glyph-tanah-basah-32.png";
    minus.style.width = "15px";

    minus.style.cursor = "pointer";
    div5r1.append(minus);

    minus.addEventListener("click", () => {
      n--;
      price.innerText = `Rs. ${+el.price * n}.00/-`;
      MRPprice.innerText = `Rs. ${(+el.price + 9900) * n}.00/-`;

      totalMRP = totalMRP - (+el.price + 9900);
      let totalmrp = document.getElementById("itm_total");
      totalmrp.innerText = `Rs. ${totalMRP}/-`;
      discount = discount - 9900;
      let priceDiscount = document.getElementById("ttl_dsc1");
      priceDiscount.innerText = `- Rs. ${discount}/-`;
      let subTotal = document.getElementById("ttl");
      subTotal.innerText = `Rs. ${totalMRP - discount}`;
      let totalSaving = document.getElementById("ttl_dsc");
      totalSaving.innerText = `Rs. ${discount}/-`;
      let disc_msg = document.querySelector("#discount_msg div");
      if (data.length >= 1) {
        disc_msg.innerText = `Yay!! you just saved Rs. ${discount}/- 🎉🎉`;
        disc_msg.style.color = "green";
      }
      if (n >= 1) {
        p2.innerText = n;
      } else if (n == 0) {
        alert("do you really want to remove it?");
        alert(`${el.name} will be removed from list`);
        del_cart_Data(id);
      }
    });

    let div5r2 = document.createElement("div");
    let p2 = document.createElement("p");
    p2.innerText = n;
    div5r2.append(p2);

    let div5r3 = document.createElement("div");
    let plus = document.createElement("img");
    plus.src = "https://img.icons8.com/tiny-glyph/512/plus-math.png";
    plus.style.width = "15px";
    plus.style.cursor = "pointer";
    div5r3.append(plus);

    plus.addEventListener("click", () => {
      n++;
      price.innerText = `Rs. ${+el.price * n}.00/-`;

      MRP.innerText = `Rs. ${(+el.price + 9900) * n}.00/-`;
      total = total + +el.price * n;
      totalMRP = totalMRP + (+el.price + 9900);
      discount = discount + 9900;
      let totalmrp = document.getElementById("itm_total");
      totalmrp.innerText = `Rs. ${totalMRP}/-`;

      let priceDiscount = document.getElementById("ttl_dsc1");
      priceDiscount.innerText = `- Rs. ${discount}/-`;

      let subTotal = document.getElementById("ttl");
      subTotal.innerText = `Rs. ${totalMRP - discount}`;

      let totalSaving = document.getElementById("ttl_dsc");
      totalSaving.innerText = `Rs. ${discount}/-`;

      let disc_msg = document.querySelector("#discount_msg div");
      if (data.length >= 1) {
        disc_msg.innerText = `Yay!! you just saved Rs. ${discount}/- 🎉🎉`;
        disc_msg.style.color = "green";
      }
      if (n <= 4) {
        p2.innerText = n;
      }
      if (n >= 5) {
        alert("You Can't Add More Than 10 Products of Same Type!!!");
      }
    });
    div5r.append(div5r1, div5r2, div5r3);
    div5.append(div5l, div5r);
    div.append(div1, div2, div3, div4, div5);
    phone_in_cart.append(div);
  });
  let totalmrp = document.getElementById("itm_total");
  totalmrp.innerText = `Rs. ${totalMRP}/-`;

  let priceDiscount = document.getElementById("ttl_dsc1");
  priceDiscount.innerText = `- Rs. ${discount}/-`;

  let subTotal = document.getElementById("ttl");
  subTotal.innerText = `Rs. ${totalMRP - discount}/-`;

  let totalSaving = document.getElementById("ttl_dsc");
  totalSaving.innerText = `Rs. ${discount}/-`;

  let disc_msg = document.querySelector("#discount_msg div");
  if (data.length >= 1) {
    disc_msg.innerText = `Yay!! you just saved Rs. ${discount}/- 🎉🎉`;
    disc_msg.style.color = "green";
  }
};
// async function get_cart_data() {
//   let res = await fetch("url");
//   let data = await res.json();
//   append(data);

//   let payment = document.getElementById("chkout");
//   payment.addEventListener("click", () => {
//     window.location.href = "payment.html";
//   });
// }
// get_cart_data();

// async function del_cart_Data(id) {
//   await fetch("url", {
//     method: "DELETE",
//   });
//   document.location.reload();
// }
let data = [
  {
    _id: "63ca292e85e61ea4fbd71c41",
    status: "new",
    name: "IPHONE 30 PRO MAX",
    url: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg",
    colour: "red green blue",
    price: "379000",
  },
  {
    _id: "63ca292e85e61ea4fbd71c41",
    status: "new",
    name: "IPHONE 30 PRO MAX",
    url: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg",
    colour: "red green blue",
    price: "379000",
  },
  {
    _id: "63ca292e85e61ea4fbd71c41",
    status: "new",
    name: "IPHONE 30 PRO MAX",
    url: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg",
    colour: "red green blue",
    price: "379000",
  },
  {
    _id: "63ca292e85e61ea4fbd71c41",
    status: "new",
    name: "IPHONE 30 PRO MAX",
    url: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg",
    colour: "red green blue",
    price: "379000",
  },
  {
    _id: "63ca292e85e61ea4fbd71c41",
    status: "new",
    name: "IPHONE 30 PRO MAX",
    url: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg",
    colour: "red green blue",
    price: "379000",
  },
];
append(data);
