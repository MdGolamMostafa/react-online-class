import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <nav>
        <a href="/react">React</a>
        <a href="/angular">Angular</a>
        <a href="/reactNative">React Native</a>
      </nav>
    </div>
  );
};

export default Header;
