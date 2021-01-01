import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-line"></div>
      <h3>&copy; 2020 KR Web Dev. All Rights Reserved.</h3>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  position: sticky;
  display: block;
  background-color: transparent;
  text-align: center;
  padding: 0rem 15rem 1rem 15rem;
  @media only screen and (min-width: 320px) and (max-width: 580px) {
    padding: 0;
    h3 {
      font-size: 1rem;
      display: block;
    }
  }
  h3 {
    color: white;
    font-weight: lighter;
  }
  .footer-line {
    background-color: transparent;
    height: 2rem;
    width: 100%;
  }
`;

export default Footer;
