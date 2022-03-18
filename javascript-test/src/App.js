import React, { useState } from "react";
import styled from "styled-components";

export default function App() {
  const [font, setFont] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    var selectedFont = document.querySelector("#number").value;
    setFont(selectedFont);
    if (selectedFont == 1 || selectedFont == 2 || selectedFont == 3) {
      setFont(selectedFont);
    } else {
      window.alert("Opção inválida.");
    }
  };

  const FontChosen = () => {
    var text = "";
    if (font == "1") {
      text = "Positive content.";
    } else if (font == "2") {
      text = "Negative content.";
    } else if (font == "3") {
      text = "Neutral content.";
    }
    return text;
  };

  return (
    <Section>
      <div className="App">
        <div className="white-area">
          <div className="index-input">
            <form onSubmit={handleSubmit}>
              <input type="number" id="number" placeholder="Enter tab index" />
              <input type="submit" id="button" value="Change tab" />
            </form>
          </div>
          <div className="font-options">
            <button
              className="number"
              id="option"
              type="button"
              value="POSITIVE"
              onClick={() => setFont("1")}
            >
              POSITIVE
            </button>

            <button
              className="number"
              id="option"
              type="button"
              value="NEGATIVE"
              onClick={() => setFont("2")}
            >
              NEGATIVE
            </button>
            <button
              className="number"
              id="option"
              type="button"
              value="NEUTRAL"
              onClick={() => setFont("3")}
            >
              NEUTRAL
            </button>
          </div>
          <div className="actual-word">
            <FontChosen />
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  background-color: #0055ff;
  width: 100%;
  height: 100vh;
  .white-area {
    width: 800px;
    height: 400px;
    background-color: #fff;
    position: absolute;
    top: 35%;
    left: 35%;
    margin-top: -100px;
    margin-left: -100px;
    border-radius: 10px 10px;
  }
  .index-input {
    background-color: #fff;
    height: 10px;
    display: flex;
    margin: 100px;
    #button {
      margin-left: 20px;
      color: #fff;
      background-color: #b8b8b8;
      border: none;
      border-radius: 20px 20px;
      font-size: 30px;
      cursor: pointer;
      &:hover {
        background-color: #949494;
        transition: 0.3s ease-in-out;
      }
    }
    input {
      background-color: transparent;
      border: none;
      border-bottom: 1px solid #000;
      color: #000;
      font-size: 30px;
      &:focus {
        outline: none;
      }
    }
  }
  .font-options {
    margin-left: 12%;
    justify-content: space-between;
    button {
      background-color: transparent;
      color: #b8b8b8;
      font-size: 30px;
      font-weight: bold;
      border: none;
      cursor: pointer;
      &:hover {
        color: #000;
        transition: 0.3s ease-in-out;
      }
      &:focus {
        color: #000;
      }
    }
  }
  .actual-word {
    margin: 60px 100px;
    font-size: 30px;
  }
`;
