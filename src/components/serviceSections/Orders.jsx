import React from "react";
import styled from "styled-components";
import Sections from "./Sections.jsx";

const StyledOrders = styled.div`
  position: relative;
  margin-left: 70px;
  margin-right: 70px;
`;
function Orders() {
  return (
    <StyledOrders>
      <Sections />
    </StyledOrders>
  );
}

export default Orders;
