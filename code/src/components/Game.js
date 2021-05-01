import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components/macro";

import games, { nextStep } from "../reducers/games";

const LoadingContainer = styled.div`
  background-color: black;
  color: white;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
  text-align: justify
`;

const ActionContainer = styled.div`
  display: flex;
  width: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  text-align: justify
`;

const Wrapper = styled.div`
  padding: 0 15px;
  display: flex;
  width: auto;
  height: 100vh;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

const DescriptionTitle = styled.h1`
      font-size: 12px;
  font-weight: bold;
`

const Text = styled.p`
      font-size: 10px; 
  background-color: black;
  color: white;
`;

const Button = styled.button`
  background-color: #fbafdd;
  color: black;
  border: 2px solid black;
  border-radius: 50%;
  text-align: center;
  padding: 10px 20px;
    margin: 15px 0;
  height: 80px;
`;

const Game = () => {
  const userName = useSelector((store) => store.games.username);
  const actions = useSelector((store) => store.games.description);
  const description = useSelector(
    (store) => store.games.description.description
  );

  const dispatch = useDispatch();

  return (
    <>
      <Wrapper>
        <LoadingContainer>
          <DescriptionTitle>{description}</DescriptionTitle>
        </LoadingContainer>
        {actions.actions.map((action) => ( 
          <ActionContainer key={action.description}>
            <Text>{action.description}</Text>
            <Button
              onClick={() => dispatch(nextStep(userName, action.direction))}
            >
              {action.direction}
            </Button>
          </ActionContainer>
        ))}
      </Wrapper>
    </>
  );
};

export default Game;