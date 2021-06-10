import React from "react";
import styled from "styled-components";
import uk from "../../images/UK.svg";
import canada from "../../images/canada.svg";
import australia from "../../images/australia.svg";

const StyledFourthSectionAbout = styled.div`
  margin-bottom: 150px;
  margin-left: 70px;
  margin-right: 70px;
  width: auto;
  .title {
    color: #909296;
    font-family: "Abril Fatface", cursive;
  }
  .cards-contain {
    margin-top: 50px;
    width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .cards {
    margin-right: 30px;
    width: 320px;
  }

  .maps {
    width: 200px;
    height: 200px;
  }

  .title-cards {
    font-family: "Abril Fatface", cursive;
  }
  @media only screen and (max-width: 844px) {
    margin-left: 30px;
    margin-right: 30px;
    .cards-contain {
      flex-direction: column;
      width: 100%;
      align-items: center;
    }

    .title-cards {
      text-align: center;
    }
    .title {
      text-align: center;
    }
    .cards {
      width: auto;
      margin-top: 20px;
      margin-right: 0;
    }
  }
`;
function FourthSectionAbout() {
  return (
    <StyledFourthSectionAbout>
      <h1 className="title">Our headquarters</h1>
      <div className="cards-contain">
        <div className="cards">
          <img src={uk} className="maps"></img>
          <h2 className="title-cards">UK</h2>
        </div>
        <div className="cards">
          <img src={canada} className="maps"></img>
          <h2 className="title-cards">Canada</h2>
        </div>
        <div className="cards">
          <img src={australia} className="maps"></img>
          <h2 className="title-cards">Australia</h2>
        </div>
      </div>
    </StyledFourthSectionAbout>
  );
}

export default FourthSectionAbout;
