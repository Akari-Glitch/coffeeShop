import React, { useState } from "react";
import styled from "styled-components";
import DeleteIcon from "@material-ui/icons/Delete";
const StyledSection = styled.div`
  margin-bottom: 50px;
  margin-left: 70px;
  margin-right: 70px;
  width: auto;

  .cards-contain {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cards {
    margin-right: 10px;
    margin-top: 30px;
    border-radius: 15px;
    height: 230px;
    width: 200px;
  }

  h1 {
    margin-top: 10px;
    text-align: center;
    font-family: "Abril Fatface", cursive;
    font-size: 2.3rem;
    color: #81868e;
    font-weight: bolder;
  }
  .title {
    word-spacing: 6px;
    letter-spacing: 3px;
  }
  .title-cards {
    margin-top: 30px;
    color: #37404f;
    text-align: center;
    font-size: 1.3rem;
  }
  p {
    margin-top: 15px;
    width: 85%;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
  }
  .cards {
    background: #f4f1ea;
    transition: 0.4s;
  }

  input[type="radio"] {
    display: none;
  }

  input[type="radio"]:checked + label {
    .title-cards {
      color: white;
    }
    background: #0d8684;
    color: #fff;
  }

  @media only screen and (max-width: 800px) {
    margin-left: 30px;
    margin-right: 30px;
    width: 100%;

    .cards-contain {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    h1 {
      font-size: 1.7rem;
      text-align: center;
    }
    @media only screen and (max-width: 500px) {
      margin-left: 15px;
      margin-right: 15px;
      title {
        word-spacing: 3px;
        letter-spacing: 1px;
      }
      .cards {
        width: 100%;
        margin-right: 0;
        height: 180px;
      }
      h1 {
        font-size: 1.4rem;
        width: 100%;
      }
    }
  }
`;
const StyledButton = styled.div`
  margin-bottom: 100px;
  display: flex;
  justify-content: Center;
  flex-direction: column;
  align-items: center;
  .button-contain {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  .button {
    display: flex;
    align-items: center;
    justify-content: Center;
    width: 200px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 100px;
    border-radius: 5px;
    height: 50px;
    background: #0e8684;
    transition: 0.6s;
    cursor: pointer;
  }
  .button:hover {
    transform: scale(1.1);
  }
  .text-button {
    color: #fff;
  }

  p {
    font-size: 1.4rem;
    color: red;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  svg {
    margin-left: auto;
    text-align: center;
    margin-right: auto;
    margin-top: 50px;
  }
`;

const StyledOrders = styled.div`
  margin-top: 100px;
  margin-left: 70px;
  margin-bottom: 100px;
  margin-right: 70px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .contain-cards {
    background: #f4f1ea;
    height: 350px;
    width: 250px;
    margin-right: 20px;
    margin-bottom: 30px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  h1 {
    color: #0d8684;
    font-size: 2rem;
    width: 100%;
    font-family: "Abril Fatface", cursive;
    margin-bottom: 100px;
  }
  img {
    width: 200px;
    background-color: #0c0c0c97;
    height: 150px;
    margin-right: auto;
    border-radius: 20px;
    margin-left: auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .card-order {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .button {
    align-items: flex-start;
    text-align: center;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    width: 55px;
    color: #37404f;
    height: 25px;
    cursor: pointer;
    transition: 0.6s;
  }
  .button:hover {
    transform: scale(1.1);
    color: #530d0d;
  }

  h3 {
    font-size: 24px;
    color: #b46912;
  }
  @media only screen and (max-width: 800px) {
    margin-left: 30px;
    margin-right: 30px;
    width: 100%;

    h1 {
      font-size: 1.7rem;
    }
    @media only screen and (max-width: 500px) {
      margin-left: 15px;
      margin-right: 15px;
      title {
        word-spacing: 3px;
        letter-spacing: 1px;
      }
      h1 {
        font-size: 1.4rem;
      }
    }
  }
`;
const CardCategories = {
  CardDrinkCoffee: ["Capsule", "Filter", "Espresso"],
  CardDrinkCoffeeText: [
    "Compatible with Nespresso Systems and similar brewers.",
    "for pour over or drip methods like Aeropres. Chemex, and V60.",
    "Dense and finely ground beans for an intense, flavorful experience.",
  ],
  CardTypeCoffee: ["SimpleOrigin", "Decaf", "Blended"],
  CardTypeCoffeeText: [
    "Distinct, high quality coffee from a specific family-owned farm",
    "Just like regular coffee, except the caffeine has been removed",
    "Combination of two or three dark roasted beans of organic coffees",
  ],
  CardWouldYouLike: ["200g", "500g", "1000g"],
  CardWouldYouLikeText: [
    "Perfect for the solo drinker. Yields about 12 delicious cups.",
    "Perfect option for a couple. Yields about 40 delectable cups.",
    "Perfect for offices and events. Yields about 90 delightful cups.",
  ],
  CardGrindThem: ["Wholebean", "Filter", "Cafetiére"],
  CardGrindThemText: [
    "Best choice if you cherish the full sensory experience.",
    "For drip or pour-over coffee methods such as V60 or Aeropress.",
    "Course ground beans specially suited for french press coffee.",
  ],
  CardDelivere: ["Every week", "Every 2 week", "Every month"],
  CardsDelivereText: [
    "$14,00 per shipment. Includes free first-class shipping.",
    "$17.25 per shipment. Includes free priority shipping.",
    "$22.50 per shipment. Includes free priority shipping.",
  ],
};

