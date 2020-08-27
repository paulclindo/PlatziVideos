import React from 'react';
import styled from 'styled-components';
import { CarouselCard } from './CarouselItem';

const ContainerCarousel = styled.section`
  padding-left: 30px;
  position: relative;
  overflow-x: auto;
  overflow-y: hidden;
`;
const WrapperCarousel = styled.div`
  transition: 450ms -webkit-transform;
  transition: 450ms transform;
  transition: 450ms transform, 450ms -webkit-transform;
  font-size: 0;
  white-space: nowrap;
  margin: 70px 0px;
  padding-bottom: 10px;
  &:hover ${CarouselCard} {
    opacity: 0.3;
    &:hover  {
      transform: scale(1.5);
      opacity: 1
    }
  }
`;

const Carousel = ({ children }) => (
  <ContainerCarousel>
    <WrapperCarousel>{children}</WrapperCarousel>
  </ContainerCarousel>
);

export default Carousel;
