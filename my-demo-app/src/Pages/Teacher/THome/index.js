import React from "react";
import styled from "styled-components";
import AHeader from "../../../AllHeaders/AHeader";
import ClassCard from "../ClassesCard/ClassesCard";

export default function THome() {
  return (
    <Container>
      <AHeader />
      <Background>
        <img src="/images/AB.jpg" />
      </Background>
      <ClassCard/>
    </Container>
  );
}


const Container = styled.div`
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
