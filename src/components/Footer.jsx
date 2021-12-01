import React from "react";

let day = new Date();
let currentYear = day.getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright Jameson Arnett {currentYear}</p>
    </footer>
  );
}

export default Footer;
