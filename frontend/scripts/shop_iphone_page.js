import navbar from "./navbar.js";
import footer from "./footer.js";

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();
//============================code from here=================
let allphone = document.querySelector("#alliphone");
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

function renderData(data) {
  allphone.innerHTML = `${data
    .map((ele) => {
      let title = ele.name;
      let mrp = ele.price;
      let imageurl = ele.url;

      return cardData(imageurl, title, mrp);
    })
    .join(" ")}`;
}

function cardData(imgUrl, title, price) {
  return `
    <div class=sub-card>
    <div class="image">
    <img src=${imgUrl} alt="Broken">
  </div>
  <div id="name">
    <div class="title"><h1>${title}</h1></div>
  </div>
    <div class="mrp_price"><h2>Rs. ${price}.00/-</h2></div>
    <div id="button">Add To Bag</div>
  </div>`;
}

renderData(data);

let add = document.querySelector("#button");
add.addEventListener("click", function () {
  console.log("clicked");
});
