import React, { useState } from "react";
import styled from "styled-components";
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

let j = 0;
function Sections(props) {
  let i = 0;

  const secciones = props.array.map((item) => (
    <>
      <input
        key={`input${item}`}
        type="radio"
        id={props.name + String(i)}
        name={props.name}
      />
      <label
        key={`label${item}`}
        className="cards"
        htmlFor={props.name + String(i)}
      >
        <h1 key={`h1${item}`} className="title-cards">
          {item}
        </h1>
        <p key={`p${item}`}>{props.arrayText[i++]}</p>
      </label>
    </>
  ));

  return (
    <StyledSection>
      <h1 className="title" key={`title${j++}`}>
        {props.title}
      </h1>
      <div className="cards-contain">{secciones}</div>
    </StyledSection>
  );
}

export default Sections;
