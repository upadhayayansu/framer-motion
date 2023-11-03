"use client";

import React from "react";
import Logo from "../../../public/logo.png";
import Button from "../button/Button";
import Styled from "styled-components";

function Header() {
  return (
    <HeaderStyled>
      <nav>
        <div className="logo">
          <img src={"/logo.png"} alt="logo" width={128} height={77} />
          <h2>logo</h2>
        </div>
        <ul className="nav-items">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Auctions</a>
          </li>
          <li>
            <a href="#">marketplace</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <button />
        </ul>
      </nav>
    </HeaderStyled>
  );
}
const HeaderStyled = Styled.header`
  nav {
    padding: 0 4rem;
    min-height: 10vh;
    border-bottom: 1px solid var(--color-border);
    display:flex;
    justify-content:space-between;
    align-items:center;
    .logo{
      display:flex;
      align-items:center;
      gap:1rem;
      cursor:pointer;
    }
  }
`;

export default Header;
