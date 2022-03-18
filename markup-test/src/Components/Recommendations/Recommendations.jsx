import React from "react";
import styled from "styled-components";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import avatar1 from "../../Assets/avatar.jpg";
import avatar2 from "../../Assets/avatar2.jpg";
import avatar3 from "../../Assets/avatar3.jpg";

export default function Posts() {
  return (
    <Section>
      <div className="posts-menu">
        <div className="page-title">
          <h4>RECOMMENDATIONS</h4>
        </div>
        <div className="page-arrows">
          <a href="#">
            <IoIosArrowDropleft />
          </a>
          <a href="#">
            <IoIosArrowDropright />
          </a>
        </div>
      </div>

      <div className="recommendation-section">
        <div className="recommendations">
          <div className="text-recommendation">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              ratione hic cupiditate alias sapiente expedita! Nesciunt,
              excepturi. Non facilis at praesentium quo repellendus quia
              molestias! Harum molestias similique quis perspiciatis.
            </p>
          </div>
          <div className="image">
            <img src={avatar1} />
          </div>
          <div className="subtitle">
            <h3>Steve Jobs</h3>
          </div>
          <div className="subtitle">
            <p>Apple</p>
          </div>
        </div>
        <div className="recommendations">
          <div className="text-recommendation">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              ratione hic cupiditate alias sapiente expedita! Nesciunt,
              excepturi. Non facilis at praesentium quo repellendus quia
              molestias! Harum molestias similique quis perspiciatis.
            </p>
          </div>
          <div className="image">
            <img src={avatar2} />
          </div>
          <div className="subtitle">
            <h3>Mark Zuckerberg</h3>
          </div>
          <div className="subtitle">
            <p>Facebook</p>
          </div>
        </div>
        <div className="recommendations">
          <div className="text-recommendation">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              ratione hic cupiditate alias sapiente expedita! Nesciunt,
              excepturi. Non facilis at praesentium quo repellendus quia
              molestias! Harum molestias similique quis perspiciatis.
            </p>
          </div>
          <div className="image">
            <img src={avatar3} />
          </div>
          <div className="subtitle">
            <h3>Jeffrey Bezos</h3>
          </div>
          <div className="subtitle">
            <p>Amazon</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
  background-color: #fff;
  margin-left: 0px;
  height: fit-content;
  .posts-menu {
    border-bottom: 0.5px solid #b8b8b8;
    height: 80px;
    width: 100%;
    display: flex;
  }
  .page-title h4 {
    font-size: 22px;
    margin-left: 20px;
  }
  .page-arrows {
    margin-left: 620px;
    padding-top: 22px;
  }
  .page-arrows svg {
    font-size: 40px;
    color: #5eb5e6;
  }
  .page-arrows svg:hover {
    font-size: 40px;
    transform: scale(1.08);
    transition: 0.3s ease-in-out;
  }
  .recommendation-section {
    display: flex;
    justify-content: space-between;
    margin: 30px -35px 0px 20px;
  }
  .recommendations h3,
  p {
    width: 230px;
  }
  .recommendations p {
    color: #b8b8b8;
  }
  .text-recommendation {
    height: 200px;
    width: 200px;
    border: 0.5px solid #000;
    border-radius: 10px 10px 10px 0px;
    padding: 10px;
    background-color: #fff;
  }
  .text-recommendation p {
    color: #000;
    height: 200px;
    width: 200px;
  }
  .image {
    margin-left: -20px;
    display: flex;
  }
  .image img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    padding: 10px;
    margin-top: 10px;
  }
  .subtitle h3 {
    display: flex;
    margin-top: -55px;
    margin-left: 50px;
  }
  .subtitle p {
    display: flex;
    max-width: 10px;
    margin-left: 50px;
    margin-top: -10px;
  }
`;
