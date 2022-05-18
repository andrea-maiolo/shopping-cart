import React from "react";

function Footer() {
  return (
    <footer className="footerComp">
      <nav>
        <a href="#">Terms of service</a>
        <a href="#">Shipping and returns</a>
        <img src={require(`../styles/twitter.svg`)} />
        <img src={require(`../styles/facebook.svg`)} />
        <img src={require(`../styles/insta.svg`)} />
      </nav>
    </footer>
  );
}

export default Footer;
