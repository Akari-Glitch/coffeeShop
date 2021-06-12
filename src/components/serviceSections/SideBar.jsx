import React from "react";
import styled from "styled-components";

const StyledSideBar = styled.div`
  width: 200px;
  position: sticky;
  top: 50px;
  .ancla-main {
    display: flex;
    flex-direction: column;
    a,
    span {
      color: #b6b5b3;
      font-family: "Abril Fatface", cursive;
      font-weight: bolder;
      word-spacing: 5px;
      border-bottom: 1px solid #dbdad6;
      text-decoration: none;
      font-size: 1.2rem;
      padding: 10px;
    }

    span {
      color: #37404f;
    }
    a:hover {
      color: white;
      border-radius: 10px;
      background-color: #0e8684;
      transition: 0.2s;
    }
  }

  @media only screen and (max-width: 800px) {
    display: none;
  }
`;
function SideBar() {
  return (
    <StyledSideBar>
      <div className="ancla-main">
        <span>Preferences</span>
        <a href="#section1">01 Bean Type</a>
        <a href="#section2">02 Quantity</a>
        <a href="#section3">03 Grid Option</a>
        <a href="#section4">04 Deliveries</a>
      </div>
    </StyledSideBar>
  );
}

export default SideBar;
