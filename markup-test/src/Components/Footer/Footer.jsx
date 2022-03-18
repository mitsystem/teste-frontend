import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <Nav>
      <div className="footer">
        <p>Linkedin Corporation © 2014</p>
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  background-color: #fff;
  margin-top: 30px;
  .footer {
    width: 100%;
    border-top: 0.5px solid #b8b8b8;
  }
  .footer p {
    color: #000;
    text-align: center;
  }
`;
