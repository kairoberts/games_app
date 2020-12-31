import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../images/logo.png";
import { gameSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
import { fadeIn } from "../animations";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(gameSearch(textInput));
    setTextInput("");
  };

  const clearSearch = () => {
    dispatch({
      type: "CLEAR_SEARCH",
    });
  };
  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <img onClick={clearSearch} src={logo} alt="KR Web Development" />
      <form className="search">
        <input value={textInput} onChange={inputHandler} type="text" />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
};

export default Nav;

const StyledNav = styled(motion.nav)`
  padding: 1rem 0rem;
  text-align: center;
  img {
    position: absolute;
    top: 5;
    left: 5;
    width: 150px;
    height: 80px;
    cursor: pointer;
  }
  input {
    width: 30%;
    font-size: 1rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    outline: none;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.8);
  }
  button {
    font-size: 1.3rem;
    background: #00f7ff;
    border: none;
    padding: 1rem 1.5rem;
    margin: 1rem;
    cursor: pointer;
    outline: none;
    color: black;
  }
`;
