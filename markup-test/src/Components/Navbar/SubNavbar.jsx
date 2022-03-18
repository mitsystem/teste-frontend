import React from "react";
import linkedinLogo from "../../Assets/logo.png";
import profilePicture from "../../Assets/avatar.jpg";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { BsFillChatRightTextFill, BsFillBellFill } from "react-icons/bs";
import { MdPersonAdd } from "react-icons/md";

export default function SubNavbar() {
  return (
    <SubNav>
      <div class="subnav-options">
        <ul>
          <li>
            <span className="option">
              <a href="#">Posts</a>
            </span>
          </li>
          <li>
            <span>
              <a href="#">Background</a>
            </span>
          </li>
          <li>
            <a href="#">Recommendations</a>
          </li>
          <li>
            <a href="#">Following</a>
          </li>
        </ul>
      </div>
    </SubNav>
  );
}

const SubNav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: white;
  width: 100%;
  background-color: #fff;
  border-top: 0.5px solid #b8b8b8;
  .subnav-options {
    flex: 1;
    text-align: left;
    padding-top: 0.5rem;
    height: 60px;
    margin-left: 150px;
  }
  .subnav-options ul li {
    list-style: none;
    display: inline-block;
    padding: 8px 30px;
    position: relative;
  }
  .subnav-options ul li a {
    color: #000;
    text-decoration: none;
    font-size: 20px;
  }
  .subnav-options ul li::after {
    content: "";
    width: 0%;
    height: 2px;
    background: #0091ff;
    display: block;
    margin: auto;
    transition: 0.5s;
  }
  .subnav-options ul li:hover::after {
    width: 100%;
  }
`;
