import React from "react";
import Logo from "./robinhood.svg";
import "./Header.css";
function Header() {
  return (
    <div>
      <div className="header__wrapper">
        {/* logo */}
        <div className="header__logo">
          <img src={Logo} width={25} />
        </div>
        {/* search */}
        <div className="header__search">
          <div className="header__searchContainer">
            <input placeholder="Search" type="text" />
          </div>
        </div>
        {/* menuitems */}
        <div className="header__menuItems">
          <a href="#">Stocks</a>
          <a href="#">Portfolio</a>
          <a href="#">Account</a>
          <a href="#">Notifications</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
