import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledFourthSection = styled.div`
  margin-top: 300px;
  margin-bottom: 150px;
  margin-left: 70px;
  margin-right: 70px;
  width: auto;
  .title {
    color: #909296;
  }

  .title-cards {
    margin-top: 20px;
    margin-bottom: 30px;
    color: #333c4c;
    font-family: "Abril Fatface", cursive;
  }
  .number {
    font-size: 3.5rem;
    font-family: "Lobster", cursive;
    color: #fbc7a2;
  }
  .cards-contain {
    margin-top: 100px;
    width: 85%;
    display: flex;
    justify-content: space-between;
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
    margin-top: 70px;
    width: 50%;
    height: 3px;
    background: #fdd5b9;
  }

  .bar-circle {
    border-radius: 30px;
    width: 25px;
    background: white;
    height: 25px;
    border: 2px solid #0e8684;
  }

  p {
    width: 270px;
  }
  .button {
    display: flex;
    align-items: center;
    justify-content: Center;
    width: 200px;
    margin-top: 50px;
    border-radius: 5px;
    height: 50px;
    background: #0e8684;
    transition: 0.6s;
  }

  .button:hover {
    transform: scale(1.1);
  }
  .text-button {
    color: #fff;
    text-decoration: none;
  }
  @media only screen and (max-width: 1124px) {
    margin-top: 950px;
    margin-left: 30px;
    margin-right: 30px;
    .cards-contain {
      flex-direction: column;
      width: 100%;
      align-items: flex-start;
    }

    .cards {
      margin-bottom: 30px;
      width: 100%;
      margin-right: 0;
    }

    @media only screen and (max-width: 824px) {
      .bar {
        width: 100%;
      }
    }
  }
`;
function FourthSection() {
  return (
    <StyledFourthSection>
      <h1 className="title">How it works</h1>
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
      <div className="button">
        <Link to="/services" className="text-button">
          Create your plan
        </Link>
      </div>
    </StyledFourthSection>
  );
}

export default FourthSection;
