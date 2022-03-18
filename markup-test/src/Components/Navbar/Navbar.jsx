import React from "react";
import linkedinLogo from "../../Assets/logo.png";
import profilePicture from "../../Assets/avatar.jpg";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { BsFillChatRightTextFill, BsFillBellFill } from "react-icons/bs";
import { MdPersonAdd } from "react-icons/md";

export default function Navbar() {
  return (
    <Nav>
      <div className="navbar-logo">
        <img src={linkedinLogo} />
      </div>

      <div className="search">
        <input type="text" placeholder="Search" />
        <BiSearch />
      </div>

      <div class="navbar-links">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Profile</a>
          </li>
          <li>
            <a href="#">Connections</a>
          </li>
          <li>
            <a href="#">Interests</a>
          </li>
          <li>
            <a href="#" id="try-premium">Try Premium</a>
          </li>
        </ul>
      </div>

      <div className="navbar-icons">
        <ul>
          <li><BsFillChatRightTextFill color="#28e228" /></li>
          <li><BsFillBellFill color="#ffff00"/></li>
          <li><MdPersonAdd color="#ff0ac2" /></li>
        </ul>
      </div>

      <div className="navbar-avatar">
        <img src={profilePicture} />
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: white;
  width: 100%;
  background-color: #fff;
  .navbar-logo {
    border-left: 0.5px solid #b8b8b8;
    border-right: 0.5px solid #b8b8b8;
    width: 15%;
    padding-top: 1rem;
  }
  .navbar-logo img {
    width: 38px;
    height: 35px;
    display: flex;
    margin-top: 30px;
    padding-left: 80%;
  }
  .navbar-links {
    flex: 1;
    text-align: left;
    border-left: 0.5px solid #b8b8b8;
    min-width: fit-content;
    padding-top: 1.5rem;
  }
  .navbar-links ul li {
    list-style: none;
    display: inline-block;
    padding: 8px 30px;
    position: relative;
  }
  .navbar-links ul li a {
    color: #000;
    text-decoration: none;
    font-size: 20px;
  }
  .navbar-links ul li::after {
    content: "";
    width: 0%;
    height: 2px;
    background: #000;
    display: block;
    margin: auto;
    transition: 0.5s;
  }
  .navbar-links ul li:hover::after {
    width: 100%;
  }
  .search {
    background-color: #fff;
    height: 10px;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 41px 20px 20px 20px;
    padding: 1rem 1rem 1rem 1rem;
    border-radius: 25px;
    border: 1px solid #000;
    svg {
      color: #000;
    }
    input {
      background-color: transparent;
      border: none;
      color: #000;
      &:focus {
        outline: none;
      }
    }
  }
  .navbar-icons {
    flex: 1;
    text-align: left;
    border-left: 0.5px solid #b8b8b8;
    padding-top: 2rem;
  }
  .navbar-icons ul li {
    list-style: none;
    display: inline-block;
    padding: 8px 20px;
    position: relative;
    font-size: 20px;
  }
  .navbar-icons ul li:hover {
    transform: scale(1.3);
    transition: 0.5s;
  }
  .navbar-avatar{
    background-color: #fff;
    border-left: 0.5px solid #b8b8b8;
    display: flex;
    align-items: left;
    gap: 1rem;
    padding: 1rem 15rem 1rem 1rem;
  }
  .navbar-avatar img {
    border-radius: 50%;
    height: 50px;
    margin-top: 20px;
  }
  #try-premium {
    color: tomato;
  }
`;
