import React from "react";
import styled from "styled-components";
import { FaClipboardList, FaUniversity } from "react-icons/fa";
import { MdWork, MdOutlineLightbulb, MdOutlineStarPurple500 } from "react-icons/md";
import { BsCircle } from "react-icons/bs";
import microsoft from "../../Assets/logo-microsoft.png";
import youtube from "../../Assets/logo-youtube.png";
import avatar1 from "../../Assets/avatar.jpg";
import avatar2 from "../../Assets/avatar2.jpg";
import avatar3 from "../../Assets/avatar3.jpg";

export default function Background() {
  return (
    <Section>
      <div className="background-menu">
        <div className="page-title">
          <h4>BACKGROUND</h4>
        </div>
      </div>

      <div className="posts-images">
        <div className="clipboard-summary">
          <div className="title">
            <FaClipboardList />
            <h4>Summary</h4>
          </div>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              ratione hic cupiditate alias sapiente expedita! Nesciunt,
              excepturi. Non facilis at praesentium quo repellendus quia
              molestias! Harum molestias similique quis perspiciatis. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Libero ratione
              hic cupiditate alias sapiente expedita! Nesciunt, excepturi. Non
              facilis at praesentium quo repellendus quia molestias! Harum
              molestias similique quis perspiciatis.
            </p>
          </div>

          <br />

          <div className="title">
            <MdWork />
            <h4>Experience</h4>
          </div>
          <div className="experience-content">
            <span className="experience-date">
              <p>2000 - PRESENT</p>
            </span>
            <span className="experience-position">
              <p>Co-Founder, Chairman</p>
            </span>
            <span className="experience-company">
              <p><a href="">Microsoft</a></p>
              <img src={microsoft} height="50px" width="140px" />
            </span>
            <span className="experience-date">
              <p>1992 - 1999</p>
            </span>
            <span className="experience-position">
              <p>Senior Developer</p>
            </span>
            <span className="experience-company">
              <p><a href="">YouTube</a></p>
              <img src={youtube} height="30px" width="130px" />
            </span>
          </div>

          <br />

          <div className="title">
            <FaUniversity />
            <h4>Education</h4>
          </div>
          <div className="education-content">
            <span className="education-date">
              <p>1973 - 1975</p>
            </span>
            <span className="education-school">
              <p>Harvard University</p>
            </span>
            <span className="education-course">
              <p>BS Computer Sciense</p>
            </span>
            <span className="education-date">
              <p>1960 - 1973</p>
            </span>
            <span className="education-school">
              <p>Lakeside School, Seattle</p>
            </span>
          </div>

          <br />

          <div className="title">
            <MdOutlineLightbulb />
            <h4>Skills</h4>
          </div>
          <div className="skills-content">
            <span className="circle">
              <BsCircle />
              <p>74</p>
            </span>
            <p id="skill">Social Media Marketing</p>
            <br/>
            <span className="circle">
              <BsCircle />
              <p>67</p>
            </span>
            <p id="skill">Web Development</p>
            <div className="side-images1">
              <img src={avatar1} />
              <img src={avatar2} />
              <img src={avatar3} />
              <span><p>71+</p></span>
            </div>
            <div className="side-images2">
              <img src={avatar1} />
              <img src={avatar2} />
              <img src={avatar3} />
              <span><p>17+</p></span>
            </div>

            <br/>

            <div className="title">
            <MdOutlineStarPurple500 />
            <h4>Interests</h4>
          </div>
          <div className="interests-list">
            <a href="#">Wireless Industry</a>
            <a href="#">Photography</a>
            <a href="#">Web Design</a>
            <a href="#">Technology</a>
          </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
  background-color: #fff;
  margin-top: -255px;
  height: fit-content;
  .background-menu {
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
    justify-content: space-between;
    margin: 30px 20px 0px 20px;
  }
  .clipboard-summary {
    margin-left: 10px;
    padding-top: 22px;
  }
  .clipboard-summary .title {
    display: flex;
  }
  .clipboard-summary .title h4 {
    font-size: 25px;
    margin-top: 0px;
    padding-left: 20px;
  }
  .clipboard-summary .title svg {
    font-size: 30px;
    color: #000;
  }
  .clipboard-summary .content p {
    padding-left: 50px;
    width: calc(100% - 50px);
    font-size: 18px;
    margin-top: -10px;
  }
  .clipboard-summary .experience-date p {
    padding-left: 50px;
    font-size: 14px;
    margin-top: -10px;
    color: #a7a7a7;
    width: 280px;
  }
  .clipboard-summary .experience-position p {
    padding-left: 50px;
    font-size: 18px;
    margin-top: 10px;
    color: #000;
    width: 280px;
  }
  .clipboard-summary .experience-company,
  .education-school {
    display: flex;
  }
  .clipboard-summary .experience-company p {
    padding-left: 50px;
    font-size: 18px;
    margin-top: -5px;
    color: #5eb5e6;
    width: 280px;
  }
  .clipboard-summary .experience-company a {
   text-decoration: none;
   color: #5eb5e6;
  }
  .clipboard-summary .experience-company a:hover {
    text-decoration: underline;
   }
  .clipboard-summary .experience-company img {
    margin-top: -50px;
    margin-left: 400px;
    position: relative;
  }
  .clipboard-summary .education-date p {
    padding-left: 50px;
    font-size: 14px;
    margin-top: -10px;
    color: #a7a7a7;
  }
  .clipboard-summary .education-school p {
    padding-left: 50px;
    font-size: 18px;
    margin-top: 10px;
    color: #000;
  }
  .clipboard-summary .education-course p {
    padding-left: 50px;
    font-size: 18px;
    margin-top: -5px;
    color: #5eb5e6;
  }
  .title {
    padding-top: 5px;
  }
  .skills-content .circle {
    padding-left: 55px;
  }
  .skills-content .circle p {
    padding-left: 70px;
    margin-top: -36px;
    font-weight: bold;
    padding-bottom: 10px;
  }
  .skills-content .circle svg {
    font-size: 50px;
    color: #000;
  }
  #skill {
    display: flex;
    font-size: 20px;
    margin-top: -45px;
    padding-left: 130px;
  }
  .side-images1 {
    margin-left: 500px;
    display: flex;
  }
  .side-images1 img {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    padding: 10px;
    margin-top: -150px;
  }
  .side-images1 span {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    padding: 10px;
    margin-top: -140px;
    background-color: #b8b8b8;
  }
  .side-images1 span p {
    color: #000;
    margin-left: 9px;
    margin-top: 10px;
    font-weight: bold;
  }
  .side-images2 {
    margin-left: 500px;
    display: flex;
  }
  .side-images2 img {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    padding: 10px;
    margin-top: -60px;
  }
  .side-images2 span {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    padding: 10px;
    margin-top: -50px;
    background-color: #b8b8b8;
  }
  .side-images2 span p {
    color: #000;
    margin-left: 9px;
    margin-top: 10px;
    font-weight: bold;
  }
  .interests-list {
    display: flex;
    margin-bottom: 50px;
  }
  .interests-list a {
    text-decoration: none;
    color: #000;
    border-radius: 5px;
    background-color: #d8d8d8;
    margin-left: 15px;
    padding: 2px 5px 2px 5px;
  }
  .interests-list a:hover {
    background-color: #cfcfcf;
    transition: 0.4s ease-in-out;
  }
`;
