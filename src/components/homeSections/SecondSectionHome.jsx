import React from "react";
import styled from "styled-components";
import espresso from "../../images/espresso.jpg";
import piccollo from "../../images/piccollo.jpg";
import planalto from "../../images/planalto.jpg";
import danche from "../../images/danche.jpg";
const StyledSecondSection = styled.div`
  margin-bottom: 150px;
  margin-right: 70px;
  margin-left: 70px;
  .title {
    background: linear-gradient(to bottom, #3e3f41, white);
    -webkit-background-clip: text;
    text-align: center;
    font-size: 8vw;
    user-select: none;
    font-weight: bolder;
    color: transparent;
  }

  .cards-contain {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
  .espresso {
    background-image: url(${espresso});
  }
  .planalto {
    background-image: url(${planalto});
  }
  .piccollo {
    background-image: url(${piccollo});
  }

  .danche {
    background-image: url(${danche});
  }
  .cards {
    width: 240px;
    margin-right: 15px;
  }
  .img-cards {
    height: 180px;
    width: 240px;
    border-radius: 15px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .title-cards {
    margin-top: 10px;
    font-size: 1.5rem;
    font-family: "Abril Fatface", cursive;
    text-align: center;
  }

  p {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 30px;
  }
  @media only screen and (max-width: 1124px) {
    .cards-contain {
      flex-direction: column;
      align-items: center;
    }
  }
`;
function SecondSection() {
  return (
    <StyledSecondSection>
      <div>
        <h1 className="title"> Our collection </h1>
        <div className="cards-contain">
          <div className="cards">
            <div className="img-cards espresso"></div>
            <h1 className="title-cards">Gran Espresso</h1>
            <p>
              Light and flavorful blend with cocoa and black pepper for an
              intense experience.
            </p>
          </div>
          <div className="cards">
            <div className="img-cards planalto"></div>
            <h1 className="title-cards">Planalto</h1>
            <p>
              Brazilian dark roast with rich and velvety body, and hints of
              fruits and nuts.
            </p>
          </div>
          <div className="cards">
            <div className="img-cards piccollo"></div>
            <h1 className="title-cards">Piccollo</h1>
            <p>
              Mild and blend featuring notes of toasted almond and dried cherry.
            </p>
          </div>
          <div className="cards">
            <div className="img-cards danche"></div>
            <h1 className="title-cards">Danche</h1>
            <p>
              Ethiopian hand-harvested densely packed with vibrant fruit notes.
            </p>
          </div>
        </div>
      </div>
    </StyledSecondSection>
  );
}

export default SecondSection;
