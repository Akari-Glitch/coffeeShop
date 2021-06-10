import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import portada from "../../images/portada.jpg";

const StyledFirstSection = styled.div`
  margin-bottom: 150px;
  .background {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: rgba(0, 0, 0, 0.8);
    background-image: url(${portada});
    width: auto;
    border-radius: 10px;
    margin-right: 70px;
    margin-left: 70px;
    height: 83vh;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
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
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 100px;
    box-sizing: content-box;
    margin-top: 100px;
    width: 100%;
    z-index: 10;
  }
  h1 {
    font-family: "Abril Fatface", cursive;
    font-size: 3.5rem;
    letter-spacing: 5px;
    word-spacing: 10px;
    font-weight: 1200;
    color: #fff;
  }
  p {
    width: 50%;
    margin-top: 25px;
    font-size: 1rem;
    color: #d8cece;
  }

  .text-button {
    color: #fff;
    text-decoration: none;
  }

  @media only screen and (max-width: 930px) {
    .background {
      align-items: center;
    }
    section {
      margin-left: 0;
      margin-top: 30px;
      margin-bottom: 30px;
      text-align: center;
      align-items: center;
    }

    @media only screen and (max-width: 800px) {
      .background {
        margin-right: 30px;
        margin-left: 30px;
      }

      @media only screen and (max-width: 540px) {
        h1 {
          font-size: 9vw;
          letter-spacing: 3px;
          word-spacing: 8px;
        }
        p {
          width: 70%;
        }
        .background {
          height: 70vh;
        }

        @media only screen and (max-width: 400px) {
          h1 {
            font-size: 7.5vw;
          }
        }
      }
    }
  }
`;
function FirstSection() {
  return (
    <StyledFirstSection>
      <div className="background">
        <section>
          <h1>
            Great coffee <br /> made simple.
          </h1>
          <p>
            Start your mornings with the world's best coffees. Try our expertly
            curated artisan coffees from our best roasters delivery directly
            toyour door, at your schedule.
          </p>
          <div className="button">
            <Link to="/services" className="text-button">
              Create your plan
            </Link>
          </div>
        </section>
      </div>
    </StyledFirstSection>
  );
}

export default FirstSection;
