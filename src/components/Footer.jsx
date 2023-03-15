import React from "react";

const date = new Date().getFullYear();

function Footer() {
  return <footer>@{date}</footer>;
}

export default Footer;
