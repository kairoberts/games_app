import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
import { imageResize } from "../util";
import { popUp } from "../animations";

const Game = ({ name, released, image, id }) => {
  const stringID = id.toString();
  //Get the game information on click
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  return (
    <StyledDiv
      variants={popUp}
      initial="hidden"
      animate="show"
      layoutId={stringID}
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <motion.h2 layout={`title ${toString}`}>{name}</motion.h2>
        <h3>{released}</h3>
        <motion.img
          layoutId={`image ${stringID}`}
          src={imageResize(image, 640)}
          alt={name}
        />
      </Link>
    </StyledDiv>
  );
};

const StyledDiv = styled(motion.div)`
  box-shadow: 0px 1px 15px;
  cursor: pointer;
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
  h2 {
    padding: 0.5rem 0rem;
    font-size: 1.3rem;
  }
  h3 {
    font-weight: lighter;
    padding: 0rem 0em 1rem 0rem;
    font-size: 1rem;
  }
`;

export default Game;
