import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { imageResize } from "../util";
import playstation from "../images/playstation.svg";
import apple from "../images/apple.svg";
// import gamepad from "../images/gamepad.svg";
import nintendo from "../images/nintendo.svg";
import steam from "../images/steam.svg";
import xbox from "../images/xbox.svg";
import emptyStar from "../images/emptystar.png";
import fullStar from "../images/fullstar.png";

const GameDetails = ({ pathID }) => {
  const history = useHistory();
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  const getStars = () => {
    const stars = [];
    const rating = game.rating;
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={fullStar} />);
      } else {
        stars.push(<img alt="star" key={i} src={emptyStar} />);
      }
    }
    return stars;
  };

  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return "";
    }
  };

  const { screen, game, isLoading } = useSelector((state) => state.detail);
  const notRated = game.rating;

  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathID}>
            <Stats>
              <div className="rating">
                <motion.h2 layout={`title ${pathID}`}>{game.name}</motion.h2>
                <h3>Rating: {notRated ? game.rating : "Not Yet Rated"}</h3>
                {getStars()}
              </div>
              <Info>
                <h2>Platforms</h2>
                <Platforms>
                  {game.platforms.map((data) => (
                    <img
                      src={getPlatform(data.platform.name)}
                      key={data.platform.id}
                      alt={data.platform.name}
                    />
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathID}`}
                src={imageResize(game.background_image, 1280)}
                alt="Game Name"
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <Gallery>
              <h2>Gallery</h2>
              {screen.results.map((screen) => (
                <img
                  src={imageResize(screen.image, 1280)}
                  alt="Game"
                  key={screen.id}
                />
              ))}
            </Gallery>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
`;

const Detail = styled(motion.div)`
  width: 50%;
  border-radius: 1rem;
  padding: 2rem 2rem;
  background: rgb(67, 67, 92);
  position: absolute;
  left: 25%;
  color: black;
  z-index: 10;
  @media only screen and (min-width: 320px) and (max-width: 580px) {
    display: block;
    width: 80%;
    left: 10%;
  }
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media only screen and (min-width: 320px) and (max-width: 580px) {
    display: inline-block;
    h3 {
      font-size: 1rem;
    }
    h2 {
      font-size: 1.2rem;
      word-wrap: break-word;
    }
  }
  h3 {
    padding: 0rem 0rem 1rem 0rem;
    color: white;
  }
  h2 {
    margin: 0rem 0rem 1rem 0rem;
    color: white;
  }
  img {
    width: 2.5rem;
    height: 2rem;
    display: inline;
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  @media only screen and (min-width: 320px) and (max-width: 580px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
  img {
    margin-left: 3rem;
    background-color: white;
    border-radius: 0.5rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 1rem;
  color: white;
  @media only screen and (min-width: 320px) and (max-width: 580px) {
    text-align: center;
  }
`;

const Gallery = styled(motion.div)`
  h2 {
    padding: 2rem 0rem 0rem 0rem;
    text-align: center;
    font-size: 2rem;
    color: white;
  }
  img {
    margin-top: 2rem;
  }
`;

export default GameDetails;
