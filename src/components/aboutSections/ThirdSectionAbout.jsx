import React from "react";
import styled from "styled-components";
import cupAbout from "../../images/cupAbout.jpg";
const StyledThirdSectionAbout = styled.div`
  margin-left: 70px;
  margin-right: 70px;
  margin-bottom: 100px;

  .background {
    background-color: #272f37;
    width: 100%;
    border-radius: 15px;
    display: flex;
    justify-content: space-around;
    height: 70vh;
  }
  section {
    margin-top: 80px;
    width: 60%;
  }
  .cupCoffee {
    background-image: url(${cupAbout});
    background-position: center center;
    width: 30%;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: auto;
    margin-left: auto;
    height: 80%;
    border-radius: 15px;
    background-repeat: no-repeat;
    background-size: cover;
  }
  h1 {
    margin-top: 50px;
    font-family: "Abril Fatface", cursive;
    text-align: center;
    font-size: 2.5rem;
    font-weight: bolder;
    color: #fff;
  }
  p {
    margin-top: 35px;
    width: 80%;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    font-size: 1rem;
    color: #d8cece;
  }
  @media only screen and (max-width: 1040px) {
    .background {
      flex-direction: column;
      height: 700px;
    }
    section {
      margin-top: 20px;
      width: 100%;
    }

    .cupCoffee {
      margin-top: 50px;
      width: 300px;
      height: 300px;
    }
    @media only screen and (max-width: 740px) {
      margin-left: 30px;
      margin-right: 30px;

      h1 {
        font-size: 2rem;
      }
      p {
        width: 99%;
      }
      .cupCoffee {
        margin-top: 50px;
        width: 250px;
        height: 250px;
      }
      @media only screen and (max-width: 440px) {
        h1 {
          font-size: 1.4rem;
        }
        @media only screen and (max-width: 320px) {
          h1 {
            font-size: 1.2rem;
          }
        }
      }
    }
  }
`;
function ThirdSectionAbout() {
  return (
    <StyledThirdSectionAbout>
      <div className="background">
        <section>
          <h1>Uncompromising quality</h1>
          <p>
            Although we work with growers who pay close attention to all stages
            of harvest and processing we employ, on our end a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent. User-friendly coffee, so that
            brewing is easy and enjoyable.
          </p>
        </section>
        <div className="cupCoffee"></div>
      </div>
    </StyledThirdSectionAbout>
  );
}

export default ThirdSectionAbout;
