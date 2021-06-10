import React from "react";
import styled from "styled-components";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import RedeemIcon from "@material-ui/icons/Redeem";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";

const StyledThirdSection = styled.div`
  margin-bottom: 150px;
  height: auto;
  .background {
    background-color: #272f37;
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    height: 60vh;
    text-align: center;
    width: auto;
    border-radius: 10px;
    margin-right: 70px;
    margin-left: 70px;
  }
  h1 {
    margin-top: 50px;
    font-family: "Abril Fatface", cursive;
    text-align: center;
    font-size: 2rem;
    font-weight: bolder;
    color: #fff;
  }
  p {
    margin-top: 35px;
    width: 60%;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    font-size: 1rem;
    color: #d8cece;
  }

  .cards-contain {
    display: flex;
    position: absolute;
    top: 250px;
    margin-bottom: 150px;
  }
  .cards {
    margin-right: 10px;
    border-radius: 15px;
    height: 350px;
    width: 300px;
    background-color: #0d8684;
  }

  .logo {
    color: white;
    margin-top: 40px;
    font-size: 5rem;
  }
  .title-cards {
    margin-top: 40px;
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 1124px) {
    .cards-contain {
      top: 310px;
      flex-wrap: wrap;
      flex-direction: column;
    }
    p {
      width: 80%;
    }
    .cards {
      width: 90%;
      margin-left: auto;
      margin-right: auto;
      height: 300px;
      margin-bottom: 10px;
    }

    .cards:last-child {
      margin-bottom: 100px;
    }
    .title-cards {
      margin-top: 15px;
    }

    @media only screen and (max-width: 800px) {
      .background {
        margin-right: 30px;
        margin-left: 30px;
      }
    }
  }
`;

function ThirdSection() {
  return (
    <StyledThirdSection>
      <div className="background">
        <section>
          <h1>Why choose us?</h1>
          <p>
            A large part of our rule is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </section>

        <div className="cards-contain">
          <div className="cards">
            <SentimentVerySatisfiedIcon className="logo" />
            <div>
              <h1 className="title-cards">Best quality</h1>
              <p>
                Discover and endless variety of the world's best artisan coffee
                from each of our roasters.
              </p>
            </div>
          </div>
          <div className="cards">
            <RedeemIcon className="logo" />
            <div>
              <h1 className="title-cards">Exclusive benefits</h1>
              <p>
                Special offers and swag when you subscribe, including 30% off
                your first shopment.
              </p>
            </div>
          </div>
          <div className="cards">
            <AirportShuttleIcon className="logo" />
            <div>
              <h1 className="title-cards">Free shipping</h1>
              <p>
                We cover the cost and coffee is delivered fast. Peak freshness:
                guaranteed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </StyledThirdSection>
  );
}

export default ThirdSection;
