import React from "react";
import styled from "styled-components/macro";

const Title = styled.h1`
  padding: 0 15px;
  font-size: 25px;
  color: #C4007D;
  text-align: center;
`
const FinalPage = () => {

  return (
    <>
        <Title>You made it out star! <span role="img" aria-label="start">✨</span></Title>
    </>
  );
};

export default FinalPage;