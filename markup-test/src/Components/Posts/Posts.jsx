import React from "react";
import styled from "styled-components";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import article1 from "../../Assets/article1.jpg";
import article2 from "../../Assets/article2.jpg";
import article3 from "../../Assets/article3.jpg";

export default function Posts() {
  return (
    <Section>
      <div className="posts-menu">
        <div className="page-title">
          <h4>POSTS</h4>
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

      <div className="posts-images">
        <div className="image">
          <img src={article1} />
          <h3><a href="#">3 Myths thats confuse Top-Managers</a></h3>
          <p>February 19, 2016</p>
        </div>
        <div className="image">
          <img src={article2} />
          <h3><a href="#">How much do we spend on hot drinks</a></h3>
          <p>February 19, 2016</p>
        </div>
        <div className="image">
          <img src={article3} />
          <h3><a href="#">Good news you might have noticed</a></h3>
          <p>February 19, 2016</p>
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
    margin-left: 770px;
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
  .posts-images {
    display: flex;
    justify-content: space-between;
    margin: 30px 20px 0px 20px;
  }
  .image img {
    height: 280px;
    width: 280px;
  }
  .image h3,
  p {
    width: 280px;
  }
  .image p {
    color: #b8b8b8;
  }
  .image a {
    text-decoration: none;
    color: #000;
  }
  .image a:hover {
    text-decoration: underline;
    color: #000;
  }
`;
