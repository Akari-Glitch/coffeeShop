import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import LocalCafeIcon from "@material-ui/icons/LocalCafe";

const StyledNavbar = styled.header`
  margin-bottom: 60px;
  div {
    position: fixed;
    display: flex;
    background: white;
    justify-content: space-between;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    transition: 0.6s;
    padding: 10px 0;
    z-index: 100;
  }
  .sticky {
    padding: 5px 30px;
    background: #2d343c;

    .logo,
    .menuIcon,
    li a {
      color: #fff;
    }
    a:hover {
      color: #506268;
    }
  }
  .menuIcon {
    display: none;
    width: 25px;
  }

  .menuIcon:hover {
    border-radius: 20px;
    background: #bcd3dab3;
  }
  .coffee {
    margin-right: 10px;
  }
  .logo {
    position: relative;
    font-family: "Abril Fatface", cursive;
    font-weight: 700;
    color: #000;
    margin-left: 70px;
    text-decoration: none;
    font-size: 1.5em;
    user-select: none;
    letter-spacing: 2px;
    transform: 0.6s;
  }
  ul {
    position: relative;
    display: flex;
    margin-right: 60px;
    justify-content: center;
    align-items: center;
  }

  li {
    position: relative;
    list-style: none;
  }

  a {
    position: relative;
    color: #000;
    margin: 0 15px;
    text-align: center;
    font-size: 0.95rem;
    text-decoration: none;
    font-weight: bolder;
    transition: 0.3s;
  }

  a:hover {
    color: #506268;
  }
  @media only screen and (max-width: 800px) {
    .menuIcon {
      display: inline-block;
      margin-right: 30px;
      z-index: 50;
      transition: 1s;
    }

    .sticky {
      padding: 5px 0;
    }
    .logo {
      margin-left: 30px;
      font-size: 1.3rem;
    }
    div {
      padding: 20px 0;
    }
    ul {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      position: absolute;
      top: 0px;
      right: 0;
      margin: 0;
      height: 100vh;
      width: 60%;
      z-index: 5;
      background: #2d343c;
      transform: translateX(100%);
      transition: 0.6s;
    }

    ul li:first-child {
      margin-top: 100px;
    }

    li {
      display: flex;
      align-items: center;
      width: 100%;
      height: 60px;
      border-bottom: 2px solid white;
      margin-bottom: 2px;
    }

    li a {
      display: flex;
      text-align: center;
      margin: 0;
      color: white;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
    }
    .active {
      transform: translateX(0%);
      color: white;
    }

    @media only screen and (max-width: 300px) {
      .logo {
        margin-left: 20px;
        font-size: 1.2rem;
      }
    }
  }
`;

function Navbar() {
  const [sticky, setSticky] = useState(null);
  const [menu, setMenu] = useState(false);

  const handleMenu = () => setMenu(!menu);

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      setSticky("sticky");
    } else {
      setSticky(null);
    }
  });

  return (
    <StyledNavbar>
      <div className={sticky}>
        <a href="#" className="logo">
          <LocalCafeIcon className="coffee" />
          coffeeroasters
        </a>

        {menu ? (
          <CloseIcon className="menuIcon active" onClick={handleMenu} />
        ) : (
          <MenuIcon className="menuIcon" onClick={handleMenu} />
        )}

        <ul
          className={menu ? "active" : null}
          onClick={menu ? handleMenu : null}
        >
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT US</Link>
          </li>
          <li>
            <Link to="/services">CREATE YOUR PLAN</Link>
          </li>
        </ul>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
