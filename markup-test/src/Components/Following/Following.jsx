import React from "react";
import styled from "styled-components";
import { IoIosAddCircleOutline } from "react-icons/io";
import amazon from "../../Assets/logo-amazon.jpg";
import microsoft from "../../Assets/logo-microsoft.png";

export default function Following() {
  return (
    <Section>
      <div className="posts-menu">
        <div className="page-title">
          <h4>FOLLOWING</h4>
        </div>
      </div>
      <div className="posts-images">
        <div className="image">
          <div className="image-border">
            <img src={microsoft} />
          </div>{" "}
          <h3>Microsoft</h3>
          <div className="follow-write">
          <p><a href="#">Follow</a></p>
        </div>
        <div className="follow-icon">
            <IoIosAddCircleOutline/>
        </div>
        </div>
        <div className="image">
          <div className="image-border">
            <img src={amazon} />
          </div>{" "}
          <h3>Amazon</h3>
          <div className="follow-write">
          <p><a href="#">Follow</a></p>
        </div>
        <div className="follow-icon">
            <IoIosAddCircleOutline/>
        </div>
        </div>
        <div className="image">
          <div className="image-border">
            <img src={microsoft} />
          </div>{" "}
          <h3>Microsoft</h3>
          <div className="follow-write">
          <p><a href="#">Follow</a></p>
        </div>
        <div className="follow-icon">
            <IoIosAddCircleOutline/>
        </div>
        </div>
        <div className="image">
          <div className="image-border">
            <img src={amazon} />
          </div>
          <h3>Amazon</h3>
          <div className="follow-write">
          <p><a href="#">Follow</a></p>
        </div>
        <div className="follow-icon">
            <IoIosAddCircleOutline/>
        </div>
        <div className="following-button">
          <button className="seeall-button">See all (20)</button>
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
  max-width: 952px;
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
  .posts-images {
    display: flex;
    margin: 30px 20px 0px 10px;
  }
  .image img {
    height: 50px;
    width: 130px;
    margin: 30px 0px 20px 40px;
  }
  .image h3,
  p {
    width: 195px;
  }
  .image p {
    color: #b8b8b8;
  }
  .image-border {
    height: 100px;
    width: 200px;
    border: 0.5px solid #b8b8b8;
    padding: 10px;
    background-color: #fff;
  }
  .follow-write p {
    display: flex;
    margin-left: 40px;
    font-size: 20px;
    color: #5eb5e6;
  }
  .follow-write a {
    text-decoration: none;
    color: #5eb5e6;
  }
  .follow-write a:hover {
    text-decoration: underline;
  }
  .follow-icon svg {
    color: #5eb5e6;
    display: flex;
    margin-top: -44px;
    height: 30px;
    width: 30px;
  }
  .following-button {
    display: absolute;
    justify-content: space-around;
    padding: 30px 0px;
    margin-left: -700px;
  }
  .following-button button {
    border-radius: 20px 20px 20px 20px;
    border: none;
    font-size: 18px;
    width: 150px;
    height: 35px;
  }
  .following-button .seeall-button {
    background-color: #fff;
    color: #3a9ed8;
    border: 0.5px solid #3a9ed8;
  }
  .following-button .seeall-button:hover {
    transition: 0.3s ease-in-out;
    background-color: #ececec;
    cursor: pointer;
  }
`;
