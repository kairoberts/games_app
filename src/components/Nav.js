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
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

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
    <StyledNav
      className={nav ? "nav active" : <StyledNav />}
      variants={fadeIn}
      initial="hidden"
      animate="show"
    >
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
  position: fixed;
  width: 100%;
  transition: all 0.5s ease-in-out;
  @media only screen and (min-width: 320px) and (max-width: 580px) {
    height: 12rem;
    display: block;
    img {
      left: 30%;
    }
    input {
      position: absolute;
      top: 55%;
      right: 60%;
    }
    button {
      position: absolute;
      top: 50%;
    }
  }
  img {
    position: absolute;
    width: 180px;
    height: 90px;
    object-fit: cover;
    cursor: pointer;
  }
  input {
    width: 30%;
    font-size: 1rem;
    padding: 0.5rem;
    border: none;
    border-radius: 0.8rem;
    margin-top: 1rem;
    outline: none;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.8);
  }
  button {
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    outline: none;
    border: 2px solid rgb(216, 135, 81);
    background-color: transparent;
    color: white;
    margin: 1rem;
    border-radius: 1rem;
    transition: all 0.5s ease;
  }
  button:hover {
    background-color: rgb(216, 135, 81);
    color: black;
  }
`;
