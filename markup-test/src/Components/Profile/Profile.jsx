import React from "react";
import billGates from "../../Assets/bill-gates-avatar.png";
import styled from "styled-components";
import { BiExport, BiWorld } from "react-icons/bi";
import { FiLink2 } from "react-icons/fi";

export default function Profile() {
  return (
    <Section>
      <div className="image">
        <img src={billGates} alt="" />
      </div>
      <div className="profile-title">
        <h2>Bill Gates</h2>
        <p>Microsoft Founder</p>
        <p>Greater Seattle Area</p>
      </div>

      <div className="profile-buttons">
        <div className="profile-button">
          <button className="follow-btn"> Follow </button>
        </div>
        <br />
        <div className="profile-button">
          <button className="connect-btn">Connect</button>
        </div>
      </div>
      <div className="info">
        <div className="container">
          <h5>200.000</h5>
          <h3>connections</h3>
        </div>
        <div className="container" id="followers-container">
          <h5>1.9M</h5>
          <h3>followers</h3>
        </div>
      </div>

      <div className="additional-links">
        <div className="linkedin-link">
          <FiLink2 />
          <a href="#">linkedin.com/in/billgates</a>
        </div>
        <br/>
        <div className="website-link">
          <BiWorld />
          <a href="#">billgates.com</a>
        </div>
      </div>

      <div className="export-pdf">
        <BiExport />
        <a href="#">Export as PDF</a>
      </div>
    </Section>
  );
}
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: #fff;
  margin-left: 235px;
  width: fit-content;
  .image {
    max-height: 10rem;
    overflow: hidden;
    border-radius: 20rem;
    border-bottom: 0.5px solid #b8b8b8;
    img {
      height: 10rem;
      width: 10rem;
      object-fit: cover;
      border-radius: 20rem;
      transition: 0.5s ease-in-out;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
  .profile-title {
    text-align: center;
    h2 {
      color: #000;
    }
    p {
      color: #b8b8b8;
      font-weight: bold;
    }
  }
  .profile-buttons {
    display: absolute;
    justify-content: space-around;
    padding-bottom: 10px;
  }
  .profile-buttons button {
    border-radius: 20px 20px 20px 20px;
    border: none;
    font-size: 18px;
    width: 150px;
    height: 35px;
  }
  .profile-buttons .follow-btn {
    background-color: #5eb5e6;
    color: #fff;
  }
  .profile-buttons .follow-btn:hover {
    transition: 0.3s ease-in-out;
    background-color: #3a9ed8;
    cursor: pointer;
  }
  .profile-buttons .connect-btn {
    background-color: #fff;
    color: #3a9ed8;
    border: 0.5px solid #3a9ed8;
  }
  .profile-buttons .connect-btn:hover {
    transition: 0.3s ease-in-out;
    background-color: #ececec;
    cursor: pointer;
  }
  .info {
    display: flex;
    gap: 1.1rem;
    border-top: 0.5px solid #b8b8b8;
    .container {
      text-align: center;
    }
    .container h5 {
      font-size: 20px;
    }
    .container h3 {
      color: #999999;
    }
  }
  .additional-links, .export-pdf {
    margin: 5px;
    border-top: 0.5px solid #b8b8b8;
    background-color: #fff;
    display: absolute;
    align-items: center;
    gap: 1rem;
    padding-top: 10px;
  }
  .additional-links svg, .export-pdf svg {
    color: #b8b8b8;
    padding-right: 10px;
  }
  .additional-links a, .export-pdf a {
    text-decoration: none;
    color: #b8b8b8;
  }
  .export-pdf {
    color: #b8b8b8;
    padding-right: 80px;
  }
  .export-pdf a, svg {
    color: #b8b8b8;
    padding-right: 0px;
  }
`;
