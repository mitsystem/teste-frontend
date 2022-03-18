import React from "react";
import avatar1 from "../../Assets/avatar.jpg";
import avatar2 from "../../Assets/avatar2.jpg";
import avatar3 from "../../Assets/avatar3.jpg";
import styled from "styled-components";

export default function LateralSection() {
  return (
    <Section>
      <div className="lateral-section">
        <h3>PEOPLE ALSO VIEWED</h3>
        <div className="also-viewed">
          <img src={avatar1} />
          <h4>Sergey Brin</h4>
        </div>
        <span className="company">
          <p>Google</p>
        </span>
        <div className="also-viewed">
          <img src={avatar2} />
          <h4>Jeffrey Bezos</h4>
        </div>
        <span className="company">
          <p>Amazon</p>
        </span>
        <div className="also-viewed">
          <img src={avatar3} />
          <h4>Steve Jobs</h4>
        </div>
        <span className="company">
          <p>Apple</p>
        </span>
        <div className="more-influencers">
          <h3>MORE INFLUENCERS</h3>
          <div className="influencers-card">
            <img src={avatar3}/>
            <h4>Steve Jobs</h4>
            <p>Apple</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-left: 30px;
  width: 260px;
  .lateral-section {
    background-color: #f6f8f9;
    padding: 10px 50px 10px 0px;
  }
  .also-viewed {
    display: flex;
    padding-top: 40px;
    img {
      height: 60px;
      width: 60px;
      border-radius: 50%;
    }
    h4 {
      padding-left: 10px;
      width: 120px;
    }
    p {
      justify-content: space-around;
    }
  }
  .company p {
    display: absolute;
    margin-top: -5px;
    padding-left: 90px;
    color: #b8b8b8;
  }
  .more-influencers h3 {
    padding-top: 40px;
  }
  .influencers-card {
    display: block;
    margin-left: 40px;
    img {
      height: 90px;
      width: 90px;
      border-radius: 50%;
    }
    h4 {
      padding-left: 5px;
      font-size: 20px;
    }
    p{
      padding-left: 30px;
    }
`;
