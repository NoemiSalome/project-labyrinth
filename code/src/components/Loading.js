import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import styled from "styled-components/macro";

const LottieContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height:100%
`;

const Loading = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/lottie.json"),
    });
  });

  return <LottieContainer ref={container} />;
};

export default Loading;