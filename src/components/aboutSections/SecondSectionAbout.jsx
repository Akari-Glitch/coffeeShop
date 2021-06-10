import React from "react";
import styled from "styled-components";
import mesero from "../../images/mesero.png";
const StyledSecondSectionAbout = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 100px;
  margin-right: 70px;
  margin-bottom: 100px;
  .background {
    background-image: url(${mesero});
    width: 350px;
    height: 500px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .text {
    width: 50%;
    margin-top: 80px;
  }
  h1 {
    font-family: "Abril Fatface", cursive;
    color: #2d2e36;
    font-size: 2.5rem;
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 1040px) {
    flex-direction: column;
    align-items: center;
    margin-left: 70px;
    .text {
      margin-top: 30px;
      width: 100%;
    }
    h1 {
      text-align: center;
    }
    @media only screen and (max-width: 740px) {
      margin-left: 30px;
      margin-right: 30px;
      .background {
        width: 95%;
      }
      .text {
        margin-top: 10px;
      }
    }
  }
`;
function SecondSectionAbout() {
  return (
    <StyledSecondSectionAbout>
      <div className="background"></div>
      <section className="text">
        <h1>Our commitment</h1>
        <p>
          We're built on a simple mission and a comitment to doing good along
          the way. We want to make it easy for you to discover and brew the
          world's best coffee at home. It all starts at the source. To locate
          the spcecific lots we want to purchase, we travel nearly 80 days a
          year trying to understand the challenges and opportunities in each of
          these places. We colloborate with exceptional coffee growers and
          empower a global community of farmers through with well above
          fair-trade benchmarks. We also offer training support farm community
          initatives and invest in coffee plant science. Curating only the
          finest blends we roast each lot to highlight tasting profiles
          distinctive to their native growing region.
        </p>
      </section>
    </StyledSecondSectionAbout>
  );
}

export default SecondSectionAbout;
