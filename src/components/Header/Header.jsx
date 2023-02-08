import React from "react";
import "./Header.scss";

const Header = ({ onClickLogOut }) => {
  return (
    <header className="header">
      <h3>Simple Hotel Check</h3>
      <div className="logout">
        <span className="logout-text">Выйти</span>
        <span className="icon logout-icon" onClick={onClickLogOut}></span>
      </div>
    </header>
  );
};

export default Header;
