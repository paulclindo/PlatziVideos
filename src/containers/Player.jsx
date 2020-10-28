import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import { getVideoSource } from "../actions";
import * as routes from "../routes/routes";

const PlayerWrapper = styled.div`
  video {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
  }

  video:hover .Player-back {
    display: block;
  }

  .Player-back {
    position: fixed;
    top: 5px;
    left: 5px;
    font-size: 12px;
  }

  .Player-back button {
    text-decoration: none;
    color: white;
    background: rgba(0, 0, 0, 0.3);
    padding: 5px;
    border-radius: 5px;
    border: 0;
    outline: 0;
    cursor: pointer;
  }
`;

const Player = ({ playing, getVideoSource }) => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    getVideoSource(id);
    setLoading(false);
  }, [id]);
  const hasPlaying = Object.keys(playing).length > 0;

  if (loading) {
    return <h6>Loading...</h6>;
  }
  return hasPlaying ? (
    <PlayerWrapper>
      <video controls autoPlay>
        <source src={playing.source} type="video/mp4" />
      </video>
      <div className="Player-back">
        <button type="button" onClick={() => history.goBack()}>
          Regresar
        </button>
      </div>
    </PlayerWrapper>
  ) : (
    <Redirect to={routes.error} />
  );
};
const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};
const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
