import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as routes from "../routes/routes";
import plusIcon from "../assets/static/plus-icon.png";
import playIcon from "../assets/static/play-icon.png";
import { setFavorite, deleteFavorite } from "../actions";

const CarouselCardDetails = styled.div`
  align-items: flex-start;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  bottom: 0;
  display: flex;
  font-size: 10px;
  flex-direction: column;
  justify-content: flex-end;
  left: 0;
  opacity: 0;
  transition: 450ms opacity;
  padding: 10px;
  position: absolute;
  right: 0;
  top: 0;

  .img {
    width: 20px;
  }

  .title {
    color: white;
    margin: 5px 0px 0px 0px;
  }

  .subtitle {
    color: white;
    font-size: 8px;
    margin: 3px 0px;
  }
`;
export const CarouselCard = styled.div`
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  display: inline-block;
  width: 200px;
  height: 250px;
  margin-right: 10px;
  font-size: 20px;
  cursor: pointer;
  transition: 450ms all;
  -webkit-transform-origin: center left;
  transform-origin: center left;
  &:hover ~ & {
    -webkit-transform: translate3d(100px, 0, 0);
    transform: translate3d(100px, 0, 0);
  }
  &:hover ${CarouselCardDetails} {
    opacity: 1;
  }
`;

const CarouselCardImg = styled.img`
  width: 200px;
  height: 250px;
  object-fit: cover;
`;

const CarouselItem = ({
  id,
  title,
  cover,
  year,
  contentRating,
  duration,
  setFavorite,
  deleteFavorite,
  isList,
}) => {
  const handleFavorite = () => {
    setFavorite({ id, title, cover, year, contentRating, duration });
  };

  return (
    <CarouselCard>
      <CarouselCardImg src={cover} alt={title} />
      <CarouselCardDetails>
        <div>
          <Link to={routes.player.replace(":id", id)}>
            <img className="img" src={playIcon} alt="Play Icon" />
          </Link>
          {isList ? (
            <img
              className="img"
              src="https://static.platzi.com/media/public/uploads/remove-icon_a56b8107-2c02-49ed-bead-308031b0dd76.png"
              onClick={() =>
                deleteFavorite({
                  id,
                  title,
                  cover,
                  year,
                  contentRating,
                  duration,
                })
              }
              alt="Delete Icon"
            />
          ) : (
            <img
              className="img"
              src={plusIcon}
              onClick={handleFavorite}
              alt="Plus Icon"
            />
          )}
        </div>
        <p className="title">{title}</p>
        <p className="subtitle">{`${year} ${contentRating} ${duration}`}</p>
      </CarouselCardDetails>
    </CarouselCard>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};
export default connect(null, mapDispatchToProps)(CarouselItem);
