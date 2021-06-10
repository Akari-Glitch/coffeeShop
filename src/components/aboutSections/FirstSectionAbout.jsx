import React from "react";
import styled from "styled-components";
import coffeeAbout from "../../images/coffeeAbout.jpg";

const StyledFirstSectionAbout = styled.div`
  margin-bottom: 150px;
  margin-right: 70px;
  margin-left: 70px;
  .background {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: rgba(0, 0, 0, 0.8);
    background-image: url(${coffeeAbout});
    width: auto;
    border-radius: 10px;

    height: 65vh;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
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
  @media only screen and (max-width: 800px) {
    margin-right: 30px;
    margin-left: 30px;
    margin-bottom: 100px;
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

    @media only screen and (max-width: 540px) {
      h1 {
        font-size: 9vw;
        letter-spacing: 3px;
        word-spacing: 8px;
      }

      .background {
        height: 55vh;
      }
      p {
        width: 70%;
      }

      @media only screen and (max-width: 400px) {
        h1 {
          font-size: 7.5vw;
        }
      }
    }
  }
`;
function FirstSectionAbout() {
  return (
    <StyledFirstSectionAbout>
      <div className="background">
        <section>
          <h1>About Us</h1>
          <p>
            Cofferoasters began its journey of exotic discovery in 1999,
            highlighting stories of coffee from around the world. We have since
            been dedicated to bring the perfect cup from bean to brew in every
            shipment.
          </p>
        </section>
      </div>
    </StyledFirstSectionAbout>
  );
}

export default FirstSectionAbout;
