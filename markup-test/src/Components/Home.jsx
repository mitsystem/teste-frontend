import React from "react";
import styled from "styled-components";
import Background from "./Background/Background";
import LateralSection from "./LateralSection/LateralSection";
import Navbar from "./Navbar/Navbar";
import SubNavbar from "./Navbar/SubNavbar";
import Posts from "./Posts/Posts";
import Profile from "./Profile/Profile";
import Recommendations from "./Recommendations/Recommendations";
import Following from "./Following/Following";
import Footer from "./Footer/Footer";

export default function UI() {
  return (
    <Section>
      <Navbar />
      <SubNavbar />
      <div className="grid">
        <Profile />
        <Posts />
        <LateralSection />
      </div>
      <div className="grid">
        <div />
        <Background />
        <div />
      </div>
      <div className="grid">
        <div />
        <Recommendations />
        <div />
      </div>
      <div className="grid">
        <div />
        <Following />
        <div />
      </div>
      <Footer />
    </Section>
  );
}

const Section = styled.section`
  background-color: #f6f8f9;
  .grid {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    padding-top: 30px;
  }
`;
