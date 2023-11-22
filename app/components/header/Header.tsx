"use client";

import React, { useRef } from "react";

import Button from "../button/Button";
import Styled from "styled-components";
import { FaRocket, FaWallet } from "react-icons/fa";
import { Abril_Fatface } from "next/font/google";
import Image from "next/image";
import Hover3d from "../../utils/Hover";

const abril = Abril_Fatface({
  weight: ["400"],
  subsets: ["latin"],
});

function Header() {
  const hero = useRef<HTMLDivElement>(null);
  const hoverHero = Hover3d(hero, {
    x: 30,
    y: -40,
    z: 30,
  });

  const imageHOver = Hover3d(hero, {
    x: 20,
    y: -5,
    z: 11,
  });
  return (
    <HeaderStyled ref={hero}>
      <nav>
        <div className="logo">
          <img src={"/logo.png"} alt="logo" style={{objectFit:"contain" , width:"40px" , height:"40px"}}  />
          <h2>logo</h2>
        </div>
        <div className="input">
          <input type="text" placeholder="Search" />
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

          <Button name="Connect wallet" icon={<FaWallet />} />
        </ul>
      </nav>

      <div className="header-content">
        <div className="text-content">
          <h1 className={abril.className}>
            Buy,collect,and sell extraordinary NFTS
          </h1>
          <p>
            Acquire expertise in navigating the rapidly evolving and
            exhiLarating NFT landscape,unveil the highly sought-after NFTS,and
            comrehended the possible advantages and disadvantages of acquiring,
            and vending these exceptional digital asstes.
          </p>
          <div className="buttons">
            <Button
              name="Get Started"
              background="#f2994a"
              color="#fff"
              border="1px solid #63564b"
              icon={<FaRocket />}
            />
            <Button name="Learn More" />
          </div>
        </div>
        <div className="image-content">
          <div
            className="image"
            style={{
              transform: hoverHero?.transform,
            }}
          >
            <Image
              src={"/images/monkey.png"}
              alt="monkey"
              width={400}
              height={400}
              style={{
                transform: imageHOver?.transform,
              }}
            />
          </div>
        </div>
      </div>
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

    .input{
      flex:2;
      display:flex;
      justify-content:center;
      input{
        width:55%;
        padding:0.6rem 0.8rem;
        border-radius:8px;
        background-color:#161616;
        border: 1px solid var(--color-border);
        &::placeholder{
          color:var(--color-border);
          font-weight:500;
        }
      }
    }
    .nav-items{
      display:flex;
      align-items:center;
      gap:2rem;
      li{
        transition:all 0.2s ease-in-out;
        &:hover{
          color:white;
          transform:scale(1.1)
        }
      }
    }
  }
  .header-content{
    padding:0 10rem 5rem 10rem;
    display:flex;
    justify-coontent:space-between;
    align-items:center;
    gap:4rem;
    min-height:calc(100vh-10vh);

    .text-content{
      >h1{
        font-size:clamp(2rem,4vw,5rem);
        color:#f2994a
        transition:all 0.01s linear;
        padding-bottom:1.5rem;
      }
      .buttons{
        display:flex;
        gap:1rem;
        margin-top:2.5rem;
      }
    }
    .image-content .image{
      padding:1rem;
      border-radius:8px;
      background-color:var(--color-bg);
      border:1px solid var(--color-border);

      img{
        border-radius:8px;
      }
    }

  }
`;

export default Header;
function hover3d(
  hero: React.RefObject<HTMLDivElement>,
  arg1: { x: number; y: number; z: number }
) {}
