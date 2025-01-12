import React, { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-logo">Sorting Visualizer</div>

      <h3 className="header__option"><a href="https://github.com/Tech-with-anshul">Made by Anshul (Tech-with-anshul)</a></h3>
      
    </div>
  );
}

export default Header;
