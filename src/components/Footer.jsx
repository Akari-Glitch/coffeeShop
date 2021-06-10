import React from "react";
import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
const StyledFooter = styled.footer`
  width: 100%;
  height: 130px;
  background: #272f37;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1,
  p {
    color: white;
    font-size: 13px;
    margin-top: 3px;
    width: 200px;
  }

  h1 {
    font-size: 1.5rem;
  }

  .text-footer {
    margin-left: 30px;
  }

  .github-icon {
    color: white;
    margin-right: 30px;
    font-size: 3rem;
  }
`;
function Footer() {
  return (
    <StyledFooter>
      <div className="text-footer">
        <h1>Coffee Shop</h1>
        <p>A project made in react. By Akari and WhiLEx117</p>
      </div>
      <a href="">
        <GitHubIcon className="github-icon" />
      </a>
    </StyledFooter>
  );
}

export default Footer;
