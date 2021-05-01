import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components/macro";

import { nextStep } from "../reducers/games";
import FinalPage from "./FinalPage"

const LoadingContainer = styled.div`
  background-color: black;
  color: white;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
  text-align: center;
  `

const ActionContainer = styled.div`
  display: flex;
  width: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

const DescriptionTitle = styled.h1`
  font-size: 12px;
  font-weight: bold;
  @media (min-width: 668px) {
    font-size: 18px;
  }
  @media (min-width: 1024px) {
    font-size: 24px;
  }
`

const Text = styled.p`
  font-size: 10px; 
  background-color: black;
  color: grey;
  @media (min-width: 668px) {
    font-size: 16px;
  }
  @media (min-width: 1024px) {
    font-size: 20px;}
`;

const Button = styled.button`
  background-color: #fbafdd;
  color: black;
  border: 2px solid black;
  border-radius: 20%;
  text-align: center;
  padding: 10px 20px;
  font-family: 'Roboto Mono', monospace;
  font-size:12px;
  font-weight: bold;
`;

const Game = () => {
  const userName = useSelector((store) => store.games.username);
  const actions = useSelector((store) => store.games.description);
  const steps = useSelector((store) => store.games.description.actions)
  const description = useSelector(
    (store) => store.games.description.description
  );

  const dispatch = useDispatch();

  return (

      <Wrapper>
        <LoadingContainer>
          <DescriptionTitle>{description}</DescriptionTitle>
        </LoadingContainer>
        {steps.length !== 0
        ?    
        <>

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
        
        </>
        :
        <FinalPage /> }
      </Wrapper>

  );
};

export default Game