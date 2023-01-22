const navbar = () => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="./styles/navbar.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css"
        crossorigin="anonymous"
      />
      <title>Navbar</title>
    </head>
    <body>
      <div class="navbar">
        <ul id="ul">
          <li>
            <a href="./homepage.html"
              ><img id="logo" src="./images/Byte.png" alt=""
            /></a>
          </li>
          <li>
            <a href="">Store</a>
          </li>
          <li>
            <a href="">Mac</a>
          </li>
          <li>
            <a href="">iPad</a>
          </li>
          <li>
            <a href="./iphone_page.html">iPhone</a>
          </li>
          <li>
            <a href="">Watch</a>
          </li>
          <li>
            <a href="">AirPods</a>
          </li>
          <li>
            <a href="">TV & Home</a>
          </li>
          <li>
            <a href="">Only on Apple</a>
          </li>
          <li>
            <a href="">Accessories</a>
          </li>
          <li>
            <a href="">Support</a>
          </li>
          <li>
            <a href="user_login_signup.html">Sign In</a>
          </li>
          <li>
            <a href="./cart.html" class="fas fa-shopping-bag"></a>
          </li>
        </ul>
      </div>
    </body>
  </html>
  <!-- <script src="./scripts/navbar.js"></script> -->
  `;
};

export default navbar;
