import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components/macro";

import games, { startGame } from "../reducers/games";

const Container = styled.div`
  background-color: black;
  color: white;
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 668px) {
    margin-top: 20%;
  }
  @media (min-width: 1024px) {
    margin-top: 25%;
  }
`;

const Title = styled.h1`
  padding: 0 15px;
  font-size: 25px;
  color: #c4007d;
  text-align: center;
`;

const IntroductionText = styled.h2`
  font-size: 12px;
  text-align: center;
  padding: 0 15px;
  @media (min-width: 668px) {
    font-size: 16px;
  }
  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

const Button = styled.button`
  background-color: #fbafdd;
  border: 2px solid black;
  border-radius: 50%;
  text-align: center;
  padding: 30px;
  height: 80px;
  font-weight: bold;
  font-family: 'Roboto Mono', monospace;
}
`;

const Input = styled.input`
  font-family: "Roboto Mono", monospace;
  background-color: transparent;
  border-bottom: 2px solid pink;
  padding: 10px;
  margin: 30px;
  height: 30px;
  color: white;
  &::placeholder {
    color: white;
    font-size: 10px;
  }
`;

const StartScreen = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const onUserNameSet = () => {
    dispatch(games.actions.setUserName(inputValue));
    dispatch(startGame(inputValue));
  };

  return (
    <>
      <Container>
        <Title>Welcome to our splendid game!</Title>
        <IntroductionText>
          Type your name to enter the labyrinth...
        </IntroductionText>
        <Input
          type="text"
          placeholder="Enter your name to start"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          required
        />
        <Button onClick={onUserNameSet}>Start the game!</Button>
      </Container>
    </>
  );
};

export default StartScreen;