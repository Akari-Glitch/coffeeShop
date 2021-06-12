import React, { useState } from "react";
import styled from "styled-components";

const StyledMyOrder = styled.div`
  margin-bottom: 100px;
  .button-contain {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  .button {
    display: flex;
    align-items: center;
    justify-content: Center;
    width: 200px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 100px;
    border-radius: 5px;
    height: 50px;
    background: #0e8684;
    transition: 0.6s;
    cursor: pointer;
  }
  .button:hover {
    transform: scale(1.1);
  }
  .text-button {
    color: #fff;
  }
`;
function MyOrder() {
  return (
    <StyledMyOrder>
      <div onClick="" className="button-contain">
        <div className="button">
          <span className="text-button">Create my plan</span>
        </div>
      </div>
    </StyledMyOrder>
  );
}

export default MyOrder;
