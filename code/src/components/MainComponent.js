import React from "react";
import { useSelector } from "react-redux";

import Game from "./Game";
import StartScreen from "./StartScreen";
import Loading from "./Loading";

const MainComponent = () => {
  const userName = useSelector((store) => store.games.username);
  const loading = useSelector((store) => store.games.loading);

  return (
    <div>
    
      {loading && <Loading />}
      {userName ? <Game /> : <StartScreen />}
    </div>
  );
};

export default MainComponent;
