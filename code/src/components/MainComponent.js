
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";

import Game from "./Game";
import StartScreen from "./StartScreen";
import Loading from "./Loading";

const Maincontainer = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0;
`;

const MainComponent = () => {
  const userName = useSelector((store) => store.games.username);
  const loading = useSelector((store) => store.games.loading);

  if (loading) {
    return <Loading />;
  }

  return <Maincontainer>{userName ? <Game /> : <StartScreen />}</Maincontainer>;
};

export default MainComponent;