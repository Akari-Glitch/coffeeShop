import React from "react";
import FourthSectionHome from "../homeSections/FourthSectionHome.jsx";
import styled from "styled-components";

const StyledFourthSectionHome = styled.div`
  margin-top: 100px;
  margin-bottom: 150px;
  margin-left: 70px;
  margin-right: 70px;
  border-radius: 15px;
  padding-top: 30px;
  height: 520px;
  padding-bottom: 50px;
  width: auto;
  background: #272f37;

  .title {
    color: #909296;
  }

  .title-cards {
    margin-top: 20px;
    margin-bottom: 30px;
    color: #fff;
    font-family: "Abril Fatface", cursive;
  }
  .number {
    font-size: 3.5rem;
    font-family: "Lobster", cursive;
    color: #fbc7a2;
  }
  .cards-contain {
    margin-top: 80px;
    width: 100%;
    margin-right: 50px;
    margin-left: 50px;
    display: flex;
    align-items: center;
  }

  .cards {
    margin-right: 45px;
    width: 320px;
  }
  .bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    margin-right: 50px;
    margin-left: 50px;
    width: 50%;
    height: 3px;
    background: #fdd5b9;
  }

  .bar-circle {
    border-radius: 30px;
    width: 25px;
    height: 25px;
    border: 4px solid #0e8684;
  }

  p {
    width: 270px;
    color: #fff;
  }

  @media only screen and (max-width: 1124px) {
    height: Auto;
    margin-left: 30px;
    margin-right: 30px;
    padding-top: 50px;
    .bar {
      width: auto;
      margin: 0;
      margin-left: 150px;
      margin-right: 150px;
    }
    .cards-contain {
      flex-direction: column;
      width: 100%;
      justify-content: center;
      text-align: center;
      margin: 0;
      margin-top: 50px;
    }
    p {
      text-align: center;
      margin-right: auto;
      margin-left: auto;
      width: 50%;
    }
    .cards {
      margin-bottom: 30px;
      width: 100%;
      margin-right: 0;
    }

    @media only screen and (max-width: 824px) {
      .bar {
        margin-left: 50px;
        margin-right: 50px;
      }
      @media only screen and (max-width: 524px) {
        p {
          margin-right: 20px;
          margin-left: 20px;
          width: auto;
        }
      }
    }
  }
`;
function SecondSectionService() {
  return (
    <StyledFourthSectionHome>
      <div className="bar">
        <div className="bar-circle"></div>
        <div className="bar-circle"></div>
        <div className="bar-circle"></div>
      </div>
      <div className="cards-contain">
        <div className="cards">
          <h1 className="number">01</h1>
          <h2 className="title-cards">Pick your coffee</h2>
          <p>
            Select from our evolving range of artisan coffees. Our beans are
            ethically sourced and we pay fair prices for them. There are new
            coffees in all profiles every month for you to try out.
          </p>
        </div>
        <div className="cards">
          <h1 className="number">02</h1>
          <h2 className="title-cards">Choose the frequency</h2>
          <p>
            Customize your order frequency, quantity, even your roast style and
            grind type. Pause, skip or cancel your subscription with no
            commitment through our online portal.
          </p>
        </div>
        <div className="cards">
          <h1 className="number">03</h1>
          <h2 className="title-cards">Receive and enjoy!</h2>
          <p>
            We ship your package within 48 hoyrs, freshly roasted. Sit back and
            enjoy award-winning world-class coffees curated to provide a
            distinct tasting experience.
          </p>
        </div>
      </div>
    </StyledFourthSectionHome>
  );
}

export default SecondSectionService;