let section1 = false;
let section2 = false;
let section3 = false;
let section4 = false;
let section5 = false;

let arrayValues = ["", "", "", "", ""];
function Sections() {
  const [validation, setValidation] = useState(0);
  const [coffees, setCoffees] = useState([]);
  const handleCheck = (e) => {
    if (e.target.name == "sect1") {
      section1 = true;
      arrayValues[0] = e.target.value;
    }
    if (e.target.name == "sect2") {
      section2 = true;
      arrayValues[1] = e.target.value;
    }
    if (e.target.name == "sect3") {
      section3 = true;
      arrayValues[2] = e.target.value;
    }
    if (e.target.name == "sect4") {
      section4 = true;
      arrayValues[3] = e.target.value;
    }
    if (e.target.name == "sect5") {
      section5 = true;
      arrayValues[4] = e.target.value;
    }
  };

  const handleDisplayCoffee = () => {
    setValidation(3);
    setTimeout(() => {
      if (section1 && section2 && section3 && section4 && section5) {
        setCoffees([
          {
            coffee: arrayValues[0],
            type: arrayValues[1],
            much: arrayValues[2],
            grind: arrayValues[3],
            id: `${coffees.length + 1}`,
          },
          ...coffees,
        ]);

        setValidation(2);
      } else {
        setValidation(1);
      }
    }, 1000);
  };

  const handleDeleteCard = (id) => {
    const DeleteCard = document.getElementById(id);
    DeleteCard.style.display = "none";
  };
  function secciones(name, array, arrayText) {
    let i = 0;
    return array.map((item) => (
      <>
        <input
          type="radio"
          onChange={handleCheck}
          id={name + String(i)}
          name={name}
          value={item}
        />
        <label className="cards" htmlFor={name + String(i)}>
          <h1 className="title-cards">{item}</h1>
          <p>{arrayText[i++]}</p>
        </label>
      </>
    ));
  }

  return (
    <>
      <StyledSection>
        <h1 className="title">Which do you drink coffee?</h1>
        <div className="cards-contain">
          {secciones(
            "sect1",
            CardCategories.CardDrinkCoffee,
            CardCategories.CardDrinkCoffeeText
          )}
        </div>
      </StyledSection>
      <StyledSection>
        <h1 className="title">What type of coffee?</h1>
        <div className="cards-contain">
          {secciones(
            "sect2",
            CardCategories.CardTypeCoffee,
            CardCategories.CardTypeCoffeeText
          )}
        </div>
      </StyledSection>
      <StyledSection>
        <h1 className="title">Which do you drink coffee?</h1>
        <div className="cards-contain">
          {secciones(
            "sect3",
            CardCategories.CardWouldYouLike,
            CardCategories.CardWouldYouLikeText
          )}
        </div>
      </StyledSection>
      <StyledSection>
        <h1 className="title">Which do you drink coffee?</h1>
        <div className="cards-contain">
          {secciones(
            "sect4",
            CardCategories.CardGrindThem,
            CardCategories.CardGrindThemText
          )}
        </div>
      </StyledSection>
      <StyledSection>
        <h1 className="title">Which do you drink coffee?</h1>
        <div className="cards-contain">
          {secciones(
            "sect5",
            CardCategories.CardDelivere,
            CardCategories.CardsDelivereText
          )}
        </div>
      </StyledSection>

      <StyledButton>
        <div className="button-contain" onClick={handleDisplayCoffee}>
          <div className="button">
            <span className="text-button">Create my plan</span>
          </div>
        </div>

        {validation === 3 && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            styles="margin: auto; background: rgb(241, 242, 243); display: block; shape-rendering:"
            width="100px"
            height="100px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
          >
            <circle
              cx="50"
              cy="50"
              r="32"
              strokeWidth="8"
              stroke="#0e8684"
              strokeDasharray="50.26548245743669 50.26548245743669"
              fill="none"
              strokeLinecap="round"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                dur="1s"
                repeatCount="indefinite"
                keyTimes="0;1"
                values="0 50 50;360 50 50"
              ></animateTransform>
            </circle>
            <circle
              cx="50"
              cy="50"
              r="23"
              strokeWidth="8"
              stroke="#fdd5b9"
              strokeDasharray="36.12831551628262 36.12831551628262"
              strokeDashoffset="36.12831551628262"
              fill="none"
              strokeLinecap="round"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                dur="1s"
                repeatCount="indefinite"
                keyTimes="0;1"
                values="0 50 50;-360 50 50"
              ></animateTransform>
            </circle>
          </svg>
        )}
        {validation === 1 && <p>Finish the form please</p>}
      </StyledButton>

      <StyledOrders>
        <h1>Your orders: </h1>
        {coffees.map((item) => (
          <div class="contain-cards" id={item.id} key={item.id}>
            <img src={`images/${item.type}.png`}></img>
            <div className="card-order">
              <p>
                <b>Coffee: </b>
                {item.coffee}
              </p>
              <p>
                <b>Type: </b>
                {item.type}
              </p>
              <p>
                <b>Much: </b>
                {item.much}
              </p>
              <p>
                <b>Grind: </b>
                {item.grind}
              </p>

              <div className="button" onClick={() => handleDeleteCard(item.id)}>
                <DeleteIcon />
              </div>
            </div>
          </div>
        ))}
      </StyledOrders>
    </>
  );
}

export default Sections;
